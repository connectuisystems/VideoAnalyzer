import React, { useState } from 'react';
import { X, Key, Check, Info, ShieldCheck } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, currentKey, onSaveKey }) {
  const [keyInput, setKeyInput] = useState(currentKey || '');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveKey(keyInput.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  const handleClear = () => {
    setKeyInput('');
    onSaveKey('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Key className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">AI Engine Settings</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="mt-4 space-y-4">
          <div>
            <label htmlFor="gemini-api-key" className="block text-xs font-semibold text-gray-300 mb-1.5">
              Google Gemini API Key (Optional)
            </label>
            <input
              id="gemini-api-key"
              type="password"
              placeholder="AIzaSy..."
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-gray-950 text-white placeholder-gray-600 text-sm rounded-xl border border-gray-700 focus:outline-none focus:border-amber-500 font-mono"
            />
          </div>

          <div className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-xs text-gray-300 space-y-2">
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Optional:</strong> MakerSteps has built-in heuristic semantic extraction & curated video blueprints that work immediately without an API key.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                Your key is stored only in your browser's <code className="bg-gray-900 px-1 py-0.5 rounded">localStorage</code> and never shared.
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            {keyInput && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Clear Key
              </button>
            )}
            <div className="flex items-center space-x-2 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-md transition flex items-center"
              >
                {saved ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1 text-white" />
                    Saved!
                  </>
                ) : (
                  'Save Settings'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
