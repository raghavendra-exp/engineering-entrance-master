import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import type { ExamLevel, ExamStatus, AdmissionCategory } from '../types';
import {
  Award,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
  Scale,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

export const ExamsPage: React.FC = () => {
  const { language, navigate, setBreadcrumbs } = useApp();

  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'All Engineering Entrance Exams', hindiLabel: 'सभी इंजीनियरिंग प्रवेश परीक्षाएं', route: 'exams' }
    ]);
  }, [setBreadcrumbs]);

  const allStates = Array.from(new Set(EXAMS_DATA.map(e => e.state).filter(Boolean))) as string[];

  const filteredExams = EXAMS_DATA.filter(exam => {
    if (levelFilter !== 'all' && exam.level !== levelFilter) return false;
    if (categoryFilter !== 'all' && exam.category !== categoryFilter) return false;
    if (stateFilter !== 'all' && exam.state !== stateFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      const matchName = exam.name.toLowerCase().includes(q);
      const matchShort = exam.shortName.toLowerCase().includes(q);
      const matchAuthority = exam.conductingAuthority.toLowerCase().includes(q);
      const matchHindi = exam.hindiName && exam.hindiName.includes(q);
      if (!matchName && !matchShort && !matchAuthority && !matchHindi) return false;
    }
    return true;
  });

  const getStatusBadge = (status: ExamStatus) => {
    switch (status) {
      case 'ACTIVE':
      case 'APPLICATION OPEN':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-500/30';
      case 'UPCOMING':
      case 'EXAMINATION SCHEDULED':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-500/30';
      case 'RESULT DECLARED':
      case 'COUNSELLING':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-500/30';
      case 'JEE-BASED ADMISSION':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Page Title & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'अखिल भारतीय इंजीनियरिंग प्रवेश परीक्षा निर्देशिका' : 'All Engineering Entrance Exams Directory'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {language === 'hi'
              ? 'राष्ट्रीय, राज्य एवं विश्वविद्यालय स्तरीय परीक्षाओं का आधिकारिक विवरण, पात्रता, परीक्षा पैटर्न एवं तिथियां'
              : 'Official patterns, eligibility, dates, and syllabus mapping across National, State & University entrance examinations'}
          </p>
        </div>

        <button
          onClick={() => navigate('compare-exams')}
          className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs shadow-md hover:scale-105 transition-all"
        >
          <Scale className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'परीक्षाओं की तुलना करें' : 'Compare Exams Side-by-Side'}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Search Box */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={language === 'hi' ? 'परीक्षा का नाम, लघु नाम, या प्राधिकरण खोजें...' : 'Search exam name, acronym (e.g. BITSAT), authority...'}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'All Levels', hindi: 'सभी स्तर' },
              { id: 'national', label: 'National', hindi: 'राष्ट्रीय' },
              { id: 'state', label: 'State Level', hindi: 'राज्य स्तर' },
              { id: 'university', label: 'University', hindi: 'विश्वविद्यालय' },
              { id: 'science-institute', label: 'IISER / IAT', hindi: 'आईआईएसईआर' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setLevelFilter(tab.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  levelFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {language === 'hi' ? tab.hindi : tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Secondary Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-1 text-slate-400 font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>

          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="all">All Admission Types</option>
            <option value="entrance-exam">Independent Entrance Exam</option>
            <option value="jee-based-admission">JEE-Based Admission (No separate exam)</option>
          </select>

          {allStates.length > 0 && (
            <select
              value={stateFilter}
              onChange={e => setStateFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <option value="all">All States / UTs</option>
              {allStates.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          )}

          <span className="ml-auto text-slate-400 font-medium">
            Showing {filteredExams.length} of {EXAMS_DATA.length} exams
          </span>
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExams.map(exam => {
          return (
            <div
              key={exam.examId}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Header row: Short name & Status badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {exam.level.toUpperCase()} {exam.state ? `• ${exam.state}` : ''}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {exam.shortName}
                    </h3>
                  </div>

                  <span className={`px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full border ${getStatusBadge(exam.status)} shrink-0`}>
                    {exam.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {language === 'hi' && exam.hindiName ? exam.hindiName : exam.name}
                </p>

                {/* Exam Key Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  <div>
                    <span className="block text-[10px] text-slate-400">Authority:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {exam.conductingAuthority}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400">Exam Mode:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
                      {exam.pattern.mode}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400">Duration & Marks:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {exam.pattern.durationMinutes > 0 ? `${exam.pattern.durationMinutes} mins • ${exam.pattern.totalMarks} M` : 'Via JEE Main Rank'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400">Marking Rule:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      +{exam.markingScheme.correct} / {exam.markingScheme.incorrect}
                    </span>
                  </div>
                </div>

                {/* Important Dates summary */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">
                      {exam.notification.examDates[0] || 'Dates to be announced'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom buttons */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <a
                  href={exam.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => navigate(`exam/${exam.examId}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-xs font-bold transition-all"
                >
                  <span>{language === 'hi' ? 'विस्तार देखें' : 'View Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
