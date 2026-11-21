import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, HelpCircle } from 'lucide-react';

export default function AIAssistantChat({ project, apiKey }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hello! I'm your AI Workshop Copilot for **${project.objectName}**. You can ask me anything about wood species substitutions, screw sizes, joinery methods, finish recommendations, or workshop safety.`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef(null);

  const quickQuestions = [
    "What type of wood can I substitute?",
    "What screw size should I use?",
    "What finish is best for this piece?",
    "How do I prevent wood glue squeeze-out?"
  ];

  const handleSend = async (messageText) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg = { role: 'user', text: textToSend.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          projectContext: project,
          apiKey
        })
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          text: data.error || "Sorry, I couldn't process that question right now."
        }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: "Connection error: Unable to contact the workshop assistant server."
      }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-xl flex flex-col h-[600px]">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">AI Workshop Copilot</h3>
            <p className="text-xs text-gray-400">Context-aware advice for {project.objectName}</p>
          </div>
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div className="py-2.5 flex flex-wrap gap-1.5 border-b border-gray-800/60">
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(q)}
            disabled={loading}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start space-x-2.5 ${
              msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-semibold ${
                msg.role === 'user'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-800 text-amber-400 border border-gray-700'
              }`}
            >
              {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-amber-600/90 text-white font-medium rounded-tr-none'
                  : 'bg-gray-800/90 text-gray-200 border border-gray-700/60 rounded-tl-none whitespace-pre-wrap'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center space-x-2 text-xs text-amber-400">
            <Bot className="w-4 h-4 animate-bounce" />
            <span>Consulting maker knowledge base...</span>
          </div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Chat Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="pt-3 border-t border-gray-800 flex items-center gap-2"
      >
        <label htmlFor="ai-chat-input" className="sr-only">Ask workshop question</label>
        <input
          id="ai-chat-input"
          type="text"
          placeholder="Ask a technical question about tools, screws, wood, or finish..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          className="flex-1 bg-gray-950 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-700 focus:outline-none focus:border-amber-500"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white disabled:opacity-40 transition shadow-sm"
          title="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
