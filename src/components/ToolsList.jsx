import React, { useState } from 'react';
import { Wrench, Shield, CheckCircle2, Circle, AlertTriangle } from 'lucide-react';

export default function ToolsList({ tools, safetyWarnings }) {
  const [checkedTools, setCheckedTools] = useState(new Set());

  const toggleTool = (name) => {
    const next = new Set(checkedTools);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setCheckedTools(next);
  };

  const list = tools || [];
  const essentialTools = list.filter(t => t.category === 'essential');
  const safetyTools = list.filter(t => t.category === 'safety');
  const optionalTools = list.filter(t => t.category === 'optional' || !t.category);

  return (
    <div className="space-y-6">
      {/* Workshop Safety Warnings Alert */}
      {safetyWarnings && safetyWarnings.length > 0 && (
        <div className="bg-red-950/20 border border-red-900/40 rounded-2xl p-4 sm:p-5">
          <h3 className="text-sm font-bold text-red-300 flex items-center mb-2.5">
            <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
            Critical Workshop Safety Warnings
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-red-200/90 list-disc list-inside">
            {safetyWarnings.map((warning, idx) => (
              <li key={idx} className="leading-relaxed">
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools Checklist */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-amber-400" />
              Required Tools & Equipment
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Confirm you have these tools in your workshop before cutting.
            </p>
          </div>
          <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            {checkedTools.size} of {list.length} Ready
          </span>
        </div>

        {/* Essential Tools */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center">
            <Wrench className="w-3.5 h-3.5 mr-1.5" />
            Essential Tools
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {essentialTools.map((tool, idx) => {
              const isChecked = checkedTools.has(tool.name);
              return (
                <div
                  key={idx}
                  onClick={() => toggleTool(tool.name)}
                  className={`p-3 rounded-xl border transition cursor-pointer flex items-center space-x-3 ${
                    isChecked
                      ? 'bg-gray-950/50 border-emerald-900/40 text-gray-400'
                      : 'bg-gray-800/60 hover:bg-gray-800 border-gray-700/60 text-gray-200'
                  }`}
                >
                  <button type="button" className="text-gray-400" aria-label={`Toggle tool ${tool.name}`}>
                    {isChecked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 hover:text-amber-400" />
                    )}
                  </button>
                  <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-gray-400' : 'text-white'}`}>
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety & PPE Gear */}
        {safetyTools.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Safety & PPE Equipment
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {safetyTools.map((tool, idx) => {
                const isChecked = checkedTools.has(tool.name);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleTool(tool.name)}
                    className={`p-3 rounded-xl border transition cursor-pointer flex items-center space-x-3 ${
                      isChecked
                        ? 'bg-gray-950/50 border-emerald-900/40 text-gray-400'
                        : 'bg-emerald-950/20 hover:bg-emerald-950/30 border-emerald-800/40 text-emerald-200'
                    }`}
                  >
                    <button type="button" className="text-gray-400" aria-label={`Toggle safety equipment ${tool.name}`}>
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 hover:text-emerald-400" />
                      )}
                    </button>
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-gray-400' : 'text-white'}`}>
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Optional Tools */}
        {optionalTools.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
              Optional / Advanced Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {optionalTools.map((tool, idx) => {
                const isChecked = checkedTools.has(tool.name);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleTool(tool.name)}
                    className={`p-3 rounded-xl border transition cursor-pointer flex items-center space-x-3 ${
                      isChecked
                        ? 'bg-gray-950/50 border-emerald-900/40 text-gray-400'
                        : 'bg-gray-800/40 hover:bg-gray-800 border-gray-700/50 text-gray-300'
                    }`}
                  >
                    <button type="button" className="text-gray-400" aria-label={`Toggle optional tool ${tool.name}`}>
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 hover:text-amber-400" />
                      )}
                    </button>
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-gray-400' : 'text-gray-300'}`}>
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
