import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Printer,
  ChevronRight
} from 'lucide-react';

interface RoadmapLevel {
  level: number;
  name: string;
  hindiName: string;
  tagline: string;
  tasks: Array<{ id: string; text: string }>;
  recommendedDuration: string;
  keyRule: string;
}

const ROADMAP_LEVELS: RoadmapLevel[] = [
  {
    level: 0,
    name: 'ZERO: Initial Diagnostic & Pattern Blueprint',
    hindiName: 'शून्य: प्रारंभिक मूल्यांकन और परीक्षा पैटर्न',
    tagline: 'Know your starting score, exam eligibility, syllabus scope, and realistic timeline.',
    tasks: [
      { id: 't0-1', text: 'Read the official information bulletin for your target exams (JEE Main, BITSAT, State CETs).' },
      { id: 't0-2', text: 'Take a diagnostic baseline test without preparation to identify starting strengths and weaknesses.' },
      { id: 't0-3', text: 'Understand exact marking scheme (+4/-1 vs +3/-1 vs 0 negative) and time per question.' }
    ],
    recommendedDuration: '3 to 5 Days',
    keyRule: 'Never start preparation without examining the actual question paper format first.'
  },
  {
    level: 1,
    name: 'FOUNDATION: Mathematical Tools & Bridge Concepts',
    hindiName: 'नींव: गणितीय उपकरण और बुनियादी अवधारणाएं',
    tagline: 'Master basic differentiation, integration, vectors, logarithms, and chemical bonding.',
    tasks: [
      { id: 't1-1', text: 'Learn basic differentiation, chain rule, and definite integration as physics tools.' },
      { id: 't1-2', text: 'Master vector addition, dot product, cross product, and component resolution.' },
      { id: 't1-3', text: 'Understand log tables, exponential approximations, and basic mole concept.' }
    ],
    recommendedDuration: '2 to 3 Weeks',
    keyRule: 'Weak basic calculus is the #1 reason students struggle with Physics mechanics and electrodynamics.'
  },
  {
    level: 2,
    name: 'SYLLABUS: Mapping & High-Weightage Chapters',
    hindiName: 'पाठ्यक्रम: उच्च वेटेज वाले अध्यायों की मैपिंग',
    tagline: 'Prioritize chapters that yield 70% of marks in modern engineering entrances.',
    tasks: [
      { id: 't2-1', text: 'Highlight high-weightage chapters (Modern Physics, Organic Chemistry, Coordinate Geometry).' },
      { id: 't2-2', text: 'Review syllabus deletions vs additions across JEE Main and Advanced.' },
      { id: 't2-3', text: 'Map out Class 11 vs Class 12 chapter schedule week by week.' }
    ],
    recommendedDuration: '1 Week',
    keyRule: 'Covering 80% of high-weightage syllabus with 95% accuracy beats covering 100% with 60% accuracy.'
  },
  {
    level: 3,
    name: 'CONCEPT: Deep First-Principles Understanding',
    hindiName: 'संकल्पना: गहन सैद्धांतिक स्पष्टता',
    tagline: 'Do not memorize without derivation. Understand why formulas hold and their boundary traps.',
    tasks: [
      { id: 't3-1', text: 'Read standard textbooks (H.C. Verma, O.P. Tandon, Cengage) for theoretical clarity.' },
      { id: 't3-2', text: 'Derive key equations yourself (e.g. projectile range, kinetic friction work, LMVT).' },
      { id: 't3-3', text: 'Note conditions of applicability for each formula to avoid examiner traps.' }
    ],
    recommendedDuration: 'Ongoing across syllabus',
    keyRule: 'If you cannot explain why a formula has a factor of 1/2 or a negative sign, you do not know it.'
  },
  {
    level: 4,
    name: 'NCERT: Complete Line-by-Line Mastery',
    hindiName: 'एनसीईआरटी: पंक्ति-दर-पंक्ति संपूर्ण अध्ययन',
    tagline: 'Direct questions appear in Chemistry and Physics straight from NCERT text and exemplars.',
    tasks: [
      { id: 't4-1', text: 'Read every single table, graph, and footnote in NCERT Chemistry (especially Inorganic & Biomolecules).' },
      { id: 't4-2', text: 'Solve all NCERT In-Text examples and Back Exercise numericals.' },
      { id: 't4-3', text: 'Solve NCERT Exemplar MCQ-1 and MCQ-2 problems for tricky multi-concept testing.' }
    ],
    recommendedDuration: 'Weekly concurrent reading',
    keyRule: 'Over 85% of JEE Main Inorganic and Coordination Chemistry questions are verbatim from NCERT.'
  },
  {
    level: 5,
    name: 'PRACTICE: Graded Problem Solving',
    hindiName: 'अभ्यास: श्रेणीबद्ध समस्या समाधान',
    tagline: 'Progress from single-concept standard problems to multi-chapter combined problems.',
    tasks: [
      { id: 't5-1', text: 'Solve 30-40 targeted questions per chapter immediately after theory.' },
      { id: 't5-2', text: 'Time yourself: aim for 2.5 minutes per Physics/Math question, 1.2 minutes per Chemistry question.' },
      { id: 't5-3', text: 'Immediately flag any question that takes >4 minutes or requires a guess.' }
    ],
    recommendedDuration: 'Daily 4-6 hours',
    keyRule: 'Reading solutions passively is an illusion of competence. Always solve with pen and blank paper.'
  },
  {
    level: 6,
    name: 'PYQ: 10-Year Verified Examination Archive',
    hindiName: 'पीवाईक्यू: 10 वर्षों के प्रामाणिक प्रश्न पत्र',
    tagline: 'Previous Year Questions reveal exactly how examiners disguise concepts.',
    tasks: [
      { id: 't6-1', text: 'Solve minimum 50-70 recent PYQs (2019-2025) per chapter under exam conditions.' },
      { id: 't6-2', text: 'Separate verified official questions from mock questions to calibrate actual difficulty.' },
      { id: 't6-3', text: 'Identify recurring PYQ trends (e.g. Reimer-Tiemann mechanism, definite integral properties).' }
    ],
    recommendedDuration: '4 to 6 Weeks intensive',
    keyRule: 'Recent 5-year PYQs are the single highest return on investment study material in existence.'
  },
  {
    level: 7,
    name: 'MOCK: Full 3-Hour CBT Simulation',
    hindiName: 'मॉक: 3 घंटे का वास्तविक सीबीटी अनुकरण',
    tagline: 'Test question selection, negative marking control, biological clock, and endurance.',
    tasks: [
      { id: 't7-1', text: 'Take full-syllabus 3-hour mock tests strictly in 9:00 AM - 12:00 PM or 3:00 PM - 6:00 PM slots.' },
      { id: 't7-2', text: 'Follow 3-Pass Strategy: Pass 1 (Easy direct Qs in 50 min), Pass 2 (Moderate Qs in 80 min), Pass 3 (Tough Qs).' },
      { id: 't7-3', text: 'Spend at least 2.5 hours analyzing each 3-hour test paper.' }
    ],
    recommendedDuration: 'Last 2 to 3 Months (2 tests/week)',
    keyRule: 'A mock test without 2 hours of post-test post-mortem analysis is completely wasted.'
  },
  {
    level: 8,
    name: 'REVISION: Error Notebook & Spaced Repetition',
    hindiName: 'पुनरावृत्ति: त्रुटि नोटबुक और फ़्लैशकार्ड्स',
    tagline: 'Eradicate recurring calculation errors and memorize flashcards using Leitner schedule.',
    tasks: [
      { id: 't8-1', text: 'Classify every single test mistake into Concept, Formula, Calculation, or Silly Mistake.' },
      { id: 't8-2', text: 'Review daily flashcard queue for formulas and reactions (1d, 3d, 7d, 15d intervals).' },
      { id: 't8-3', text: 'Retake unresolved error notebook questions weekly until accuracy hits 100%.' }
    ],
    recommendedDuration: 'Daily 1.5 hours',
    keyRule: 'If you log 200 errors and master all 200, your percentile jumps by 10 to 15 points.'
  },
  {
    level: 9,
    name: 'COUNSELLING: JoSAA, CSAB & State Seat Allocation',
    hindiName: 'काउंसलिंग: जोसा, सीएसएबी और सीट आवंटन रणनीति',
    tagline: 'Fill choices strategically: dream choices, realistic choices, and rock-solid safety backups.',
    tasks: [
      { id: 't9-1', text: 'Understand Freeze, Float, and Slide rules across JoSAA rounds.' },
      { id: 't9-2', text: 'Prepare category certificates, domicile proof, and medical fitness forms in advance.' },
      { id: 't9-3', text: 'Create preference order list with minimum 80-120 choices in descending true preference.' }
    ],
    recommendedDuration: 'Post-Result (June - July)',
    keyRule: 'Never put a lower preference college above a higher preference college expecting "higher chance".'
  },
  {
    level: 10,
    name: 'COLLEGE: Branch Selection & B.Tech Discovery',
    hindiName: 'कॉलेज: शाखा चयन और भविष्य की दिशा',
    tagline: 'Compare IITs, NITs, IIITs, BITS, and State Gov universities by placement, fee, and faculty.',
    tasks: [
      { id: 't10-1', text: 'Compare Branch vs College trade-offs (e.g. Top IIT Core vs Top NIT CSE).' },
      { id: 't10-2', text: 'Inspect verified 4-year tuition fees and return on investment (ROI).' },
      { id: 't10-3', text: 'Complete physical reporting, document verification, and hostel check-in.' }
    ],
    recommendedDuration: 'Final Step to B.Tech Journey',
    keyRule: 'Your engineering entrance journey culminates here. Choose the path that matches your true passions.'
  }
];

