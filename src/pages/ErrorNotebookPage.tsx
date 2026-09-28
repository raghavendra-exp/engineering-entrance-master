import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FormattedContent } from '../components/common/MathView';
import type { SubjectName, ErrorNotebookItem } from '../types';
import {
  BookMarked,
  CheckCircle2,
  Trash2,
  Filter,
  Play,
  RotateCcw,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

export const ErrorNotebookPage: React.FC = () => {
  const {
    language,
    setBreadcrumbs,
    errorNotebook,
    removeFromErrorNotebook,
    updateErrorNotebookItem
  } = useApp();

  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'All'>('All');
  const [selectedMistakeType, setSelectedMistakeType] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Unresolved' | 'Resolved'>('Unresolved');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Retake drill state
  const [isDrillActive, setIsDrillActive] = useState<boolean>(false);
  const [drillIndex, setDrillIndex] = useState<number>(0);
  const [drillAnswer, setDrillAnswer] = useState<any>(null);
  const [showDrillExplanation, setShowDrillExplanation] = useState<boolean>(false);

  // In-line note editing
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNoteText, setTempNoteText] = useState<string>('');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Error Notebook', hindiLabel: 'त्रुटि नोटबुक', route: 'errors' }
    ]);
  }, [setBreadcrumbs]);

  const filteredErrors = errorNotebook.filter(item => {
    if (selectedSubject !== 'All' && item.question.subject !== selectedSubject) return false;
    if (selectedMistakeType !== 'All' && item.mistakeType !== selectedMistakeType) return false;
    if (statusFilter === 'Unresolved' && item.resolved) return false;
    if (statusFilter === 'Resolved' && !item.resolved) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchQ = item.question.question.toLowerCase().includes(q);
      const matchChap = item.question.chapter.toLowerCase().includes(q);
      const matchNotes = item.notes?.toLowerCase().includes(q);
      if (!matchQ && !matchChap && !matchNotes) return false;
    }
    return true;
  });

  const totalErrors = errorNotebook.length;
  const unresolvedCount = errorNotebook.filter(i => !i.resolved).length;
  const resolvedCount = errorNotebook.filter(i => i.resolved).length;

  // Compute most frequent mistake
  const mistakeCounts: Record<string, number> = {};
  errorNotebook.forEach(item => {
    mistakeCounts[item.mistakeType] = (mistakeCounts[item.mistakeType] || 0) + 1;
  });
  let mostFrequentMistake = 'None';
  let highestCount = 0;
  Object.entries(mistakeCounts).forEach(([type, cnt]) => {
    if (cnt > highestCount) {
      highestCount = cnt;
      mostFrequentMistake = type;
    }
  });

  // Drill questions pool (unresolved)
  const drillPool = errorNotebook.filter(i => !i.resolved);

  const startErrorDrill = () => {
    if (drillPool.length === 0) return;
    setIsDrillActive(true);
    setDrillIndex(0);
    setDrillAnswer(null);
    setShowDrillExplanation(false);
  };

  const currentDrillItem = drillPool[drillIndex];

  // -----------------------------------------------------------------
  // VIEW: RETAKE DRILL MODE
  // -----------------------------------------------------------------
  if (isDrillActive && currentDrillItem) {
    const q = currentDrillItem.question;
    const isAnswerSubmitted = showDrillExplanation;
    const isCorrect = drillAnswer !== null && (
      String(drillAnswer).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
    );

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-fadeIn">
        <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-xl">
              <RotateCcw className="w-5 h-5" />
            </span>
            <div>
              <h2 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">
                Error Eradication Drill
              </h2>
              <p className="text-xs text-slate-500">
                Question {drillIndex + 1} of {drillPool.length} Unresolved Errors
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDrillActive(false)}
            className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl"
          >
            Exit Drill
          </button>
        </div>

        {/* Drill Question Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
                {q.subject}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">
                {q.chapter}
              </span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold">
              Original Mistake: {currentDrillItem.mistakeType}
            </span>
          </div>

          <div className="text-base text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
            <FormattedContent content={language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question} />
          </div>

          {/* Options */}
          {q.type === 'mcq' && q.options && (
            <div className="space-y-3 pt-2">
              {q.options.map((option, optIdx) => {
                const isSelected = drillAnswer === optIdx;
                let optionStyle = 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600';

                if (isAnswerSubmitted) {
                  if (optIdx === Number(q.answer)) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-100 font-semibold';
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isAnswerSubmitted}
                    onClick={() => setDrillAnswer(optIdx)}
                    className={`w-full p-4 rounded-2xl border-2 text-left flex items-start gap-4 transition-all ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-slate-100 dark:bg-slate-700">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <div className="flex-1 text-sm pt-0.5">
                      <FormattedContent content={option} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Numerical Input */}
          {q.type === 'numerical' && (
            <div className="pt-2 max-w-sm space-y-2">
              <input
                type="text"
                disabled={isAnswerSubmitted}
                value={drillAnswer ?? ''}
                onChange={e => setDrillAnswer(e.target.value)}
                placeholder="Enter numerical answer..."
                className="w-full px-4 py-3 rounded-2xl border-2 border-slate-300 dark:border-slate-700 font-bold text-lg focus:border-indigo-600 focus:outline-none"
              />
            </div>
          )}

          {/* Explanation Banner */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-2xl border space-y-2 ${
              isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
                : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold flex items-center gap-1.5 ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                  {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : null}
                  {isCorrect ? 'Awesome! You got it right this time!' : 'Still needs attention! Review explanation below.'}
                </span>

                {isCorrect && !currentDrillItem.resolved && (
                  <button
                    onClick={() => updateErrorNotebookItem(currentDrillItem.questionId, { resolved: true })}
                    className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-sm"
                  >
                    Mark Error as Resolved ✓
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-black/5 dark:border-white/5">
                <FormattedContent content={language === 'hi' && q.hindiExplanation ? q.hindiExplanation : q.explanation} />
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
            <span className="text-xs text-slate-400">
              Your previous note: "{currentDrillItem.notes || 'No note written'}"
            </span>

            <div className="flex gap-2">
              {!isAnswerSubmitted ? (
                <button
                  disabled={drillAnswer === null || drillAnswer === ''}
                  onClick={() => setShowDrillExplanation(true)}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  Verify Answer
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (drillIndex < drillPool.length - 1) {
                      setDrillIndex(drillIndex + 1);
                      setDrillAnswer(null);
                      setShowDrillExplanation(false);
                    } else {
                      setIsDrillActive(false);
                    }
                  }}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                >
                  {drillIndex < drillPool.length - 1 ? 'Next Question →' : 'Finish Drill'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------------
  // VIEW: MAIN ERROR NOTEBOOK CATALOG
  // -----------------------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-purple-950 to-indigo-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-300 border border-white/15">
            <BookMarked className="w-3.5 h-3.5" /> High-Yield Error Eradication System
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'स्मार्ट त्रुटि नोटबुक' : 'Smart Error Notebook'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'परीक्षा में सफलता गलतियों को दोहराने से बचने से आती है। अवधारणा अंतराल, गणना त्रुटि, सिली मिस्टेक या समय के दबाव के रूप में अपनी गलतियों को ट्रैक करें।'
              : 'Rankers do not make fewer mistakes—they never repeat the same mistake twice. Track root causes across concept gaps, formula errors, calculation slips, and time pressure.'}
          </p>

          <div className="pt-2">
            <button
              onClick={startErrorDrill}
              disabled={unresolvedCount === 0}
              className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4" /> Start Retake Drill ({unresolvedCount} Unresolved)
            </button>
          </div>
        </div>

        {/* Diagnostic Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
            <span className="text-xs uppercase text-rose-200 font-semibold">Total Logged</span>
            <div className="text-3xl font-black mt-1">{totalErrors}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
            <span className="text-xs uppercase text-rose-200 font-semibold">Unresolved</span>
            <div className="text-3xl font-black mt-1 text-rose-300">{unresolvedCount}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
            <span className="text-xs uppercase text-rose-200 font-semibold">Mastered / Resolved</span>
            <div className="text-3xl font-black mt-1 text-emerald-300">{resolvedCount}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
            <span className="text-xs uppercase text-rose-200 font-semibold">Top Trap</span>
            <div className="text-lg font-black mt-2 text-amber-300 truncate">{mostFrequentMistake}</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[260px] relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by chapter, question keyword, or note..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            {(['All', 'Unresolved', 'Resolved'] as const).map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === st
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Subject & Root Cause Chips */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Subject:
            </span>
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-xs font-bold text-slate-400 mr-1">Root Cause:</span>
            {[
              'All',
              'Concept Gap',
              'Formula Error',
              'Calculation Error',
              'Silly Mistake',
              'Misread',
              'Guess',
              'Time Pressure'
            ].map(type => (
              <button
                key={type}
                onClick={() => setSelectedMistakeType(type)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  selectedMistakeType === type
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                    : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredErrors.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {errorNotebook.length === 0 ? 'Your Error Notebook is Clean!' : 'No Errors Match Your Filters'}
          </h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto">
            {errorNotebook.length === 0
              ? 'When practicing questions or taking mock tests, add any question you got wrong or felt unsure about to review here.'
              : 'Try clearing your search query or switching filters to view your logged errors.'}
          </p>
        </div>
      )}

      {/* Errors List */}
      <div className="space-y-6">
        {filteredErrors.map(item => {
          const q = item.question;
          const isResolved = item.resolved;

          return (
            <div
              key={item.questionId}
              className={`bg-white dark:bg-slate-800 rounded-3xl p-6 border shadow-sm transition-all ${
                isResolved
                  ? 'border-emerald-200 dark:border-emerald-900/50 opacity-80'
                  : 'border-slate-200 dark:border-slate-700 hover:shadow-md'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-wrap justify-between items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
                    {q.subject}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {q.chapter} • {q.topic}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold border border-rose-200 dark:border-rose-900/50">
                    {item.mistakeType}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateErrorNotebookItem(item.questionId, { resolved: !isResolved })}
                    className={`text-xs font-bold px-3 py-1 rounded-xl transition-all flex items-center gap-1.5 border ${
                      isResolved
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isResolved ? 'Mastered' : 'Mark Resolved'}
                  </button>

                  <button
                    onClick={() => removeFromErrorNotebook(item.questionId)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                    title="Remove from Notebook"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium mb-4">
                <FormattedContent content={language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question} />
              </div>

              {/* MCQ Options Display */}
              {q.type === 'mcq' && q.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === Number(q.answer);
                    const isUserAns = item.userAnswer !== undefined && Number(item.userAnswer) === oIdx;

                    let optStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40';
                    if (isCorrect) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isUserAns) {
                      optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                    }

                    return (
                      <div key={oIdx} className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${optStyle}`}>
                        <span className="font-bold shrink-0">{String.fromCharCode(65 + oIdx)}.</span>
                        <div className="flex-1">
                          <FormattedContent content={opt} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Numerical Response Comparison */}
              {q.type === 'numerical' && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex gap-6 text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block">Your Attempt:</span>
                    <span className="font-bold text-rose-600">{String(item.userAnswer || 'None')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Correct Value:</span>
                    <span className="font-bold text-emerald-600">{String(q.answer)}</span>
                  </div>
                </div>
              )}

              {/* Student Self-Reflection Note Box */}
              <div className="bg-amber-50/80 dark:bg-amber-950/30 rounded-2xl p-4 border border-amber-200/80 dark:border-amber-900/40 space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                    Student Reflection & Action Note:
                  </span>
                  {editingNoteId !== item.questionId ? (
                    <button
                      onClick={() => {
                        setEditingNoteId(item.questionId);
                        setTempNoteText(item.notes || '');
                      }}
                      className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                    >
                      {item.notes ? 'Edit Note' : '+ Add Note'}
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          updateErrorNotebookItem(item.questionId, { notes: tempNoteText });
                          setEditingNoteId(null);
                        }}
                        className="text-xs font-bold text-emerald-700 dark:text-emerald-400"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingNoteId(null)}
                        className="text-xs font-semibold text-slate-500"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {editingNoteId === item.questionId ? (
                  <textarea
                    value={tempNoteText}
                    onChange={e => setTempNoteText(e.target.value)}
                    rows={2}
                    className="w-full text-xs p-2 rounded-xl border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none"
                    placeholder="Write what went wrong and the exact step to verify next time..."
                  />
                ) : (
                  <p className="text-xs text-amber-900 dark:text-amber-200 italic">
                    "{item.notes || 'No custom note added yet. Click Add Note to reflect on this error.'}"
                  </p>
                )}
              </div>

              {/* Explanation Dropdown / Drawer */}
              <details className="group">
                <summary className="cursor-pointer text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5 list-none">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View Full Step-by-Step Solution</span>
                </summary>
                <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <FormattedContent content={language === 'hi' && q.hindiExplanation ? q.hindiExplanation : q.explanation} />
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};
