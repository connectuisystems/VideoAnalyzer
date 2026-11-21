import React, { useState } from 'react';
import {
  Play,
  CheckCircle2,
  Circle,
  Lightbulb,
  AlertTriangle,
  Wrench,
  Search,
  Filter,
  Clock,
  Sparkles
} from 'lucide-react';

export default function StepsTimeline({
  steps,
  completedSteps,
  onToggleStep,
  onSeekToStep,
  activeStepNumber
}) {
  const [filterQuery, setFilterQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'pending', 'completed'

  const filteredSteps = steps.filter((step) => {
    const isCompleted = completedSteps.has(step.stepNumber);
    if (filterStatus === 'pending' && isCompleted) return false;
    if (filterStatus === 'completed' && !isCompleted) return false;

    if (!filterQuery) return true;
    const query = filterQuery.toLowerCase();
    return (
      step.title.toLowerCase().includes(query) ||
      step.description.toLowerCase().includes(query) ||
      step.phase.toLowerCase().includes(query) ||
      (step.toolsUsed && step.toolsUsed.some(t => t.toLowerCase().includes(query))) ||
      (step.proTip && step.proTip.toLowerCase().includes(query))
    );
  });

  return (
    <div className="space-y-4">
      {/* Search and Filter Toolbar */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search steps, tools (e.g. cut, drill, glue, clamps)..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-gray-950 text-white placeholder-gray-500 text-xs sm:text-sm rounded-lg border border-gray-800 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center space-x-1 self-end sm:self-center">
          <button
            type="button"
            onClick={() => setFilterStatus('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition ${
              filterStatus === 'all'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            All ({steps.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('pending')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition ${
              filterStatus === 'pending'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Pending ({steps.length - completedSteps.size})
          </button>
          <button
            type="button"
            onClick={() => setFilterStatus('completed')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition ${
              filterStatus === 'completed'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Completed ({completedSteps.size})
          </button>
        </div>
      </div>

      {/* Step Cards List */}
      <div className="space-y-4">
        {filteredSteps.length === 0 ? (
          <div className="text-center py-10 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 text-sm">
            No steps match your search filter "{filterQuery}".
          </div>
        ) : (
          filteredSteps.map((step) => {
            const isCompleted = completedSteps.has(step.stepNumber);
            const isActive = activeStepNumber === step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                className={`step-card relative rounded-2xl transition-all duration-200 border ${
                  isActive
                    ? 'bg-gray-900 border-amber-500/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50'
                    : isCompleted
                    ? 'bg-gray-900/60 border-emerald-900/40 text-gray-400'
                    : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                } p-5`}
              >
                {/* Step Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start space-x-3 min-w-0">
                    {/* Completion Checkbox */}
                    <button
                      type="button"
                      onClick={() => onToggleStep(step.stepNumber)}
                      className="mt-0.5 text-gray-500 hover:text-amber-400 transition flex-shrink-0"
                      title={isCompleted ? "Mark as pending" : "Mark as completed"}
                      aria-label={`Mark step ${step.stepNumber} as ${isCompleted ? 'incomplete' : 'complete'}`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 hover:text-amber-400" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Step {step.stepNumber}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {step.phase}
                        </span>
                        {isActive && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 animate-pulse">
                            Active in Video
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight ${
                          isCompleted ? 'line-through text-gray-400' : 'text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Play / Seek Timestamp Button */}
                  <button
                    type="button"
                    onClick={() => onSeekToStep(step)}
                    className="flex-shrink-0 inline-flex items-center px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-amber-500 text-gray-200 hover:text-black border border-gray-700 hover:border-amber-400 transition group shadow-sm"
                    title={`Jump video to ${step.timestamp}`}
                  >
                    <Play className="w-3.5 h-3.5 mr-1.5 fill-current text-amber-400 group-hover:text-black transition" />
                    <span className="font-mono">{step.timestamp}</span>
                  </button>
                </div>

                {/* Step Description */}
                <p className={`text-sm leading-relaxed mb-4 ${isCompleted ? 'text-gray-400' : 'text-gray-300'}`}>
                  {step.description}
                </p>

                {/* Tools Used Chips */}
                {step.toolsUsed && step.toolsUsed.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    <span className="text-xs text-gray-500 flex items-center mr-1">
                      <Wrench className="w-3 h-3 mr-1" /> Tools:
                    </span>
                    {step.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-xs bg-gray-800/80 text-gray-300 border border-gray-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Pro Tip Callout */}
                {step.proTip && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/90 flex items-start space-x-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-amber-300">Pro Tip: </strong>
                      <span>{step.proTip}</span>
                    </div>
                  </div>
                )}

                {/* Safety Note */}
                {step.safetyNote && (
                  <div className="mt-2 p-2.5 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-200/90 flex items-start space-x-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-red-300">Safety Precaution: </strong>
                      <span>{step.safetyNote}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
