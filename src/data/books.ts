import type { Book } from '../types';

export const BOOKS_DATA: Book[] = [
  // ==================== PHYSICS BOOKS ====================
  {
    id: 'book-hcv-vol1-2',
    title: 'Concepts of Physics (Vol 1 & Vol 2)',
    author: 'Prof. H.C. Verma',
    publisher: 'Bharati Bhawan Publishers & Distributors',
    edition: 'Revised Edition',
    year: '2024',
    subject: 'Physics',
    examTargets: ['JEE Main', 'JEE Advanced', 'BITSAT', 'MHT-CET', 'WBJEE', 'NEET'],
    difficulty: 'All-Level',
    purpose: 'Theory & Concepts',
    syllabusCoverage: '100% of Classical and Modern Physics for Class 11 and 12.',
    pyqCoverage: 'Fundamental concept building that directly underlies 70%+ of JEE Main and Advanced problems.',
    recommendedUse: 'Indispensable core conceptual textbook. Solve all Objective I, Objective II, and Exercises. Master theory before moving to heavy problem books.',
    legitimateLinks: [
      { label: 'Bharati Bhawan Official', url: 'https://bharatibhawan.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Concepts-Physics-Vol-1-2-2023-2024/dp/B0821M4Z9H', type: 'Amazon' },
      { label: 'Flipkart', url: 'https://www.flipkart.com/concepts-physics-h-c-verma-vol-1-vol-2-combo/p/itmfb2tqyzqfphrg', type: 'Flipkart' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-dc-pandey-series',
    title: 'Understanding Physics Series for JEE Main & Advanced (5 Volumes)',
    author: 'D.C. Pandey',
    publisher: 'Arihant Publications',
    edition: '2025 Edition',
    year: '2025',
    subject: 'Physics',
    examTargets: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Exhaustive Mechanics (Part 1 & 2), Waves & Thermodynamics, Electricity & Magnetism, Optics & Modern Physics.',
    pyqCoverage: 'Contains chapter-wise segregated previous 20 years JEE Main and Advanced questions.',
    recommendedUse: 'Ideal for graded problem practice from Introductory Exercises to Level 1 (JEE Main) and Level 2 (JEE Advanced).',
    legitimateLinks: [
      { label: 'Arihant Books Official', url: 'https://www.arihantbooks.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/s?k=dc+pandey+physics+set', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-irodov',
    title: 'Problems in General Physics',
    author: 'I.E. Irodov',
    publisher: 'Mir Publishers / CBS Publishers & Distributors',
    edition: 'Classic Student Edition',
    year: '2024',
    subject: 'Physics',
    examTargets: ['JEE Advanced', 'Physics Olympiad (INPhO)'],
    difficulty: 'Advanced',
    purpose: 'Advanced Challenges',
    syllabusCoverage: 'Selected topics in Mechanics, Electrodynamics, Thermodynamics, and Oscillations/Waves.',
    pyqCoverage: 'Advanced multi-concept problem style that frequently inspires JEE Advanced top-tier questions.',
    recommendedUse: 'Recommended only for top percentiles aiming for top 1,000 ranks in JEE Advanced. Selective solving advised.',
    legitimateLinks: [
      { label: 'CBS Publishers Official', url: 'https://www.cbspd.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Problems-General-Physics-I-Irodov/dp/8123902998', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },

  // ==================== CHEMISTRY BOOKS ====================
  {
    id: 'book-ncert-chemistry',
    title: 'NCERT Chemistry (Class 11 & Class 12 Textbooks - 4 Parts)',
    author: 'NCERT Textbook Development Committee',
    publisher: 'National Council of Educational Research and Training (NCERT)',
    edition: 'Latest Rationalized Edition',
    year: '2025-26',
    subject: 'Chemistry',
    examTargets: ['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs'],
    difficulty: 'All-Level',
    purpose: 'Theory & Concepts',
    syllabusCoverage: '100% of official NTA syllabus. The ultimate primary benchmark for Inorganic and Organic Chemistry.',
    pyqCoverage: '90%+ of JEE Main Inorganic and Organic questions are directly line-by-line derived from NCERT.',
    recommendedUse: 'Mandatory reading. Read every line of Inorganic Chemistry, named reactions, tables, and back-of-chapter exercises.',
    legitimateLinks: [
      { label: 'NCERT Official Portal (Free Legal Download)', url: 'https://ncert.nic.in/textbook.php', type: 'NCERT Official' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-n-awasthi-physical',
    title: 'Problems in Physical Chemistry for JEE Main & Advanced',
    author: 'N. Awasthi',
    publisher: 'Shri Balaji Publications',
    edition: '18th Edition',
    year: '2025',
    subject: 'Chemistry',
    examTargets: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Complete Physical Chemistry: Mole Concept, Atomic Structure, Thermodynamics, Equilibrium, Solutions, Electrochemistry, Kinetics.',
    pyqCoverage: 'Level 1 for JEE Main/State CETs; Level 2 & 3 for JEE Advanced single-correct, multiple-correct, and passage questions.',
    recommendedUse: 'The benchmark practice book for numerical mastery in Physical Chemistry. Solve Level 1 and 2 thoroughly.',
    legitimateLinks: [
      { label: 'Shri Balaji Publications Official', url: 'https://shribalajibooks.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Problems-Physical-Chemistry-Advanced-Awasthi/dp/B0CKW19L9R', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-ms-chouhan-organic',
    title: 'Advanced Problems in Organic Chemistry for JEE',
    author: 'M.S. Chouhan',
    publisher: 'Shri Balaji Publications',
    edition: '17th Edition',
    year: '2025',
    subject: 'Chemistry',
    examTargets: ['JEE Main', 'JEE Advanced'],
    difficulty: 'Advanced',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'GOC, Isomerism, Hydrocarbons, Alkyl Halides, Alcohols/Phenols/Ethers, Carbonyls, Amines, and Biomolecules.',
    pyqCoverage: 'Outstanding multi-step reaction flowcharts, stereochemistry questions, and mechanism-based problems matching JEE Advanced.',
    recommendedUse: 'Use after completing NCERT and class notes. Essential for mastering reaction mechanisms and sequence questions.',
    legitimateLinks: [
      { label: 'Shri Balaji Publications Official', url: 'https://shribalajibooks.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Advanced-Problems-Organic-Chemistry-Advanced/dp/B0CKW18XF7', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-jd-lee-inorganic',
    title: 'Concise Inorganic Chemistry for JEE Main & Advanced',
    author: 'J.D. Lee (Adapted by Sudarshan Guha)',
    publisher: 'Wiley India',
    edition: '5th Adapted Edition',
    year: '2024',
    subject: 'Chemistry',
    examTargets: ['JEE Advanced'],
    difficulty: 'Intermediate',
    purpose: 'Theory & Concepts',
    syllabusCoverage: 'Chemical Bonding, Coordination Compounds, Metallurgy, p-Block, and Transition Elements.',
    pyqCoverage: 'Covers logical explanations and CFT/MOT nuances frequently tested in JEE Advanced.',
    recommendedUse: 'Reference book for deeper mechanistic clarity in chemical bonding and coordination chemistry when NCERT leaves doubts.',
    legitimateLinks: [
      { label: 'Wiley India Official', url: 'https://www.wileyindia.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Concise-Inorganic-Chemistry-JEE-Advanced/dp/8126564619', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },

  // ==================== MATHEMATICS BOOKS ====================
  {
    id: 'book-cengage-math-series',
    title: 'Cengage Mathematics Series for JEE Advanced (5 Volumes)',
    author: 'G. Tewani',
    publisher: 'Cengage Learning India',
    edition: '3rd Revised Edition',
    year: '2025',
    subject: 'Mathematics',
    examTargets: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    difficulty: 'All-Level',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Algebra, Calculus, Coordinate Geometry, Vectors & 3D, Trigonometry.',
    pyqCoverage: 'Comprehensive collection of previous 45+ years IIT JEE and JEE Main questions with complete step-by-step solutions.',
    recommendedUse: 'Gold standard comprehensive courseware. Great theory with worked illustrations followed by Concept Application Exercises and Archives.',
    legitimateLinks: [
      { label: 'Cengage India Official', url: 'https://www.cengage.co.in', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Cengage-Mathematics-Advanced-Set-Volumes/dp/9355734493', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-rd-sharma-objective',
    title: 'Objective Mathematics for JEE Main & Other Engineering Entrances',
    author: 'Dr. R.D. Sharma',
    publisher: 'Dhanpat Rai Publications',
    edition: 'Revised Edition',
    year: '2025',
    subject: 'Mathematics',
    examTargets: ['JEE Main', 'BITSAT', 'MHT-CET', 'WBJEE', 'KCET', 'COMEDK'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Complete Class 11 and 12 engineering entrance mathematics syllabus.',
    pyqCoverage: 'Massive question bank with chapter-wise MCQs, shortcut methods, and state CET collections.',
    recommendedUse: 'Best for building calculation speed and breadth across JEE Main, BITSAT, and State level exams like MHT-CET and KCET.',
    legitimateLinks: [
      { label: 'Dhanpat Rai Official', url: 'https://dhanpatraipublications.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Objective-Mathematics-Engineering-Entrance-Examinations/dp/8194488828', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-arihant-differential-calculus',
    title: 'Differential & Integral Calculus for JEE Main & Advanced',
    author: 'Amit M. Agarwal',
    publisher: 'Arihant Publications',
    edition: '2025 Edition',
    year: '2025',
    subject: 'Mathematics',
    examTargets: ['JEE Main', 'JEE Advanced'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Functions, Limits, Continuity, Differentiability, AOD, Indefinite & Definite Integrals, Area under curves, Differential Equations.',
    pyqCoverage: 'Contains all recent JEE Main shifts and Advanced papers classified by concept.',
    recommendedUse: 'Highly systematic approach to graph sketching, limit techniques, and King property definite integral problems.',
    legitimateLinks: [
      { label: 'Arihant Books Official', url: 'https://www.arihantbooks.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/Skills-Mathematics-Differential-Calculus-Advanced/dp/9327192668', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },

  // ==================== EXAM-SPECIFIC & PYQ COMPENDIUMS ====================
  {
    id: 'book-disha-pyq-jee-main',
    title: 'NTA JEE Main 46 Years / Shift-wise Solved Papers (Physics, Chemistry, Math)',
    author: 'Disha Experts',
    publisher: 'Disha Publication',
    edition: 'Latest Edition',
    year: '2025',
    subject: 'All',
    examTargets: ['JEE Main'],
    difficulty: 'All-Level',
    purpose: 'PYQ Archive',
    syllabusCoverage: 'Covers every shift question administered by NTA from 2019 to 2025 along with AIEEE historical questions.',
    pyqCoverage: '100% authentic NTA verified previous year question database with errorless detailed solutions.',
    recommendedUse: 'Compulsory tool during the final 4-6 months before exam. Solve shift papers in 3-hour timed exam conditions.',
    legitimateLinks: [
      { label: 'Disha Publication Official', url: 'https://www.dishapublication.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/s?k=disha+jee+main+pyq', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-arihant-mht-cet-prep',
    title: 'MHT-CET Engineering Entrance Exam Prep Guide (Physics, Chemistry, Mathematics)',
    author: 'Arihant Editorial Board',
    publisher: 'Arihant Publications',
    edition: '2026 Edition',
    year: '2026',
    subject: 'All',
    examTargets: ['MHT-CET'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Tailored specifically to Maharashtra State Board HSC syllabus (80% Class 12 + 20% Class 11).',
    pyqCoverage: 'Contains 15+ years of MHT-CET actual question papers with full solutions and 5 mock tests.',
    recommendedUse: 'Essential for students targeting COEP Pune, VJTI Mumbai, SPIT, and top Maharashtra engineering colleges.',
    legitimateLinks: [
      { label: 'Arihant Official Portal', url: 'https://www.arihantbooks.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/s?k=arihant+mht+cet+pcm', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  },
  {
    id: 'book-disha-bitsat-guide',
    title: 'Comprehensive Guide to BITSAT with Online Mock Tests',
    author: 'Disha Experts',
    publisher: 'Disha Publication',
    edition: '14th Edition',
    year: '2025',
    subject: 'All',
    examTargets: ['BITSAT'],
    difficulty: 'Intermediate',
    purpose: 'Practice & Problems',
    syllabusCoverage: 'Full coverage of Physics, Chemistry, Mathematics, plus dedicated modules for English Proficiency and Logical Reasoning.',
    pyqCoverage: 'Previous BITSAT memory-based papers and 10 full-length practice tests matching current 130-question pattern.',
    recommendedUse: 'Crucial for speed drills and practicing English/Logical Reasoning sections which carry 90 marks in BITSAT.',
    legitimateLinks: [
      { label: 'Disha Publication Official', url: 'https://www.dishapublication.com', type: 'Publisher' },
      { label: 'Amazon India', url: 'https://www.amazon.in/s?k=disha+bitsat+guide', type: 'Amazon' }
    ],
    lastVerified: '2026-03-15'
  }
];