export const PlannerPage: React.FC = () => {
  const { language, setBreadcrumbs, savedStudyPlan, saveStudyPlan } = useApp();

  const [activeTab, setActiveTab] = useState<'roadmap' | 'timetable'>('roadmap');

  // Interactive completed tasks in roadmap
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('eem_completed_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Timetable Generator Settings
  const [aspirantType, setAspirantType] = useState<'dropper' | 'class12' | 'class11'>('dropper');
  const [dailyHours, setDailyHours] = useState<number>(10);
  const [wakeUpTime, setWakeUpTime] = useState<string>('06:00');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Preparation Roadmap & Planner', hindiLabel: 'तैयारी का रोडमैप और योजना', route: 'planner' }
    ]);
  }, [setBreadcrumbs]);

  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(updated);
    localStorage.setItem('eem_completed_tasks', JSON.stringify(updated));
  };

  // Generate customized schedule slots based on inputs
  const generateScheduleSlots = () => {
    if (aspirantType === 'dropper') {
      return [
        { time: '06:00 - 06:30', activity: 'Morning Routine & Mind Priming', focus: 'Light exercise & hydration' },
        { time: '06:30 - 08:30', activity: 'Slot 1: Physics Deep Theory & Derivations', focus: 'High focus concepts & notes' },
        { time: '08:30 - 09:15', activity: 'Breakfast & Rest', focus: 'Nutritious meal' },
        { time: '09:15 - 12:15', activity: 'Slot 2: Mathematics Intensive Problem Solving', focus: '30-40 graded problems' },
        { time: '12:15 - 13:15', activity: 'Lunch & Power Nap', focus: '20-min recharge' },
        { time: '13:15 - 15:45', activity: 'Slot 3: Chemistry NCERT Line-by-Line & Reactions', focus: 'Inorganic / Organic' },
        { time: '15:45 - 16:30', activity: 'Tea Break & Outdoor Walk', focus: 'Mental relaxation' },
        { time: '16:30 - 18:30', activity: 'Slot 4: Speed Lab & Flashcard Revision', focus: 'Mental math & 1d-60d Leitner' },
        { time: '18:30 - 20:30', activity: 'Slot 5: Verified PYQ Solving (Timed Shift)', focus: 'Previous years exam questions' },
        { time: '20:30 - 21:15', activity: 'Dinner', focus: 'Family time' },
        { time: '21:15 - 22:30', activity: 'Slot 6: Error Notebook Review & Day Planning', focus: 'Log mistakes, plan tomorrow' },
        { time: '22:30 - 06:00', activity: 'Restful Sleep (7.5 Hours)', focus: 'Memory consolidation' }
      ];
    } else {
      return [
        { time: '06:00 - 07:30', activity: 'Slot 1: Flashcards & Formula Engine Recall', focus: 'High retention before school' },
        { time: '08:00 - 14:30', activity: 'School / Board Classes', focus: 'Pay attention to NCERT concepts' },
        { time: '14:30 - 15:30', activity: 'Lunch & Rest', focus: 'Decompress from school' },
        { time: '15:30 - 18:00', activity: 'Slot 2: Entrance Physics & Problem Solving', focus: 'Advanced numericals' },
        { time: '18:00 - 18:45', activity: 'Snack & Outdoor Break', focus: 'Fresh air' },
        { time: '18:45 - 21:00', activity: 'Slot 3: Mathematics Problem Solving', focus: 'Calculus / Algebra practice' },
        { time: '21:00 - 21:45', activity: 'Dinner', focus: 'Meal & relax' },
        { time: '21:45 - 23:00', activity: 'Slot 4: Chemistry NCERT & Error Notebook', focus: 'Log mistakes & read NCERT' },
        { time: '23:00 - 06:00', activity: 'Sleep (7 Hours)', focus: 'Essential for cognitive function' }
      ];
    }
  };

  const scheduleSlots = generateScheduleSlots();

  // Progress computation
  const allTasks = ROADMAP_LEVELS.flatMap(l => l.tasks);
  const doneCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = allTasks.length > 0 ? Math.round((doneCount / allTasks.length) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-300 border border-white/15">
            <Compass className="w-3.5 h-3.5" /> 10-Level Master Preparation Blueprint
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? '10-स्तरीय तैयारी रोडमैप और समय सारिणी' : '10-Level Preparation Roadmap & Planner'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'शून्य से कॉलेज तक: आधारभूत अवधारणाएं, एनसीईआरटी, पीवाईक्यू, सीबीटी मॉक टेस्ट और काउंसलिंग तक की संपूर्ण संरचित यात्रा।'
              : 'ZERO → FOUNDATION → SYLLABUS → CONCEPT → NCERT → PRACTICE → PYQ → MOCK → REVISION → COUNSELLING → COLLEGE.'}
          </p>

          <div className="pt-2">
            <div className="flex items-center gap-3">
              <div className="flex-1 max-w-md bg-white/10 rounded-full h-3 overflow-hidden border border-white/20">
                <div
                  className="bg-emerald-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-emerald-300">
                {doneCount} of {allTasks.length} Milestones Achieved ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-md">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'roadmap'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Compass className="w-4 h-4" /> 10-Level Roadmap
        </button>
        <button
          onClick={() => setActiveTab('timetable')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'timetable'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Calendar className="w-4 h-4" /> Timetable Generator
        </button>
      </div>

      {/* VIEW 1: 10-LEVEL ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          {ROADMAP_LEVELS.map(lvl => {
            const lvlTasks = lvl.tasks;
            const lvlDone = lvlTasks.filter(t => completedTasks[t.id]).length;
            const isAllDone = lvlDone === lvlTasks.length;

            return (
              <div
                key={lvl.level}
                className={`bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border shadow-sm transition-all ${
                  isAllDone
                    ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20 dark:bg-emerald-950/10'
                    : 'border-slate-200 dark:border-slate-700 hover:shadow-md'
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-2xl font-black flex items-center justify-center text-sm shrink-0 shadow-sm ${
                      isAllDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-indigo-600 text-white'
                    }`}>
                      L{lvl.level}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {lvl.recommendedDuration}
                        </span>
                        {isAllDone && (
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Level Completed
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                        {language === 'hi' ? lvl.hindiName : lvl.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {lvl.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-400">
                    {lvlDone} / {lvlTasks.length} Checked
                  </span>
                </div>

                {/* Key Rule Callout */}
                <div className="mb-5 p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 text-xs text-indigo-950 dark:text-indigo-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Golden Rule: </strong> {lvl.keyRule}
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5">
                  {lvl.tasks.map(task => {
                    const isChecked = !!completedTasks[task.id];
                    return (
                      <label
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 line-through'
                            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 mt-0.5 border ${
                          isChecked
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs leading-relaxed font-medium">
                          {task.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: TIMETABLE GENERATOR */}
      {activeTab === 'timetable' && (
        <div className="space-y-8">
          {/* Settings Box */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-600" /> Customize Your Daily Power Routine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Aspirant Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Aspirant Category:
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'dropper', label: 'Full-Time Dropper (Self-Study Focus)' },
                    { id: 'class12', label: 'Class 12th (School + Entrance Prep)' },
                    { id: 'class11', label: 'Class 11th (Foundation Building)' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setAspirantType(item.id as any)}
                      className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        aspirantType === item.id
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Study Hours */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Target Daily Study Hours:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[6, 8, 10, 12].map(hrs => (
                    <button
                      key={hrs}
                      onClick={() => setDailyHours(hrs)}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        dailyHours === hrs
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {hrs} Hours
                    </button>
                  ))}
                </div>
              </div>

              {/* Wake-up Time */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  Morning Wake-Up Time:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['05:30', '06:00', '06:30', '07:00'].map(t => (
                    <button
                      key={t}
                      onClick={() => setWakeUpTime(t)}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        wakeUpTime === t
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {t} AM
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Generated Schedule Table */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-700">
              <div>
                <h4 className="font-extrabold text-xl text-slate-900 dark:text-slate-100">
                  Target Routine ({dailyHours}h Target • {aspirantType.toUpperCase()})
                </h4>
                <p className="text-xs text-slate-500">
                  Follow this schedule with 85%+ consistency for guaranteed score jumps.
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" /> Print Timetable
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
              {scheduleSlots.map((slot, sIdx) => (
                <div key={sIdx} className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400 w-32 shrink-0">
                      {slot.time}
                    </span>
                    <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {slot.activity}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 sm:text-right">
                    {slot.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
