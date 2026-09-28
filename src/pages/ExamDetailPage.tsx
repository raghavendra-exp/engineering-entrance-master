import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import { COLLEGES_DATA } from '../data/colleges';
import { BOOKS_DATA } from '../data/books';
import { UPDATES_DATA } from '../data/updates';
import {
  Calendar,
  Clock,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  FileCheck2,
  Sparkles,
  HelpCircle,
  Building2,
  AlertCircle,
  CheckCircle2,
  Award,
  Layers,
  ArrowRight,
  History
} from 'lucide-react';

interface ExamDetailPageProps {
  examId: string;
}

export const ExamDetailPage: React.FC<ExamDetailPageProps> = ({ examId }) => {
  const { language, navigate, setBreadcrumbs } = useApp();

  const exam = EXAMS_DATA.find(e => e.examId === examId) || EXAMS_DATA[0];

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'All Exams', hindiLabel: 'सभी परीक्षाएं', route: 'exams' },
      { label: exam.shortName, hindiLabel: exam.shortName, route: `exam/${exam.examId}` }
    ]);
  }, [exam, setBreadcrumbs]);

  const relevantColleges = COLLEGES_DATA.filter(c =>
    c.admissionExams.some(ae => ae.toLowerCase().includes(exam.shortName.toLowerCase()))
  );

  const relevantBooks = BOOKS_DATA.filter(b =>
    b.examTargets.some(et => et.toLowerCase().includes(exam.shortName.toLowerCase()) || et === 'JEE Main')
  );

  const relevantUpdates = UPDATES_DATA.filter(u =>
    u.examId === exam.examId || u.examName.toLowerCase().includes(exam.shortName.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16">
      
      {/* Exam Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl border border-indigo-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                {exam.level.toUpperCase()} {exam.state ? `• ${exam.state}` : ''}
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {exam.status}
              </span>
              <span className="text-xs text-slate-400">
                Verified: {exam.lastVerified}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              {exam.name} ({exam.shortName} {exam.year})
            </h1>
            <p className="text-sm text-slate-300">
              Conducting Authority: <strong className="text-white">{exam.conductingAuthority}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => navigate('mock-tests')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Mock Test</span>
            </button>
          </div>
        </div>

        {/* Version Switcher if multiple versions exist */}
        {exam.versions && exam.versions.length > 1 && (
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10 text-xs">
            <History className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-slate-400 font-medium">Historical Versions:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {exam.versions.map(v => (
                <button
                  key={v}
                  onClick={() => navigate(`exam/${v}`)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors ${
                    v === exam.examId
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grid: Notification Dates & Eligibility */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Important Dates & Notification */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'महत्वपूर्ण तिथियां एवं अधिसूचना' : 'Important Dates & Notification'}
              </h2>
            </div>
            {exam.notification.brochureUrl && (
              <a
                href={exam.notification.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Information Brochure</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
              <span className="text-slate-500">Application Window:</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {exam.notification.applicationStart} to {exam.notification.applicationEnd}
              </span>
            </div>

            {exam.notification.correctionWindow && (
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500">Correction Window:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {exam.notification.correctionWindow}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
              <span className="text-slate-500">Admit Card:</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {exam.notification.admitCardDate}
              </span>
            </div>

            <div className="py-1.5 border-b border-slate-100 dark:border-slate-800/60 space-y-1">
              <span className="text-slate-500 block">Examination Dates:</span>
              {exam.notification.examDates.map((d, i) => (
                <div key={i} className="font-bold text-blue-600 dark:text-blue-400 pl-2">
                  • {d}
                </div>
              ))}
            </div>

            {exam.notification.resultDate && (
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500">Result Declaration:</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {exam.notification.resultDate}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between py-1.5">
              <span className="text-slate-500">Counselling Body:</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {exam.counsellingAuthority}
              </span>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'पात्रता मानदंड (आधिकारिक)' : 'Eligibility Criteria (Official)'}
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Qualifying Examination</span>
              <p className="font-medium mt-0.5">{exam.eligibility.qualifyingExam}</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="text-[10px] text-slate-400 block font-bold">General / OBC Cutoff</span>
                <span className="font-semibold text-slate-900 dark:text-white text-xs">
                  {exam.eligibility.minMarksGeneral}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <span className="text-[10px] text-slate-400 block font-bold">SC / ST / PwD Cutoff</span>
                <span className="font-semibold text-slate-900 dark:text-white text-xs">
                  {exam.eligibility.minMarksReserved}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block">Age Limit</span>
                <p className="font-medium">{exam.eligibility.ageLimit}</p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 block">Attempt Limit</span>
                <p className="font-medium">{exam.eligibility.attemptLimit}</p>
              </div>
            </div>

            {exam.eligibility.stateDomicileRequirement && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/20 text-amber-900 dark:text-amber-200">
                <span className="text-[11px] font-bold block">Domicile & Quota Condition:</span>
                <p className="text-[11px] mt-0.5">{exam.eligibility.stateDomicileRequirement}</p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Exam Pattern & Marking Scheme */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'परीक्षा पैटर्न एवं अंकन योजना' : 'Exam Pattern & Marking Scheme'}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
              Mode: {exam.pattern.mode}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300">
              Duration: {exam.pattern.durationMinutes} Minutes
            </span>
          </div>
        </div>

        {/* Section Table */}
        {exam.pattern.sections.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-2.5 px-3 font-bold">Section</th>
                  <th className="py-2.5 px-3 font-bold">Questions</th>
                  <th className="py-2.5 px-3 font-bold">Question Type</th>
                  <th className="py-2.5 px-3 font-bold">Marks / Question</th>
                  <th className="py-2.5 px-3 font-bold">Negative Marking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {exam.pattern.sections.map((sec, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">{sec.name}</td>
                    <td className="py-2.5 px-3">{sec.questionsCount} Qs</td>
                    <td className="py-2.5 px-3">{sec.type}</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-bold">+{sec.marksPerQuestion}</td>
                    <td className="py-2.5 px-3 text-red-600 font-bold">-{sec.negativeMarking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-xs text-slate-500">
            Admissions for {exam.shortName} are conducted strictly through JEE Main merit rank. No separate examination paper is administered.
          </p>
        )}

        {/* Marking Scheme Rules Alert */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
          <strong className="text-slate-900 dark:text-white block mb-0.5">Official Marking Rules:</strong>
          <span className="text-slate-600 dark:text-slate-300">{exam.markingScheme.rules}</span>
        </div>
      </div>

      {/* Syllabus Summary & Navigation */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'पाठ्यक्रम मैपिंग' : 'Prescribed Syllabus Architecture'}
            </h2>
          </div>

          <button
            onClick={() => navigate('syllabus')}
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Open Complete PCM Syllabus Master</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {exam.syllabusSummary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => navigate('syllabus?subject=Physics')}
            className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-left transition-colors"
          >
            <div className="font-bold text-xs text-slate-900 dark:text-white">Physics</div>
            <div className="text-[11px] text-slate-500 mt-0.5">23 Units • Kinematics to Modern Physics</div>
          </button>

          <button
            onClick={() => navigate('syllabus?subject=Chemistry')}
            className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-left transition-colors"
          >
            <div className="font-bold text-xs text-slate-900 dark:text-white">Chemistry</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Physical • Inorganic • Organic Reaction Maps</div>
          </button>

          <button
            onClick={() => navigate('syllabus?subject=Mathematics')}
            className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 text-left transition-colors"
          >
            <div className="font-bold text-xs text-slate-900 dark:text-white">Mathematics</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Algebra • Calculus • Coordinate • Vectors/3D</div>
          </button>
        </div>
      </div>

      {/* Colleges Admitting through this exam */}
      {relevantColleges.length > 0 && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-500" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'प्रमुख भाग लेने वाले संस्थान' : 'Key Participating Premier Institutes'}
              </h2>
            </div>

            <button
              onClick={() => navigate('colleges')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All Colleges Explorer →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relevantColleges.slice(0, 6).map(c => (
              <div
                key={c.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900 dark:text-white">{c.shortName}</span>
                  {c.nirfRank && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 font-bold">
                      NIRF #{c.nirfRank}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500">
                  {c.city}, {c.state} • {c.instituteType}
                </div>
                <div className="text-[11px] text-slate-400">
                  Counselling: {c.counsellingAuthority}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Primary Sources Section */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Official Sources & Transparency Verification
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          All data on this page is compiled strictly from primary examination brochures and gazetted portal notices.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {exam.officialSources.map((src, i) => (
            <a
              key={i}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors shadow-2xs"
            >
              <span>{src.title}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
