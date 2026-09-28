import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NCERT_MAPPINGS } from '../data/ncert';
import type { SubjectName } from '../types';
import {
  BookOpen,
  Search,
  ExternalLink,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Atom,
  FlaskConical,
  Pi
} from 'lucide-react';

export const NcertPage: React.FC = () => {
  const { language, navigate, setBreadcrumbs } = useApp();

  const [activeSubject, setActiveSubject] = useState<SubjectName | 'All'>('All');
  const [activeClass, setActiveClass] = useState<'All' | '11' | '12'>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'NCERT Engineering Entrance Master', hindiLabel: 'एनसीईआरटी इंजीनियरिंग मास्टर', route: 'ncert' }
    ]);
  }, [setBreadcrumbs]);

  const filteredMappings = NCERT_MAPPINGS.filter(m => {
    if (activeSubject !== 'All' && m.subject !== activeSubject) return false;
    if (activeClass !== 'All' && m.classLevel !== activeClass) return false;
    if (search) {
      const q = search.toLowerCase();
      const matchTitle = m.chapterTitle.toLowerCase().includes(q);
      const matchTopic = m.topics.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchTopic) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'एनसीईआरटी इंजीनियरिंग प्रवेश मास्टर' : 'NCERT Engineering Entrance Master'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {language === 'hi'
            ? 'कक्षा 11 एवं 12 एनसीईआरटी पाठ्यपुस्तकों का अध्याय-वार विश्लेषण, प्रवेश परीक्षा में वजन एवं आधिकारिक ई-बुक लिंक'
            : 'Chapter-by-chapter mapping of Class 11 & 12 NCERT Physics, Chemistry, and Mathematics with entrance relevance and official NCERT links.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={language === 'hi' ? 'एनसीईआरटी अध्याय या विषय खोजें...' : 'Search NCERT chapter title or topic...'}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  activeSubject === sub
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {(['All', '11', '12'] as const).map(cls => (
              <button
                key={cls}
                onClick={() => setActiveClass(cls)}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  activeClass === cls
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cls === 'All' ? 'All Classes' : `Class ${cls}`}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* NCERT Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMappings.map((m, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {m.subject} • Class {m.classLevel}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Ch {m.chapterNumber}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                {m.chapterTitle}
              </h3>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">
                  JEE Entrance Weightage & Frequency
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {m.pyqFrequencyJee}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {m.entranceRelevance}
              </p>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1 pt-1">
                {m.topics.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <a
                href={m.ncertOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Official PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => navigate(`practice?chapter=${encodeURIComponent(m.chapterTitle)}`)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Practice</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Copyright Safety Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
        <span>
          <strong>Copyright Compliance:</strong> This platform does not reproduce full textbooks. All direct readings link directly to the official free repository at <code>ncert.nic.in</code>.
        </span>
      </div>

    </div>
  );
};
