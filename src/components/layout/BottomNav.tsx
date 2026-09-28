import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Award, HelpCircle, Sparkles, BarChart3 } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { currentRoute, navigate, language } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', hindi: 'होम', icon: Home },
    { id: 'exams', label: 'Exams', hindi: 'परीक्षाएं', icon: Award },
    { id: 'practice', label: 'Practice', hindi: 'अभ्यास', icon: HelpCircle },
    { id: 'mock-tests', label: 'Mocks', hindi: 'मॉक', icon: Sparkles },
    { id: 'dashboard', label: 'Progress', hindi: 'प्रगति', icon: BarChart3 }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-5 h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id || (item.id !== 'home' && currentRoute.startsWith(item.id));
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="truncate max-w-[55px]">
                {language === 'hi' ? item.hindi : item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
