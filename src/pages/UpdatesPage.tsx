import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { UPDATES_DATA } from '../data/updates';
import type { NotificationUpdate } from '../types';
import {
  Bell,
  ExternalLink,
  Calendar,
  Filter,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles
} from 'lucide-react';

export const UpdatesPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Official Updates & Notices', hindiLabel: 'आधिकारिक सूचनाएं और अलर्ट', route: 'updates' }
    ]);
  }, [setBreadcrumbs]);

  const examsList = Array.from(new Set(UPDATES_DATA.map(u => u.examName))).sort();
  const categoriesList = ['All', 'Notification', 'Application', 'Admit Card', 'Exam', 'Answer Key', 'Result', 'Counselling'];

  const filteredUpdates = UPDATES_DATA.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (selectedExam !== 'All' && item.examName !== selectedExam) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchHead = item.headline.toLowerCase().includes(q);
      const matchSummary = item.shortSummary.toLowerCase().includes(q);
      const matchExam = item.examName.toLowerCase().includes(q);
      if (!matchHead && !matchSummary && !matchExam) return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-300 border border-white/15">
            <Bell className="w-3.5 h-3.5 text-amber-400" /> Real-Time Verified Exam Alerts
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आधिकारिक परीक्षा सूचनाएं और अलर्ट' : 'Verified Engineering Entrance Updates & Alerts'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'एनटीए, आईआईटी जेईई और राज्य सीईटी सेल से सीधे सत्यापित आधिकारिक सूचनाएं। कोई भ्रामक अफवाह या अनसत्यापित दावा नहीं।'
              : 'Directly grounded in official bulletins, public notices, and university press releases from NTA, IITs, State CET Cells, and BITS Pilani.'}
          </p>
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
              placeholder="Search by keyword, notification topic, or exam..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Exam Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedExam}
              onChange={e => setSelectedExam(e.target.value)}
              className="text-xs font-semibold p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="All">All Examinations</option>
              {examsList.map(ex => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          {categoriesList.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Updates Feed */}
      <div className="space-y-6">
        {filteredUpdates.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Notifications Match Filters</h3>
            <p className="text-xs text-slate-500">Try changing your search term or category filters.</p>
          </div>
        ) : (
          filteredUpdates.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {item.examName}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>

              {/* Headline */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                  {language === 'hi' && item.hindiHeadline ? item.hindiHeadline : item.headline}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                  {item.shortSummary}
                </p>
              </div>

              {/* Key Changes Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Key Changes & Decisions:
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {item.whatChanged}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Affected Applicant Group:
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                    {item.affectedGroup}
                  </p>
                </div>
              </div>

              {/* Footer with Official Source Link */}
              <div className="flex flex-wrap justify-between items-center gap-3 pt-2 text-xs border-t border-slate-100 dark:border-slate-700/60">
                <span className="text-slate-400">
                  Source: <strong>{item.officialSource}</strong> • Verified {item.lastVerified}
                </span>

                <a
                  href={item.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-xl font-bold transition-all flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800"
                >
                  <span>Official Notice Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
