import React from 'react';
import { Clock, DollarSign, Gauge, Box, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProjectOverviewCard({ project, completedCount, totalCount }) {
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isAllComplete = totalCount > 0 && completedCount === totalCount;

  const difficultyColors = {
    Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Advanced: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  };

  const difficultyClass = difficultyColors[project.difficulty] || difficultyColors.Intermediate;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-xl">
      {/* Object Title & Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
              {project.category || 'DIY Build'}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${difficultyClass}`}>
              ⚡ {project.difficulty || 'Intermediate'}
            </span>
            {project.aiPowered && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center">
                <Sparkles className="w-3 h-3 mr-1" /> Gemini Synthesized
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.objectName}
          </h2>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-300">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            <span>{project.estimatedTime || '4-6 Hours'}</span>
          </div>
          <div className="flex items-center px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-300">
            <DollarSign className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            <span>{project.estimatedCost || '$50 - $100'}</span>
          </div>
          {project.dimensions && (
            <div className="col-span-2 sm:col-span-1 flex items-center px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-gray-300">
              <Box className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              <span className="truncate">{project.dimensions}</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Overview */}
      <p className="text-sm text-gray-300 leading-relaxed mb-5">
        {project.overview}
      </p>

      {/* Progress Bar & Checklist Stats */}
      <div className="bg-gray-950/70 rounded-xl p-3.5 border border-gray-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-gray-300 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1.5 text-amber-400" />
            Build Progress
          </span>
          <span className="font-mono text-amber-400">
            {completedCount} of {totalCount} steps ({progressPercent}%)
          </span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
              isAllComplete
                ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                : 'bg-gradient-to-r from-amber-500 to-orange-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {isAllComplete && (
          <div className="mt-2.5 text-xs text-emerald-400 font-semibold flex items-center">
            🎉 Awesome craftsmanship! All build steps are complete. Enjoy your finished piece!
          </div>
        )}
      </div>
    </div>
  );
}
