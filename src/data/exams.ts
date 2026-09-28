import type { Exam } from '../types';

export const EXAMS_DATA: Exam[] = [
  // ==================== NATIONAL LEVEL ====================
  {
    examId: 'JEE-MAIN-2026',
    name: 'Joint Entrance Examination (Main)',
    hindiName: 'संयुक्त प्रवेश परीक्षा (मुख्य)',
    shortName: 'JEE Main',
    year: '2026',
    level: 'national',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'National Testing Agency (NTA)',
    officialWebsite: 'https://jeemain.nta.nic.in',
    notification: {
      releaseDate: '2025-10-28',
      applicationStart: '2025-10-28',
      applicationEnd: '2025-11-22',
      correctionWindow: '2025-11-26 to 2025-11-28',
      admitCardDate: '3 days prior to exam session',
      examDates: ['Session 1: Jan 22 - Jan 31, 2026', 'Session 2: Apr 01 - Apr 08, 2026'],
      resultDate: 'Session 1: Feb 12, 2026 | Session 2: Apr 22, 2026',
      counsellingStart: 'June 2026 (via JoSAA/CSAB)',
      brochureUrl: 'https://jeemain.nta.nic.in/information-bulletin/'
    },
    eligibility: {
      qualifyingExam: '10+2 / Higher Secondary / Intermediate equivalent recognized by AIU',
      mandatorySubjects: ['Physics', 'Mathematics', 'Any one of (Chemistry, Biology, Biotechnology, Technical Vocational)'],
      minMarksGeneral: '75% aggregate in 10+2 OR top 20 percentile of qualifying board for NITs/IIITs/GFTIs admission',
      minMarksReserved: '65% aggregate for SC/ST/PwD candidates',
      ageLimit: 'No upper age limit for appearing in JEE Main',
      yearOfPassing: ['2024', '2025', 'Appearing in 2026'],
      attemptLimit: '3 consecutive years (maximum 6 sessions total: 2 sessions per year)'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 75,
      totalMarks: 300,
      sections: [
        { name: 'Physics Section A (MCQ)', questionsCount: 20, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Physics Section B (Numerical)', questionsCount: 5, questionsToAttempt: 5, marksPerQuestion: 4, negativeMarking: 1, type: 'Numerical' },
        { name: 'Chemistry Section A (MCQ)', questionsCount: 20, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry Section B (Numerical)', questionsCount: 5, questionsToAttempt: 5, marksPerQuestion: 4, negativeMarking: 1, type: 'Numerical' },
        { name: 'Mathematics Section A (MCQ)', questionsCount: 20, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Mathematics Section B (Numerical)', questionsCount: 5, questionsToAttempt: 5, marksPerQuestion: 4, negativeMarking: 1, type: 'Numerical' }
      ],
      languages: ['English', 'Hindi', 'Assamese', 'Bengali', 'Gujarati', 'Kannada', 'Malayalam', 'Marathi', 'Odia', 'Punjabi', 'Tamil', 'Telugu', 'Urdu']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 for each correct response, -1 for each incorrect response (applicable to both Section A and Section B), 0 for unattempted questions.'
    },
    syllabusSummary: 'Rationalized NCERT 11th & 12th Physics, Chemistry, and Mathematics curriculum as prescribed by NTA.',
    counsellingAuthority: 'Joint Seat Allocation Authority (JoSAA) & Central Seat Allocation Board (CSAB)',
    participatingInstitutesCount: 120, // 32 NITs, 26 IIITs, 40+ GFTIs + Top State Universities
    officialSources: [
      { title: 'NTA Official Portal', url: 'https://jeemain.nta.nic.in' },
      { title: 'JoSAA Official Counselling Portal', url: 'https://josaa.nic.in' },
      { title: 'CSAB Official Portal', url: 'https://csab.nic.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['JEE-MAIN-2026', 'JEE-MAIN-2025', 'JEE-MAIN-2024']
  },
  {
    examId: 'JEE-MAIN-2025',
    name: 'Joint Entrance Examination (Main) 2025',
    shortName: 'JEE Main 2025',
    year: '2025',
    level: 'national',
    category: 'entrance-exam',
    status: 'COMPLETED',
    conductingAuthority: 'National Testing Agency (NTA)',
    officialWebsite: 'https://jeemain.nta.nic.in',
    notification: {
      releaseDate: '2024-10-28',
      applicationStart: '2024-10-28',
      applicationEnd: '2024-11-22',
      admitCardDate: '2025-01-18',
      examDates: ['Session 1: Jan 22 - Jan 30, 2025', 'Session 2: Apr 02 - Apr 09, 2025'],
      resultDate: '2025-04-24',
      brochureUrl: 'https://jeemain.nta.nic.in'
    },
    eligibility: {
      qualifyingExam: '10+2 with PCM',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '75%',
      minMarksReserved: '65%',
      ageLimit: 'No age limit',
      yearOfPassing: ['2023', '2024', '2025'],
      attemptLimit: '3 consecutive years'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 75,
      totalMarks: 300,
      sections: [
        { name: 'Physics', questionsCount: 25, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' },
        { name: 'Chemistry', questionsCount: 25, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' },
        { name: 'Mathematics', questionsCount: 25, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' }
      ],
      languages: ['English', 'Hindi', 'Regional Languages']
    },
    markingScheme: { correct: 4, incorrect: -1, unattempted: 0, rules: '+4 for correct, -1 for incorrect' },
    syllabusSummary: 'Rationalized NCERT syllabus 2024-2025.',
    counsellingAuthority: 'JoSAA 2025',
    participatingInstitutesCount: 118,
    officialSources: [{ title: 'NTA Archives', url: 'https://jeemain.nta.nic.in' }],
    lastVerified: '2025-06-30',
    versions: ['JEE-MAIN-2026', 'JEE-MAIN-2025', 'JEE-MAIN-2024']
  },
  {
    examId: 'JEE-ADV-2026',
    name: 'Joint Entrance Examination (Advanced)',
    hindiName: 'संयुक्त प्रवेश परीक्षा (उन्नत)',
    shortName: 'JEE Advanced',
    year: '2026',
    level: 'national',
    category: 'entrance-exam',
    status: 'UPCOMING',
    conductingAuthority: 'Organizing IIT (IIT Roorkee / IIT Consortium)',
    officialWebsite: 'https://jeeadv.ac.in',
    notification: {
      releaseDate: '2025-11-15',
      applicationStart: '2026-04-27',
      applicationEnd: '2026-05-07',
      admitCardDate: '2026-05-17',
      examDates: ['Paper 1 & Paper 2: May 24, 2026 (09:00-12:00 & 14:30-17:30)'],
      resultDate: '2026-06-08',
      counsellingStart: 'June 2026 via JoSAA',
      brochureUrl: 'https://jeeadv.ac.in/information-brochure.html'
    },
    eligibility: {
      qualifyingExam: 'Top 2,50,000 successful candidates (all categories) in JEE Main B.E./B.Tech Paper 1',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics'],
      minMarksGeneral: '75% in Class 12 board examination OR top 20 percentile of qualifying board',
      minMarksReserved: '65% for SC/ST/PwD',
      ageLimit: 'Born on or after October 1, 2001 (5 years relaxation for SC/ST/PwD)',
      yearOfPassing: ['2025', 'Appearing in 2026'],
      attemptLimit: 'Maximum 2 attempts in consecutive years'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 360, // 180 min Paper 1 + 180 min Paper 2 (Both compulsory)
      totalQuestions: 108, // Approx 54 in Paper 1 and 54 in Paper 2
      totalMarks: 360,
      sections: [
        { name: 'Physics Paper 1 & 2', questionsCount: 36, marksPerQuestion: 4, negativeMarking: 1, type: 'Single Correct, Multi-Correct, Numerical/Integer, Match' },
        { name: 'Chemistry Paper 1 & 2', questionsCount: 36, marksPerQuestion: 4, negativeMarking: 1, type: 'Single Correct, Multi-Correct, Numerical/Integer, Match' },
        { name: 'Mathematics Paper 1 & 2', questionsCount: 36, marksPerQuestion: 4, negativeMarking: 1, type: 'Single Correct, Multi-Correct, Numerical/Integer, Match' }
      ],
      languages: ['English', 'Hindi']
    },
    markingScheme: {
      correct: 4,
      incorrect: -2,
      unattempted: 0,
      rules: 'Dynamic per-question marking: +4/-1 or +3/-1 for single choice, +4 with partial marking (+1, +2, +3) and -2 for multiple correct, +3/0 or +4/0 for non-negative numericals.'
    },
    syllabusSummary: 'Deep rigorous syllabus comprising advanced Physics, Chemistry, and Mathematics concepts.',
    counsellingAuthority: 'Joint Seat Allocation Authority (JoSAA) for admission to all 23 IITs',
    participatingInstitutesCount: 23, // 23 IITs + IISc Bengaluru + IIPE + RGIPT + IIST
    officialSources: [
      { title: 'JEE Advanced Official Portal', url: 'https://jeeadv.ac.in' },
      { title: 'JoSAA Official Counselling Portal', url: 'https://josaa.nic.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['JEE-ADV-2026', 'JEE-ADV-2025', 'JEE-ADV-2024']
  },
  {
    examId: 'IAT-2026',
    name: 'IISER Aptitude Test (IAT)',
    hindiName: 'आईआईएसईआर एप्टीट्यूड टेस्ट',
    shortName: 'IAT',
    year: '2026',
    level: 'science-institute',
    category: 'entrance-exam',
    status: 'UPCOMING',
    conductingAuthority: 'Indian Institutes of Science Education and Research (IISER Joint Admissions Committee)',
    officialWebsite: 'https://iiseradmission.in',
    notification: {
      releaseDate: '2026-02-15',
      applicationStart: '2026-03-10',
      applicationEnd: '2026-05-12',
      admitCardDate: '2026-05-30',
      examDates: ['June 07, 2026'],
      resultDate: 'June 25, 2026',
      brochureUrl: 'https://iiseradmission.in'
    },
    eligibility: {
      qualifyingExam: '10+2 with Science stream (PCM or PCB or PCMB)',
      mandatorySubjects: ['Mathematics or Biology', 'Physics', 'Chemistry'],
      minMarksGeneral: '60% marks in aggregate or equivalent grade',
      minMarksReserved: '55% for SC/ST/PwD',
      ageLimit: 'As per qualifying board norms',
      yearOfPassing: ['2024', '2025', '2026'],
      attemptLimit: 'No specified limit within qualifying passing years'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 60,
      totalMarks: 240,
      sections: [
        { name: 'Physics (MCQ)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry (MCQ)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Mathematics (MCQ)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Biology (MCQ)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English', 'Hindi']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 for correct response, -1 for incorrect response, 0 for unattempted.'
    },
    syllabusSummary: 'Comprehensive NCERT Class 11 and 12 science syllabus spanning Physics, Chemistry, Math, and Biology.',
    counsellingAuthority: 'IISER Joint Admissions Committee (JAC)',
    participatingInstitutesCount: 8, // 7 IISERs (Berhampur, Bhopal, Kolkata, Mohali, Pune, Thiruvananthapuram, Tirupati) + IISc Bangalore + IIT Madras BS Medical Sciences
    officialSources: [
      { title: 'IISER Admissions Official', url: 'https://iiseradmission.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['IAT-2026', 'IAT-2025']
  },

  // ==================== STATE LEVEL EXAMS ====================
  {
    examId: 'MHT-CET-2026',
    name: 'Maharashtra Common Entrance Test (PCM Group)',
    hindiName: 'महाराष्ट्र कॉमन एंट्रेंस टेस्ट',
    shortName: 'MHT-CET',
    year: '2026',
    level: 'state',
    state: 'Maharashtra',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'State Common Entrance Test Cell, Maharashtra',
    officialWebsite: 'https://cetcell.mahacet.org',
    notification: {
      releaseDate: '2026-01-12',
      applicationStart: '2026-01-16',
      applicationEnd: '2026-03-08',
      correctionWindow: '2026-03-12 to 2026-03-15',
      admitCardDate: '2026-04-10',
      examDates: ['PCM Group: April 16 to April 30, 2026'],
      resultDate: 'June 10, 2026',
      counsellingStart: 'June/July 2026 via Centralized Admission Process (CAP)',
      brochureUrl: 'https://cetcell.mahacet.org'
    },
    eligibility: {
      qualifyingExam: 'HSC / Class 12 with Physics and Mathematics along with Chemistry/Biotech/Biology/Technical/Computer Science',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry or equivalent technical'],
      minMarksGeneral: '45% marks in PCM aggregate',
      minMarksReserved: '40% marks for backward class categories, EWS and PwD belonging to Maharashtra State only',
      ageLimit: 'No upper age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit',
      stateDomicileRequirement: '85% State Quota reserved for Maharashtra State Candidates; 15% All India Quota through JEE Main / MHT CET'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180, // 90 min Paper 1 (Math) + 90 min Paper 2 (Physics & Chemistry)
      totalQuestions: 150,
      totalMarks: 200,
      sections: [
        { name: 'Mathematics (Paper 1)', questionsCount: 50, marksPerQuestion: 2, negativeMarking: 0, type: 'MCQ (2 marks each)' },
        { name: 'Physics (Paper 2 Part A)', questionsCount: 50, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ (1 mark each)' },
        { name: 'Chemistry (Paper 2 Part B)', questionsCount: 50, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ (1 mark each)' }
      ],
      languages: ['English', 'Marathi', 'Urdu']
    },
    markingScheme: {
      correct: 2, // 2 marks for Math, 1 mark for Physics/Chemistry
      incorrect: 0,
      unattempted: 0,
      rules: 'No negative marking. 2 marks per question in Mathematics (50 Q = 100 M). 1 mark per question in Physics (50 Q = 50 M) & Chemistry (50 Q = 50 M). Approx 20% weightage from Class 11 and 80% from Class 12 State Board/NCERT syllabus.'
    },
    syllabusSummary: 'Maharashtra State Board of Secondary and Higher Secondary Education syllabus (80% Class 12 + 20% Class 11 core topics).',
    counsellingAuthority: 'State CET Cell Centralized Admission Process (CAP)',
    participatingInstitutesCount: 350, // COEP Pune, VJTI Mumbai, SPIT, PICT Pune, etc.
    officialSources: [
      { title: 'Maharashtra State CET Cell', url: 'https://cetcell.mahacet.org' }
    ],
    lastVerified: '2026-03-15',
    versions: ['MHT-CET-2026', 'MHT-CET-2025']
  },
  {
    examId: 'KCET-2026',
    name: 'Karnataka Common Entrance Test (UGCET)',
    hindiName: 'कर्नाटक कॉमन एंट्रेंस टेस्ट',
    shortName: 'KCET',
    year: '2026',
    level: 'state',
    state: 'Karnataka',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Karnataka Examinations Authority (KEA)',
    officialWebsite: 'https://cetonline.karnataka.gov.in/kea',
    notification: {
      releaseDate: '2026-01-08',
      applicationStart: '2026-01-10',
      applicationEnd: '2026-02-28',
      admitCardDate: '2026-04-05',
      examDates: ['April 18 - 19, 2026'],
      resultDate: 'May 20, 2026',
      brochureUrl: 'https://cetonline.karnataka.gov.in/kea'
    },
    eligibility: {
      qualifyingExam: '2nd PUC / 12th Std with English as one of the languages and Physics & Mathematics along with Chemistry/Bio/Tech',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry/Electronics/Computer'],
      minMarksGeneral: '45% aggregate in optional subjects',
      minMarksReserved: '40% for SC, ST, Category-I and OBC (2A, 2B, 3A and 3B) of Karnataka',
      ageLimit: 'No age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit',
      stateDomicileRequirement: 'Candidates must satisfy one of the Government of Karnataka Domicile/Study clauses (Clause A to O)'
    },
    pattern: {
      mode: 'Pen and Paper (OMR)',
      durationMinutes: 240, // 3 sessions of 80 minutes each (Physics, Chemistry, Math)
      totalQuestions: 180,
      totalMarks: 180,
      sections: [
        { name: 'Physics', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English', 'Kannada']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 for each correct answer. No negative marking. Merit rank is evaluated with 50% weightage to KCET score and 50% to PUC/Class 12 board marks in PCM.'
    },
    syllabusSummary: 'Department of Pre-University Education of Karnataka 1st & 2nd PUC syllabus (NCERT aligned).',
    counsellingAuthority: 'Karnataka Examinations Authority (KEA)',
    participatingInstitutesCount: 220, // RVCE Bengaluru, BMSCE, MSRIT, PES, UVCE
    officialSources: [
      { title: 'KEA Official Website', url: 'https://cetonline.karnataka.gov.in/kea' }
    ],
    lastVerified: '2026-03-15',
    versions: ['KCET-2026', 'KCET-2025']
  },
  {
    examId: 'WBJEE-2026',
    name: 'West Bengal Joint Entrance Examination',
    hindiName: 'पश्चिम बंगाल संयुक्त प्रवेश परीक्षा',
    shortName: 'WBJEE',
    year: '2026',
    level: 'state',
    state: 'West Bengal',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'West Bengal Joint Entrance Examinations Board (WBJEEB)',
    officialWebsite: 'https://wbjeeb.nic.in',
    notification: {
      releaseDate: '2025-12-20',
      applicationStart: '2025-12-23',
      applicationEnd: '2026-02-05',
      correctionWindow: '2026-02-07 to 2026-02-09',
      admitCardDate: '2026-04-18',
      examDates: ['April 26, 2026 (Paper 1: Math 11:00-13:00, Paper 2: Phy & Chem 14:00-16:00)'],
      resultDate: 'June 05, 2026',
      brochureUrl: 'https://wbjeeb.nic.in'
    },
    eligibility: {
      qualifyingExam: 'Class 12 / Higher Secondary Exam with Physics and Mathematics along with Chemistry/Bio/Tech/CS',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '45% in PCM aggregate (60% for Jadavpur University)',
      minMarksReserved: '40% for SC, ST, OBC-A, OBC-B, PwD candidates of West Bengal',
      ageLimit: 'Lower age limit 17 years as on Dec 31, 2026. No upper age limit except for Marine Engineering (max 25 years)',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Pen and Paper (OMR)',
      durationMinutes: 240, // 120 min Paper 1 (Math) + 120 min Paper 2 (Physics & Chemistry)
      totalQuestions: 155,
      totalMarks: 200,
      sections: [
        { name: 'Mathematics (Cat 1: 50Q, Cat 2: 15Q, Cat 3: 10Q)', questionsCount: 75, marksPerQuestion: 1, negativeMarking: 0.25, type: 'Multiple Categories' },
        { name: 'Physics (Cat 1: 30Q, Cat 2: 5Q, Cat 3: 5Q)', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0.25, type: 'Multiple Categories' },
        { name: 'Chemistry (Cat 1: 30Q, Cat 2: 5Q, Cat 3: 5Q)', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0.25, type: 'Multiple Categories' }
      ],
      languages: ['English', 'Bengali']
    },
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      rules: 'Category 1 (1 mark each, -0.25 negative); Category 2 (2 marks each, -0.5 negative); Category 3 (2 marks each, multiple correct, NO negative marking, partial marks for correct options without wrong selection).'
    },
    syllabusSummary: 'Pure Higher Secondary (10+2) syllabus of WBCHSE and equivalent central boards (CBSE/ICSE).',
    counsellingAuthority: 'WBJEEB Centralized e-Counselling',
    participatingInstitutesCount: 115, // Jadavpur University, Calcutta University, Heritage, IEM, KGEC Kalyani, JGEC
    officialSources: [
      { title: 'WBJEEB Official Portal', url: 'https://wbjeeb.nic.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['WBJEE-2026', 'WBJEE-2025']
  },
  {
    examId: 'COMEDK-2026',
    name: 'COMEDK Undergraduate Entrance Test (UGET)',
    hindiName: 'कॉमेडके अंडरग्रेजुएट एंट्रेंस टेस्ट',
    shortName: 'COMEDK UGET',
    year: '2026',
    level: 'state',
    state: 'Karnataka (All India Open)',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka',
    officialWebsite: 'https://www.comedk.org',
    notification: {
      releaseDate: '2026-01-20',
      applicationStart: '2026-02-01',
      applicationEnd: '2026-04-05',
      admitCardDate: '2026-05-02',
      examDates: ['May 10, 2026'],
      resultDate: 'May 28, 2026',
      brochureUrl: 'https://www.comedk.org'
    },
    eligibility: {
      qualifyingExam: 'Second PUC or 10+2 Higher Secondary or equivalent examination recognized by State / Central Government',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      minMarksGeneral: '45% aggregate in Physics, Chemistry and Mathematics',
      minMarksReserved: '40% for SC, ST and OBC candidates of Karnataka State',
      ageLimit: 'Candidate should have completed 17 years of age on or before 31st December of the year of admission',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 180,
      totalMarks: 180,
      sections: [
        { name: 'Physics', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 60, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 mark for each correct answer. No negative marking for wrong answers. In the event of a tie in total score, tie is broken by score in Mathematics, then Physics, then Chemistry, then age.'
    },
    syllabusSummary: 'Syllabus based on the existing syllabus of 11th and 12th standard / 1st and 2nd PUC (NCERT/CBSE pattern).',
    counsellingAuthority: 'COMEDK Online Centralized Counselling',
    participatingInstitutesCount: 190, // RV College, BMS College of Engg, Ramaiah Institute of Tech, Dayananda Sagar, etc.
    officialSources: [
      { title: 'COMEDK Official Website', url: 'https://www.comedk.org' }
    ],
    lastVerified: '2026-03-15',
    versions: ['COMEDK-2026', 'COMEDK-2025']
  },
  {
    examId: 'KEAM-2026',
    name: 'Kerala Engineering Architecture Medical Entrance Examination',
    hindiName: 'केरल इंजीनियरिंग प्रवेश परीक्षा',
    shortName: 'KEAM',
    year: '2026',
    level: 'state',
    state: 'Kerala',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Commissioner for Entrance Examinations (CEE Kerala)',
    officialWebsite: 'https://cee.kerala.gov.in',
    notification: {
      releaseDate: '2026-03-01',
      applicationStart: '2026-03-15',
      applicationEnd: '2026-04-18',
      admitCardDate: '2026-05-20',
      examDates: ['June 01 to June 09, 2026 (CBT Mode)'],
      resultDate: 'June 30, 2026',
      brochureUrl: 'https://cee.kerala.gov.in'
    },
    eligibility: {
      qualifyingExam: 'Higher Secondary Examination, Kerala, or Examinations recognized as equivalent thereto with PCM',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '45% marks in PCM put together',
      minMarksReserved: '40% marks for SEBC and PwD candidates of Kerala',
      ageLimit: 'Must be 17 years of age on Dec 31, 2026. No upper age limit.',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 150,
      totalMarks: 600,
      sections: [
        { name: 'Mathematics', questionsCount: 75, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Physics', questionsCount: 45, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 30, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 marks for each correct response, -1 for each wrong response. Engineering rank list is prepared by giving 50:50 equal weightage to KEAM CBT normalized score and Class 12 PCM board marks.'
    },
    syllabusSummary: 'Higher Secondary syllabus of Physics, Chemistry, and Mathematics prescribed by the Board of Higher Secondary Education Kerala.',
    counsellingAuthority: 'Centralized Allotment Process (CAP) by CEE Kerala',
    participatingInstitutesCount: 160, // College of Engineering Trivandrum (CET), Model Engineering College, TKM College of Engg, GEC Thrissur
    officialSources: [
      { title: 'CEE Kerala Official Portal', url: 'https://cee.kerala.gov.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['KEAM-2026', 'KEAM-2025']
  },
  {
    examId: 'GUJCET-2026',
    name: 'Gujarat Common Entrance Test',
    hindiName: 'गुजरात कॉमन एंट्रेंस टेस्ट',
    shortName: 'GUJCET',
    year: '2026',
    level: 'state',
    state: 'Gujarat',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
    officialWebsite: 'https://gujcet.gseb.org',
    notification: {
      releaseDate: '2026-01-10',
      applicationStart: '2026-01-20',
      applicationEnd: '2026-02-25',
      admitCardDate: '2026-03-15',
      examDates: ['March 30, 2026'],
      resultDate: 'May 08, 2026',
      brochureUrl: 'https://gujcet.gseb.org'
    },
    eligibility: {
      qualifyingExam: '10+2 (Science stream) from Gujarat Board or recognized Central Board',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '45% aggregate in PCM',
      minMarksReserved: '40% for SC/ST/SEBC/EWS candidates of Gujarat',
      ageLimit: 'No age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Pen and Paper (OMR)',
      durationMinutes: 180, // 120 min Physics+Chemistry + 60 min Math
      totalQuestions: 120,
      totalMarks: 120,
      sections: [
        { name: 'Physics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0.25, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0.25, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0.25, type: 'MCQ' }
      ],
      languages: ['Gujarati', 'Hindi', 'English']
    },
    markingScheme: {
      correct: 1,
      incorrect: -0.25,
      unattempted: 0,
      rules: '+1 mark for correct, -0.25 negative marking for incorrect answer. Merit list prepared with 50% GUJCET weightage and 50% Class 12 board marks (or 60:40 as determined by ACPC).'
    },
    syllabusSummary: 'GSEB Class 12 Physics, Chemistry, Mathematics syllabus (NCERT textbook based).',
    counsellingAuthority: 'Admission Committee for Professional Courses (ACPC Gujarat)',
    participatingInstitutesCount: 140, // DA-IICT, Nirma University, LD College of Engineering, VGEC
    officialSources: [
      { title: 'GSEB Official Portal', url: 'https://gujcet.gseb.org' },
      { title: 'ACPC Gujarat Counselling', url: 'https://acpc.gujarat.gov.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['GUJCET-2026', 'GUJCET-2025']
  },
  {
    examId: 'AP-EAPCET-2026',
    name: 'Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test',
    hindiName: 'आंध्र प्रदेश ईएपीसीईटी',
    shortName: 'AP EAPCET',
    year: '2026',
    level: 'state',
    state: 'Andhra Pradesh',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Jawaharlal Nehru Technological University Kakinada (JNTUK) on behalf of APSCHE',
    officialWebsite: 'https://cets.apsche.ap.gov.in/EAPCET',
    notification: {
      releaseDate: '2026-03-05',
      applicationStart: '2026-03-12',
      applicationEnd: '2026-04-20',
      admitCardDate: '2026-05-08',
      examDates: ['May 18 to May 23, 2026'],
      resultDate: 'June 12, 2026',
      brochureUrl: 'https://cets.apsche.ap.gov.in/EAPCET'
    },
    eligibility: {
      qualifyingExam: 'Intermediate (10+2) Examination of the Board of Intermediate Education, AP, or recognized equivalent',
      mandatorySubjects: ['Mathematics', 'Physics', 'Chemistry'],
      minMarksGeneral: '45% marks in subjects specified',
      minMarksReserved: '40% marks for reserved category candidates',
      ageLimit: 'Completed 16 years of age as on 31st December of the year of admission. No upper age limit.',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 160,
      totalMarks: 160,
      sections: [
        { name: 'Mathematics', questionsCount: 80, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Physics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English', 'Telugu', 'Urdu']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 mark for correct response. No negative marking.'
    },
    syllabusSummary: 'Board of Intermediate Education, Andhra Pradesh (BIEAP) 1st & 2nd Year syllabus.',
    counsellingAuthority: 'APSCHE Centralized Web Counselling',
    participatingInstitutesCount: 300, // AU College of Engineering, JNTU Kakinada, JNTU Anantapur, SVU Tirupati, VR Siddhartha
    officialSources: [
      { title: 'APSCHE Official Portal', url: 'https://cets.apsche.ap.gov.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['AP-EAPCET-2026', 'AP-EAPCET-2025']
  },
  {
    examId: 'TS-EAPCET-2026',
    name: 'Telangana Engineering, Agriculture and Pharmacy Common Entrance Test',
    hindiName: 'तेलंगाना ईएपीसीईटी',
    shortName: 'TS EAPCET',
    year: '2026',
    level: 'state',
    state: 'Telangana',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'JNTU Hyderabad on behalf of Telangana State Council of Higher Education (TSCHE)',
    officialWebsite: 'https://eapcet.tsche.ac.in',
    notification: {
      releaseDate: '2026-02-28',
      applicationStart: '2026-03-08',
      applicationEnd: '2026-04-15',
      admitCardDate: '2026-05-01',
      examDates: ['May 09 to May 13, 2026'],
      resultDate: 'May 30, 2026',
      brochureUrl: 'https://eapcet.tsche.ac.in'
    },
    eligibility: {
      qualifyingExam: 'Intermediate (10+2) conducted by the Telangana Board of Intermediate Education or recognized equivalent',
      mandatorySubjects: ['Mathematics', 'Physics', 'Chemistry'],
      minMarksGeneral: '45% marks in group subjects',
      minMarksReserved: '40% marks for reserved category candidates',
      ageLimit: 'Completed 16 years of age as on 31st December of the admission year',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 160,
      totalMarks: 160,
      sections: [
        { name: 'Mathematics', questionsCount: 80, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Physics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English', 'Telugu', 'Urdu']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 mark for each correct answer. No negative marking.'
    },
    syllabusSummary: 'Telangana State Board of Intermediate Education 1st and 2nd Year syllabus.',
    counsellingAuthority: 'TSCHE Centralized Web Counselling',
    participatingInstitutesCount: 220, // JNTU College of Engineering Hyderabad, OU College of Engg, CBIT, Vasavi, VNR VJIET
    officialSources: [
      { title: 'TSCHE Official Portal', url: 'https://eapcet.tsche.ac.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['TS-EAPCET-2026', 'TS-EAPCET-2025']
  },
  {
    examId: 'OJEE-2026',
    name: 'Odisha Joint Entrance Examination (B.Tech / Lateral Entry)',
    hindiName: 'ओडिशा संयुक्त प्रवेश परीक्षा',
    shortName: 'OJEE',
    year: '2026',
    level: 'state',
    state: 'Odisha',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Odisha Joint Entrance Examination Committee',
    officialWebsite: 'https://ojee.nic.in',
    notification: {
      releaseDate: '2026-01-25',
      applicationStart: '2026-02-05',
      applicationEnd: '2026-03-25',
      admitCardDate: '2026-04-25',
      examDates: ['May 04 - May 10, 2026'],
      resultDate: 'June 02, 2026',
      brochureUrl: 'https://ojee.nic.in'
    },
    eligibility: {
      qualifyingExam: '10+2 with PCM for B.Tech admission; Note: Regular 1st Year B.Tech admissions in Odisha primarily utilize JEE Main scores; OJEE conducts separate exam for Lateral Entry and Special B.Tech if vacant.',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '45% marks in PCM',
      minMarksReserved: '40% for SC/ST',
      ageLimit: 'No age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 120,
      totalQuestions: 120,
      totalMarks: 480,
      sections: [
        { name: 'Physics', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 marks for correct answer, -1 for incorrect answer. Regular B.Tech counselling is conducted under OJEE portal using JEE Main All India Ranks.'
    },
    syllabusSummary: 'CHSE Odisha + CBSE Class 11 and 12 Physics, Chemistry, and Mathematics.',
    counsellingAuthority: 'OJEE Committee Counselling',
    participatingInstitutesCount: 95, // OUTR Bhubaneswar, VSSUT Burla, IGIT Sarang, Silicon Institute
    officialSources: [
      { title: 'OJEE Official Portal', url: 'https://ojee.nic.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['OJEE-2026', 'OJEE-2025']
  },

  // ==================== STATE JEE-BASED ADMISSIONS (CLEARLY LABELED) ====================
  {
    examId: 'UPTAC-2026',
    name: 'Uttar Pradesh Technical Admission Counselling (AKTU / UPTAC)',
    hindiName: 'उत्तर प्रदेश तकनीकी प्रवेश काउंसलिंग',
    shortName: 'UPTAC',
    year: '2026',
    level: 'state',
    state: 'Uttar Pradesh',
    category: 'jee-based-admission',
    status: 'JEE-BASED ADMISSION',
    conductingAuthority: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
    officialWebsite: 'https://uptac.admissions.nic.in',
    notification: {
      releaseDate: '2026-05-15',
      applicationStart: '2026-06-01',
      applicationEnd: '2026-07-10',
      admitCardDate: 'N/A (Admission purely based on JEE Main Score)',
      examDates: ['No separate exam conducted. Uses JEE Main 2026 Score.'],
      resultDate: 'Counselling seat allotment rounds commence July 2026',
      brochureUrl: 'https://uptac.admissions.nic.in'
    },
    eligibility: {
      qualifyingExam: '10+2 Intermediate with Physics and Mathematics along with one optional subject (Chemistry/Bio/CS/Tech) + Valid JEE Main 2026 Score',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry/Tech/CS'],
      minMarksGeneral: '45% marks in PCM (or 40% for reserved category UP Domicile)',
      minMarksReserved: '40% for SC/ST',
      ageLimit: 'No age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'As per JEE Main attempt limits',
      stateDomicileRequirement: '85% seats reserved for UP domicile candidates; 15% All India Open seats in private and autonomous institutions'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 0,
      totalQuestions: 0,
      totalMarks: 0,
      sections: [],
      languages: ['English', 'Hindi']
    },
    markingScheme: {
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      rules: 'Admission is based purely on JEE Main All India Rank (CRL / Category Rank). No UPSEE exam is conducted anymore.'
    },
    syllabusSummary: 'Conforms to JEE Main examination syllabus as conducted by NTA.',
    counsellingAuthority: 'UPTAC (AKTU Lucknow)',
    participatingInstitutesCount: 750, // IET Lucknow, KNIT Sultanpur, BIET Jhansi, JSS Noida, Galgotias, AKGEC
    officialSources: [
      { title: 'UPTAC Official Portal', url: 'https://uptac.admissions.nic.in' },
      { title: 'AKTU Portal', url: 'https://aktu.ac.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['UPTAC-2026', 'UPTAC-2025']
  },
  {
    examId: 'JAC-DELHI-2026',
    name: 'Joint Admission Counselling Delhi (DTU, NSUT, IGDTUW, IIITD, DSEU)',
    hindiName: 'संयुक्त प्रवेश काउंसलिंग दिल्ली',
    shortName: 'JAC Delhi',
    year: '2026',
    level: 'state',
    state: 'Delhi (NCT)',
    category: 'jee-based-admission',
    status: 'JEE-BASED ADMISSION',
    conductingAuthority: 'Joint Admission Counselling Committee Delhi',
    officialWebsite: 'https://jacdelhi.admissions.nic.in',
    notification: {
      releaseDate: '2026-05-20',
      applicationStart: '2026-05-25',
      applicationEnd: '2026-06-25',
      admitCardDate: 'N/A (Admissions via JEE Main Score)',
      examDates: ['No separate exam. All admissions based on JEE Main 2026 Paper 1 (CRL).'],
      resultDate: 'Allotment rounds commence June/July 2026',
      brochureUrl: 'https://jacdelhi.admissions.nic.in'
    },
    eligibility: {
      qualifyingExam: 'Class 12 from CBSE / ICSE or recognized equivalent with 60% aggregate in PCM (for DTU, NSUT, DSEU); 70% aggregate in 5 subjects + 70% in Math (for IIIT-Delhi)',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      minMarksGeneral: '60% aggregate in PCM (DTU/NSUT)',
      minMarksReserved: '50% - 55% for SC/ST/OBC/PwD',
      ageLimit: 'Minimum 17 years and maximum 25 years on or before 1st October of the admission year',
      yearOfPassing: ['Any qualifying year conforming to JEE Main eligibility'],
      attemptLimit: 'As per JEE Main',
      stateDomicileRequirement: '85% Delhi Region (candidates passing 12th from Delhi schools); 15% Outside Delhi Region'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 0,
      totalQuestions: 0,
      totalMarks: 0,
      sections: [],
      languages: ['English']
    },
    markingScheme: {
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      rules: 'Ranks and seat allotment are strictly based on NTA JEE Main Common Rank List (CRL) with bonus points for sports/olympiads in IIIT-Delhi.'
    },
    syllabusSummary: 'Identical to NTA JEE Main syllabus.',
    counsellingAuthority: 'JAC Delhi Committee',
    participatingInstitutesCount: 5, // DTU, NSUT (Main & East/West), IGDTUW, IIIT-Delhi, DSEU
    officialSources: [
      { title: 'JAC Delhi Official Portal', url: 'https://jacdelhi.admissions.nic.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['JAC-DELHI-2026', 'JAC-DELHI-2025']
  },

  // ==================== UNIVERSITY / INSTITUTION LEVEL ====================
  {
    examId: 'BITSAT-2026',
    name: 'Birla Institute of Technology and Science Admission Test',
    hindiName: 'बिट्स पिलानी प्रवेश परीक्षा',
    shortName: 'BITSAT',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Birla Institute of Technology and Science (BITS Pilani)',
    officialWebsite: 'https://www.bitsadmission.com',
    notification: {
      releaseDate: '2026-01-14',
      applicationStart: '2026-01-15',
      applicationEnd: '2026-04-11',
      admitCardDate: 'Session 1: May 15, 2026 | Session 2: June 18, 2026',
      examDates: ['Session 1: May 20 - May 24, 2026', 'Session 2: June 22 - June 26, 2026'],
      resultDate: 'Scores displayed immediately on completion; Iteration rounds start July 2026',
      brochureUrl: 'https://www.bitsadmission.com'
    },
    eligibility: {
      qualifyingExam: 'Class 12 examination of 10+2 system from a recognized Central or State board or its equivalent with PCM and English',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics', 'English proficiency'],
      minMarksGeneral: 'Minimum 75% aggregate marks in PCM, with at least 60% marks in each of Physics, Chemistry, and Mathematics',
      minMarksReserved: 'No relaxation for reserved categories (admissions strictly on merit)',
      ageLimit: 'Only students who are appearing in Class 12 in 2026 or who have passed Class 12 in 2025 are eligible',
      yearOfPassing: ['2025', '2026'],
      attemptLimit: 'Maximum 2 attempts in consecutive passing years'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 130, // + 12 bonus questions if all 130 attempted!
      totalMarks: 390,
      sections: [
        { name: 'Part I: Physics', questionsCount: 30, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' },
        { name: 'Part II: Chemistry', questionsCount: 30, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' },
        { name: 'Part III: (a) English Proficiency & (b) Logical Reasoning', questionsCount: 30, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ (10 English + 20 LR)' },
        { name: 'Part IV: Mathematics', questionsCount: 40, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 3,
      incorrect: -1,
      unattempted: 0,
      rules: '+3 marks for each correct response, -1 mark for each incorrect response, 0 for unattempted. Candidates who attempt all 130 questions before the 3-hour limit can opt for 12 extra bonus questions (3 each in Physics, Chem, Math, and LR).'
    },
    syllabusSummary: 'NCERT Class 11 and 12 Physics, Chemistry, Mathematics + English grammar & vocabulary + Logical Reasoning.',
    counsellingAuthority: 'BITS Pilani Admission Division (Iterative Counselling)',
    participatingInstitutesCount: 4, // BITS Pilani (Pilani, K.K. Birla Goa, Hyderabad, Dubai campuses)
    officialSources: [
      { title: 'BITS Admission Division', url: 'https://www.bitsadmission.com' }
    ],
    lastVerified: '2026-03-15',
    versions: ['BITSAT-2026', 'BITSAT-2025']
  },
  {
    examId: 'VITEEE-2026',
    name: 'VIT Engineering Entrance Examination',
    hindiName: 'वीआईटी इंजीनियरिंग प्रवेश परीक्षा',
    shortName: 'VITEEE',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Vellore Institute of Technology (VIT)',
    officialWebsite: 'https://viteee.vit.ac.in',
    notification: {
      releaseDate: '2025-11-04',
      applicationStart: '2025-11-04',
      applicationEnd: '2026-03-31',
      admitCardDate: '2026-04-10 (Slot Booking)',
      examDates: ['April 19 - April 30, 2026'],
      resultDate: 'May 05, 2026',
      brochureUrl: 'https://viteee.vit.ac.in'
    },
    eligibility: {
      qualifyingExam: '10+2 Higher Secondary examination conducted by State Board / CBSE / ISC',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics / Biology'],
      minMarksGeneral: 'Minimum aggregate of 60% in Physics, Chemistry, and Mathematics/Biology',
      minMarksReserved: 'Minimum aggregate of 50% for SC/ST and Jammu & Kashmir / North Eastern states candidates',
      ageLimit: 'Candidates born on or after 1st July 2004 are eligible',
      yearOfPassing: ['2024', '2025', '2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 150,
      totalQuestions: 125,
      totalMarks: 125,
      sections: [
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Physics', questionsCount: 35, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 35, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Aptitude', questionsCount: 10, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'English', questionsCount: 5, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 for each correct answer. No negative marking.'
    },
    syllabusSummary: 'Class 11 and 12 curriculum spanning Physics, Chemistry, Mathematics, English, and Aptitude.',
    counsellingAuthority: 'VIT Centralized Web-based Counselling',
    participatingInstitutesCount: 4, // VIT Vellore, VIT Chennai, VIT-AP, VIT Bhopal
    officialSources: [
      { title: 'VIT Admissions Official Portal', url: 'https://viteee.vit.ac.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['VITEEE-2026', 'VITEEE-2025']
  },
  {
    examId: 'MET-2026',
    name: 'Manipal Entrance Test',
    hindiName: 'मणिपाल एंट्रेंस टेस्ट',
    shortName: 'MET',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Manipal Academy of Higher Education (MAHE)',
    officialWebsite: 'https://www.manipal.edu/met',
    notification: {
      releaseDate: '2025-10-15',
      applicationStart: '2025-10-15',
      applicationEnd: '2026-03-15',
      admitCardDate: '2026-04-12',
      examDates: ['Phase 1: April 18 - 19, 2026', 'Phase 2: May 16 - 17, 2026'],
      resultDate: 'June 01, 2026',
      brochureUrl: 'https://www.manipal.edu/met'
    },
    eligibility: {
      qualifyingExam: '10+2, A-Level, IB or equivalent examination with Physics, Mathematics & English as compulsory subjects with Chem/Bio/Tech/CS',
      mandatorySubjects: ['Physics', 'Mathematics', 'English', 'Chemistry/CS/Biotech'],
      minMarksGeneral: 'Minimum 50% marks in aggregate in Physics, Mathematics and any one optional subject',
      minMarksReserved: '50% aggregate in PCM',
      ageLimit: 'No age limit',
      yearOfPassing: ['Any passed / appearing in 2026'],
      attemptLimit: 'Can appear in both Phase 1 and Phase 2 (best score considered)'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 120,
      totalQuestions: 60,
      totalMarks: 240,
      sections: [
        { name: 'Mathematics (15 MCQ + 5 NAT)', questionsCount: 20, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' },
        { name: 'Physics (10 MCQ + 5 NAT)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' },
        { name: 'Chemistry (10 MCQ + 5 NAT)', questionsCount: 15, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ + Numerical' },
        { name: 'English (10 MCQ)', questionsCount: 10, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 marks for correct MCQ (-1 for wrong). For NAT questions, +4 marks for correct and NO negative marking. MET rank combines 50% MET score and 50% Class 12 board score.'
    },
    syllabusSummary: 'CBSE / NCERT 11th & 12th standard Physics, Chemistry, and Mathematics curriculum.',
    counsellingAuthority: 'MAHE Online Centralized Counselling',
    participatingInstitutesCount: 4, // MIT Manipal, MIT Bengaluru, Manipal University Jaipur, SMIT Sikkim
    officialSources: [
      { title: 'MAHE Admissions Official', url: 'https://www.manipal.edu' }
    ],
    lastVerified: '2026-03-15',
    versions: ['MET-2026', 'MET-2025']
  },
  {
    examId: 'SRMJEEE-2026',
    name: 'SRM Joint Engineering Entrance Examination',
    hindiName: 'एसआरएम संयुक्त इंजीनियरिंग प्रवेश परीक्षा',
    shortName: 'SRMJEEE',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'SRM Institute of Science and Technology',
    officialWebsite: 'https://www.srmist.edu.in',
    notification: {
      releaseDate: '2025-11-10',
      applicationStart: '2025-11-12',
      applicationEnd: 'Phase 1: April 16, 2026 | Phase 2: June 15, 2026',
      admitCardDate: 'Slot booking 3 days prior',
      examDates: ['Phase 1: April 22 - April 27, 2026', 'Phase 2: June 20 - June 24, 2026'],
      resultDate: 'Phase 1: May 02, 2026',
      brochureUrl: 'https://www.srmist.edu.in'
    },
    eligibility: {
      qualifyingExam: '10+2 from CBSE, State Board, ICSE or equivalent with Physics and Mathematics along with Chemistry/Biotech/Biology/CS',
      mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry'],
      minMarksGeneral: '60% aggregate in PCM (50% for select satellite campuses)',
      minMarksReserved: '50% aggregate for reserved',
      ageLimit: 'Must be 16 years and 6 months of age as on 31st July of the year of admission',
      yearOfPassing: ['2024', '2025', '2026'],
      attemptLimit: 'No attempt limit'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 150,
      totalQuestions: 125,
      totalMarks: 125,
      sections: [
        { name: 'Physics', questionsCount: 35, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 35, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'English', questionsCount: 5, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' },
        { name: 'Aptitude', questionsCount: 10, marksPerQuestion: 1, negativeMarking: 0, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 1,
      incorrect: 0,
      unattempted: 0,
      rules: '+1 mark for each correct answer. No negative marking for wrong answers.'
    },
    syllabusSummary: 'Class 11 and Class 12 Physics, Chemistry, and Mathematics curriculum.',
    counsellingAuthority: 'SRMIST Directorate of Admissions',
    participatingInstitutesCount: 5, // Kattankulathur, Ramapuram, Vadapalani, Tiruchirappalli, Delhi-NCR Ghaziabad, AP, Sonepat
    officialSources: [
      { title: 'SRMIST Official Admission Portal', url: 'https://www.srmist.edu.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['SRMJEEE-2026', 'SRMJEEE-2025']
  },
  {
    examId: 'AEEE-2026',
    name: 'Amrita Engineering Entrance Examination',
    hindiName: 'अमृता इंजीनियरिंग प्रवेश परीक्षा',
    shortName: 'AEEE',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'Amrita Vishwa Vidyapeetham',
    officialWebsite: 'https://www.amrita.edu/admissions/btech',
    notification: {
      releaseDate: '2025-11-20',
      applicationStart: '2025-11-25',
      applicationEnd: 'Phase 1: Jan 10, 2026 | Phase 2: April 25, 2026',
      admitCardDate: 'Slot booking 5 days prior',
      examDates: ['Phase 1: Jan 16 - 21, 2026', 'Phase 2: May 02 - 10, 2026'],
      resultDate: 'Phase 1: Feb 05, 2026 | Phase 2: May 25, 2026',
      brochureUrl: 'https://www.amrita.edu'
    },
    eligibility: {
      qualifyingExam: '10+2 from recognized board with Physics, Chemistry and Mathematics',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics'],
      minMarksGeneral: 'Minimum 55% in each of Physics, Chemistry and Mathematics and 60% aggregate in PCM',
      minMarksReserved: '60% aggregate',
      ageLimit: 'Date of birth on or after July 1, 2005',
      yearOfPassing: ['2024', '2025', '2026'],
      attemptLimit: '70% seats via AEEE; 30% seats via JEE Main 2026 Percentile'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 150,
      totalQuestions: 100,
      totalMarks: 300,
      sections: [
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' },
        { name: 'Physics', questionsCount: 30, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 25, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' },
        { name: 'English', questionsCount: 5, marksPerQuestion: 3, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 3,
      incorrect: -1,
      unattempted: 0,
      rules: '+3 marks for correct response, -1 mark for incorrect response, 0 for unattempted.'
    },
    syllabusSummary: 'Class 11 & 12 syllabus aligned with CBSE/State Boards.',
    counsellingAuthority: 'Amrita Centralized B.Tech Admissions Counselling (CSAP)',
    participatingInstitutesCount: 6, // Coimbatore, Amritapuri, Bengaluru, Chennai, Amaravati, Nanded
    officialSources: [
      { title: 'Amrita Admissions Portal', url: 'https://www.amrita.edu/admissions' }
    ],
    lastVerified: '2026-03-15',
    versions: ['AEEE-2026', 'AEEE-2025']
  },
  {
    examId: 'KIITEE-2026',
    name: 'Kalinga Institute of Industrial Technology Entrance Examination',
    hindiName: 'केआईआईटी प्रवेश परीक्षा',
    shortName: 'KIITEE',
    year: '2026',
    level: 'university',
    category: 'entrance-exam',
    status: 'ACTIVE',
    conductingAuthority: 'KIIT Deemed to be University',
    officialWebsite: 'https://kiitee.kiit.ac.in',
    notification: {
      releaseDate: '2025-11-10',
      applicationStart: '2025-11-15',
      applicationEnd: 'Phase 1: March 20, 2026',
      admitCardDate: 'Slot booking available',
      examDates: ['Phase 1: March 27 - 31, 2026', 'Phase 2: June 2026'],
      resultDate: 'April 10, 2026',
      brochureUrl: 'https://kiitee.kiit.ac.in'
    },
    eligibility: {
      qualifyingExam: '10+2 with Physics, Chemistry and Mathematics',
      mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics'],
      minMarksGeneral: 'At least 60% marks in aggregate in PCM',
      minMarksReserved: '60% marks',
      ageLimit: 'Born on or after July 1, 2005',
      yearOfPassing: ['2024', '2025', '2026'],
      attemptLimit: 'No application fee charged for KIITEE'
    },
    pattern: {
      mode: 'Computer Based Test (CBT)',
      durationMinutes: 180,
      totalQuestions: 120,
      totalMarks: 480,
      sections: [
        { name: 'Physics', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Chemistry', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' },
        { name: 'Mathematics', questionsCount: 40, marksPerQuestion: 4, negativeMarking: 1, type: 'MCQ' }
      ],
      languages: ['English']
    },
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0,
      rules: '+4 marks for each correct response, -1 mark for each incorrect response.'
    },
    syllabusSummary: 'Class 11 & 12 Physics, Chemistry, and Mathematics CBSE syllabus.',
    counsellingAuthority: 'KIIT Admissions Counselling',
    participatingInstitutesCount: 1,
    officialSources: [
      { title: 'KIITEE Official Portal', url: 'https://kiitee.kiit.ac.in' }
    ],
    lastVerified: '2026-03-15',
    versions: ['KIITEE-2026', 'KIITEE-2025']
  }
];
