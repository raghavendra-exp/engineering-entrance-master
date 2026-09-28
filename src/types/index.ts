export type ExamLevel = 'national' | 'state' | 'university' | 'science-institute';

export type AdmissionCategory = 'entrance-exam' | 'jee-based-admission' | 'counselling-process';

export type ExamStatus = 
  | 'ACTIVE' 
  | 'UPCOMING' 
  | 'APPLICATION OPEN' 
  | 'APPLICATION CLOSED' 
  | 'EXAMINATION SCHEDULED' 
  | 'RESULT DECLARED' 
  | 'COUNSELLING' 
  | 'COMPLETED' 
  | 'DISCONTINUED' 
  | 'JEE-BASED ADMISSION';

export interface ExamNotification {
  releaseDate: string;
  applicationStart: string;
  applicationEnd: string;
  correctionWindow?: string;
  admitCardDate: string;
  examDates: string[];
  resultDate?: string;
  counsellingStart?: string;
  brochureUrl: string;
}

export interface ExamEligibility {
  qualifyingExam: string;
  mandatorySubjects: string[];
  minMarksGeneral: string;
  minMarksReserved: string;
  ageLimit: string;
  yearOfPassing: string[];
  attemptLimit: string;
  stateDomicileRequirement?: string;
}

export interface ExamPattern {
  mode: 'Computer Based Test (CBT)' | 'Pen and Paper (OMR)' | 'Hybrid';
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  sections: Array<{
    name: string;
    questionsCount: number;
    questionsToAttempt?: number;
    marksPerQuestion: number;
    negativeMarking: number;
    type: string;
  }>;
  languages: string[];
}

export interface Exam {
  examId: string;
  name: string;
  hindiName?: string;
  shortName: string;
  year: string;
  level: ExamLevel;
  category: AdmissionCategory;
  state?: string;
  status: ExamStatus;
  conductingAuthority: string;
  officialWebsite: string;
  notification: ExamNotification;
  eligibility: ExamEligibility;
  pattern: ExamPattern;
  markingScheme: {
    correct: number;
    incorrect: number;
    unattempted: number;
    rules: string;
  };
  syllabusSummary: string;
  counsellingAuthority: string;
  participatingInstitutesCount: number;
  officialSources: Array<{ title: string; url: string }>;
  lastVerified: string;
  versions: string[];
}

export type SubjectName = 'Physics' | 'Chemistry' | 'Mathematics';

export type QuestionType = 
  | 'mcq' 
  | 'numerical' 
  | 'assertion-reason' 
  | 'multiple-correct' 
  | 'match';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type QuestionSourceType = 'verified-pyq' | 'original-pyq-style';

export interface Question {
  id: string;
  exam: string;
  year?: string;
  session?: string;
  subject: SubjectName;
  chapter: string;
  topic: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  question: string;
  hindiQuestion?: string;
  options?: string[];
  hindiOptions?: string[];
  answer: number | string | number[]; // index 0..3 for MCQ, or number/string for numerical, or array for multiple-correct
  explanation: string;
  hindiExplanation?: string;
  sourceType: QuestionSourceType;
  officialSource?: string;
  verificationStatus: 'verified' | 'draft' | 'community-reviewed';
  tags: string[];
  ncertReference?: string;
}

export interface SyllabusChapter {
  id: string;
  subject: SubjectName;
  name: string;
  hindiName: string;
  classLevel: '11' | '12';
  unit: string;
  weightagePercent: string;
  topics: string[];
  prerequisites: string[];
  keyFormulae: Array<{ name: string; formula: string; desc: string }>;
  importantResults: string[];
  commonMistakes: string[];
  shortTricks: string[];
  ncertChapterName: string;
  ncertOfficialUrl: string;
  examRelevance: {
    jeeMain: 'High' | 'Medium' | 'Low';
    jeeAdvanced: 'High' | 'Medium' | 'Low';
    stateExams: 'High' | 'Medium' | 'Low';
    bitsat: 'High' | 'Medium' | 'Low';
  };
  svgDiagramId?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: string;
  subject: SubjectName | 'All';
  examTargets: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All-Level';
  purpose: 'Theory & Concepts' | 'Practice & Problems' | 'PYQ Archive' | 'Advanced Challenges';
  syllabusCoverage: string;
  pyqCoverage: string;
  recommendedUse: string;
  legitimateLinks: Array<{ label: string; url: string; type: 'Publisher' | 'Amazon' | 'Flipkart' | 'Google Books' | 'NCERT Official' }>;
  lastVerified: string;
}

