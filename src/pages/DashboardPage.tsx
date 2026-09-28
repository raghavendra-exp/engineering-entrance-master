import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FLASHCARDS_DATA } from '../data/flashcards';
import {
  LayoutDashboard,
  Award,
  BookMarked,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  RotateCcw,
  Zap,
  TrendingUp,
  FileText
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const {
    language,
    navigate,
    setBreadcrumbs,
    errorNotebook,
    testAttempts,
    flashcardProgress
  } = useApp();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Student Dashboard', hindiLabel: 'छात्र डैशबोर्ड', route: 'dashboard' }
    ]);
  }, [setBreadcrumbs]);

  // Calculations
  const totalAttempts = testAttempts.length;
  const avgAccuracy = totalAttempts > 0
    ? Math.round(testAttempts.reduce((acc, curr) => acc + curr.accuracy, 0) / totalAttempts)
    : 0;

  const unresolvedErrors = errorNotebook.filter(e => !e.resolved).length;
  const resolvedErrors = errorNotebook.filter(e => e.resolved).length;

  const todayStr = new Date().toISOString().split('T')[0];
  const flashcardsDueToday = FLASHCARDS_DATA.filter(fc => {
    const prog = flashcardProgress[fc.id];
    if (!prog) return true;
    const rev = prog.nextReviewDate ? prog.nextReviewDate.split('T')[0] : '';
    return rev <= todayStr;
  }).length;

  // Milestone tasks
  let completedMilestones = 0;
  try {
    const savedTasks = JSON.parse(localStorage.getItem('eem_completed_tasks') || '{}');
    completedMilestones = Object.values(savedTasks).filter(Boolean).length;
  } catch {
    completedMilestones = 0;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-300 border border-white/15">
            <LayoutDashboard className="w-3.5 h-3.5" /> Unified Performance Command Center
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आपका अध्ययन और प्रगति डैशबोर्ड' : 'Your Preparation Command Center'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'अपनी सटीकता, हल किए गए मॉक टेस्ट, त्रुटि नोटबुक के अनसुलझे प्रश्न और दैनिक अंतराल पुनरावृत्ति की स्थिति को ट्रैक करें।'
              : 'Track your mock test accuracy, error eradication rate, daily spaced repetition queue, and roadmap progression in real time.'}
          </p>
        </div>

        {/* 4 Core Vital Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <span className="text-xs uppercase text-indigo-200 font-semibold block">Tests Completed</span>
            <div className="text-3xl font-black mt-1 text-white">{totalAttempts}</div>
            <span className="text-[11px] text-indigo-300 mt-1 block">Avg Accuracy: {avgAccuracy}%</span>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <span className="text-xs uppercase text-rose-200 font-semibold block">Unresolved Errors</span>
            <div className="text-3xl font-black mt-1 text-rose-300">{unresolvedErrors}</div>
            <span className="text-[11px] text-emerald-300 mt-1 block">{resolvedErrors} Mastered</span>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <span className="text-xs uppercase text-violet-200 font-semibold block">Flashcards Due</span>
            <div className="text-3xl font-black mt-1 text-violet-300">{flashcardsDueToday}</div>
            <span className="text-[11px] text-slate-300 mt-1 block">Scheduled for today</span>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <span className="text-xs uppercase text-emerald-200 font-semibold block">Milestones Done</span>
            <div className="text-3xl font-black mt-1 text-emerald-300">{completedMilestones}</div>
            <span className="text-[11px] text-emerald-200 mt-1 block">10-Level Roadmap</span>
          </div>
        </div>
      </div>

      {/* Recommended Next Actions Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" /> High-Impact Recommended Actions for Today
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Review Flashcards */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="p-2.5 bg-violet-50 dark:bg-violet-950 text-violet-600 rounded-2xl inline-block">
                <Calendar className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                Spaced Repetition Review
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {flashcardsDueToday > 0
                  ? `You have ${flashcardsDueToday} formula and reaction cards due today under the Leitner schedule.`
                  : 'You have cleared all scheduled cards for today! Feel free to practice ahead.'}
              </p>
            </div>
            <button
              onClick={() => navigate('flashcards')}
              className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Open Flashcards Deck</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Eradicate Errors */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="p-2.5 bg-rose-50 dark:bg-rose-950 text-rose-600 rounded-2xl inline-block">
                <BookMarked className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                Eradicate Unresolved Mistakes
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {unresolvedErrors > 0
                  ? `Retake the ${unresolvedErrors} questions you answered incorrectly in mock tests.`
                  : 'No unresolved errors currently logged! Take a mock test to identify weak spots.'}
              </p>
            </div>
            <button
              onClick={() => navigate('errors')}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Start Error Retake Drill</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: CBT Mock Test */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="p-2.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-2xl inline-block">
                <Award className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
                Full CBT Simulation Test
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Take an authentic timed CBT examination to train pacing, question skipping, and negative marking control.
              </p>
            </div>
            <button
              onClick={() => navigate('mocks')}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Launch Mock Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Test Attempts History */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-xl text-slate-900 dark:text-slate-100">
              Recent CBT Mock Test Attempts ({totalAttempts})
            </h3>
            <p className="text-xs text-slate-500">
              Detailed chronological test logs and score histories.
            </p>
          </div>
          <button
            onClick={() => navigate('mocks')}
            className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs rounded-xl hover:bg-indigo-100"
          >
            + Take New Mock Test
          </button>
        </div>

        {totalAttempts === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
            <FileText className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">No Mock Tests Attempted Yet</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Complete your first full or speed drill test to begin generating accuracy charts and error diagnostic logs.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/60 uppercase font-bold text-slate-500 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-3">Date</th>
                  <th className="p-3">Test Name</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Accuracy</th>
                  <th className="p-3">Attempted</th>
                  <th className="p-3">Time Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {testAttempts.map((att, aIdx) => (
                  <tr key={aIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                    <td className="p-3 text-slate-500">{att.date}</td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100 uppercase">{att.testId}</td>
                    <td className="p-3 font-mono font-bold text-emerald-600">{att.totalScore} / {att.maxScore}</td>
                    <td className="p-3 font-bold text-slate-800 dark:text-slate-200">{att.accuracy}%</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">
                      <span className="text-emerald-600 font-bold">+{att.correctCount}</span> / <span className="text-rose-600 font-bold">-{att.incorrectCount}</span>
                    </td>
                    <td className="p-3 text-slate-400 font-mono">
                      {Math.floor(att.durationSeconds / 60)}m {att.durationSeconds % 60}s
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
