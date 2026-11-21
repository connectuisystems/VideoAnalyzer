import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { analyzeVideo, extractVideoId } from './analyzer.js';
import { PRESETS } from './presetsData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// Get curated presets
app.get('/api/presets', (req, res) => {
  res.json({ presets: PRESETS });
});

// Analyze YouTube video
app.post('/api/analyze', async (req, res) => {
  try {
    const { url, apiKey } = req.body;
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'Please provide a valid YouTube URL.' });
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      return res.status(400).json({
        error: 'Invalid YouTube URL format. Please paste a standard YouTube link (e.g., https://www.youtube.com/watch?v=... or https://youtu.be/...)'
      });
    }

    console.log(`Analyzing YouTube video ID: ${videoId}...`);
    const analysis = await analyzeVideo(url, apiKey);
    res.json(analysis);
  } catch (err) {
    console.error('Analysis error:', err);
    res.status(500).json({
      error: err.message || 'Failed to analyze YouTube video. Please check the URL and try again.'
    });
  }
});

// AI Workshop Assistant Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, projectContext, apiKey } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    const effectiveKey = apiKey || process.env.GEMINI_API_KEY;

    // If Gemini API key is provided, use live Gemini
    if (effectiveKey) {
      const prompt = `You are an expert master carpenter, maker, and DIY builder assistant.
The user is currently building: "${projectContext?.objectName || 'a DIY project'}" (${projectContext?.category || 'Woodworking'}).
Project Overview: ${projectContext?.overview || 'N/A'}
Materials: ${(projectContext?.materials || []).map(m => m.item).join(', ')}
Tools: ${(projectContext?.tools || []).map(t => t.name).join(', ')}

User question: "${message}"

Give a helpful, clear, safety-conscious response with specific woodworking or maker advice (measurements, tool tips, glue types, wood species, finish advice). Format with concise markdown bullet points.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${effectiveKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.3 }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          return res.json({ reply, source: 'gemini' });
        }
      }
    }

    // Smart Maker Assistant fallback response
    const q = message.toLowerCase();
    let reply = "";

    if (q.includes("wood") || q.includes("timber") || q.includes("substitute") || q.includes("pine") || q.includes("oak")) {
      reply = `**Wood Selection & Substitution Tips for ${projectContext?.objectName || 'this build'}:**
- **Softwood vs. Hardwood:** Standard dimensional lumber (SPF pine / Douglas Fir) is economical and great for beginners ($30-$60 total). If you want an heirloom piece that resists dings, consider **White Oak, Hard Maple, or Black Walnut**.
- **Moisture Content:** Ensure lumber moisture content is between 6% and 10% before edge-gluing to prevent warping after it's in your heated home.
- **Acclimation:** Always store lumber in your workshop for 3–5 days prior to making final precision cuts.`;
    } else if (q.includes("screw") || q.includes("fastener") || q.includes("pocket hole") || q.includes("pocket")) {
      reply = `**Fastening & Screw Recommendations:**
- For **1.5" thick wood (2x lumber)**: Use **2 1/2" coarse-thread pocket hole screws**.
- For **3/4" thick wood (1x lumber or hardwood)**: Use **1 1/4" fine-thread pocket hole screws** (fine thread prevents splitting hardwoods).
- **Tabletop Movement:** Never glue or screw a solid wood tabletop directly down into the frame; use **Figure-8 fasteners or Z-clips** so the wood can expand and contract across the grain without cracking!`;
    } else if (q.includes("sand") || q.includes("grit") || q.includes("finish") || q.includes("stain") || q.includes("polyurethane") || q.includes("oil")) {
      reply = `**Sanding & Finishing Guide:**
- **Progressive Grits:** 
  1. Start with **80-grit** to level seams and eliminate machine marks.
  2. Move to **120-grit** to erase 80-grit scratch swirls.
  3. Finish with **220-grit** for an ultra-smooth touch before stain or oil.
- **Topcoat Protection:** For dining or coffee tables, **3 coats of wipe-on polyurethane or a quality hardwax oil (like Rubio Monocoat / Osmo)** provide maximum spill and heat resistance.
- **Safety Alert:** Always allow stain rags to dry flat on concrete outdoors—crumpled oil rags can spontaneously combust!`;
    } else if (q.includes("glue") || q.includes("clamp") || q.includes("titebond")) {
      reply = `**Glue-Up & Clamping Best Practices:**
- Use **Titebond II** for indoor furniture or **Titebond III** if the piece might encounter moisture or outdoors.
- Space your bar clamps every **8 to 12 inches**, alternating clamps over and under the panel to prevent bowing.
- Keep clamped for at least **45 to 60 minutes**, and allow 24 hours of full cure before aggressive sanding or load bearing.`;
    } else {
      reply = `**Builder Tip for ${projectContext?.objectName || 'your project'}:**
- **Measure Twice, Cut Once:** When cutting matching pairs (like table legs or side aprons), use a physical **stop block** on your miter saw fence rather than measuring each piece individually.
- **Square Check:** Always measure corner-to-corner diagonally; equal diagonal measurements guarantee a 90° square frame.
- **Safety First:** Keep eye and hearing protection on, and never wear loose clothing or gloves around spinning blades or drill chucks.`;
    }

    res.json({ reply, source: 'maker-knowledge-base' });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Failed to process assistant query.' });
  }
});

// Serve frontend in production if built
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));
app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(` MakerSteps Server running on http://localhost:${PORT}`);
});