export interface NCERTChapterMapping {
  classLevel: '11' | '12';
  subject: SubjectName;
  chapterNumber: number;
  chapterTitle: string;
  topics: string[];
  entranceRelevance: string;
  ncertOfficialUrl: string;
  pyqFrequencyJee: string;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  instituteType: 'IIT' | 'NIT' | 'IIIT' | 'BITS' | 'State-Gov' | 'Private-University';
  state: string;
  city: string;
  officialWebsite: string;
  admissionExams: string[];
  counsellingAuthority: string;
  nirfRank?: number;
  branches: string[];
  officialSeatsCount?: number;
  estimatedFeePerYear: string;
  placementStats?: {
    highestPackageLPA?: string;
    averagePackageLPA?: string;
    medianPackageLPA?: string;
    year: string;
  };
  sampleCutoffs?: Array<{
    branch: string;
    category: string;
    quota: string;
    openingRank: number;
    closingRank: number;
    year: string;
    round: string;
  }>;
  source: string;
  lastVerified: string;
}

export interface CounsellingBody {
  id: string;
  name: string;
  type: 'national-josaa' | 'national-csab' | 'state' | 'university';
  authority: string;
  officialWebsite: string;
  participatingInstitutes: string;
  admissionsThrough: string[];
  keyRules: string[];
  eligibility: string;
  roundsCount: number;
  timeline: string;
  officialBrochureUrl: string;
  lastVerified: string;
}

export interface NotificationUpdate {
  id: string;
  date: string;
  examId: string;
  examName: string;
  category: 'Notification' | 'Application' | 'Correction' | 'Admit Card' | 'Exam' | 'Answer Key' | 'Result' | 'Counselling' | 'Syllabus';
  headline: string;
  hindiHeadline: string;
  shortSummary: string;
  whatChanged: string;
  affectedGroup: string;
  officialSource: string;
  officialLink: string;
  lastVerified: string;
}

export interface Flashcard {
  id: string;
  subject: SubjectName;
  chapter: string;
  front: string;
  hindiFront?: string;
  back: string;
  hindiBack?: string;
  formulaOrReaction?: string;
  tags: string[];
  difficulty: DifficultyLevel;
}

export interface FormulaEngineItem {
  id: string;
  subject: SubjectName;
  chapter: string;
  title: string;
  formula: string;
  variables: Array<{ symbol: string; meaning: string; unit?: string; dimensions?: string }>;
  conditions: string[];
  derivationSummary?: string;
  commonMistake: string;
  sampleQuestion: string;
}

export interface ChemistryReaction {
  id: string;
  name: string;
  type: 'Organic' | 'Inorganic' | 'Physical';
  chapter: string;
  reactants: string;
  reagents: string;
  conditions: string;
  products: string;
  mechanism: string;
  exceptions: string;
  pyqFrequency: string;
}

export interface MockTestConfig {
  id: string;
  examId: string;
  title: string;
  durationMinutes: number;
  totalMarks: number;
  sections: Array<{
    id: string;
    name: string;
    subject: SubjectName;
    questionsCount: number;
    mandatoryCount?: number;
    marksCorrect: number;
    marksIncorrect: number;
    questionTypes: QuestionType[];
  }>;
}

export interface UserTestAttempt {
  testId: string;
  date: string;
  durationSeconds: number;
  totalScore: number;
  maxScore: number;
  accuracy: number;
  totalAttempted: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  subjectScores: Record<SubjectName, { score: number; maxScore: number; correct: number; incorrect: number }>;
  mistakes: Array<{
    questionId: string;
    subject: SubjectName;
    chapter: string;
    userAnswer: any;
    correctAnswer: any;
    mistakeType: 'Concept Gap' | 'Formula Error' | 'Calculation Error' | 'Silly Mistake' | 'Misread' | 'Guess' | 'Time Pressure' | 'Memory Error';
    notes?: string;
  }>;
}

export interface ErrorNotebookItem {
  questionId: string;
  question: Question;
  userAnswer: any;
  correctAnswer: any;
  mistakeType: 'Concept Gap' | 'Formula Error' | 'Calculation Error' | 'Silly Mistake' | 'Misread' | 'Guess' | 'Time Pressure' | 'Memory Error';
  dateAdded: string;
  notes: string;
  resolved: boolean;
}
