import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { EXAMS_DATA } from '../../data/exams';
import { SYLLABUS_DATA } from '../../data/syllabus';
import { BOOKS_DATA } from '../../data/books';
import { COLLEGES_DATA } from '../../data/colleges';
import { COUNSELLING_DATA } from '../../data/counselling';
import { UPDATES_DATA } from '../../data/updates';
import { QUESTIONS_DATABASE } from '../../data/questions';
import { Search, X, Award, BookOpen, Layers, Building2, HelpCircle, GraduationCap, BellRing, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { searchOpen, setSearchOpen, navigate, language } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  if (!searchOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Results Gathering
  const examResults = q
    ? EXAMS_DATA.filter(
        e =>
          e.name.toLowerCase().includes(q) ||
          e.shortName.toLowerCase().includes(q) ||
          (e.hindiName && e.hindiName.includes(q)) ||
          e.conductingAuthority.toLowerCase().includes(q) ||
          (e.state && e.state.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const syllabusResults = q
    ? SYLLABUS_DATA.filter(
        s =>
          s.name.toLowerCase().includes(q) ||
          s.hindiName.includes(q) ||
          s.subject.toLowerCase().includes(q) ||
          s.topics.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const collegeResults = q
    ? COLLEGES_DATA.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.shortName.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.state.toLowerCase().includes(q) ||
          c.branches.some(b => b.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  const bookResults = q
    ? BOOKS_DATA.filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.subject.toLowerCase().includes(q)
      ).slice(0, 4)
    : [];

  const counsellingResults = q
    ? COUNSELLING_DATA.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.authority.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const updateResults = q
    ? UPDATES_DATA.filter(
        u =>
          u.headline.toLowerCase().includes(q) ||
          u.hindiHeadline.includes(q) ||
          u.examName.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const questionResults = q
    ? QUESTIONS_DATABASE.filter(
        ques =>
          ques.question.toLowerCase().includes(q) ||
          (ques.hindiQuestion && ques.hindiQuestion.includes(q)) ||
          ques.chapter.toLowerCase().includes(q) ||
          ques.topic.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const totalResults =
    examResults.length +
    syllabusResults.length +
    collegeResults.length +
    bookResults.length +
    counsellingResults.length +
    updateResults.length +
    questionResults.length;

  const handleSelect = (route: string) => {
    navigate(route);
    setSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'परीक्षा, अध्याय, प्रश्न, पुस्तक या कॉलेज खोजें...'
                : 'Search any exam, chapter, topic, book, college...'
            }
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setSearchOpen(false)}
            className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!q ? (
            <div className="py-8 text-center text-slate-400 space-y-2">
              <Search className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="text-sm font-medium">
                {language === 'hi'
                  ? 'जेईई मेन, एडवांस्ड, एमएचटी-सीईटी, बिटसैट, कायनेमैटिक्स, थर्मोडायनेमिक्स खोजें'
                  : 'Type to search across JEE Main, BITSAT, MHT-CET, Kinematics, IITs, JoSAA...'}
              </p>
              <p className="text-xs text-slate-500">
                Supports English & Hindi queries
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-400">
              <p className="text-sm">
                {language === 'hi' ? `"${query}" के लिए कोई परिणाम नहीं मिला` : `No results found for "${query}"`}
              </p>
              <button
                onClick={() => handleSelect(`practice?q=${encodeURIComponent(query)}`)}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:underline"
              >
                <span>Search in 1,048+ Question Bank</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Exams */}
              {examResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-500" />
                    <span>{language === 'hi' ? 'परीक्षाएं' : 'Examinations'}</span>
                  </h4>
                  <div className="space-y-1">
                    {examResults.map(e => (
                      <button
                        key={e.examId}
                        onClick={() => handleSelect(`exam/${e.examId}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {e.name} ({e.shortName})
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {e.conductingAuthority} • {e.status}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-medium">
                          {e.level}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Syllabus Chapters */}
              {syllabusResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{language === 'hi' ? 'पाठ्यक्रम अध्याय' : 'Syllabus & Chapters'}</span>
                  </h4>
                  <div className="space-y-1">
                    {syllabusResults.map(s => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`chapter/${s.id}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                            {s.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {s.subject} • Class {s.classLevel} • Weightage: {s.weightagePercent}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-medium">
                          {s.subject}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colleges */}
              {collegeResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>{language === 'hi' ? 'कॉलेज एवं संस्थान' : 'Colleges & Institutes'}</span>
                  </h4>
                  <div className="space-y-1">
                    {collegeResults.map(c => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect(`colleges?search=${encodeURIComponent(c.shortName)}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                            {c.name} ({c.shortName})
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {c.city}, {c.state} • {c.instituteType} • Admission via {c.admissionExams.join(', ')}
                          </div>
                        </div>
                        {c.nirfRank && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 font-medium">
                            NIRF #{c.nirfRank}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Books */}
              {bookResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                    <span>{language === 'hi' ? 'प्रमाणिक पुस्तकें' : 'Reference Books'}</span>
                  </h4>
                  <div className="space-y-1">
                    {bookResults.map(b => (
                      <button
                        key={b.id}
                        onClick={() => handleSelect(`books?search=${encodeURIComponent(b.author)}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                            {b.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {b.author} • {b.publisher} • {b.subject}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 font-medium">
                          {b.purpose}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question Bank Link */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => handleSelect(`practice?q=${encodeURIComponent(query)}`)}
                  className="w-full py-2.5 px-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Search for questions matching "{query}" in Practice Engine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
