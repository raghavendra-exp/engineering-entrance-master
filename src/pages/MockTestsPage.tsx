import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { QUESTIONS_DATABASE } from '../data/questions';
import { FormattedContent } from '../components/common/MathView';
import type { Question, SubjectName, UserTestAttempt } from '../types';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Filter,
  Flame,
  Award,
  BookMarked,
  Maximize2,
  Minimize2,
  ListOrdered
} from 'lucide-react';

interface MockPreset {
  id: string;
  title: string;
  hindiTitle: string;
  exam: string;
  durationMinutes: number;
  markingScheme: {
    correct: number;
    incorrect: number;
    rules: string;
  };
  totalQuestions: number;
  subjectDistribution: {
    Physics: number;
    Chemistry: number;
    Mathematics: number;
  };
  description: string;
  tag: 'Full Mock' | 'Speed Drill' | 'Subject Test' | 'State CET';
}

const PRESET_MOCKS: MockPreset[] = [
  {
    id: 'jee-main-full-1',
    title: 'JEE Main 2026 Comprehensive Mock 1',
    hindiTitle: 'जेईई मेन 2026 संपूर्ण मॉक टेस्ट 1',
    exam: 'JEE Main',
    durationMinutes: 180,
    markingScheme: { correct: 4, incorrect: -1, rules: '+4 for correct, -1 for incorrect, 0 if unattempted' },
    totalQuestions: 75,
    subjectDistribution: { Physics: 25, Chemistry: 25, Mathematics: 25 },
    description: 'Real NTA CBT pattern test with 25 questions per subject (20 MCQ + 5 Numerical type). Balanced Class 11 & 12 syllabus.',
    tag: 'Full Mock'
  },
  {
    id: 'jee-main-speed-1',
    title: 'JEE Main 60-Minute Rapid Power Mock',
    hindiTitle: 'जेईई मेन 60 मिनट रैपिड पावर मॉक',
    exam: 'JEE Main',
    durationMinutes: 60,
    markingScheme: { correct: 4, incorrect: -1, rules: '+4 for correct, -1 for incorrect' },
    totalQuestions: 30,
    subjectDistribution: { Physics: 10, Chemistry: 10, Mathematics: 10 },
    description: 'High-speed 30-question sprint to train time allocation, selection accuracy, and eliminating negative marking.',
    tag: 'Speed Drill'
  },
  {
    id: 'bitsat-simulator-1',
    title: 'BITSAT Speed & Accuracy Simulator',
    hindiTitle: 'बिटसैट गति और सटीकता सिम्युलेटर',
    exam: 'BITSAT',
    durationMinutes: 90,
    markingScheme: { correct: 3, incorrect: -1, rules: '+3 for correct, -1 for incorrect, no negative for unattempted' },
    totalQuestions: 45,
    subjectDistribution: { Physics: 15, Chemistry: 15, Mathematics: 15 },
    description: 'Experience BITSAT speed threshold: 45 high-yield conceptual questions demanding swift calculation without traps.',
    tag: 'Speed Drill'
  },
  {
    id: 'mht-cet-mock-1',
    title: 'MHT-CET Engineering PCM Full Mock',
    hindiTitle: 'एमएचटी-सीईटी इंजीनियरिंग पीसीएम फुल मॉक',
    exam: 'MHT-CET',
    durationMinutes: 120,
    markingScheme: { correct: 2, incorrect: 0, rules: 'Math: +2, Physics/Chem: +1, NO negative marking' },
    totalQuestions: 50,
    subjectDistribution: { Physics: 15, Chemistry: 15, Mathematics: 20 },
    description: 'Exact State CET pattern: Zero negative marking, heavier Mathematics weightage (+2 marks/Q). Practice maximizing attempts!',
    tag: 'State CET'
  },
  {
    id: 'physics-master-mock',
    title: 'Physics Mastery: Mechanics & Electromagnetism',
    hindiTitle: 'भौतिक विज्ञान महारत: यांत्रिकी और विद्युत चुंबकत्व',
    exam: 'JEE Main / Adv',
    durationMinutes: 45,
    markingScheme: { correct: 4, incorrect: -1, rules: '+4 for correct, -1 for incorrect' },
    totalQuestions: 20,
    subjectDistribution: { Physics: 20, Chemistry: 0, Mathematics: 0 },
    description: 'Focused subject mock test covering highest weightage physics chapters with calculus and graph based problems.',
    tag: 'Subject Test'
  },
  {
    id: 'math-calculus-mock',
    title: 'Mathematics Power Mock: Calculus & Algebra',
    hindiTitle: 'गणित पावर मॉक: कैलकुलस और बीजगणित',
    exam: 'JEE Main / Adv',
    durationMinutes: 45,
    markingScheme: { correct: 4, incorrect: -1, rules: '+4 for correct, -1 for incorrect' },
    totalQuestions: 20,
    subjectDistribution: { Physics: 0, Chemistry: 0, Mathematics: 20 },
    description: 'Deep problem-solving test across Definite Integrals, Differential Equations, Matrices, Complex Numbers and Probability.',
    tag: 'Subject Test'
  }
];

