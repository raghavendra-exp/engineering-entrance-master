import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabus';
import { MathView, FormattedContent } from '../components/common/MathView';
import {
  Layers,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookmarkPlus
} from 'lucide-react';

interface ChapterDetailPageProps {
  chapterId: string;
}

export const ChapterDetailPage: React.FC<ChapterDetailPageProps> = ({ chapterId }) => {
  const { language, navigate, setBreadcrumbs } = useApp();

  const chapter = SYLLABUS_DATA.find(c => c.id === chapterId) || SYLLABUS_DATA[0];

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Syllabus', hindiLabel: 'पाठ्यक्रम', route: 'syllabus' },
      { label: chapter.subject, hindiLabel: chapter.subject, route: `syllabus?subject=${chapter.subject}` },
      { label: chapter.name, hindiLabel: chapter.hindiName, route: `chapter/${chapter.id}` }
    ]);
  }, [chapter, setBreadcrumbs]);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Chapter Title Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl border border-indigo-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {chapter.subject} • Class {chapter.classLevel}
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Weightage: {chapter.weightagePercent}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              {chapter.name}
            </h1>
            <p className="text-base text-slate-300 font-semibold">
              {chapter.hindiName}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => navigate(`practice?chapter=${encodeURIComponent(chapter.name)}`)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Practice Questions</span>
            </button>

            <button
              onClick={() => navigate(`flashcards`)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Flashcards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Topics & Prerequisites */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Prescribed Syllabus Topics */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>{language === 'hi' ? 'आधिकारिक पाठ्यक्रम विषय' : 'Official Syllabus Topics'}</span>
            </h2>
            <span className="text-xs text-slate-400 font-semibold">{chapter.topics.length} Subtopics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {chapter.topics.map((t, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-800 dark:text-slate-200">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites & Exam Relevance */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {language === 'hi' ? 'पूर्व-अपेक्षित ज्ञान (Prerequisites)' : 'Prerequisites & Foundations'}
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {chapter.prerequisites.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Exam Relevance Matrix
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block font-bold">JEE Main</span>
                <span className="font-extrabold text-blue-600 dark:text-blue-400">{chapter.examRelevance.jeeMain}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block font-bold">JEE Advanced</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-400">{chapter.examRelevance.jeeAdvanced}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block font-bold">State CETs</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{chapter.examRelevance.stateExams}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                <span className="text-[10px] text-slate-400 block font-bold">BITSAT</span>
                <span className="font-extrabold text-purple-600 dark:text-purple-400">{chapter.examRelevance.bitsat}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Key Formulae with KaTeX */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>{language === 'hi' ? 'महत्वपूर्ण सूत्र (Key Mathematical Formulae)' : 'Key Formulae & Governing Equations'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter.keyFormulae.map((f, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-blue-600 dark:text-blue-400">{f.name}</h4>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 text-center">
                <MathView math={f.formula} block />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Results, Common Mistakes & Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Important Results */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{language === 'hi' ? 'महत्वपूर्ण परिणाम' : 'Important Results'}</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {chapter.importantResults.map((r, i) => (
              <li key={i} className="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20">
                <FormattedContent content={r} />
              </li>
            ))}
          </ul>
        </div>

        {/* Common Mistakes */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span>{language === 'hi' ? 'सामान्य गलतियाँ' : 'Common Pitfalls & Mistakes'}</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {chapter.commonMistakes.map((m, i) => (
              <li key={i} className="p-2.5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-500/20">
                <FormattedContent content={m} />
              </li>
            ))}
          </ul>
        </div>

        {/* Shortcuts & Methods */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>{language === 'hi' ? 'शॉर्टकट एवं ट्रिक्स' : 'Shortcuts & Exam Tricks'}</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {chapter.shortTricks.map((s, i) => (
              <li key={i} className="p-2.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/20">
                <FormattedContent content={s} />
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* NCERT Mapping Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>NCERT Official Alignment</span>
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
            {chapter.ncertChapterName}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Class {chapter.classLevel} NCERT official rationalized curriculum textbook mapping.
          </p>
        </div>

        <a
          href={chapter.ncertOfficialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
        >
          <span>Read NCERT Chapter PDF</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
