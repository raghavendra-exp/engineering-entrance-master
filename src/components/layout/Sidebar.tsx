import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Home,
  Award,
  Layers,
  BookOpen,
  HelpCircle,
  FileCheck2,
  BookMarked,
  Repeat,
  Zap,
  Building2,
  BellRing,
  BarChart3,
  Calendar,
  AlertTriangle,
  Scale,
  Sparkles,
  Atom,
  FlaskConical,
  Pi,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpenMobile, onCloseMobile }) => {
  const { currentRoute, navigate, language, errorNotebook } = useApp();

  const handleNav = (route: string) => {
    navigate(route);
    onCloseMobile();
  };

  const navSections = [
    {
      title: language === 'hi' ? 'मुख्य नेविगेशन' : 'Main Portal',
      items: [
        { id: 'home', label: 'Dashboard', hindi: 'डैशबोर्ड', icon: Home },
        { id: 'exams', label: 'All Exams (18+)', hindi: 'सभी परीक्षाएं (18+)', icon: Award, badge: 'Active' },
        { id: 'compare-exams', label: 'Compare Exams', hindi: 'परीक्षा तुलना', icon: Scale }
      ]
    },
    {
      title: language === 'hi' ? 'अकादमिक एवं पाठ्यक्रम' : 'Academics & Syllabus',
      items: [
        { id: 'syllabus', label: 'PCM Syllabus Master', hindi: 'पीसीएम पाठ्यक्रम', icon: Layers },
        { id: 'syllabus?subject=Physics', label: 'Physics (23 Units)', hindi: 'भौतिक विज्ञान (23)', icon: Atom },
        { id: 'syllabus?subject=Chemistry', label: 'Chemistry (Physical/Inorg/Org)', hindi: 'रसायन विज्ञान', icon: FlaskConical },
        { id: 'syllabus?subject=Mathematics', label: 'Mathematics (Algebra/Calc/Geo)', hindi: 'गणित', icon: Pi },
        { id: 'ncert', label: 'NCERT Master (Class 11 & 12)', hindi: 'एनसीईआरटी मास्टर', icon: BookOpen }
      ]
    },
    {
      title: language === 'hi' ? 'अभ्यास एवं मॉक टेस्ट' : 'Practice & Simulations',
      items: [
        { id: 'practice', label: 'Question Bank (1,048+)', hindi: 'प्रश्न बैंक (1,048+)', icon: HelpCircle, badge: 'Live' },
        { id: 'practice?mode=pyq', label: 'Verified PYQs Archive', hindi: 'सत्यापित पूर्व वर्ष प्रश्न', icon: FileCheck2 },
        { id: 'mock-tests', label: 'Full Mock Test Simulator', hindi: 'पूर्ण मॉक टेस्ट', icon: Sparkles },
        { id: 'speed-lab', label: 'Speed Lab & Mental Math', hindi: 'स्पीड लैब एवं गणना', icon: Zap },
        { id: 'error-notebook', label: 'Error Notebook', hindi: 'गलतियों की नोटबुक', icon: AlertTriangle, count: errorNotebook.length }
      ]
    },
    {
      title: language === 'hi' ? 'पुनरावृत्ति एवं उपकरण' : 'Revision & Resources',
      items: [
        { id: 'flashcards', label: 'Spaced Flashcards', hindi: 'फ्लैशकार्ड्स (स्मृति)', icon: Repeat },
        { id: 'formulas', label: 'Formula & Reaction Engine', hindi: 'सूत्र एवं अभिक्रिया इंजन', icon: Pi },
        { id: 'books', label: 'Book Library (Legitimate)', hindi: 'पुस्तक संदर्भ पुस्तकालय', icon: BookMarked },
        { id: 'planner', label: '0-to-10 Roadmap & Planner', hindi: '0-से-10 अध्ययन योजना', icon: Calendar }
      ]
    },
    {
      title: language === 'hi' ? 'प्रवेश एवं कॉलेज खोज' : 'Admission & Discovery',
      items: [
        { id: 'counselling', label: 'Counselling (JoSAA/State)', hindi: 'काउंसलिंग मार्गदर्शिका', icon: GraduationCap },
        { id: 'colleges', label: 'College & Cutoff Explorer', hindi: 'कॉलेज एवं कटऑफ खोज', icon: Building2 },
        { id: 'updates', label: 'Official Updates Feed', hindi: 'आधिकारिक अपडेट्स', icon: BellRing, badge: 'Live' },
        { id: 'dashboard', label: 'My Performance Analytics', hindi: 'मेरी प्रगति और विश्लेषण', icon: BarChart3 }
      ]
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navSections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {sec.title}
              </h3>
              <div className="space-y-0.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentRoute === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                        <span className="truncate">{language === 'hi' ? item.hindi : item.label}</span>
                      </div>
                      
                      {item.badge && (
                        <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                          {item.badge}
                        </span>
                      )}

                      {typeof item.count === 'number' && item.count > 0 && (
                        <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info in sidebar */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-center justify-between font-medium">
            <span>Primary Source Rule</span>
            <span className="text-emerald-500 font-bold">100% Official</span>
          </div>
          <p className="mt-1 text-[10px] leading-tight text-slate-400">
            NTA • IITs • State CET Cells • AICTE • JoSAA verified
          </p>
        </div>
      </aside>
    </>
  );
};
