import type { Question, SubjectName, DifficultyLevel, QuestionType, QuestionSourceType } from '../../types';
import { RAW_QUESTIONS_BANK } from './questionsBank';

export const QUESTIONS_DATABASE: Question[] = RAW_QUESTIONS_BANK;

// Dynamic, authentic counts computed directly from database
export const TOTAL_QUESTIONS_COUNT = QUESTIONS_DATABASE.length;
export const PHYSICS_QUESTIONS_COUNT = QUESTIONS_DATABASE.filter(q => q.subject === 'Physics').length;
export const CHEMISTRY_QUESTIONS_COUNT = QUESTIONS_DATABASE.filter(q => q.subject === 'Chemistry').length;
export const MATHEMATICS_QUESTIONS_COUNT = QUESTIONS_DATABASE.filter(q => q.subject === 'Mathematics').length;
export const VERIFIED_PYQS_COUNT = QUESTIONS_DATABASE.filter(q => q.sourceType === 'verified-pyq').length;
export const ORIGINAL_QUESTIONS_COUNT = QUESTIONS_DATABASE.filter(q => q.sourceType === 'original-pyq-style').length;

export function getFilteredQuestions(filters: {
  subject?: SubjectName | 'All';
  chapter?: string;
  exam?: string;
  difficulty?: DifficultyLevel | 'All';
  type?: QuestionType | 'All';
  sourceType?: QuestionSourceType | 'All';
  searchQuery?: string;
}): Question[] {
  return QUESTIONS_DATABASE.filter(q => {
    if (filters.subject && filters.subject !== 'All' && q.subject !== filters.subject) return false;
    if (filters.chapter && q.chapter !== filters.chapter) return false;
    if (filters.exam && filters.exam !== 'All' && !q.exam.toLowerCase().includes(filters.exam.toLowerCase())) return false;
    if (filters.difficulty && filters.difficulty !== 'All' && q.difficulty !== filters.difficulty) return false;
    if (filters.type && filters.type !== 'All' && q.type !== filters.type) return false;
    if (filters.sourceType && filters.sourceType !== 'All' && q.sourceType !== filters.sourceType) return false;
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(query);
      const matchTopic = q.topic.toLowerCase().includes(query);
      const matchChapter = q.chapter.toLowerCase().includes(query);
      const matchTags = q.tags.some(t => t.toLowerCase().includes(query));
      if (!matchQ && !matchTopic && !matchChapter && !matchTags) return false;
    }
    return true;
  });
}

export function getRandomSampleQuestions(count: number, subject?: SubjectName): Question[] {
  let pool = subject ? QUESTIONS_DATABASE.filter(q => q.subject === subject) : [...QUESTIONS_DATABASE];
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, pool.length));
}
