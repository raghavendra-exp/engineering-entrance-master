import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { BottomNav } from './components/layout/BottomNav';
import { Breadcrumbs } from './components/layout/Breadcrumbs';
import { SearchModal } from './components/modals/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExamsPage } from './pages/ExamsPage';
import { ExamDetailPage } from './pages/ExamDetailPage';
import { CompareExamsPage } from './pages/CompareExamsPage';
import { SyllabusPage } from './pages/SyllabusPage';
import { ChapterDetailPage } from './pages/ChapterDetailPage';
import { NcertPage } from './pages/NcertPage';
import { BooksPage } from './pages/BooksPage';
import { PracticePage } from './pages/PracticePage';
import { MockTestsPage } from './pages/MockTestsPage';
import { ErrorNotebookPage } from './pages/ErrorNotebookPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { FormulasPage } from './pages/FormulasPage';
import { SpeedLabPage } from './pages/SpeedLabPage';
import { PlannerPage } from './pages/PlannerPage';
import { CounsellingPage } from './pages/CounsellingPage';
import { CollegesPage } from './pages/CollegesPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { DashboardPage } from './pages/DashboardPage';

import {
  ShieldCheck,
  Compass,
  Heart,
  ExternalLink,
  BookOpen,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentRoute, navigate, language } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Parse route and parameters
  const renderCurrentPage = () => {
    // Route matching
    const cleanRoute = currentRoute.split('?')[0];

    if (cleanRoute === 'home' || cleanRoute === '') {
      return <HomePage />;
    }
    if (cleanRoute === 'exams') {
      return <ExamsPage />;
    }
    if (cleanRoute.startsWith('exam/')) {
      const examId = cleanRoute.replace('exam/', '');
      return <ExamDetailPage examId={examId} />;
    }
    if (cleanRoute === 'compare' || cleanRoute === 'compare-exams') {
      return <CompareExamsPage />;
    }
    if (cleanRoute === 'syllabus') {
      return <SyllabusPage />;
    }
    if (cleanRoute.startsWith('chapter/')) {
      const chapterId = cleanRoute.replace('chapter/', '');
      return <ChapterDetailPage chapterId={chapterId} />;
    }
    if (cleanRoute === 'ncert') {
      return <NcertPage />;
    }
    if (cleanRoute === 'books') {
      return <BooksPage />;
    }
    if (cleanRoute === 'practice') {
      return <PracticePage />;
    }
    if (cleanRoute === 'mocks' || cleanRoute === 'mock-tests') {
      return <MockTestsPage />;
    }
    if (cleanRoute === 'errors' || cleanRoute === 'error-notebook') {
      return <ErrorNotebookPage />;
    }
    if (cleanRoute === 'flashcards') {
      return <FlashcardsPage />;
    }
    if (cleanRoute === 'formulas') {
      return <FormulasPage />;
    }
    if (cleanRoute === 'speed-lab') {
      return <SpeedLabPage />;
    }
    if (cleanRoute === 'planner') {
      return <PlannerPage />;
    }
    if (cleanRoute === 'counselling') {
      return <CounsellingPage />;
    }
    if (cleanRoute === 'colleges') {
      return <CollegesPage />;
    }
    if (cleanRoute === 'updates') {
      return <UpdatesPage />;
    }
    if (cleanRoute === 'dashboard') {
      return <DashboardPage />;
    }

    // Default Fallback
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Header */}
      <Header onToggleSidebar={() => setMobileSidebarOpen(prev => !prev)} />

      {/* Main App Container */}
      <div className="flex-1 flex w-full">
        {/* Responsive Sidebar */}
        <Sidebar
          isOpenMobile={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Content Area with Breadcrumbs */}
        <main className="flex-1 lg:pl-64 flex flex-col min-w-0 pb-16 lg:pb-8">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4">
            <Breadcrumbs />
          </div>

          <div className="flex-1">
            {renderCurrentPage()}
          </div>

          {/* Master Footer */}
          <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
              {/* Top row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
                      EEM
                    </div>
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white tracking-tight">
                      ENGINEERING ENTRANCE MASTER INDIA
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-md">
                    Complete Engineering Entrance Preparation, PYQ, Practice, Mock Test, Counselling & College Discovery Platform. Covering National (JEE Main, JEE Advanced, IAT), State CETs (MHT-CET, WBJEE, KCET, COMEDK), and Premier University tests (BITSAT, VITEEE).
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" /> 100% Primary Official Sources • Zero Pirated Material
                  </div>
                </div>

                {/* 10-Stage Pipeline Links */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                    Preparation Stages
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    <li><button onClick={() => navigate('planner')} className="hover:text-indigo-600">ZERO → Diagnostic</button></li>
                    <li><button onClick={() => navigate('syllabus')} className="hover:text-indigo-600">SYLLABUS → PCM Units</button></li>
                    <li><button onClick={() => navigate('ncert')} className="hover:text-indigo-600">NCERT → Line-by-Line</button></li>
                    <li><button onClick={() => navigate('practice')} className="hover:text-indigo-600">PRACTICE → 1,048+ Questions</button></li>
                    <li><button onClick={() => navigate('practice?mode=pyq')} className="hover:text-indigo-600">PYQ → 10-Year Verified</button></li>
                    <li><button onClick={() => navigate('mocks')} className="hover:text-indigo-600">MOCK → Real CBT Tests</button></li>
                    <li><button onClick={() => navigate('errors')} className="hover:text-indigo-600">REVISION → Error Notebook</button></li>
                  </ul>
                </div>

                {/* Counselling & College Discovery */}
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                    Admissions & Discovery
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    <li><button onClick={() => navigate('counselling')} className="hover:text-indigo-600">JoSAA Counselling Guide</button></li>
                    <li><button onClick={() => navigate('counselling')} className="hover:text-indigo-600">CSAB Special Rounds</button></li>
                    <li><button onClick={() => navigate('colleges')} className="hover:text-indigo-600">Top IITs & NITs Directory</button></li>
                    <li><button onClick={() => navigate('colleges')} className="hover:text-indigo-600">Official JoSAA Cutoffs</button></li>
                    <li><button onClick={() => navigate('speed-lab')} className="hover:text-indigo-600">Speed Lab & Mental Math</button></li>
                    <li><button onClick={() => navigate('flashcards')} className="hover:text-indigo-600">Spaced Repetition Deck</button></li>
                    <li><button onClick={() => navigate('updates')} className="hover:text-indigo-600">Live Exam Alerts</button></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Copyright & Disclaimer */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
                <p>
                  © {new Date().getFullYear()} Engineering Entrance Master India. Free, open educational platform for engineering aspirants.
                </p>
                <div className="flex items-center gap-4">
                  <button onClick={() => navigate('home')} className="hover:underline">Home</button>
                  <button onClick={() => navigate('exams')} className="hover:underline">Exams</button>
                  <button onClick={() => navigate('dashboard')} className="hover:underline">Dashboard</button>
                  <a
                    href="https://github.com/raghavendra-exp/engineering-entrance-master"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline text-indigo-500"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Universal Search Modal (Ctrl+K) */}
      <SearchModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
