import React from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, navigate, language } = useApp();

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="w-full py-2.5 px-4 mb-4 bg-slate-50/80 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs overflow-x-auto no-scrollbar">
      <ol className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 whitespace-nowrap">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const label = language === 'hi' && item.hindiLabel ? item.hindiLabel : item.label;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              {isLast ? (
                <span className="font-semibold text-blue-600 dark:text-blue-400 truncate max-w-[200px] sm:max-w-xs">
                  {label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.route)}
                  className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  <span>{label}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
