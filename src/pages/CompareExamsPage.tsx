import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import { Scale, Check, X, ExternalLink, ArrowRight } from 'lucide-react';

export const CompareExamsPage: React.FC = () => {
  const { language, setBreadcrumbs, navigate } = useApp();

  const [selectedExamIds, setSelectedExamIds] = useState<string[]>([
    'JEE-MAIN-2026',
    'BITSAT-2026',
    'MHT-CET-2026'
  ]);

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'All Exams', hindiLabel: 'सभी परीक्षाएं', route: 'exams' },
      { label: 'Compare Exams', hindiLabel: 'परीक्षा तुलना', route: 'compare-exams' }
    ]);
  }, [setBreadcrumbs]);

  const selectedExams = selectedExamIds
    .map(id => EXAMS_DATA.find(e => e.examId === id))
    .filter(Boolean) as typeof EXAMS_DATA;

  const handleToggle = (id: string) => {
    if (selectedExamIds.includes(id)) {
      if (selectedExamIds.length > 1) {
        setSelectedExamIds(selectedExamIds.filter(x => x !== id));
      }
    } else {
      if (selectedExamIds.length < 4) {
        setSelectedExamIds([...selectedExamIds, id]);
      }
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-amber-500" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' ? 'इंजीनियरिंग प्रवेश परीक्षाओं की वस्तुनिष्ठ तुलना' : 'Objective Engineering Entrance Exam Comparison'}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          {language === 'hi'
            ? 'पात्रता, परीक्षा मोड, समय, अंकन योजना एवं काउंसलिंग की तुलना। (हम किसी परीक्षा की रैंकिंग नहीं करते हैं)'
            : 'Factual comparison of eligibility, duration, questions, negative marking, and counselling without subjective rankings.'}
        </p>
      </div>

      {/* Select Exam Badges Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
          Select 2 to 4 exams to compare:
        </span>
        <div className="flex flex-wrap gap-2">
          {EXAMS_DATA.map(e => {
            const isSelected = selectedExamIds.includes(e.examId);
            return (
              <button
                key={e.examId}
                onClick={() => handleToggle(e.examId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{e.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 w-44 font-bold text-slate-500 uppercase text-[11px]">Feature / Attribute</th>
              {selectedExams.map(e => (
                <th key={e.examId} className="p-4 min-w-[220px] font-extrabold text-sm text-blue-600 dark:text-blue-400">
                  {e.shortName} ({e.year})
                  <span className="block text-[11px] font-normal text-slate-500 dark:text-slate-400">
                    {e.conductingAuthority}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {/* Level */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Level</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 capitalize font-semibold">{e.level} {e.state ? `(${e.state})` : ''}</td>
              ))}
            </tr>

            {/* Category */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Admission Mode</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    e.category === 'entrance-exam' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}>
                    {e.category === 'entrance-exam' ? 'Entrance Exam' : 'JEE-Based Admission'}
                  </span>
                </td>
              ))}
            </tr>

            {/* Eligibility */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Eligibility / Board Marks</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 leading-relaxed">
                  <strong>General:</strong> {e.eligibility.minMarksGeneral}
                  <br />
                  <strong>Reserved:</strong> {e.eligibility.minMarksReserved}
                </td>
              ))}
            </tr>

            {/* Test Mode */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Exam Mode</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 font-semibold">{e.pattern.mode}</td>
              ))}
            </tr>

            {/* Duration */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Exam Duration</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4">
                  {e.pattern.durationMinutes > 0 ? `${e.pattern.durationMinutes} Minutes` : 'N/A (Uses JEE Main Score)'}
                </td>
              ))}
            </tr>

            {/* Total Questions & Marks */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Total Questions & Marks</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 font-semibold">
                  {e.pattern.totalQuestions > 0 ? `${e.pattern.totalQuestions} Questions • ${e.pattern.totalMarks} Marks` : 'N/A'}
                </td>
              ))}
            </tr>

            {/* Marking Scheme */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Marking Scheme</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4">
                  <span className="text-emerald-600 font-bold">+{e.markingScheme.correct}</span> for correct,{' '}
                  <span className="text-red-600 font-bold">{e.markingScheme.incorrect}</span> for incorrect
                </td>
              ))}
            </tr>

            {/* Application Period */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Application Period</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4">
                  {e.notification.applicationStart} to {e.notification.applicationEnd}
                </td>
              ))}
            </tr>

            {/* Exam Dates */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Exam Dates</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 font-bold text-blue-600 dark:text-blue-400">
                  {e.notification.examDates.join(' | ')}
                </td>
              ))}
            </tr>

            {/* Counselling Authority */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Counselling Route</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4 font-semibold">{e.counsellingAuthority}</td>
              ))}
            </tr>

            {/* Official Website */}
            <tr>
              <td className="p-4 font-bold text-slate-500">Official Portal</td>
              {selectedExams.map(e => (
                <td key={e.examId} className="p-4">
                  <a
                    href={e.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};
