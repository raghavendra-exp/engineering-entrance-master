import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FLASHCARDS_DATA } from '../data/flashcards';
import { FormattedContent } from '../components/common/MathView';
import type { SubjectName, Flashcard } from '../types';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2
} from 'lucide-react';

export const FlashcardsPage: React.FC = () => {
  const {
    language,
    setBreadcrumbs,
    flashcardProgress,
    recordFlashcardReview
  } = useApp();

  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'All'>('All');
  const [deckMode, setDeckMode] = useState<'due' | 'all'>('due');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Spaced Repetition Flashcards', hindiLabel: 'फ़्लैशकार्ड्स पुनरावृत्ति', route: 'flashcards' }
    ]);
  }, [setBreadcrumbs]);

  // Today ISO timestamp string (date only)
  const todayStr = new Date().toISOString().split('T')[0];

  // Filter cards
  const cards = FLASHCARDS_DATA.filter(fc => {
    if (selectedSubject !== 'All' && fc.subject !== selectedSubject) return false;
    if (selectedTag !== 'All' && !fc.tags.includes(selectedTag)) return false;
    if (deckMode === 'due') {
      const progress = flashcardProgress[fc.id];
      if (!progress) return true; // Unreviewed cards are due
      const reviewDateStr = progress.nextReviewDate ? progress.nextReviewDate.split('T')[0] : '';
      return reviewDateStr <= todayStr;
    }
    return true;
  });

  // Calculate box counts
  const boxCounts = { 1: 0, 3: 0, 7: 0, 15: 0, 30: 0, 60: 0 };
  let masteredCount = 0;

  FLASHCARDS_DATA.forEach(fc => {
    const prog = flashcardProgress[fc.id];
    if (prog) {
      if (prog.intervalDays >= 30) masteredCount++;
      if (prog.intervalDays in boxCounts) {
        boxCounts[prog.intervalDays as keyof typeof boxCounts]++;
      }
    }
  });

  const currentCard: Flashcard | undefined = cards[currentCardIndex];

  const handleReview = (success: boolean) => {
    if (!currentCard) return;
    recordFlashcardReview(currentCard.id, success);
    setIsFlipped(false);

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Completed deck!
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setCurrentCardIndex(0);
    }
  };

  // Keyboard shortcut listener (Space to flip, 1 for fail, 2 for success)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === '1' && isFlipped) {
        handleReview(false);
      } else if (e.key === '2' && isFlipped) {
        handleReview(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentCard]);

  // Extract all unique tags
  const allTags = Array.from(new Set(FLASHCARDS_DATA.flatMap(fc => fc.tags))).slice(0, 10);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-violet-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" /> 1d → 3d → 7d → 15d → 30d → 60d Leitner Algorithm
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'स्मार्ट फ़्लैशकार्ड्स और अंतराल पुनरावृत्ति' : 'Spaced Repetition Flashcards'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'सूत्र, अभिक्रियाओं और प्रमुख अवधारणाओं को स्थायी स्मृति में बनाए रखने के लिए वैज्ञानिक विधि। कार्ड्स को फ्लिप करने के लिए स्पेसबार या कार्ड पर क्लिक करें।'
              : 'Retain high-yield physics formulas, organic reagents, calculus shortcuts, and tricky exceptions indefinitely with the proven Leitner spaced repetition engine.'}
          </p>
        </div>

        {/* Leitner Box Progress */}
        <div className="mt-8 pt-6 border-t border-white/15">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-200">
              Leitner Memory Boxes Distribution:
            </span>
            <span className="text-xs text-emerald-300 font-semibold">
              {masteredCount} of {FLASHCARDS_DATA.length} Mastered (Box 5-6)
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[
              { box: 'Box 1', days: '1 Day', count: boxCounts[1] || 0, color: 'bg-rose-500' },
              { box: 'Box 2', days: '3 Days', count: boxCounts[3] || 0, color: 'bg-amber-500' },
              { box: 'Box 3', days: '7 Days', count: boxCounts[7] || 0, color: 'bg-blue-500' },
              { box: 'Box 4', days: '15 Days', count: boxCounts[15] || 0, color: 'bg-indigo-500' },
              { box: 'Box 5', days: '30 Days', count: boxCounts[30] || 0, color: 'bg-emerald-500' },
              { box: 'Box 6', days: '60 Days', count: boxCounts[60] || 0, color: 'bg-teal-500' }
            ].map(b => (
              <div key={b.box} className="bg-white/10 backdrop-blur rounded-xl p-2.5 text-center">
                <span className="text-[10px] uppercase font-bold text-violet-200 block">{b.box}</span>
                <span className="text-base font-black text-white">{b.count}</span>
                <span className="text-[9px] text-slate-300 block">{b.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Control Bar: Subject Tabs & Mode */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Deck Mode Toggle */}
          <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            <button
              onClick={() => { setDeckMode('due'); setCurrentCardIndex(0); setIsFlipped(false); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                deckMode === 'due'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Today's Due Queue</span>
            </button>
            <button
              onClick={() => { setDeckMode('all'); setCurrentCardIndex(0); setIsFlipped(false); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                deckMode === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Browse All Cards ({FLASHCARDS_DATA.length})</span>
            </button>
          </div>

          {/* Subject Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => { setSelectedSubject(sub); setCurrentCardIndex(0); setIsFlipped(false); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <button
            onClick={() => { setSelectedTag('All'); setCurrentCardIndex(0); setIsFlipped(false); }}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              selectedTag === 'All'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400'
            }`}
          >
            All Topics
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => { setSelectedTag(tag); setCurrentCardIndex(0); setIsFlipped(false); }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard Interactive Area */}
      {cards.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
            All Caught Up for Today!
          </h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            You have reviewed all due cards in this deck. Switch to "Browse All Cards" to practice ahead of schedule or come back tomorrow for next interval reviews.
          </p>
          <button
            onClick={() => { setDeckMode('all'); setCurrentCardIndex(0); }}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
          >
            Review All Cards Now
          </button>
        </div>
      ) : currentCard ? (
        <div className="space-y-6">
          {/* Card counter header */}
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 px-2">
            <span>
              Card <strong className="text-slate-900 dark:text-white font-bold">{currentCardIndex + 1}</strong> of {cards.length}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-bold text-[11px]">
                {currentCard.subject}
              </span>
              <span>• {currentCard.chapter}</span>
            </span>
          </div>

          {/* Interactive Flip Card Container */}
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="cursor-pointer select-none group min-h-[360px] md:min-h-[420px] rounded-3xl p-8 md:p-12 border-2 transition-all flex flex-col justify-between shadow-lg relative bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600"
          >
            {/* Top Card Badge */}
            <div className="flex justify-between items-center text-xs">
              <span className="font-extrabold tracking-wider uppercase text-slate-400">
                {isFlipped ? 'ANSWER / FORMULA' : 'QUESTION / PROMPT'}
              </span>
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Click or press Space to flip
              </span>
            </div>

            {/* Center Content with KaTeX Math View */}
            <div className="my-auto py-6 text-center space-y-4">
              {!isFlipped ? (
                <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug max-w-2xl mx-auto">
                  <FormattedContent
                    content={language === 'hi' && currentCard.hindiFront ? currentCard.hindiFront : currentCard.front}
                  />
                </div>
              ) : (
                <div className="space-y-6 max-w-2xl mx-auto animate-fadeIn">
                  <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 leading-snug">
                    <FormattedContent
                      content={language === 'hi' && currentCard.hindiBack ? currentCard.hindiBack : currentCard.back}
                    />
                  </div>

                  {currentCard.formulaOrReaction && (
                    <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 text-sm">
                      <span className="block text-[10px] uppercase font-bold text-indigo-500 mb-1">
                        Detailed Formula / Derivation Reference:
                      </span>
                      <FormattedContent content={currentCard.formulaOrReaction} />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-700/60">
              <div className="flex gap-1.5">
                {currentCard.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px]">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-[11px] capitalize font-medium">
                Difficulty: {currentCard.difficulty}
              </span>
            </div>
          </div>

          {/* Action Buttons: Review & Advance */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (currentCardIndex > 0) {
                    setCurrentCardIndex(prev => prev - 1);
                    setIsFlipped(false);
                  }
                }}
                disabled={currentCardIndex === 0}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (currentCardIndex < cards.length - 1) {
                    setCurrentCardIndex(prev => prev + 1);
                    setIsFlipped(false);
                  }
                }}
                disabled={currentCardIndex === cards.length - 1}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-30"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Leitner Feedback Buttons (Visible when flipped or ready) */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleReview(false)}
                className="flex-1 sm:flex-none px-6 py-3 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Forgot / Reset (1d) [Key 1]</span>
              </button>

              <button
                onClick={() => handleReview(true)}
                className="flex-1 sm:flex-none px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Got It! Advance Interval [Key 2]</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
