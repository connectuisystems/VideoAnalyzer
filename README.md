# MakerSteps AI 🛠️
> **Analyze Any YouTube DIY & Building Video into Actionable Step-by-Step Blueprints**

MakerSteps AI is a full-stack web application designed for makers, woodworkers, fabricators, and DIY enthusiasts. Paste any YouTube build video link (e.g. dining table, coffee table, workbench, floating shelves, planter box), and MakerSteps automatically extracts:
- **Project Overview**: Category, difficulty rating, estimated build time, estimated materials cost, and approximate dimensions.
- **Bill of Materials & Cut List**: Lumber stock, hardware (screws, dowels, brackets), finishes, and interactive shopping checklist.
- **Required Tools & Safety Equipment**: Filtered by Essential Tools, PPE Safety Gear, and Optional Advanced Tools.
- **Synchronized Step-by-Step Instructions**: Chronological phases with exact video timestamps (`[02:15]`, `[04:30]`), actionable descriptions, tools used, pro tips, and step-level completion checkboxes.
- **Interactive YouTube Player**: Synchronized with the blueprint. Clicking any timestamp button instantly jumps the video player to that exact build step.
- **AI Workshop Copilot**: Context-aware chat assistant to ask questions about wood species substitutions, screw sizes, joinery techniques, and finishing options.
- **Export & Print**: Export as formatted Markdown (.md), copy checklist to clipboard, or print a clean workshop-ready paper blueprint for the garage.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
You can run both the Express backend API and the Vite React frontend concurrently with one command:
```bash
npm run dev
```

- **Frontend UI**: [http://localhost:3000](http://localhost:3000) (or [http://localhost:5000](http://localhost:5000) when built)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 🌟 Key Features

### 1. 1-Click Building Object Presets
The app comes loaded with pre-configured high-fidelity blueprints for popular building videos so you can test immediately:
1. 🪑 **Rustic Farmhouse Dining Table** (Woodworking & Furniture)
2. ☕ **Modern Waterfall Coffee Table** (Hardwood & Joinery)
3. 🪚 **Heavy-Duty 2x4 Workshop Workbench** (Shop Projects)
4. 📚 **Floating Wall Bookshelves** (Home Decor)
5. 🪴 **Modern Outdoor Cedar Planter Box** (Outdoor Crafts)

### 2. Live YouTube Video Analysis
Paste any YouTube URL:
- Standard: `https://www.youtube.com/watch?v=...`
- Shortened: `https://youtu.be/...`
- Shorts: `https://www.youtube.com/shorts/...`

The backend fetches the video's public oEmbed metadata and extracts live captions/transcripts directly using `youtube-transcript`.

### 3. Dual Intelligence Engine
- **Built-in Semantic Maker Engine (Default, Zero Config)**: Automatically segments transcript timestamps, detects woodworking action verbs (cut, drill, glue, clamp, sand, stain), identifies tools and materials, and produces a structured blueprint.
- **Google Gemini 2.5 Flash / 1.5 Flash (Optional)**: Click **"AI Settings"** in the top navigation bar to enter your Gemini API key. Stored securely in your browser's `localStorage` for deep multimodal step synthesis on custom videos.

### 4. Interactive Progress Tracking
- Check off individual steps as you build in your workshop.
- Live progress bar showing percentage of completion.
- Interactive confetti celebration when all steps are completed!

---

## 📁 Project Architecture

```
├── server/
│   ├── server.js          # Express API server (analyze, presets, chat, static serve)
│   ├── analyzer.js        # YouTube metadata, transcript extraction & AI parsing engine
│   └── presetsData.js     # Curated DIY building project blueprints
├── src/
│   ├── App.jsx            # Main app orchestrator with state, tabs, and export handlers
│   ├── components/
│   │   ├── Header.jsx               # Navigation bar, brand logo, reset, print & settings
│   │   ├── UrlInputForm.jsx         # Accessible semantic form, paste button & preset pills
│   │   ├── VideoPlayer.jsx          # Synchronized YouTube embed with step seeking
│   │   ├── ProjectOverviewCard.jsx  # Stats badges, difficulty ratings & progress bar
│   │   ├── StepsTimeline.jsx        # Chronological steps, timestamp seek & search filter
│   │   ├── MaterialsList.jsx        # Bill of materials & cut list checklist
│   │   ├── ToolsList.jsx            # Essential tools, PPE safety gear checklist
│   │   ├── AIAssistantChat.jsx      # Workshop copilot chat for build questions
│   │   ├── ExportModal.jsx          # Markdown export, clipboard copy & print guide
│   │   ├── ApiKeyModal.jsx          # Gemini API key settings modal
│   │   └── YouTubeIcon.jsx          # SVG YouTube badge icon
│   ├── index.css          # Tailwind CSS v4 setup & workshop print stylesheet
│   └── main.jsx           # React DOM root entry
├── index.html             # HTML5 template with semantic meta tags
├── package.json           # Dependencies, scripts (dev, build, server, client)
└── vite.config.js         # Vite configuration with Tailwind CSS and proxy
```
