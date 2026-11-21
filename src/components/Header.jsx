import React from 'react';
import { Hammer, Sparkles, Key, Printer, RotateCcw } from 'lucide-react';

export default function Header({ onOpenApiKeyModal, onPrint, onReset, hasProject }) {
  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={onReset}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-white">
            <Hammer className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white tracking-tight">MakerSteps</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3 h-3 mr-1" /> AI
              </span>
            </div>
            <p className="text-xs text-gray-400 hidden sm:block">Turn YouTube DIY & Build Videos into Actionable Step Guides</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {hasProject && (
            <>
              <button
                type="button"
                onClick={onPrint}
                className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-gray-200 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition"
                title="Print or Save Workshop PDF"
              >
                <Printer className="w-4 h-4 mr-1.5 text-gray-400" />
                <span className="hidden md:inline">Print Blueprint</span>
              </button>

              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
                title="Analyze Another Video"
              >
                <RotateCcw className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:inline">New Build</span>
              </button>
            </>
          )}

          <button
            type="button"
            onClick={onOpenApiKeyModal}
            className="inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-700/50 transition"
            title="Configure Gemini API Key"
          >
            <Key className="w-3.5 h-3.5 mr-1.5" />
            <span>AI Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}
