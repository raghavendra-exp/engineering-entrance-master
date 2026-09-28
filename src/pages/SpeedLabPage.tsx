import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Gauge,
  Zap,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Flame,
  Award,
  BookOpen,
  Calculator,
  ArrowRight
} from 'lucide-react';

interface DrillQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export const SpeedLabPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [activeTab, setActiveTab] = useState<'trainer' | 'squares' | 'cubes' | 'fractions' | 'constants' | 'conversions'>('trainer');

  // Speed Drill Game State
  const [drillActive, setDrillActive] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(60);
  const [currentQuestion, setCurrentQuestion] = useState<DrillQuestion | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return Number(localStorage.getItem('eem_speed_highscore') || '0');
  });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Speed Lab & Calculation Trainer', hindiLabel: 'गति और गणना प्रशिक्षक', route: 'speed-lab' }
    ]);
  }, [setBreadcrumbs]);

  // Generate random drill question
  const generateQuestion = (): DrillQuestion => {
    const types = ['square', 'cube', 'fraction', 'conversion', 'constant'];
    const selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'square') {
      const num = Math.floor(Math.random() * 38) + 12; // 12 to 50
      const correct = num * num;
      const wrong1 = correct + (Math.random() > 0.5 ? 10 : -10);
      const wrong2 = correct + (Math.random() > 0.5 ? 20 : -20);
      const wrong3 = (num + 1) * (num - 1);
      const options = [correct.toString(), wrong1.toString(), wrong2.toString(), wrong3.toString()].sort(() => 0.5 - Math.random());
      return {
        prompt: `What is the value of ${num}²?`,
        options,
        correctIndex: options.indexOf(correct.toString()),
        category: 'Squares'
      };
    } else if (selectedType === 'cube') {
      const num = Math.floor(Math.random() * 16) + 6; // 6 to 21
      const correct = num * num * num;
      const wrong1 = correct + 100;
      const wrong2 = correct - 50;
      const wrong3 = correct + 20;
      const options = [correct.toString(), wrong1.toString(), wrong2.toString(), wrong3.toString()].sort(() => 0.5 - Math.random());
      return {
        prompt: `What is the value of ${num}³?`,
        options,
        correctIndex: options.indexOf(correct.toString()),
        category: 'Cubes'
      };
    } else if (selectedType === 'fraction') {
      const fracs = [
        { f: '1/4', v: '0.25' },
        { f: '1/5', v: '0.20' },
        { f: '1/6', v: '0.1667' },
        { f: '1/7', v: '0.1428' },
        { f: '1/8', v: '0.125' },
        { f: '1/9', v: '0.1111' },
        { f: '1/12', v: '0.0833' },
        { f: '1/16', v: '0.0625' },
        { f: '3/8', v: '0.375' },
        { f: '5/8', v: '0.625' }
      ];
      const picked = fracs[Math.floor(Math.random() * fracs.length)];
      const wrongs = ['0.145', '0.075', '0.185', '0.225', '0.095', '0.315'].filter(w => w !== picked.v).slice(0, 3);
      const options = [picked.v, ...wrongs].sort(() => 0.5 - Math.random());
      return {
        prompt: `Convert fraction ${picked.f} into decimal:`,
        options,
        correctIndex: options.indexOf(picked.v),
        category: 'Fractions'
      };
    } else if (selectedType === 'constant') {
      const consts = [
        { p: 'Planck\'s Constant (h)', a: '6.63 × 10⁻³⁴ J·s', w: ['6.63 × 10⁻³¹ J·s', '1.05 × 10⁻³⁴ J·s', '8.85 × 10⁻¹² J·s'] },
        { p: 'Speed of Light in Vacuum (c)', a: '3 × 10⁸ m/s', w: ['3 × 10⁷ m/s', '3 × 10¹⁰ m/s', '3 × 10⁶ m/s'] },
        { p: 'Universal Gas Constant (R)', a: '8.314 J/(mol·K)', w: ['0.0821 J/(mol·K)', '1.987 J/(mol·K)', '9.81 J/(mol·K)'] },
        { p: 'Permittivity of Free Space (ε₀)', a: '8.85 × 10⁻¹² F/m', w: ['4π × 10⁻⁷ F/m', '9 × 10⁹ F/m', '1.6 × 10⁻¹⁹ F/m'] },
        { p: 'Avogadro’s Number (N_A)', a: '6.022 × 10²³ mol⁻¹', w: ['6.022 × 10²² mol⁻¹', '6.022 × 10²⁴ mol⁻¹', '1.38 × 10⁻²³ mol⁻¹'] }
      ];
      const item = consts[Math.floor(Math.random() * consts.length)];
      const options = [item.a, ...item.w].sort(() => 0.5 - Math.random());
      return {
        prompt: `Identify correct value for ${item.p}:`,
        options,
        correctIndex: options.indexOf(item.a),
        category: 'Constants'
      };
    } else {
      const convs = [
        { p: '1 electron-volt (eV) equals:', a: '1.6 × 10⁻¹⁹ Joules', w: ['1.6 × 10⁻¹⁶ Joules', '9.1 × 10⁻³¹ Joules', '4.184 Joules'] },
        { p: '1 calorie (cal) equals approximately:', a: '4.184 Joules', w: ['2.14 Joules', '10⁵ Joules', '1.6 × 10⁻¹⁹ Joules'] },
        { p: '1 atmospheric pressure (1 atm) in Pascal is:', a: '1.013 × 10⁵ Pa', w: ['10⁶ Pa', '10⁴ Pa', '1.013 × 10³ Pa'] },
        { p: '1 Angstrom (1 Å) in meters is:', a: '10⁻¹⁰ m', w: ['10⁻⁹ m', '10⁻¹² m', '10⁻¹⁵ m'] }
      ];
      const item = convs[Math.floor(Math.random() * convs.length)];
      const options = [item.a, ...item.w].sort(() => 0.5 - Math.random());
      return {
        prompt: item.p,
        options,
        correctIndex: options.indexOf(item.a),
        category: 'Conversions'
      };
    }
  };

  const startDrill = () => {
    setDrillActive(true);
    setSecondsLeft(60);
    setScore(0);
    setStreak(0);
    setFeedback(null);
    setCurrentQuestion(generateQuestion());
  };

  // Timer
  useEffect(() => {
    let timer: any = null;
    if (drillActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setDrillActive(false);
            if (score > highScore) {
              setHighScore(score);
              localStorage.setItem('eem_speed_highscore', score.toString());
              confetti({ particleCount: 100, spread: 80 });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [drillActive, secondsLeft, score, highScore]);

  const handleSelectOption = (idx: number) => {
    if (!currentQuestion) return;
    if (idx === currentQuestion.correctIndex) {
      setFeedback('correct');
      setScore(s => s + 10 + streak * 2);
      setStreak(st => st + 1);
    } else {
      setFeedback('wrong');
      setStreak(0);
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentQuestion(generateQuestion());
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-700 to-rose-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-100 border border-white/20">
            <Gauge className="w-3.5 h-3.5 text-amber-200" /> Mental Speed & Calculation Accelerator
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'स्पीड लैब और गणना प्रशिक्षक' : 'Speed Lab & Mental Calculation Trainer'}
          </h1>
          <p className="text-amber-100 text-sm leading-relaxed">
            {language === 'hi'
              ? 'इंजीनियरिंग प्रवेश परीक्षाओं में गति निर्णायक होती है। 1 से 50 के वर्ग, 1 से 25 के घन, अंश-दशमलव मान और भौतिक स्थिरांकों में पारंगत बनें।'
              : 'Speed separates 99th percentile aspirants from the rest. Master rapid square roots, fractional approximations, SI conversions, and physical constants with timed drills.'}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-3 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap gap-2">
        {[
          { id: 'trainer', label: '60s Rapid Speed Drill', icon: Zap },
          { id: 'squares', label: 'Squares (1-50)', icon: Calculator },
          { id: 'cubes', label: 'Cubes (1-25)', icon: Calculator },
          { id: 'fractions', label: 'Fraction Equivalents', icon: BookOpen },
          { id: 'constants', label: 'Universal Constants', icon: Gauge },
          { id: 'conversions', label: 'Unit Conversions', icon: Flame }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* VIEW: 60-SECOND RAPID SPEED DRILL */}
      {activeTab === 'trainer' && (
        <div className="space-y-6">
          {!drillActive && secondsLeft === 60 ? (
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 mx-auto flex items-center justify-center">
                <Flame className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                  Ready for 60-Second Rapid Fire?
                </h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Solve as many squares, cubes, decimal fractions, and constant values as possible in 60 seconds. High streak multiplies points!
                </p>
              </div>

              {highScore > 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold text-sm border border-amber-200 dark:border-amber-800">
                  <Award className="w-4 h-4" /> Personal Best: {highScore} Points
                </div>
              )}

              <div>
                <button
                  onClick={startDrill}
                  className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 mx-auto"
                >
                  <Play className="w-4 h-4" /> Start Rapid Drill
                </button>
              </div>
            </div>
          ) : !drillActive && secondsLeft === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center max-w-xl mx-auto space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Drill Completed</span>
                <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  Final Score: {score} Pts
                </h3>
                <p className="text-slate-500 text-xs mt-2">
                  {score >= highScore ? '🎉 New Record! Phenomenal mental agility!' : `Good run! High score to beat is ${highScore} pts.`}
                </p>
              </div>

              <button
                onClick={startDrill}
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" /> Play Again
              </button>
            </div>
          ) : currentQuestion ? (
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-md max-w-2xl mx-auto space-y-6 animate-fadeIn">
              {/* Game Status Bar */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 font-mono text-lg font-black text-amber-600">
                  <Clock className="w-5 h-5" />
                  <span>{secondsLeft}s</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Streak: <strong className="text-amber-500 font-extrabold">{streak}🔥</strong></span>
                  <span className="text-slate-900 dark:text-white">Score: <strong className="text-emerald-500 font-black">{score}</strong></span>
                </div>
              </div>

              {/* Question */}
              <div className="text-center py-4 space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700">
                  {currentQuestion.category}
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 pt-2">
                  {currentQuestion.prompt}
                </h2>
              </div>

              {/* Options 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {currentQuestion.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className="p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-slate-900 dark:text-slate-100 font-bold text-base transition-all active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Feedback flash */}
              {feedback && (
                <div className={`text-center text-xs font-bold py-1 ${
                  feedback === 'correct' ? 'text-emerald-500' : 'text-rose-500'
                }`}>
                  {feedback === 'correct' ? '✓ Correct! +Points' : '✗ Incorrect! Streak Reset'}
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}

      {/* VIEW: SQUARES REFERENCE (1-50) */}
      {activeTab === 'squares' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
            Essential Squares of Numbers (1 to 50)
          </h3>
          <p className="text-xs text-slate-500">
            Memorize squares up to 35 for instantaneous kinetic energy ($1/2 mv^2$), power, and vector magnitude calculations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 pt-2">
            {Array.from({ length: 50 }, (_, i) => i + 1).map(n => (
              <div key={n} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 font-mono block">{n}² =</span>
                <span className="text-sm font-black text-amber-600 dark:text-amber-400">{n * n}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CUBES REFERENCE (1-25) */}
      {activeTab === 'cubes' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
            Cubes of Numbers (1 to 25)
          </h3>
          <p className="text-xs text-slate-500">
            Critical for atomic radii calculations in solid state, Kepler's 3rd law ($T^2 \propto R^3$), and adiabatic expansion $V^\gamma$.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-3 pt-2">
            {Array.from({ length: 25 }, (_, i) => i + 1).map(n => (
              <div key={n} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                <span className="text-xs text-slate-400 font-mono block">{n}³ =</span>
                <span className="text-base font-black text-indigo-600 dark:text-indigo-400">{n * n * n}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: FRACTION DECIMAL EQUIVALENTS */}
      {activeTab === 'fractions' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
            Fraction to Decimal Equivalents & Recurring Approximations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {[
              { frac: '1/2', val: '0.5000', pct: '50%' },
              { frac: '1/3', val: '0.3333', pct: '33.33%' },
              { frac: '1/4', val: '0.2500', pct: '25%' },
              { frac: '1/5', val: '0.2000', pct: '20%' },
              { frac: '1/6', val: '0.1667', pct: '16.67%' },
              { frac: '1/7', val: '0.1428', pct: '14.28%' },
              { frac: '1/8', val: '0.1250', pct: '12.5%' },
              { frac: '1/9', val: '0.1111', pct: '11.11%' },
              { frac: '1/11', val: '0.0909', pct: '9.09%' },
              { frac: '1/12', val: '0.0833', pct: '8.33%' },
              { frac: '1/13', val: '0.0769', pct: '7.69%' },
              { frac: '1/14', val: '0.0714', pct: '7.14%' },
              { frac: '1/16', val: '0.0625', pct: '6.25%' },
              { frac: '1/17', val: '0.0588', pct: '5.88%' },
              { frac: '1/19', val: '0.0526', pct: '5.26%' }
            ].map(f => (
              <div key={f.frac} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="font-mono text-base font-black text-slate-800 dark:text-slate-100">{f.frac}</span>
                <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">{f.val}</span>
                <span className="text-xs text-slate-400">{f.pct}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: UNIVERSAL CONSTANTS */}
      {activeTab === 'constants' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
            High-Yield Physics & Chemistry Constants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {[
              { name: 'Planck Constant (h)', val: '6.626 × 10⁻³⁴ J·s', shortcut: '≈ 20/3 × 10⁻³⁴' },
              { name: 'Reduced Planck Constant (ħ = h/2π)', val: '1.054 × 10⁻³⁴ J·s', shortcut: '≈ 1.05 × 10⁻³⁴' },
              { name: 'Speed of Light (c)', val: '2.998 × 10⁸ m/s', shortcut: '≈ 3 × 10⁸ m/s' },
              { name: 'Elementary Charge (e)', val: '1.602 × 10⁻¹⁹ C', shortcut: '≈ 1.6 × 10⁻¹⁹ C' },
              { name: 'Permittivity of Free Space (ε₀)', val: '8.854 × 10⁻¹² F/m', shortcut: '1/(4πε₀) = 9 × 10⁹ N·m²/C²' },
              { name: 'Permeability of Free Space (μ₀)', val: '4π × 10⁻⁷ T·m/A', shortcut: '≈ 1.257 × 10⁻⁶' },
              { name: 'Boltzmann Constant (k_B)', val: '1.381 × 10⁻²³ J/K', shortcut: '≈ R / N_A' },
              { name: 'Universal Gas Constant (R)', val: '8.314 J/(mol·K)', shortcut: '≈ 0.0821 L·atm/(mol·K) ≈ 2 cal/(mol·K)' },
              { name: 'Avogadro Constant (N_A)', val: '6.022 × 10²³ mol⁻¹', shortcut: '≈ 6 × 10²³' },
              { name: 'Gravitational Constant (G)', val: '6.674 × 10⁻¹¹ N·m²/kg²', shortcut: '≈ 20/3 × 10⁻¹¹' },
              { name: 'Electron Mass (m_e)', val: '9.109 × 10⁻³¹ kg', shortcut: '≈ 0.511 MeV/c²' },
              { name: 'Proton Mass (m_p)', val: '1.673 × 10⁻²⁷ kg', shortcut: '≈ 1.00727 amu' }
            ].map(c => (
              <div key={c.name} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">{c.name}</span>
                <div className="font-mono font-black text-slate-900 dark:text-slate-100 text-sm">{c.val}</div>
                <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Exam shortcut: {c.shortcut}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: CONVERSIONS */}
      {activeTab === 'conversions' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">
            Crucial Entrance Unit Conversions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            {[
              { from: '1 eV', to: '1.602 × 10⁻¹⁹ Joules', context: 'Atomic Physics & Photoelectric Effect' },
              { from: '1 calorie', to: '4.184 Joules (≈ 4.2 J)', context: 'Thermodynamics & Heat Capacity' },
              { from: '1 atm', to: '1.01325 × 10⁵ Pa = 760 mm of Hg', context: 'States of Matter & Fluid Mechanics' },
              { from: '1 bar', to: '10⁵ N/m² = 10⁵ Pa', context: 'Thermodynamics' },
              { from: '1 Liter', to: '10⁻³ m³ = 1000 cm³', context: 'Ideal Gas Calculations' },
              { from: '1 Angstrom (Å)', to: '10⁻¹⁰ m = 0.1 nm = 100 pm', context: 'Bohr Radius & Crystal Lattices' },
              { from: '1 amu (u)', to: '1.6605 × 10⁻²⁷ kg ≈ 931.5 MeV/c²', context: 'Nuclear Mass Defect' },
              { from: '1 Tesla (T)', to: '10⁴ Gauss', context: 'Magnetism' }
            ].map(cv => (
              <div key={cv.from} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">{cv.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-mono font-black text-slate-900 dark:text-slate-100 text-sm">{cv.to}</span>
                </div>
                <div className="text-[11px] text-slate-500">{cv.context}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
