import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ListChecks,
  Layers,
  Wrench,
  Sparkles,
  Printer,
  Share2,
  CheckCircle2,
  FileDown,
  Hammer
} from 'lucide-react';

import Header from './components/Header';
import UrlInputForm from './components/UrlInputForm';
import VideoPlayer from './components/VideoPlayer';
import ProjectOverviewCard from './components/ProjectOverviewCard';
import StepsTimeline from './components/StepsTimeline';
import MaterialsList from './components/MaterialsList';
import ToolsList from './components/ToolsList';
import AIAssistantChat from './components/AIAssistantChat';
import ExportModal from './components/ExportModal';
import ApiKeyModal from './components/ApiKeyModal';

export default function App() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [presets, setPresets] = useState([]);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [activeStep, setActiveStep] = useState(null);
  const [activeSeconds, setActiveSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState('steps'); // 'steps' | 'materials' | 'tools' | 'assistant'
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Load API key and presets on startup
  useEffect(() => {
    const savedKey = localStorage.getItem('makersteps_gemini_key') || '';
    setApiKey(savedKey);

    fetch('/api/presets')
      .then(res => res.json())
      .then(data => {
        if (data.presets) setPresets(data.presets);
      })
      .catch(err => console.warn('Could not load presets:', err.message));
  }, []);

  // Sync completion states when project changes
  useEffect(() => {
    if (project) {
      const storageKey = `makersteps_completed_${project.id || project.videoId}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompletedSteps(new Set(JSON.parse(saved)));
        } catch (e) {
          setCompletedSteps(new Set());
        }
      } else {
        setCompletedSteps(new Set());
      }

      if (project.steps && project.steps.length > 0) {
        setActiveStep(project.steps[0]);
        setActiveSeconds(project.steps[0].seconds || 0);
      }
    }
  }, [project]);

  // Handle URL Analysis
  const handleAnalyze = async (url) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, apiKey })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to analyze video.');
      }

      setProject(data);
      setActiveTab('steps');
    } catch (err) {
      setError(err.message || 'Error analyzing video. Please verify the URL.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Preset Selection
  const handleSelectPreset = (preset) => {
    setProject(preset);
    setError('');
    setActiveTab('steps');
  };

  // Toggle step complete
  const handleToggleStep = (stepNumber) => {
    const next = new Set(completedSteps);
    if (next.has(stepNumber)) {
      next.delete(stepNumber);
    } else {
      next.add(stepNumber);
    }
    setCompletedSteps(next);

    // Save to localStorage
    if (project) {
      const storageKey = `makersteps_completed_${project.id || project.videoId}`;
      localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
    }

    // Trigger celebration if all steps completed
    if (project?.steps && next.size === project.steps.length) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Seek video to step
  const handleSeekToStep = (step) => {
    setActiveStep(step);
    setActiveSeconds(step.seconds || 0);
  };

  // Step navigation in video player
  const handlePrevStep = () => {
    if (!project || !activeStep) return;
    const currentIndex = project.steps.findIndex(s => s.stepNumber === activeStep.stepNumber);
    if (currentIndex > 0) {
      handleSeekToStep(project.steps[currentIndex - 1]);
    }
  };

  const handleNextStep = () => {
    if (!project || !activeStep) return;
    const currentIndex = project.steps.findIndex(s => s.stepNumber === activeStep.stepNumber);
    if (currentIndex < project.steps.length - 1) {
      handleSeekToStep(project.steps[currentIndex + 1]);
    }
  };

  // Reset to home
  const handleReset = () => {
    setProject(null);
    setError('');
    setActiveStep(null);
  };

  // Save API key
  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem('makersteps_gemini_key', key);
    } else {
      localStorage.removeItem('makersteps_gemini_key');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Header */}
      <Header
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onPrint={() => window.print()}
        onReset={handleReset}
        hasProject={Boolean(project)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {!project ? (
          /* Landing Page: URL Input & Presets */
          <UrlInputForm
            onAnalyze={handleAnalyze}
            loading={loading}
            error={error}
            presets={presets}
            onSelectPreset={handleSelectPreset}
          />
        ) : (
          /* Active Project Dashboard */
          <div className="space-y-6">
            {/* Top Row: Video Player + Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Synchronized Video Player */}
              <div className="lg:col-span-7 space-y-4">
                <VideoPlayer
                  videoId={project.videoId}
                  title={project.title}
                  author={project.author}
                  activeStep={activeStep}
                  totalSteps={project.steps?.length || 0}
                  onPrevStep={handlePrevStep}
                  onNextStep={handleNextStep}
                  activeSeconds={activeSeconds}
                />
              </div>

              {/* Right Column: Project Overview & Stats */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <ProjectOverviewCard
                  project={project}
                  completedCount={completedSteps.size}
                  totalCount={project.steps?.length || 0}
                />

                {/* Quick Action Toolbar */}
                <div className="mt-4 p-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsExportModalOpen(true)}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition"
                    >
                      <FileDown className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                      Export Guide
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition"
                    >
                      <Printer className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                      Print
                    </button>
                  </div>

                  <span className="text-xs text-gray-400">
                    Step {activeStep ? activeStep.stepNumber : 1} of {project.steps?.length || 0}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section: Tabs Navigation */}
            <div className="border-b border-gray-800">
              <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-1" aria-label="Build Blueprint Tabs">
                <button
                  type="button"
                  onClick={() => setActiveTab('steps')}
                  className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === 'steps'
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <ListChecks className="w-4 h-4 mr-2" />
                  Step-by-Step Instructions ({project.steps?.length || 0})
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('materials')}
                  className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === 'materials'
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  Bill of Materials ({project.materials?.length || 0})
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('tools')}
                  className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === 'tools'
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  Tools & Safety ({project.tools?.length || 0})
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('assistant')}
                  className={`inline-flex items-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === 'assistant'
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Workshop Copilot
                </button>
              </nav>
            </div>

            {/* Tab Panels */}
            <div>
              {activeTab === 'steps' && (
                <StepsTimeline
                  steps={project.steps || []}
                  completedSteps={completedSteps}
                  onToggleStep={handleToggleStep}
                  onSeekToStep={handleSeekToStep}
                  activeStepNumber={activeStep?.stepNumber}
                />
              )}

              {activeTab === 'materials' && (
                <MaterialsList materials={project.materials || []} />
              )}

              {activeTab === 'tools' && (
                <ToolsList
                  tools={project.tools || []}
                  safetyWarnings={project.safetyWarnings || []}
                />
              )}

              {activeTab === 'assistant' && (
                <AIAssistantChat
                  project={project}
                  apiKey={apiKey}
                />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-gray-950 py-6 text-center text-xs text-gray-500">
        <p>MakerSteps AI • Transforming YouTube DIY videos into step-by-step woodworking & fabrication blueprints.</p>
      </footer>

      {/* Export Modal */}
      <ExportModal
        project={project}
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* API Key Settings Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        currentKey={apiKey}
        onSaveKey={handleSaveApiKey}
      />

      {/* Hidden Print-Only Layout for Workshop Clipboard Printing */}
      {project && (
        <div className="hidden print:block p-8 bg-white text-black font-sans leading-normal">
          <h1 className="text-2xl font-bold mb-1">{project.objectName}</h1>
          <p className="text-sm text-gray-600 mb-4">
            Source: {project.title} | {project.category} | {project.difficulty} | {project.estimatedTime}
          </p>
          <hr className="my-3 border-gray-300" />

          <h2 className="text-lg font-bold mb-2">Bill of Materials</h2>
          <ul className="text-xs space-y-1 mb-4">
            {(project.materials || []).map((m, i) => (
              <li key={i}>[ ] {m.item} — {m.quantity} {m.dimensions ? `(${m.dimensions})` : ''}</li>
            ))}
          </ul>

          <h2 className="text-lg font-bold mb-2">Required Tools</h2>
          <ul className="text-xs space-y-1 mb-4">
            {(project.tools || []).map((t, i) => (
              <li key={i}>[ ] {t.name} ({t.category})</li>
            ))}
          </ul>

          <h2 className="text-lg font-bold mb-2">Step-by-Step Instructions</h2>
          <div className="space-y-4">
            {(project.steps || []).map((s) => (
              <div key={s.stepNumber} className="border-b border-gray-200 pb-2">
                <div className="font-bold text-sm">
                  Step {s.stepNumber}: {s.title} [{s.timestamp}]
                </div>
                <div className="text-xs text-gray-700 mt-1">{s.description}</div>
                {s.proTip && (
                  <div className="text-xs italic text-gray-600 mt-0.5">Tip: {s.proTip}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
