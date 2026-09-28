import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ErrorNotebookItem, UserTestAttempt } from '../types';

export type Language = 'en' | 'hi';
export type Theme = 'light' | 'dark';

export interface BreadcrumbItem {
  label: string;
  hindiLabel?: string;
  route: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  currentRoute: string;
  navigate: (route: string) => void;
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  errorNotebook: ErrorNotebookItem[];
  addToErrorNotebook: (item: ErrorNotebookItem) => void;
  removeFromErrorNotebook: (questionId: string) => void;
  updateErrorNotebookItem: (questionId: string, updates: Partial<ErrorNotebookItem>) => void;
  testAttempts: UserTestAttempt[];
  recordTestAttempt: (attempt: UserTestAttempt) => void;
  flashcardProgress: Record<string, { intervalDays: number; nextReviewDate: string; repetitions: number }>;
  recordFlashcardReview: (flashcardId: string, success: boolean) => void;
  savedStudyPlan: any;
  saveStudyPlan: (plan: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('eem_lang') as Language) || 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('eem_theme') as Theme;
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Simple, robust hash-based routing with fallback to 'home'
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    return hash || 'home';
  });

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Home', hindiLabel: 'होम', route: 'home' }
  ]);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Persistence: Error Notebook
  const [errorNotebook, setErrorNotebook] = useState<ErrorNotebookItem[]>(() => {
    try {
      const data = localStorage.getItem('eem_errors');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Test Attempts
  const [testAttempts, setTestAttempts] = useState<UserTestAttempt[]>(() => {
    try {
      const data = localStorage.getItem('eem_attempts');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  // Persistence: Flashcard Progress
  const [flashcardProgress, setFlashcardProgress] = useState<Record<string, { intervalDays: number; nextReviewDate: string; repetitions: number }>>(() => {
    try {
      const data = localStorage.getItem('eem_flashcards');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  });

  // Persistence: Study Plan
  const [savedStudyPlan, setSavedStudyPlan] = useState<any>(() => {
    try {
      const data = localStorage.getItem('eem_plan');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });

  // Listen to hash changes for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      setCurrentRoute(hash || 'home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('eem_lang', lang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('eem_theme', t);
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [theme]);

  const addToErrorNotebook = (item: ErrorNotebookItem) => {
    setErrorNotebook(prev => {
      const filtered = prev.filter(p => p.questionId !== item.questionId);
      const updated = [item, ...filtered];
      localStorage.setItem('eem_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromErrorNotebook = (questionId: string) => {
    setErrorNotebook(prev => {
      const updated = prev.filter(p => p.questionId !== questionId);
      localStorage.setItem('eem_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const updateErrorNotebookItem = (questionId: string, updates: Partial<ErrorNotebookItem>) => {
    setErrorNotebook(prev => {
      const updated = prev.map(p => p.questionId === questionId ? { ...p, ...updates } : p);
      localStorage.setItem('eem_errors', JSON.stringify(updated));
      return updated;
    });
  };

  const recordTestAttempt = (attempt: UserTestAttempt) => {
    setTestAttempts(prev => {
      const updated = [attempt, ...prev];
      localStorage.setItem('eem_attempts', JSON.stringify(updated));
      return updated;
    });
  };

  const recordFlashcardReview = (flashcardId: string, success: boolean) => {
    setFlashcardProgress(prev => {
      const current = prev[flashcardId] || { intervalDays: 1, nextReviewDate: new Date().toISOString(), repetitions: 0 };
      const intervals = [1, 3, 7, 15, 30, 60];
      let newIntervalIndex = success ? Math.min(intervals.length - 1, current.repetitions + 1) : 0;
      const nextDays = intervals[newIntervalIndex];
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + nextDays);

      const updated = {
        ...prev,
        [flashcardId]: {
          intervalDays: nextDays,
          nextReviewDate: nextDate.toISOString(),
          repetitions: success ? current.repetitions + 1 : 0
        }
      };
      localStorage.setItem('eem_flashcards', JSON.stringify(updated));
      return updated;
    });
  };

  const saveStudyPlan = (plan: any) => {
    setSavedStudyPlan(plan);
    localStorage.setItem('eem_plan', JSON.stringify(plan));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        currentRoute,
        navigate,
        breadcrumbs,
        setBreadcrumbs,
        searchOpen,
        setSearchOpen,
        errorNotebook,
        addToErrorNotebook,
        removeFromErrorNotebook,
        updateErrorNotebookItem,
        testAttempts,
        recordTestAttempt,
        flashcardProgress,
        recordFlashcardReview,
        savedStudyPlan,
        saveStudyPlan
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
