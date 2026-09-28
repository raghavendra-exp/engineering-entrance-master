import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA } from '../data/syllabus';
import type { SubjectName } from '../types';
import {
  Layers,
  Search,
  Atom,
  FlaskConical,
  Pi,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Repeat,
  CheckCircle2
} from 'lucide-react';

export const SyllabusPage: React.FC = () => {
  const { language, navigate, setBreadcrumbs } = useApp();

  const [activeSubject, setActiveSubject] = useState<SubjectName>('Physics');
  const [classFilter, setClassFilter] = useState<'all' | '11' | '12'>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Check url search params if any
    const hash = window.location.hash;
    if (hash.includes('subject=Chemistry')) setActiveSubject('Chemistry');
    if (hash.includes('subject=Mathematics')) setActiveSubject('Mathematics');

    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'PCM Syllabus Master', hindiLabel: 'पीसीएम पाठ्यक्रम मास्टर', route: 'syllabus' }
    ]);
  }, [setBreadcrumbs]);

  const filteredChapters = SYLLABUS_DATA.filter(ch => {
    if (ch.subject !== activeSubject) return false;
    if (classFilter !== 'all' && ch.classLevel !== classFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      const matchName = ch.name.toLowerCase().includes(q);
      const matchHindi = ch.hindiName.includes(q);
      const matchTopic = ch.topics.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchHindi && !matchTopic) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Title */}
      <div>
        <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {language === 'hi' ? 'इंजीनियरिंग प्रवेश पाठ्यक्रम मास्टर (PCM)' : 'Engineering Entrance PCM Syllabus Master'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {language === 'hi'
            ? 'भौतिकी, रसायन विज्ञान एवं गणित का अध्याय-वार आधिकारिक पाठ्यक्रम, महत्वपूर्ण सूत्र, एनसीईआरटी मैपिंग एवं वजन'
            : 'Structured curriculum, topic-by-topic breakdowns, weightages, and key formula references across Physics, Chemistry, and Mathematics'}
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { id: 'Physics', label: 'Physics', hindi: 'भौतिक विज्ञान', icon: Atom, count: '23 Units', color: 'blue' },
          { id: 'Chemistry', label: 'Chemistry', hindi: 'रसायन विज्ञान', icon: FlaskConical, count: 'Physical • Inorg • Org', color: 'emerald' },
          { id: 'Mathematics', label: 'Mathematics', hindi: 'गणित', icon: Pi, count: 'Algebra • Calc • Geo', color: 'purple' }
        ].map(sub => {
          const Icon = sub.icon;
          const isActive = activeSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSubject(sub.id as SubjectName)}
              className={`p-3.5 sm:p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-100 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                  <span className="font-extrabold text-xs sm:text-base">
                    {language === 'hi' ? sub.hindi : sub.label}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 block mt-1">
                  {sub.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={language === 'hi' ? 'अध्याय या विषय खोजें...' : 'Search chapter or topic...'}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-xs text-slate-400 font-bold mr-1">Class:</span>
          {(['all', '11', '12'] as const).map(c => (
            <button
              key={c}
              onClick={() => setClassFilter(c)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                classFilter === c
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {c === 'all' ? 'All Classes' : `Class ${c}`}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {filteredChapters.map(chapter => (
          <div
            key={chapter.id}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Class {chapter.classLevel} • {chapter.unit}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  Weightage: {chapter.weightagePercent}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {chapter.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {chapter.hindiName}
              </p>

              {/* Topics Pills preview */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {chapter.topics.slice(0, 5).map((topic, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {topic}
                  </span>
                ))}
                {chapter.topics.length > 5 && (
                  <span className="text-[11px] text-blue-500 font-semibold self-center">
                    +{chapter.topics.length - 5} more topics
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <button
                onClick={() => navigate(`chapter/${chapter.id}`)}
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <span>Study Chapter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => navigate(`practice?chapter=${encodeURIComponent(chapter.name)}`)}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
                <span>Practice Questions</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
