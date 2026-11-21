import React, { useRef, useEffect } from 'react';
import { Play, SkipBack, SkipForward, ExternalLink, Clock } from 'lucide-react';

export default function VideoPlayer({
  videoId,
  title,
  author,
  activeStep,
  totalSteps,
  onPrevStep,
  onNextStep,
  activeSeconds
}) {
  const iframeRef = useRef(null);

  // When activeSeconds changes, we update the iframe src or seek
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${activeSeconds || 0}&autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
      {/* 16:9 Aspect Ratio Video Frame */}
      <div className="relative w-full aspect-video bg-black">
        <iframe
          ref={iframeRef}
          key={`${videoId}-${activeSeconds}`}
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      {/* Video Info and Controls Bar */}
      <div className="p-4 bg-gray-900/90 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white truncate" title={title}>
              {title}
            </h3>
            <div className="flex items-center text-xs text-gray-400 space-x-2 mt-0.5">
              <span>By {author || 'Creator'}</span>
              <span>•</span>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 inline-flex items-center"
              >
                Open on YouTube <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Step Navigation Controls */}
          {activeStep && (
            <div className="flex items-center space-x-2 flex-shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={onPrevStep}
                disabled={activeStep.stepNumber <= 1}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
                title="Previous Step"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs font-medium text-amber-300 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Step {activeStep.stepNumber} of {totalSteps} ({activeStep.timestamp})
              </div>

              <button
                type="button"
                onClick={onNextStep}
                disabled={activeStep.stepNumber >= totalSteps}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
                title="Next Step"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Current Active Step Banner */}
        {activeStep && (
          <div className="mt-3 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="text-gray-400 truncate">
                Now Playing: <strong className="text-white font-medium">{activeStep.title}</strong>
              </span>
            </div>
            <span className="text-amber-400 font-mono flex-shrink-0 ml-2">@{activeStep.timestamp}</span>
          </div>
        )}
      </div>
    </div>
  );
}
