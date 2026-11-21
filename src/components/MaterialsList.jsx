import React, { useState } from 'react';
import { CheckSquare, Square, ShoppingCart, Layers, Plus } from 'lucide-react';

export default function MaterialsList({ materials }) {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const toggleItem = (index) => {
    const next = new Set(checkedItems);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setCheckedItems(next);
  };

  const list = materials || [];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center">
            <Layers className="w-5 h-5 mr-2 text-amber-400" />
            Bill of Materials & Cut List
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Check off lumber, hardware, and supplies as you source or prep them in your shop.
          </p>
        </div>

        <div className="flex items-center text-xs text-gray-300 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700/60 self-start sm:self-center">
          <ShoppingCart className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
          <span>{checkedItems.size} of {list.length} Sourced</span>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">No specific materials extracted.</p>
      ) : (
        <div className="space-y-2.5">
          {list.map((mat, idx) => {
            const isChecked = checkedItems.has(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                  isChecked
                    ? 'bg-gray-950/60 border-emerald-900/40 text-gray-400'
                    : 'bg-gray-800/50 hover:bg-gray-800 border-gray-700/60 text-gray-200'
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 text-gray-400 hover:text-amber-400 flex-shrink-0"
                  aria-label={`Toggle ${mat.item}`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Square className="w-4 h-4" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`text-sm font-semibold ${isChecked ? 'line-through text-gray-400' : 'text-white'}`}>
                      {mat.item}
                    </span>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {mat.quantity}
                    </span>
                  </div>

                  {mat.dimensions && (
                    <div className="text-xs text-gray-300 mt-0.5">
                      <strong>Dimensions:</strong> {mat.dimensions}
                    </div>
                  )}

                  {mat.notes && (
                    <p className="text-xs text-gray-400 mt-1 italic">
                      Note: {mat.notes}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
