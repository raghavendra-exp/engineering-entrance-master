import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  QUESTIONS_DATABASE,
  TOTAL_QUESTIONS_COUNT,
  VERIFIED_PYQS_COUNT,
  PHYSICS_QUESTIONS_COUNT,
  CHEMISTRY_QUESTIONS_COUNT,
  MATHEMATICS_QUESTIONS_COUNT,
  getFilteredQuestions
} from '../data/questions';
import { MathView, FormattedContent } from '../components/common/MathView';
import type { Question, SubjectName, QuestionType, QuestionSourceType, DifficultyLevel } from '../types';
import {
  HelpCircle,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BookmarkPlus,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
  Clock,
  Layers,
  Check
} from 'lucide-react';

export const PracticePage: React.FC = () => {
  const { language, setBreadcrumbs, addToErrorNotebook, errorNotebook } = useApp();

  // Mode and Filter state
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | 'All'>('All');
  const [selectedSourceType, setSelectedSourceType] = useState<QuestionSourceType | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [practiceMode, setPracticeMode] = useState<string>('all'); // 'quick10', 'pyq', 'wrong', etc.

  // Question Pagination / Navigation
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [numericalInput, setNumericalInput] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [mistakeModalOpen, setMistakeModalOpen] = useState<boolean>(false);
  const [selectedMistakeType, setSelectedMistakeType] = useState<any>('Concept Gap');
  const [mistakeNote, setMistakeNote] = useState<string>('');

  useEffect(() => {
    // Check URL params
    const hash = window.location.hash;
    if (hash.includes('mode=pyq')) setSelectedSourceType('verified-pyq');
    if (hash.includes('chapter=')) {
      const match = hash.match(/chapter=([^&]+)/);
      if (match) setSearchQuery(decodeURIComponent(match[1]));
    }

    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Practice & PYQ Engine', hindiLabel: 'अभ्यास एवं PYQ इंजन', route: 'practice' }
    ]);
  }, [setBreadcrumbs]);

  // Evaluate Question Pool based on filters or mode
  let questionPool: Question[] = [];

  if (practiceMode === 'wrong') {
    const wrongIds = errorNotebook.filter(e => !e.resolved).map(e => e.questionId);
    questionPool = QUESTIONS_DATABASE.filter(q => wrongIds.includes(q.id));
  } else {
    questionPool = getFilteredQuestions({
      subject: selectedSubject,
      difficulty: selectedDifficulty,
      sourceType: selectedSourceType,
      searchQuery
    });

    if (practiceMode === 'quick10') {
      questionPool = questionPool.slice(0, 10);
    } else if (practiceMode === 'topic20') {
      questionPool = questionPool.slice(0, 20);
    } else if (practiceMode === 'chapter30') {
      questionPool = questionPool.slice(0, 30);
    } else if (practiceMode === 'subject50') {
      questionPool = questionPool.slice(0, 50);
    }
  }

  const currentQ: Question | undefined = questionPool[currentIndex] || questionPool[0];

  const handleNext = () => {
    if (currentIndex < questionPool.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserSelectedOption(null);
      setNumericalInput('');
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUserSelectedOption(null);
      setNumericalInput('');
      setShowAnswer(false);
    }
  };

  const handleOptionSelect = (idx: number) => {
    if (!showAnswer) {
      setUserSelectedOption(idx);
      setShowAnswer(true);
    }
  };

  const handleSaveMistake = () => {
    if (!currentQ) return;
    addToErrorNotebook({
      questionId: currentQ.id,
      question: currentQ,
      userAnswer: userSelectedOption !== null ? userSelectedOption : numericalInput,
      correctAnswer: currentQ.answer,
      mistakeType: selectedMistakeType,
      dateAdded: new Date().toISOString().split('T')[0],
      notes: mistakeNote,
      resolved: false
    });
    setMistakeModalOpen(false);
    setMistakeNote('');
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Title & Live Counter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'hi' ? 'अभ्यास एवं PYQ प्रश्न इंजन' : 'Practice & PYQ Question Engine'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {language === 'hi'
              ? `${TOTAL_QUESTIONS_COUNT}+ उच्च स्तरीय प्रश्न • भौतिकी (${PHYSICS_QUESTIONS_COUNT}), रसायन (${CHEMISTRY_QUESTIONS_COUNT}), गणित (${MATHEMATICS_QUESTIONS_COUNT})`
              : `${TOTAL_QUESTIONS_COUNT}+ High-Yield Questions • Physics (${PHYSICS_QUESTIONS_COUNT}), Chemistry (${CHEMISTRY_QUESTIONS_COUNT}), Mathematics (${MATHEMATICS_QUESTIONS_COUNT})`}
          </p>
        </div>

        {/* Live Counters Pill */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          <span className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-500/20">
            Total Qs: {TOTAL_QUESTIONS_COUNT}
          </span>
          <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/20">
            Verified PYQs: {VERIFIED_PYQS_COUNT}
          </span>
        </div>
      </div>

      {/* Practice Modes Selector */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {[
          { id: 'all', label: 'All Questions', count: TOTAL_QUESTIONS_COUNT },
          { id: 'quick10', label: 'Quick 10 Sprint', count: 10 },
          { id: 'topic20', label: 'Topic 20 Drill', count: 20 },
          { id: 'chapter30', label: 'Chapter 30 Practice', count: 30 },
          { id: 'subject50', label: 'Subject 50 Test', count: 50 },
          { id: 'wrong', label: 'Error Notebook Retry', count: errorNotebook.filter(e => !e.resolved).length }
        ].map(m => (
          <button
            key={m.id}
            onClick={() => {
              setPracticeMode(m.id);
              setCurrentIndex(0);
              setUserSelectedOption(null);
              setShowAnswer(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              practiceMode === m.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span>{m.label}</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              practiceMode === m.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
            }`}>
              {m.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Search by chapter, topic or question keyword..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => {
                  setSelectedSubject(sub);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  selectedSubject === sub
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Source Type Filter: Verified PYQ vs Original */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <select
              value={selectedSourceType}
              onChange={e => {
                setSelectedSourceType(e.target.value as any);
                setCurrentIndex(0);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200"
            >
              <option value="All">All Source Types</option>
              <option value="verified-pyq">Verified PYQs Only</option>
              <option value="original-pyq-style">Original Practice Questions</option>
            </select>
          </div>

        </div>
      </div>

      {/* Main Question Display Card */}
      {questionPool.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No questions found matching your filter criteria
          </h3>
          <p className="text-xs text-slate-500">
            Try switching subjects or resetting your search query.
          </p>
          <button
            onClick={() => {
              setSelectedSubject('All');
              setSelectedSourceType('All');
              setSearchQuery('');
              setPracticeMode('all');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-500 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : currentQ ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
          
          {/* Question Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-extrabold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                {currentQ.subject}
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {currentQ.chapter}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {currentQ.topic}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentQ.sourceType === 'verified-pyq' ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-500/30">
                  VERIFIED PYQ: {currentQ.exam} {currentQ.year || ''}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  ORIGINAL PYQ-STYLE
                </span>
              )}

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                currentQ.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' :
                currentQ.difficulty === 'medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' :
                'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300'
              }`}>
                {currentQ.difficulty}
              </span>

              <span className="text-xs font-bold text-slate-400 pl-2">
                Q {currentIndex + 1} of {questionPool.length}
              </span>
            </div>
          </div>

          {/* Question Text with KaTeX */}
          <div className="space-y-2 text-slate-900 dark:text-white text-sm sm:text-base leading-relaxed">
            <div className="font-semibold">
              <FormattedContent content={currentQ.question} />
            </div>

            {currentQ.hindiQuestion && language === 'hi' && (
              <p className="text-sm text-slate-600 dark:text-slate-300 font-normal pt-1">
                {currentQ.hindiQuestion}
              </p>
            )}
          </div>

          {/* Options Display */}
          {currentQ.options && currentQ.options.length > 0 && (
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = userSelectedOption === oIdx;
                const isCorrect = showAnswer && currentQ.answer === oIdx;
                const isWrong = showAnswer && isSelected && currentQ.answer !== oIdx;

                let optClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-blue-400';
                if (isCorrect) {
                  optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100';
                } else if (isWrong) {
                  optClass = 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-100';
                } else if (isSelected) {
                  optClass = 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-100';
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(oIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-medium ${optClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isCorrect ? 'bg-emerald-500 text-white' :
                        isWrong ? 'bg-red-500 text-white' :
                        'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>
                        <FormattedContent content={opt} />
                      </span>
                    </div>

                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    {isWrong && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Numerical Input Type */}
          {currentQ.type === 'numerical' && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Enter Integer Numerical Answer:
              </span>
              <div className="flex gap-2 max-w-xs">
                <input
                  type="text"
                  value={numericalInput}
                  onChange={e => setNumericalInput(e.target.value)}
                  placeholder="e.g. 42"
                  className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
                >
                  Submit
                </button>
              </div>
              {showAnswer && (
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Correct Answer: {currentQ.answer}
                </div>
              )}
            </div>
          )}

          {/* Explanation Box (Visible once answered) */}
          {showAnswer && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Step-by-Step Solution & Concept</span>
                </div>

                {/* Add to Error Notebook Button */}
                <button
                  onClick={() => setMistakeModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs border border-amber-500/30 transition-colors"
                >
                  <BookmarkPlus className="w-3.5 h-3.5" />
                  <span>Save to Error Notebook</span>
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                <FormattedContent content={currentQ.explanation} />
              </div>

              {currentQ.hindiExplanation && (
                <div className="text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <strong>हिंदी व्याख्या:</strong> {currentQ.hindiExplanation}
                </div>
              )}

              {currentQ.ncertReference && (
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold pt-1">
                  Reference: {currentQ.ncertReference}
                </div>
              )}
            </div>
          )}

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              {showAnswer ? 'Hide Solution' : 'Reveal Solution'}
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === questionPool.length - 1}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                currentIndex === questionPool.length - 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
              }`}
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : null}

      {/* Save to Error Notebook Modal */}
      {mistakeModalOpen && currentQ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-base text-slate-900 dark:text-white">
                Classify Error for Notebook
              </h3>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Identify the root cause of the mistake to enable targeted spaced repetition and revision:
            </p>

            <div className="grid grid-cols-2 gap-2">
              {[
                'Concept Gap',
                'Formula Error',
                'Calculation Error',
                'Silly Mistake',
                'Misread',
                'Guess',
                'Time Pressure',
                'Memory Error'
              ].map(mType => (
                <button
                  key={mType}
                  onClick={() => setSelectedMistakeType(mType)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-left border transition-all ${
                    selectedMistakeType === mType
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {mType}
                </button>
              ))}
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 block mb-1">
                Personal Note / Reflection (Optional):
              </label>
              <textarea
                value={mistakeNote}
                onChange={e => setMistakeNote(e.target.value)}
                placeholder="What did you learn from this problem? e.g. Forgot factor of 1/2 in kinetic energy..."
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 h-20"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setMistakeModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveMistake}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                Save to Error Notebook
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
