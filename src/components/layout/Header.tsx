import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Sun, Moon, Globe, Menu, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { language, setLanguage, theme, toggleTheme, navigate, setSearchOpen } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Mobile menu toggle + Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span className="sm:hidden">EEM INDIA</span>
                  <span className="hidden sm:inline">ENGINEERING ENTRANCE MASTER</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded">
                  2026
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate max-w-[100px] sm:max-w-xs">
                {language === 'hi' 
                  ? 'सम्पूर्ण इंजीनियरिंग तैयारी' 
                  : 'Preparation & Mocks'}
              </p>
            </div>
          </button>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-md hidden lg:block mx-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <span>{language === 'hi' ? 'परीक्षाएं, अध्याय, प्रश्न, कॉलेज खोजें...' : 'Search exams, chapters, PYQs, colleges...'}</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-700 rounded shadow-xs">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right Controls: Search Mobile, Language, Theme, Status */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Quick Practice shortcut */}
          <button
            onClick={() => navigate('practice')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'अभ्यास' : 'Practice'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            title={language === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-semibold text-[11px] sm:text-xs">{language === 'en' ? 'हिंदी' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer active:scale-95 shadow-xs"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
