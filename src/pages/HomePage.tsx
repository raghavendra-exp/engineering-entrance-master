import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EXAMS_DATA } from '../data/exams';
import { TOTAL_QUESTIONS_COUNT, VERIFIED_PYQS_COUNT } from '../data/questions';
import { UPDATES_DATA } from '../data/updates';
import {
  Compass,
  Award,
  Layers,
  HelpCircle,
  FileCheck2,
  Sparkles,
  BookMarked,
  GraduationCap,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Zap,
  TrendingUp,
  Clock,
  BookOpen,
  Target
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, navigate, setBreadcrumbs } = useApp();

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' }
    ]);
  }, [setBreadcrumbs]);

  const pipelineSteps = [
    { title: 'ZERO', desc: 'Orientation', hindi: 'शून्य स्तर' },
    { title: 'FOUNDATION', desc: 'Class 11/12', hindi: 'बुनियादी' },
    { title: 'SYLLABUS', desc: 'NTA Aligned', hindi: 'पाठ्यक्रम' },
    { title: 'CONCEPT', desc: 'Core Theory', hindi: 'संकल्पना' },
    { title: 'NCERT', desc: 'Textbook Link', hindi: 'एनसीईआरटी' },
    { title: 'PRACTICE', desc: '1,048+ Questions', hindi: 'अभ्यास' },
    { title: 'PYQ', desc: 'Verified Shift Qs', hindi: 'पूर्व वर्ष प्रश्न' },
    { title: 'MOCK', desc: 'Full CBT Simulation', hindi: 'मॉक टेस्ट' },
    { title: 'REVISION', desc: 'Spaced Leitner', hindi: 'पुनरावृत्ति' },
    { title: 'COUNSELLING', desc: 'JoSAA / State', hindi: 'काउंसलिंग' },
    { title: 'COLLEGE', desc: 'IIT / NIT / State', hindi: 'कॉलेज खोज' }
  ];

  const mainPortalCards = [
    {
      id: 'jee-main',
      title: 'JEE MAIN',
      hindiTitle: 'जेईई मेन',
      sub: 'B.E./B.Tech • B.Arch • B.Planning',
      desc: 'National Testing Agency • Session 1 & 2 • 300 Marks (+4/-1)',
      route: 'exam/JEE-MAIN-2026',
      badge: 'National',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      id: 'jee-advanced',
      title: 'JEE ADVANCED',
      hindiTitle: 'जेईई एडवांस्ड',
      sub: 'IIT Admission Pathway',
      desc: 'Paper 1 & Paper 2 • Top 2,50,000 Candidates • Multi-Correct & Numerical',
      route: 'exam/JEE-ADV-2026',
      badge: 'Premier IIT',
      gradient: 'from-amber-600 to-orange-700'
    },
    {
      id: 'state-exams',
      title: 'STATE EXAMS',
      hindiTitle: 'राज्य स्तरीय परीक्षाएं',
      sub: 'MHT-CET • KCET • WBJEE • KEAM • AP/TS',
      desc: 'Dedicated state engineering entrance tests & official domicile patterns',
      route: 'exams?tab=state',
      badge: 'State CETs',
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'university-exams',
      title: 'UNIVERSITY EXAMS',
      hindiTitle: 'विश्वविद्यालय परीक्षाएं',
      sub: 'BITSAT • VITEEE • MET • SRMJEEE • AEEE',
      desc: 'Autonomous institution entrance tests & merit iterations',
      route: 'exams?tab=university',
      badge: 'Autonomous',
      gradient: 'from-purple-600 to-pink-700'
    },
    {
      id: 'syllabus-card',
      title: 'PCM SYLLABUS',
      hindiTitle: 'पीसीएम पाठ्यक्रम',
      sub: 'Physics • Chemistry • Mathematics',
      desc: 'Class 11 & 12 structured chapters, weightages, and key formula summaries',
      route: 'syllabus',
      badge: 'Core Academic',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'pyq-card',
      title: 'VERIFIED PYQs',
      hindiTitle: 'सत्यापित पूर्व वर्ष प्रश्न',
      sub: `${VERIFIED_PYQS_COUNT}+ Verified Exam Questions`,
      desc: 'Strictly separated authentic previous year shift questions with solutions',
      route: 'practice?mode=pyq',
      badge: 'Authentic',
      gradient: 'from-red-600 to-rose-700'
    },
    {
      id: 'practice-card',
      title: 'PRACTICE ENGINE',
      hindiTitle: 'अभ्यास इंजन',
      sub: `${TOTAL_QUESTIONS_COUNT}+ Curated Questions`,
      desc: 'Quick 10, Topic 20, Chapter 30, Subject 50, and Mixed 100 modes',
      route: 'practice',
      badge: 'Interactive',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      id: 'mock-card',
      title: 'MOCK TESTS',
      hindiTitle: 'मॉक टेस्ट सिमुलेटर',
      sub: 'Real CBT Simulation Engine',
      desc: 'Exact exam patterns, timer, question palette, negative marking, analytics',
      route: 'mock-tests',
      badge: 'Full Exam CBT',
      gradient: 'from-violet-600 to-indigo-800'
    },
    {
      id: 'counselling-card',
      title: 'COUNSELLING',
      hindiTitle: 'काउंसलिंग मास्टर',
      sub: 'JoSAA • CSAB • State CAP • BITS',
      desc: 'Seat allotment rules, Freeze/Float/Slide, timelines, and documentation',
      route: 'counselling',
      badge: 'Admissions',
      gradient: 'from-slate-700 to-slate-900'
    },
    {
      id: 'colleges-card',
      title: 'COLLEGE EXPLORER',
      hindiTitle: 'कॉलेज एवं कटऑफ खोज',
      sub: 'IITs • NITs • IIITs • BITS • State Colleges',
      desc: 'Official NIRF rankings, verified branch list, fees, and historical cutoffs',
      route: 'colleges',
      badge: 'Discovery',
      gradient: 'from-amber-700 to-yellow-800'
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-indigo-500/20">
        <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-xs">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{language === 'hi' ? 'अखिल भारतीय इंजीनियरिंग प्रवेश तैयारी पोर्टल' : 'All-India Engineering Entrance Ecosystem'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {language === 'hi' ? (
              <>
                भारत की प्रमुख <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">इंजीनियरिंग प्रवेश परीक्षाओं</span> की तैयारी एक ही स्थान पर
              </>
            ) : (
              <>
                Prepare for India’s Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Engineering Entrance Examinations</span> in One Place
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {language === 'hi'
              ? 'सम्पूर्ण इंजीनियरिंग प्रवेश तैयारी, प्रमाणिक पूर्व वर्ष प्रश्न (PYQ), 1,048+ प्रश्न बैंक, पूर्ण सीबीटी मॉक टेस्ट, सूत्र इंजन, जोसा/राज्य काउंसलिंग एवं वास्तविक कॉलेज खोज।'
              : 'Complete Engineering Entrance Preparation, Verified PYQs, 1,048+ Question Bank, Full Exam CBT Simulation, Spaced Repetition, JoSAA & State Counselling, and Factual College Discovery.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => navigate('practice')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>{language === 'hi' ? '1,048+ प्रश्नों का अभ्यास शुरू करें' : 'Start Practice (1,048+ Qs)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('mock-tests')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm backdrop-blur-md transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>{language === 'hi' ? 'फुल मॉक टेस्ट सिमुलेटर' : 'Full Exam Mocks'}</span>
            </button>

            <button
              onClick={() => navigate('exams')}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              <span>{language === 'hi' ? 'सभी 18+ परीक्षाएं देखें' : 'Explore All 18+ Exams'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Live Fact Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
            {TOTAL_QUESTIONS_COUNT}+
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
            {language === 'hi' ? 'सक्रिय प्रश्न बैंक' : 'Total Question Bank'}
          </div>
          <div className="text-[11px] text-slate-500">
            {VERIFIED_PYQS_COUNT} Verified PYQs + Originals
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {EXAMS_DATA.length}+
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
            {language === 'hi' ? 'प्रमुख प्रवेश परीक्षाएं' : 'Major Covered Exams'}
          </div>
          <div className="text-[11px] text-slate-500">
            National • State • University
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
            {language === 'hi' ? 'प्राथमिक स्रोत सत्यापन' : 'Primary Source Verified'}
          </div>
          <div className="text-[11px] text-slate-500">
            NTA • IITs • State CETs Official
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
            0% Fake
          </div>
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
            {language === 'hi' ? 'कॉपीराइट सुरक्षित एवं निःशुल्क' : 'Copyright-Safe & Free'}
          </div>
          <div className="text-[11px] text-slate-500">
            No Piracy • Authentic Educational
          </div>
        </div>
      </section>

      {/* The 11-Stage Learning Ecosystem Pipeline */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'सम्पूर्ण तैयारी पारिस्थितिकी तंत्र' : 'Complete Preparation Ecosystem Pipeline'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              ZERO → FOUNDATION → SYLLABUS → CONCEPT → NCERT → PRACTICE → PYQ → MOCK → REVISION → COUNSELLING → COLLEGE
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-2 overflow-x-auto no-scrollbar py-1">
          {pipelineSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-center flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                STEP {idx}
              </div>
              <div className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                {step.title}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                {language === 'hi' ? step.hindi : step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'प्रमुख मॉड्यूल एवं प्रवेश द्वार' : 'Core Portals & Exam Gateways'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {language === 'hi' ? 'सीधे किसी भी परीक्षा या तैयारी अनुभाग पर जाएं' : 'Jump directly into any exam or preparation module'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainPortalCards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(card.route)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {card.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {language === 'hi' ? card.hindiTitle : card.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {card.sub}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span>{language === 'hi' ? 'खोलें' : 'Open Portal'}</span>
                <span className="text-blue-500">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Official Updates Bar */}
      <section className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              {language === 'hi' ? 'नवीनतम आधिकारिक परीक्षा अपडेट्स' : 'Latest Official Examination Updates'}
            </h3>
          </div>
          <button
            onClick={() => navigate('updates')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>{language === 'hi' ? 'सभी देखें' : 'View All'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {UPDATES_DATA.slice(0, 3).map((upd) => (
            <div
              key={upd.id}
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-blue-600 dark:text-blue-400">{upd.examName}</span>
                <span className="text-slate-400">{upd.date}</span>
              </div>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-2">
                {language === 'hi' ? upd.hindiHeadline : upd.headline}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                {upd.shortSummary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Primary Source Guarantee Banner */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              {language === 'hi' ? '100% आधिकारिक स्रोत पारदर्शिता एवं गैर-कोचिंग मानक' : '100% Official Source Transparency & Non-Coaching Guarantee'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              {language === 'hi'
                ? 'सभी तिथियां, पात्रता, पाठ्यक्रम, और काउंसलिंग नियम सीधे NTA, IITs, और राज्य परीक्षा प्राधिकरणों द्वारा सत्यापित हैं।'
                : 'All dates, syllabi, eligibility, and rules are directly cited from official authorities (NTA, IITs, State CETs, AICTE, JoSAA). Never fabricated.'}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('exams')}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 shadow-sm transition-all"
        >
          {language === 'hi' ? 'स्रोत निर्देशिका देखें' : 'Inspect Official Sources'}
        </button>
      </section>

    </div>
  );
};
