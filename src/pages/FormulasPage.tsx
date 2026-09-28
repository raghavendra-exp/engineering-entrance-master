import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PHYSICS_FORMULAS, MATH_FORMULAS, CHEMISTRY_REACTIONS } from '../data/formulas';
import { FormattedContent } from '../components/common/MathView';
import type { FormulaEngineItem, ChemistryReaction } from '../types';
import {
  Zap,
  Search,
  Check,
  Copy,
  AlertTriangle,
  Beaker,
  Compass,
  FileSpreadsheet
} from 'lucide-react';

export const FormulasPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [activeTab, setActiveTab] = useState<'Physics' | 'Mathematics' | 'Chemistry'>('Physics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Formula Engine & Reactions', hindiLabel: 'सूत्र और रासायनिक अभिक्रियाएं', route: 'formulas' }
    ]);
  }, [setBreadcrumbs]);

  const copyFormula = (id: string, formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Chapter options for currently active tab
  const getChapterList = () => {
    if (activeTab === 'Physics') {
      return Array.from(new Set(PHYSICS_FORMULAS.map(f => f.chapter)));
    } else if (activeTab === 'Mathematics') {
      return Array.from(new Set(MATH_FORMULAS.map(f => f.chapter)));
    } else {
      return Array.from(new Set(CHEMISTRY_REACTIONS.map(r => r.chapter)));
    }
  };

  // Filtering
  const filteredPhysics = PHYSICS_FORMULAS.filter(f => {
    if (selectedChapter !== 'All' && f.chapter !== selectedChapter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = f.title.toLowerCase().includes(q);
      const matchFormula = f.formula.toLowerCase().includes(q);
      const matchChap = f.chapter.toLowerCase().includes(q);
      if (!matchTitle && !matchFormula && !matchChap) return false;
    }
    return true;
  });

  const filteredMath = MATH_FORMULAS.filter(f => {
    if (selectedChapter !== 'All' && f.chapter !== selectedChapter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = f.title.toLowerCase().includes(q);
      const matchFormula = f.formula.toLowerCase().includes(q);
      const matchChap = f.chapter.toLowerCase().includes(q);
      if (!matchTitle && !matchFormula && !matchChap) return false;
    }
    return true;
  });

  const filteredReactions = CHEMISTRY_REACTIONS.filter(r => {
    if (selectedChapter !== 'All' && r.chapter !== selectedChapter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchReagent = r.reagents.toLowerCase().includes(q);
      const matchProduct = r.products.toLowerCase().includes(q);
      if (!matchName && !matchReagent && !matchProduct) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-300 border border-white/15">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> High-Precision Engineering Formula Engine
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'सूत्र इंजन और अभिक्रिया मानचित्र' : 'Formula Engine & Reaction Maps'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'भौतिकी और गणित के सूत्र उनकी सीमाओं, इकाइयों और सामान्य त्रुटियों के साथ। कार्बनिक और अकार्बनिक रसायन विज्ञान के लिए क्रियाविधि और अपवाद।'
              : 'Formulas are only as good as their conditions of applicability. Access dimensional units, derivation summaries, limiting conditions, and examiner traps for Physics, Mathematics, and Organic Chemistry.'}
          </p>
        </div>
      </div>

      {/* Navigation Tabs & Search */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Main 3 Tabs */}
          <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl">
            <button
              onClick={() => { setActiveTab('Physics'); setSelectedChapter('All'); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'Physics'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4" /> Physics Engine ({PHYSICS_FORMULAS.length})
            </button>
            <button
              onClick={() => { setActiveTab('Mathematics'); setSelectedChapter('All'); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'Mathematics'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4" /> Math Shortcuts ({MATH_FORMULAS.length})
            </button>
            <button
              onClick={() => { setActiveTab('Chemistry'); setSelectedChapter('All'); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'Chemistry'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Beaker className="w-4 h-4" /> Reaction Maps ({CHEMISTRY_REACTIONS.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="flex-1 min-w-[240px] relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search formula, title, symbol, or reaction..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Chapter Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          <button
            onClick={() => setSelectedChapter('All')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              selectedChapter === 'All'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            All Chapters
          </button>
          {getChapterList().map(ch => (
            <button
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedChapter === ch
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {/* PHYSICS FORMULA VIEW */}
      {activeTab === 'Physics' && (
        <div className="space-y-6">
          {filteredPhysics.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6"
            >
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                    {item.chapter}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => copyFormula(item.id, item.formula)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === item.id ? 'Copied LaTeX' : 'Copy LaTeX'}</span>
                </button>
              </div>

              {/* Main Formula Big Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/40 border border-sky-200/80 dark:border-sky-900/40 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-sky-200 overflow-x-auto py-2">
                  <FormattedContent content={`$$${item.formula}$$`} />
                </div>
              </div>

              {/* Grid: Variables & Conditions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Variables Table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4 text-sky-600" /> Variables & Dimensional Units
                  </h4>
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                    {item.variables.map(v => (
                      <div key={v.symbol} className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800 last:border-none">
                        <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{v.symbol}</span>
                        <span className="text-slate-700 dark:text-slate-300 flex-1 px-3 truncate">{v.meaning}</span>
                        <span className="text-slate-400 font-mono">{v.unit || 'unitless'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditions of Applicability */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Conditions of Applicability (Boundary Traps)
                  </h4>
                  <ul className="bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl p-4 border border-amber-200/60 dark:border-amber-900/30 text-xs space-y-2 text-amber-900 dark:text-amber-200">
                    {item.conditions.map((cond, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="font-bold text-amber-600 mt-0.5">•</span>
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Examiner Pitfall Warning */}
              <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs space-y-1">
                <span className="font-bold text-rose-800 dark:text-rose-300 uppercase block tracking-wider">
                  Common Examiner Trap / Student Misconception:
                </span>
                <p className="text-rose-900 dark:text-rose-200 leading-relaxed">
                  {item.commonMistake}
                </p>
              </div>

              {/* Sample Problem */}
              {item.sampleQuestion && (
                <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  <strong className="text-slate-800 dark:text-slate-200">Sample Application: </strong>
                  {item.sampleQuestion}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* MATHEMATICS SHORTCUTS & FORMULAS VIEW */}
      {activeTab === 'Mathematics' && (
        <div className="space-y-6">
          {filteredMath.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {item.chapter}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => copyFormula(item.id, item.formula)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/40 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-indigo-950 dark:text-indigo-200 overflow-x-auto py-2">
                  <FormattedContent content={`$$${item.formula}$$`} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-wider text-slate-500">Derivation Summary / Micro-Proof:</h4>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <FormattedContent content={item.derivationSummary || 'Standard formulation.'} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-wider text-rose-500">Common Mistake in Application:</h4>
                  <div className="p-4 bg-rose-50/60 dark:bg-rose-950/20 rounded-2xl border border-rose-200/60 dark:border-rose-900/30 text-rose-900 dark:text-rose-200 leading-relaxed">
                    {item.commonMistake}
                  </div>
                </div>
              </div>

              {item.sampleQuestion && (
                <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  <strong className="text-slate-800 dark:text-slate-200">Worked Exam Question: </strong>
                  {item.sampleQuestion}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CHEMISTRY REACTION MAPS VIEW */}
      {activeTab === 'Chemistry' && (
        <div className="space-y-6">
          {filteredReactions.map(rx => (
            <div
              key={rx.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {rx.type} Chemistry
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {rx.chapter}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-2">
                    {rx.name}
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  {rx.pyqFrequency}
                </span>
              </div>

              {/* Chemical Flow Diagram: Reactants -> Reagents -> Products */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Reactants:</span>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                    {rx.reactants}
                  </div>
                </div>

                <div className="space-y-1 border-t md:border-t-0 md:border-l md:border-r border-slate-200 dark:border-slate-700 pt-3 md:pt-0 md:px-4 text-center">
                  <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">Reagents & Conditions:</span>
                  <div className="font-mono font-bold text-xs text-emerald-700 dark:text-emerald-300">
                    {rx.reagents}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">{rx.conditions}</div>
                </div>

                <div className="space-y-1 border-t md:border-t-0 pt-3 md:pt-0">
                  <span className="text-[10px] font-bold uppercase text-indigo-500">Major Product:</span>
                  <div className="font-bold text-indigo-900 dark:text-indigo-300 text-sm">
                    {rx.products}
                  </div>
                </div>
              </div>

              {/* Mechanism & Exceptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-wider text-slate-500">Mechanism Breakdown & Intermediates:</h4>
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {rx.mechanism}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-wider text-amber-600">Exceptions & Key Variations:</h4>
                  <div className="p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl border border-amber-200/60 dark:border-amber-900/30 text-amber-900 dark:text-amber-200 leading-relaxed">
                    {rx.exceptions}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
