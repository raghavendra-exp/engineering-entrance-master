import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BOOKS_DATA } from '../data/books';
import type { SubjectName } from '../types';
import {
  BookMarked,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ShoppingCart
} from 'lucide-react';

export const BooksPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [subjectFilter, setSubjectFilter] = useState<SubjectName | 'All'>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Engineering Entrance Book Library', hindiLabel: 'संदर्भ पुस्तक पुस्तकालय', route: 'books' }
    ]);
  }, [setBreadcrumbs]);

  const filteredBooks = BOOKS_DATA.filter(b => {
    if (subjectFilter !== 'All' && b.subject !== 'All' && b.subject !== subjectFilter) return false;
    if (difficultyFilter !== 'All' && b.difficulty !== difficultyFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      const matchTitle = b.title.toLowerCase().includes(q);
      const matchAuthor = b.author.toLowerCase().includes(q);
      const matchPublisher = b.publisher.toLowerCase().includes(q);
      if (!matchTitle && !matchAuthor && !matchPublisher) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-purple-600" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'इंजीनियरिंग प्रवेश पुस्तक पुस्तकालय (प्रमाणिक संदर्भ)' : 'Engineering Entrance Book Library (Verified References)'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {language === 'hi'
            ? 'अवधारणा निर्माण, समस्या समाधान एवं PYQ संग्रह हेतु विश्वसनीय पुस्तकें एवं वैध प्रकाशक/विक्रेता लिंक (शून्य पाइरेसी नीति)'
            : 'Carefully curated textbooks, problem compendiums, and PYQ archives with legitimate purchase links under a strict zero-piracy guarantee.'}
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
              placeholder={language === 'hi' ? 'पुस्तक, लेखक (उदा. H.C. Verma, D.C. Pandey) खोजें...' : 'Search title, author (e.g. H.C. Verma, N. Awasthi)...'}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setSubjectFilter(sub)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  subjectFilter === sub
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(d => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  difficultyFilter === d
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {d === 'All' ? 'All Levels' : d}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBooks.map(book => (
          <div
            key={book.id}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {book.subject} • {book.difficulty}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                  {book.purpose}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  Author: <span className="font-semibold text-slate-900 dark:text-white">{book.author}</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Publisher: {book.publisher} • {book.edition} ({book.year})
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Recommended Strategic Use</span>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  {book.recommendedUse}
                </p>
              </div>

              <div className="text-[11px] text-slate-500 space-y-1">
                <div><strong>Target Exams:</strong> {book.examTargets.join(', ')}</div>
                <div><strong>Syllabus Coverage:</strong> {book.syllabusCoverage}</div>
              </div>
            </div>

            {/* Legitimate Purchase / Official Links */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Legitimate Links (Verified):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {book.legitimateLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/60 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 text-[11px] font-semibold transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Anti-Piracy Policy Notice */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>Strict Copyright & Anti-Piracy Compliance Policy</span>
        </div>
        <p className="leading-relaxed">
          Engineering Entrance Master India strictly adheres to Indian copyright laws and fair-use principles. We never host, link to, or encourage unauthorized PDF downloads or Telegram piracy. All recommendations link directly to publishers, verified e-commerce marketplaces (Amazon, Flipkart), or official government open-access repositories (NCERT).
        </p>
      </div>

    </div>
  );
};
