import React, { useState } from 'react';
import { ArrowRight, Clipboard, Sparkles, AlertCircle, CheckCircle2, Wrench, Layers } from 'lucide-react';
import YouTubeIcon from './YouTubeIcon';

export default function UrlInputForm({ onAnalyze, loading, error, presets, onSelectPreset }) {
  const [url, setUrl] = useState('');
  const [validationError, setValidationError] = useState('');

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setValidationError('');
      }
    } catch (err) {
      console.warn("Clipboard access denied or unsupported");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setValidationError('Please enter or paste a YouTube video URL.');
      return;
    }
    // Basic YouTube format validation
    const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)[a-zA-Z0-9_-]{11}/;
    if (!ytRegex.test(url.trim()) && !/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) {
      setValidationError('Please enter a valid YouTube video link (e.g., https://www.youtube.com/watch?v=... or https://youtu.be/...)');
      return;
    }

    setValidationError('');
    onAnalyze(url.trim());
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
          Powered by Video Analysis & AI Extraction
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Turn Any YouTube Build Video <br className="hidden sm:inline" />
          into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Step-by-Step Blueprint</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Paste a link to any DIY project — dining table, coffee table, workbench, shelves, or furniture. MakerSteps extracts the materials, cut list, required tools, and chronological instructions with synced timestamps.
        </p>
      </div>

      {/* Main Accessible Form */}
      <search>
        <form
          action="/api/analyze"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden"
          noValidate
        >
          <div className="relative">
            <label htmlFor="youtube-url" className="block text-sm font-semibold text-gray-200 mb-2">
              YouTube Video Link <span className="text-amber-400" aria-hidden="true">*</span>
            </label>

            <div className="relative flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-red-500">
                  <YouTubeIcon className="w-5 h-5 text-red-500" />
                </div>

                <input
                  id="youtube-url"
                  name="youtube-url"
                  type="url"
                  required
                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (validationError) setValidationError('');
                  }}
                  aria-describedby={validationError || error ? "form-error" : "url-hint"}
                  aria-invalid={Boolean(validationError || error)}
                  disabled={loading}
                  className="w-full pl-11 pr-24 py-3.5 bg-gray-950 text-white placeholder-gray-500 text-sm sm:text-base rounded-xl border border-gray-700 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-50"
                />

                <button
                  type="button"
                  onClick={handlePaste}
                  disabled={loading}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 flex items-center transition"
                  title="Paste from clipboard"
                >
                  <Clipboard className="w-3.5 h-3.5 mr-1" />
                  Paste
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 shadow-lg shadow-amber-600/25 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Analyzing Video...
                  </>
                ) : (
                  <>
                    <span>Analyze & Extract Steps</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>

            {/* Error or Hint Text */}
            {(validationError || error) ? (
              <div id="form-error" className="mt-2.5 flex items-center text-sm text-red-400" role="alert">
                <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span>{validationError || error}</span>
              </div>
            ) : (
              <p id="url-hint" className="mt-2 text-xs text-gray-500">
                Works with any public YouTube video link containing DIY woodworking, furniture, crafting, or hardware building.
              </p>
            )}
          </div>

          {/* Loading Animation Status */}
          {loading && (
            <div className="mt-4 pt-4 border-t border-gray-800/80">
              <div className="flex items-center justify-between text-xs text-amber-400 mb-2">
                <span className="font-medium flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                  AI Engine is processing video transcript & timestamps...
                </span>
                <span className="text-gray-400">Step 3 of 4</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1.5 rounded-full animate-pulse w-3/4"></div>
              </div>
            </div>
          )}
        </form>
      </search>

      {/* Quick Preset Selector */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            Or try these popular building objects (1-Click Demo):
          </span>
          <span className="text-xs text-gray-500">Instant Blueprint</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => {
                setUrl(preset.url);
                onSelectPreset(preset);
              }}
              disabled={loading}
              className="text-left group relative bg-gray-900/70 hover:bg-gray-800/80 border border-gray-800 hover:border-amber-500/50 rounded-xl p-3 transition flex items-center space-x-3 disabled:opacity-50"
            >
              <div className="w-14 h-14 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0 relative border border-gray-700/60">
                <img
                  src={preset.thumbnail}
                  alt={preset.objectName}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium text-amber-400/90 block truncate">{preset.category}</span>
                <h2 className="text-sm font-semibold text-gray-200 group-hover:text-white truncate">
                  {preset.objectName}
                </h2>
                <div className="flex items-center text-xs text-gray-400 space-x-2 mt-0.5">
                  <span>⏱️ {preset.estimatedTime}</span>
                  <span>•</span>
                  <span>💰 {preset.estimatedCost}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