type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked_review' | 'answered_marked';

export const MockTestsPage: React.FC = () => {
  const { language, navigate, setBreadcrumbs, addToErrorNotebook, recordTestAttempt } = useApp();

  // Test state
  const [activeTest, setActiveTest] = useState<MockPreset | null>(null);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, any>>({});
  const [questionStatuses, setQuestionStatuses] = useState<Record<number, QuestionStatus>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<SubjectName>('Physics');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [filterTag, setFilterTag] = useState<string>('All');

  // Solution review state
  const [reviewFilter, setReviewFilter] = useState<'All' | 'Correct' | 'Incorrect' | 'Unattempted'>('All');
  const [errorModalQuestion, setErrorModalQuestion] = useState<{ question: Question; userAnswer: any } | null>(null);
  const [mistakeType, setMistakeType] = useState<any>('Concept Gap');
  const [mistakeNote, setMistakeNote] = useState<string>('');
  const [errorAddedIds, setErrorAddedIds] = useState<Set<string>>(new Set());

  const timerRef = useRef<any>(null);

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Mock Tests & CBT Simulation', hindiLabel: 'मॉक टेस्ट और सीबीटी सिमुलेशन', route: 'mocks' }
    ]);
  }, [setBreadcrumbs]);

  // Timer countdown
  useEffect(() => {
    if (activeTest && !isTestSubmitted && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [activeTest, isTestSubmitted, timeRemaining]);

  const startMockTest = (preset: MockPreset) => {
    // Generate questions according to distribution
    const physPool = QUESTIONS_DATABASE.filter(q => q.subject === 'Physics').sort(() => 0.5 - Math.random());
    const chemPool = QUESTIONS_DATABASE.filter(q => q.subject === 'Chemistry').sort(() => 0.5 - Math.random());
    const mathPool = QUESTIONS_DATABASE.filter(q => q.subject === 'Mathematics').sort(() => 0.5 - Math.random());

    const selectedPhys = physPool.slice(0, preset.subjectDistribution.Physics);
    const selectedChem = chemPool.slice(0, preset.subjectDistribution.Chemistry);
    const selectedMath = mathPool.slice(0, preset.subjectDistribution.Mathematics);

    const fullTestPool = [...selectedPhys, ...selectedChem, ...selectedMath];

    setTestQuestions(fullTestPool);
    setActiveTest(preset);
    setCurrentIndex(0);
    setSelectedAnswers({});
    
    // Initial status: question 0 is not_answered (visited), others not_visited
    const initialStatus: Record<number, QuestionStatus> = {};
    fullTestPool.forEach((_, idx) => {
      initialStatus[idx] = idx === 0 ? 'not_answered' : 'not_visited';
    });
    setQuestionStatuses(initialStatus);

    setTimeRemaining(preset.durationMinutes * 60);
    setIsTestSubmitted(false);
    setShowSubmitModal(false);
    setErrorAddedIds(new Set());
    
    // Default subject tab to first question's subject
    if (fullTestPool.length > 0) {
      setSelectedSubjectTab(fullTestPool[0].subject);
    }

    window.scrollTo(0, 0);
  };

  const handleSelectAnswer = (ans: any) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: ans
    }));
  };

  const handleSaveAndNext = () => {
    const hasAnswer = selectedAnswers[currentIndex] !== undefined && selectedAnswers[currentIndex] !== '';
    const currentStatus = questionStatuses[currentIndex];
    
    setQuestionStatuses(prev => ({
      ...prev,
      [currentIndex]: hasAnswer ? 'answered' : (currentStatus === 'marked_review' ? 'marked_review' : 'not_answered')
    }));

    if (currentIndex < testQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      // Mark next as visited if was not_visited
      if (questionStatuses[nextIdx] === 'not_visited') {
        setQuestionStatuses(prev => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
      setSelectedSubjectTab(testQuestions[nextIdx].subject);
    }
  };

  const handleMarkForReviewAndNext = () => {
    const hasAnswer = selectedAnswers[currentIndex] !== undefined && selectedAnswers[currentIndex] !== '';
    setQuestionStatuses(prev => ({
      ...prev,
      [currentIndex]: hasAnswer ? 'answered_marked' : 'marked_review'
    }));

    if (currentIndex < testQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (questionStatuses[nextIdx] === 'not_visited') {
        setQuestionStatuses(prev => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
      setSelectedSubjectTab(testQuestions[nextIdx].subject);
    }
  };

  const handleClearResponse = () => {
    setSelectedAnswers(prev => {
      const updated = { ...prev };
      delete updated[currentIndex];
      return updated;
    });
    setQuestionStatuses(prev => ({
      ...prev,
      [currentIndex]: 'not_answered'
    }));
  };

  const jumpToQuestion = (idx: number) => {
    // If previous was unvisited, mark not_answered
    if (questionStatuses[currentIndex] === 'not_visited') {
      setQuestionStatuses(prev => ({ ...prev, [currentIndex]: 'not_answered' }));
    }
    setCurrentIndex(idx);
    if (questionStatuses[idx] === 'not_visited') {
      setQuestionStatuses(prev => ({ ...prev, [idx]: 'not_answered' }));
    }
    setSelectedSubjectTab(testQuestions[idx].subject);
  };

  const handleSubmitTest = () => {
    clearInterval(timerRef.current);
    setIsTestSubmitted(true);
    setShowSubmitModal(false);

    // Calculate score
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const subjectScores: Record<SubjectName, { score: number; maxScore: number; correct: number; incorrect: number }> = {
      Physics: { score: 0, maxScore: 0, correct: 0, incorrect: 0 },
      Chemistry: { score: 0, maxScore: 0, correct: 0, incorrect: 0 },
      Mathematics: { score: 0, maxScore: 0, correct: 0, incorrect: 0 }
    };

    const mistakesList: any[] = [];

    testQuestions.forEach((q, idx) => {
      const userAns = selectedAnswers[idx];
      const isCorrect = userAns !== undefined && userAns !== '' && (
        String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
      );

      const markCorrect = activeTest?.markingScheme.correct ?? 4;
      const markIncorrect = activeTest?.markingScheme.incorrect ?? -1;

      // Update maxScore
      subjectScores[q.subject].maxScore += markCorrect;

      if (userAns === undefined || userAns === '') {
        unattemptedCount++;
      } else if (isCorrect) {
        correctCount++;
        totalScore += markCorrect;
        subjectScores[q.subject].score += markCorrect;
        subjectScores[q.subject].correct++;
      } else {
        incorrectCount++;
        totalScore += markIncorrect;
        subjectScores[q.subject].score += markIncorrect;
        subjectScores[q.subject].incorrect++;

        mistakesList.push({
          questionId: q.id,
          subject: q.subject,
          chapter: q.chapter,
          userAnswer: userAns,
          correctAnswer: q.answer,
          mistakeType: 'Concept Gap'
        });
      }
    });

    const maxScore = testQuestions.length * (activeTest?.markingScheme.correct ?? 4);
    const attemptedCount = correctCount + incorrectCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const timeSpent = activeTest ? (activeTest.durationMinutes * 60) - timeRemaining : 0;

    const attemptRecord: UserTestAttempt = {
      testId: activeTest?.id || 'mock-test',
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      durationSeconds: timeSpent,
      totalScore,
      maxScore,
      accuracy,
      totalAttempted: attemptedCount,
      correctCount,
      incorrectCount,
      unattemptedCount,
      subjectScores,
      mistakes: mistakesList
    };

    recordTestAttempt(attemptRecord);

    if (accuracy >= 50 || totalScore > 0) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    window.scrollTo(0, 0);
  };

  const handleSaveToErrorNotebook = () => {
    if (!errorModalQuestion) return;
    addToErrorNotebook({
      questionId: errorModalQuestion.question.id,
      question: errorModalQuestion.question,
      userAnswer: errorModalQuestion.userAnswer,
      correctAnswer: errorModalQuestion.question.answer,
      mistakeType,
      dateAdded: new Date().toISOString(),
      notes: mistakeNote,
      resolved: false
    });
    setErrorAddedIds(prev => new Set(prev).add(errorModalQuestion.question.id));
    setErrorModalQuestion(null);
    setMistakeNote('');
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullScreen(false);
      }
    }
  };

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Status counters for current test
  const answeredCount = Object.values(questionStatuses).filter(s => s === 'answered' || s === 'answered_marked').length;
  const notAnsweredCount = Object.values(questionStatuses).filter(s => s === 'not_answered').length;
  const markedReviewCount = Object.values(questionStatuses).filter(s => s === 'marked_review' || s === 'answered_marked').length;
  const notVisitedCount = Object.values(questionStatuses).filter(s => s === 'not_visited').length;

  const currentQ = testQuestions[currentIndex];

  // -------------------------------------------------------------
  // VIEW 1: POST-TEST RESULTS & SOLUTION ANALYSIS
  // -------------------------------------------------------------
  if (activeTest && isTestSubmitted) {
    const markCorrect = activeTest.markingScheme.correct;
    const markIncorrect = activeTest.markingScheme.incorrect;
    const maxScore = testQuestions.length * markCorrect;
    
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    testQuestions.forEach((q, idx) => {
      const userAns = selectedAnswers[idx];
      const isCorrect = userAns !== undefined && userAns !== '' && (
        String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
      );
      if (userAns === undefined || userAns === '') {
        unattemptedCount++;
      } else if (isCorrect) {
        correctCount++;
        totalScore += markCorrect;
      } else {
        incorrectCount++;
        totalScore += markIncorrect;
      }
    });

    const attemptedCount = correctCount + incorrectCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const timeSpent = (activeTest.durationMinutes * 60) - timeRemaining;

    // Filter questions for solution review
    const filteredReviewQuestions = testQuestions.map((q, idx) => ({ q, idx })).filter(({ q, idx }) => {
      const userAns = selectedAnswers[idx];
      const isCorrect = userAns !== undefined && userAns !== '' && (
        String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
      );
      if (reviewFilter === 'Correct') return isCorrect;
      if (reviewFilter === 'Incorrect') return userAns !== undefined && userAns !== '' && !isCorrect;
      if (reviewFilter === 'Unattempted') return userAns === undefined || userAns === '';
      return true;
    });

    return (
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
        {/* Top Header Card */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-800 rounded-3xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" /> Performance Scorecard & Analysis
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">{activeTest.title}</h1>
              <p className="text-emerald-100 text-sm mt-1">
                Completed on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} • {formatTimer(timeSpent)} time spent
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => startMockTest(activeTest)}
                className="px-5 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Retake Test
              </button>
              <button
                onClick={() => { setActiveTest(null); setIsTestSubmitted(false); }}
                className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur text-white rounded-xl font-bold text-sm transition-all"
              >
                All Mock Tests
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 pt-8 border-t border-white/20">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Total Score</span>
              <div className="text-3xl font-black mt-1 text-white">{totalScore} <span className="text-xs font-normal text-emerald-200">/ {maxScore}</span></div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Accuracy</span>
              <div className="text-3xl font-black mt-1 text-white">{accuracy}%</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Correct</span>
              <div className="text-3xl font-black mt-1 text-emerald-300">+{correctCount}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Incorrect</span>
              <div className="text-3xl font-black mt-1 text-rose-300">-{incorrectCount}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Unattempted</span>
              <div className="text-3xl font-black mt-1 text-amber-200">{unattemptedCount}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
              <span className="text-xs uppercase text-emerald-200 font-semibold">Avg Pace</span>
              <div className="text-3xl font-black mt-1 text-white">{attemptedCount > 0 ? Math.round(timeSpent / attemptedCount) : 0}s</div>
            </div>
          </div>
        </div>

        {/* Subject-Wise Diagnostics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['Physics', 'Chemistry', 'Mathematics'] as SubjectName[]).map(sub => {
            const subQuestions = testQuestions.filter(q => q.subject === sub);
            if (subQuestions.length === 0) return null;

            let subScore = 0;
            let subCorrect = 0;
            let subIncorrect = 0;

            testQuestions.forEach((q, idx) => {
              if (q.subject !== sub) return;
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns !== undefined && userAns !== '' && (
                String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
              );
              if (isCorrect) {
                subCorrect++;
                subScore += markCorrect;
              } else if (userAns !== undefined && userAns !== '') {
                subIncorrect++;
                subScore += markIncorrect;
              }
            });

            const subMax = subQuestions.length * markCorrect;
            const subAttempted = subCorrect + subIncorrect;
            const subAcc = subAttempted > 0 ? Math.round((subCorrect / subAttempted) * 100) : 0;

            const colorClass = sub === 'Physics' ? 'border-sky-500 text-sky-700 dark:text-sky-400' :
              sub === 'Chemistry' ? 'border-emerald-500 text-emerald-700 dark:text-emerald-400' :
              'border-amber-500 text-amber-700 dark:text-amber-400';

            return (
              <div key={sub} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{sub}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClass}`}>
                    {subScore} / {subMax} Marks
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Questions:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{subQuestions.length}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Correct / Incorrect:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      <span className="text-emerald-600 font-bold">{subCorrect}</span> / <span className="text-rose-600 font-bold">{subIncorrect}</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Accuracy:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{subAcc}%</span>
                  </div>
                  {/* Visual progress bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 mt-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-2.5 rounded-full"
                      style={{ width: `${Math.max(0, Math.min(100, (subScore / (subMax || 1)) * 100))}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout: Error Notebook Integration */}
        <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Systematic Error Notebook Analysis
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-0.5">
                Every mistake logged here enters your Error Notebook for classified revision (Formula gap, calculation error, silly mistake, or misread).
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('errors')}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition-all shadow-sm shrink-0"
          >
            Open Error Notebook
          </button>
        </div>

        {/* Detailed Solutions Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Detailed Solutions & Answer Explanations
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Showing {filteredReviewQuestions.length} of {testQuestions.length} questions
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              {(['All', 'Correct', 'Incorrect', 'Unattempted'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setReviewFilter(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    reviewFilter === tab
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredReviewQuestions.map(({ q, idx }) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns !== undefined && userAns !== '' && (
                String(userAns).trim().toLowerCase() === String(q.answer).trim().toLowerCase()
              );
              const isUnattempted = userAns === undefined || userAns === '';
              const isAddedToErrors = errorAddedIds.has(q.id);

              return (
                <div
                  key={q.id}
                  className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border shadow-sm transition-all ${
                    isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60'
                      : isUnattempted
                      ? 'border-slate-200 dark:border-slate-700'
                      : 'border-rose-200 dark:border-rose-900/60'
                  }`}
                >
                  {/* Question header info */}
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm px-2.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
                        Q{idx + 1}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 rounded-md">
                        {q.subject} • {q.chapter}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md">
                        {q.exam}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+{markCorrect})
                        </span>
                      ) : isUnattempted ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full">
                          <HelpCircle className="w-3.5 h-3.5" /> Unattempted (0)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-full">
                          <AlertCircle className="w-3.5 h-3.5" /> Incorrect ({markIncorrect})
                        </span>
                      )}

                      {!isCorrect && (
                        <button
                          disabled={isAddedToErrors}
                          onClick={() => setErrorModalQuestion({ question: q, userAnswer: userAns })}
                          className={`text-xs font-semibold px-3 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                            isAddedToErrors
                              ? 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-slate-700 dark:border-slate-600'
                              : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:hover:bg-indigo-900 dark:text-indigo-300 dark:border-indigo-800'
                          }`}
                        >
                          <BookMarked className="w-3.5 h-3.5" />
                          {isAddedToErrors ? 'Saved in Errors' : 'Add to Errors'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Question content */}
                  <div className="text-slate-800 dark:text-slate-100 leading-relaxed font-medium mb-5">
                    <FormattedContent content={language === 'hi' && q.hindiQuestion ? q.hindiQuestion : q.question} />
                  </div>

                  {/* Options display */}
                  {q.type === 'mcq' && q.options && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === Number(q.answer);
                        const isUserChoice = userAns !== undefined && Number(userAns) === optIdx;

                        let cardStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50';
                        if (isThisCorrect) {
                          cardStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-semibold';
                        } else if (isUserChoice && !isCorrect) {
                          cardStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 font-semibold';
                        }

                        return (
                          <div key={optIdx} className={`p-3.5 rounded-xl border flex items-start gap-3 text-sm ${cardStyle}`}>
                            <span className="font-bold shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs bg-black/5 dark:bg-white/10">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <div className="flex-1">
                              <FormattedContent content={opt} />
                            </div>
                            {isThisCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                            {isUserChoice && !isCorrect && <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Numerical answer display */}
                  {q.type === 'numerical' && (
                    <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-wrap gap-6 text-sm">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase block">Your Answer</span>
                        <span className={`font-bold text-base ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {userAns !== undefined && userAns !== '' ? String(userAns) : 'None (Unattempted)'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase block">Official Correct Value</span>
                        <span className="font-bold text-base text-emerald-600">{String(q.answer)}</span>
                      </div>
                    </div>
                  )}

                  {/* Step-by-step Solution */}
                  <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700/60">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Detailed Explanation & Concept
                    </h5>
                    <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <FormattedContent content={language === 'hi' && q.hindiExplanation ? q.hindiExplanation : q.explanation} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal: Save to Error Notebook with Mistake Reason */}
        {errorModalQuestion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-indigo-600" /> Log Error for Revision
                </h3>
                <button
                  onClick={() => setErrorModalQuestion(null)}
                  className="text-slate-400 hover:text-slate-600 text-xl font-bold"
                >
                  &times;
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                  Primary Root Cause of Error:
                </label>
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
                  ].map(reason => (
                    <button
                      key={reason}
                      onClick={() => setMistakeType(reason)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                        mistakeType === reason
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:border-indigo-500 dark:text-indigo-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                  Self-Reflection / What to remember next time:
                </label>
                <textarea
                  value={mistakeNote}
                  onChange={e => setMistakeNote(e.target.value)}
                  placeholder="e.g. Remember to check signs in definite integral limits, or remember standard reagent for anti-Markovnikov..."
                  rows={3}
                  className="w-full text-sm p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setErrorModalQuestion(null)}
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-sm font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveToErrorNotebook}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
                >
                  Save to Error Notebook
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: ACTIVE CBT SIMULATION RUNNER
  // -------------------------------------------------------------
  if (activeTest && currentQ) {
    const isAnswered = selectedAnswers[currentIndex] !== undefined && selectedAnswers[currentIndex] !== '';

    return (
      <div className={`min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
        {/* Top CBT Navigation Bar */}
        <header className="bg-slate-900 text-white px-4 py-3 shadow-md border-b border-slate-800 shrink-0">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-sm tracking-wide text-indigo-400 uppercase">
                {activeTest.exam} CBT Portal
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="text-sm font-medium text-slate-200 truncate max-w-[200px] md:max-w-md">
                {activeTest.title}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-base font-extrabold shadow-inner border ${
                timeRemaining <= 300
                  ? 'bg-rose-950/80 text-rose-300 border-rose-700 animate-pulse'
                  : 'bg-slate-800 text-emerald-400 border-slate-700'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTimer(timeRemaining)}</span>
              </div>

              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullScreen}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Toggle Fullscreen"
              >
                {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Submit Test Trigger */}
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Submit Test
              </button>
            </div>
          </div>
        </header>

        {/* Section Tabs Bar */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2 shrink-0">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto">
              {(['Physics', 'Chemistry', 'Mathematics'] as SubjectName[]).map(sub => {
                const subCount = testQuestions.filter(q => q.subject === sub).length;
                if (subCount === 0) return null;
                const isSelected = selectedSubjectTab === sub;

                return (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedSubjectTab(sub);
                      // jump to first question of this subject
                      const firstIdx = testQuestions.findIndex(q => q.subject === sub);
                      if (firstIdx !== -1) jumpToQuestion(firstIdx);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{sub}</span>
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                      isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200 dark:bg-slate-700'
                    }`}>
                      {subCount}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 hidden md:block">
              Marking: <span className="font-semibold text-emerald-600 dark:text-emerald-400">+{activeTest.markingScheme.correct}</span> / <span className="font-semibold text-rose-600 dark:text-rose-400">{activeTest.markingScheme.incorrect}</span>
            </div>
          </div>
        </div>

        {/* Main CBT Workspace Layout */}
        <div className="max-w-7xl mx-auto w-full flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">
          {/* Left Column: Question & Answer Area (8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            {/* Question Top Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/40">
              <div className="flex items-center gap-3">
                <span className="font-black text-lg text-slate-800 dark:text-slate-100">
                  Question {currentIndex + 1}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400">
                  {currentQ.subject}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {currentQ.chapter}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Type: <strong className="text-slate-700 dark:text-slate-200 uppercase">{currentQ.type}</strong>
                </span>
              </div>
            </div>

            {/* Question Body */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              <div className="text-base text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                <FormattedContent content={language === 'hi' && currentQ.hindiQuestion ? currentQ.hindiQuestion : currentQ.question} />
              </div>

              {/* MCQ Options */}
              {currentQ.type === 'mcq' && currentQ.options && (
                <div className="space-y-3 pt-2">
                  {currentQ.options.map((option, oIdx) => {
                    const isSelected = selectedAnswers[currentIndex] !== undefined && Number(selectedAnswers[currentIndex]) === oIdx;
                    return (
                      <label
                        key={oIdx}
                        onClick={() => handleSelectAnswer(oIdx)}
                        className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </div>
                        <div className="flex-1 text-sm pt-0.5">
                          <FormattedContent content={option} />
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}

              {/* Numerical Input */}
              {currentQ.type === 'numerical' && (
                <div className="pt-4 max-w-sm space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-400">
                    Enter Numerical Value (Integer or Decimal):
                  </label>
                  <input
                    type="text"
                    value={selectedAnswers[currentIndex] || ''}
                    onChange={e => handleSelectAnswer(e.target.value)}
                    placeholder="e.g. 24 or 3.14"
                    className="w-full px-4 py-3 text-lg font-mono font-bold rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-indigo-600 focus:outline-none"
                  />
                  <p className="text-xs text-slate-500">
                    Enter only numerical characters, minus sign, or decimal point.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Action Control Bar */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearResponse}
                  disabled={!isAnswered}
                  className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-rose-600 disabled:opacity-40 rounded-xl transition-all"
                >
                  Clear Response
                </button>
                <button
                  onClick={handleMarkForReviewAndNext}
                  className="px-4 py-2 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-bold transition-all border border-purple-200 dark:border-purple-800"
                >
                  Mark for Review & Next
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentIndex > 0) jumpToQuestion(currentIndex - 1);
                  }}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold disabled:opacity-40 transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={handleSaveAndNext}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Question Palette & Status Legend (4 cols) */}
          <div className="lg:col-span-4 flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-5">
            {/* Status Legend */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Question Status Legend
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {answeredCount}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-rose-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {notAnsweredCount}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-[10px]">
                    {markedReviewCount}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 font-bold flex items-center justify-center text-[10px]">
                    {notVisitedCount}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">Not Visited</span>
                </div>
              </div>
            </div>

            {/* Question Numbers Grid */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Question Palette ({selectedSubjectTab})
                </h4>
                <span className="text-[11px] text-slate-400">
                  {testQuestions.filter(q => q.subject === selectedSubjectTab).length} Qs
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto p-1">
                {testQuestions.map((q, idx) => {
                  if (q.subject !== selectedSubjectTab) return null;
                  const status = questionStatuses[idx] || 'not_visited';
                  const isCurrent = currentIndex === idx;

                  let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
                  if (status === 'answered') {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-700 shadow-sm';
                  } else if (status === 'not_answered') {
                    btnStyle = 'bg-rose-600 text-white border-rose-700 shadow-sm';
                  } else if (status === 'marked_review') {
                    btnStyle = 'bg-purple-600 text-white border-purple-700 shadow-sm';
                  } else if (status === 'answered_marked') {
                    btnStyle = 'bg-purple-700 text-white border-emerald-400 border-2';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => jumpToQuestion(idx)}
                      className={`h-9 rounded-xl font-bold text-xs flex items-center justify-center transition-all border ${btnStyle} ${
                        isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Candidate Simulation Card */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <div className="font-bold text-slate-800 dark:text-slate-200">Candidate: Engineering Aspirant</div>
              <div>Roll No: 2026-EEM-{Math.floor(1000 + Math.random() * 9000)}</div>
              <div>Paper: {activeTest.exam} Paper 1 (B.Tech)</div>
            </div>
          </div>
        </div>

        {/* Modal: Submit Test Confirmation */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 mx-auto flex items-center justify-center">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  Ready to Submit Test?
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Review your question status summary below before final submission.
                </p>
              </div>

              {/* Summary Table */}
              <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                <div className="flex justify-between py-2 text-slate-700 dark:text-slate-300">
                  <span>Total Questions:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{testQuestions.length}</span>
                </div>
                <div className="flex justify-between py-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>Answered:</span>
                  <span>{answeredCount}</span>
                </div>
                <div className="flex justify-between py-2 text-rose-600 dark:text-rose-400 font-semibold">
                  <span>Not Answered:</span>
                  <span>{notAnsweredCount}</span>
                </div>
                <div className="flex justify-between py-2 text-purple-600 dark:text-purple-400 font-semibold">
                  <span>Marked for Review:</span>
                  <span>{markedReviewCount}</span>
                </div>
                <div className="flex justify-between py-2 text-slate-500">
                  <span>Not Visited:</span>
                  <span>{notVisitedCount}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 py-3 text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl font-bold text-sm transition-all"
                >
                  Resume Test
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  Yes, Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: MOCK TEST CATALOG & PRESET SELECTION
  // -------------------------------------------------------------
  const filteredPresets = PRESET_MOCKS.filter(p => {
    if (filterTag === 'All') return true;
    return p.tag === filterTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400" /> NTA & State CET Computer-Based Test Simulator
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'वास्तविक सीबीटी मॉक टेस्ट सिमुलेटर' : 'Real CBT Mock Test Simulator'}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {language === 'hi'
              ? 'वास्तविक परीक्षा समय, नकारात्मक अंकन, प्रश्न पैलेट और विस्तृत विश्लेषण के साथ अभ्यास करें। प्रत्येक गलती को स्वचालित रूप से त्रुटि नोटबुक में सहेजें।'
              : 'Simulate high-stakes engineering entrances with official countdown timers, multi-subject palette, exact marking schemes, and instantaneous analytical breakdowns.'}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Authentic NTA Interface
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> BITSAT, MHT-CET & WBJEE Patterns
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrated Error Categorizer
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex flex-wrap gap-2">
          {(['All', 'Full Mock', 'Speed Drill', 'State CET', 'Subject Test'] as const).map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterTag === tag
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" />
          <span>{filteredPresets.length} CBT Mocks Available</span>
        </div>
      </div>

      {/* Preset Mock Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPresets.map(preset => (
          <div
            key={preset.id}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  {preset.exam}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {preset.tag}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-snug">
                  {language === 'hi' ? preset.hindiTitle : preset.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Questions</span>
                  <span className="font-black text-sm text-slate-800 dark:text-slate-200">{preset.totalQuestions}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                  <span className="font-black text-sm text-slate-800 dark:text-slate-200">{preset.durationMinutes}m</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Marking</span>
                  <span className="font-black text-sm text-emerald-600 dark:text-emerald-400">+{preset.markingScheme.correct}/{preset.markingScheme.incorrect}</span>
                </div>
              </div>

              {/* Subject Breakdown */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ListOrdered className="w-3.5 h-3.5" />
                <span>P: {preset.subjectDistribution.Physics} • C: {preset.subjectDistribution.Chemistry} • M: {preset.subjectDistribution.Mathematics}</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => startMockTest(preset)}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Launch CBT Simulation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
