import type { CounsellingBody } from '../types';

export const COUNSELLING_DATA: CounsellingBody[] = [
  {
    id: 'counselling-josaa',
    name: 'Joint Seat Allocation Authority (JoSAA)',
    type: 'national-josaa',
    authority: 'Ministry of Education, Government of India (Joint IIT-NIT Board)',
    officialWebsite: 'https://josaa.nic.in',
    participatingInstitutes: 'All 23 IITs, 32 NITs, IIEST Shibpur, 26 IIITs, and 40+ Other-Government Funded Technical Institutes (GFTIs)',
    admissionsThrough: ['JEE Advanced (for IITs)', 'JEE Main Paper 1 (for NITs, IIITs, GFTIs)'],
    keyRules: [
      'Single unified seat allocation window for all premier central institutes.',
      'Choice locking is mandatory before deadline; unlocked choices will be auto-locked.',
      'Options after seat allotment: Freeze (accept and exit further rounds), Slide (accept but open to higher preference in same institute), Float (accept but open to higher preference across all institutes).',
      'Dual Reporting: Seat acceptance fee payment and online document verification mandatory to retain allocated seat.',
      'Withdrawal from counselling allowed up to penultimate round with refund after processing deductions.'
    ],
    eligibility: 'Valid rank in JEE Advanced 2026 (for IITs) or JEE Main 2026 CRL (for NITs/IIITs/GFTIs) + Class 12 75% aggregate (65% for SC/ST) or top 20 percentile in board.',
    roundsCount: 5, // Typically 5 to 6 rounds followed by CSAB Special Rounds
    timeline: 'Commences typically within 4-7 days of JEE Advanced result declaration (June - July).',
    officialBrochureUrl: 'https://josaa.nic.in',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-csab',
    name: 'Central Seat Allocation Board (CSAB - Special Rounds & NEUT/Supernumerary)',
    type: 'national-csab',
    authority: 'Central Seat Allocation Board (Organizing NIT)',
    officialWebsite: 'https://csab.nic.in',
    participatingInstitutes: 'All NITs, IIITs, and GFTIs with vacant seats after JoSAA completion',
    admissionsThrough: ['JEE Main CRL / Category Rank'],
    keyRules: [
      'Conducted strictly for vacant seats remaining in NIT+ system after conclusion of all JoSAA rounds.',
      'Candidates who did not register in JoSAA, or did not get a seat, or withdrew/cancelled, or want to upgrade their JoSAA seat can participate.',
      'Fresh choice filling is mandatory for CSAB Special Rounds.',
      'Two special rounds (Special Round 1 and Special Round 2) are conducted.',
      'Separate participation fee and seat acceptance fee rules apply.'
    ],
    eligibility: 'All candidates with a valid JEE Main CRL and fulfilling Class 12 eligibility criteria.',
    roundsCount: 2,
    timeline: 'July - August (immediately after final JoSAA round).',
    officialBrochureUrl: 'https://csab.nic.in',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-mht-cet-cap',
    name: 'Maharashtra Centralized Admission Process (MHT-CET CAP)',
    type: 'state',
    authority: 'State Common Entrance Test Cell, Maharashtra',
    officialWebsite: 'https://cetcell.mahacet.org',
    participatingInstitutes: 'COEP Technological University, VJTI Mumbai, SPIT, PICT Pune, Walchand College of Engg, and 350+ Maharashtra Engineering Colleges',
    admissionsThrough: ['MHT-CET PCM Percentile (for 85% Maharashtra State Quota)', 'JEE Main CRL (for 15% All India Quota seats)'],
    keyRules: [
      'Document verification at Scrutiny Centers (e-Scrutiny or Physical Scrutiny) is mandatory to be included in Merit List.',
      'Options: Auto-Freeze (if 1st preference is allotted, seat is automatically frozen and candidate must take admission), Self-Freeze, or Betterment (participate in next round).',
      'Typically 3 CAP rounds conducted, followed by Institute-Level / ACAP vacancy rounds.'
    ],
    eligibility: '45% marks in 12th PCM (40% for Maharashtra reserved) + Valid MHT-CET score or JEE Main score.',
    roundsCount: 3,
    timeline: 'June - August.',
    officialBrochureUrl: 'https://cetcell.mahacet.org',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-kea-karnataka',
    name: 'KEA Karnataka UGCET Counselling',
    type: 'state',
    authority: 'Karnataka Examinations Authority (KEA)',
    officialWebsite: 'https://cetonline.karnataka.gov.in/kea',
    participatingInstitutes: 'RV College of Engineering, BMS College of Engg, MSRIT, PES, UVCE, and 220+ Karnataka Government & Private Aided/Unaided Colleges',
    admissionsThrough: ['KCET UGCET Rank (50% KCET + 50% 12th Board PCM)'],
    keyRules: [
      'Strictly reserved for candidates fulfilling Karnataka Domicile/Study Clauses (Clause A to O).',
      'Choice Entry system with 4 Options in each round: Choice 1 (Satisfied, accept seat and pay fee), Choice 2 (Satisfied but wish to participate in next round for higher preference), Choice 3 (Not satisfied, hold no seat, participate in next round), Choice 4 (Quit counselling).',
      'Mock allotment followed by Round 1, Round 2, and Extended/Casual Vacancy Round.'
    ],
    eligibility: 'Karnataka Domicile clause satisfaction + 45% marks in optional subjects in 12th/PUC.',
    roundsCount: 3,
    timeline: 'June - August.',
    officialBrochureUrl: 'https://cetonline.karnataka.gov.in/kea',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-wbjeeb',
    name: 'WBJEEB Centralized e-Counselling',
    type: 'state',
    authority: 'West Bengal Joint Entrance Examinations Board',
    officialWebsite: 'https://wbjeeb.nic.in',
    participatingInstitutes: 'Jadavpur University, Calcutta University (Tech Campus), KGEC Kalyani, JGEC Jalpaiguri, Heritage Institute, IEM Kolkata, and 110+ Bengal Institutes',
    admissionsThrough: ['WBJEE GMR (General Merit Rank)', 'JEE Main CRL (for 10% All India Quota in private un-aided colleges)'],
    keyRules: [
      'All candidates with a valid General Merit Rank (GMR) in WBJEE are eligible for registration.',
      'Jadavpur University 90% General seats are reserved for West Bengal Domicile candidates (10% All India).',
      'Upgradation Choice: Yes Upgradation / No Upgradation during physical document verification at designated Virtual Reporting Centers.'
    ],
    eligibility: 'Pass 10+2 with PCM (minimum 45% aggregate; 60% for Jadavpur University engineering programs).',
    roundsCount: 3,
    timeline: 'July - August.',
    officialBrochureUrl: 'https://wbjeeb.nic.in',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-uptac',
    name: 'Uttar Pradesh Technical Admission Counselling (UPTAC / AKTU)',
    type: 'state',
    authority: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    officialWebsite: 'https://uptac.admissions.nic.in',
    participatingInstitutes: 'IET Lucknow, KNIT Sultanpur, BIET Jhansi, JSS Academy Noida, AKGEC Ghaziabad, Galgotias, and 750+ UP Engineering Colleges',
    admissionsThrough: ['JEE Main CRL / Category Rank exclusively (No separate UPSEE exam conducted)'],
    keyRules: [
      'Conducted strictly online based on JEE Main scores.',
      'Freeze and Float options across regular rounds.',
      '85% seats reserved for UP domicile candidates; 15% All India seats available in private and autonomous engineering colleges.',
      'Two Special / Spot rounds conducted for vacant seats.'
    ],
    eligibility: 'Passed 10+2 with PCM + Valid JEE Main score.',
    roundsCount: 6,
    timeline: 'July - September.',
    officialBrochureUrl: 'https://uptac.admissions.nic.in',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-jac-delhi',
    name: 'Joint Admission Counselling Delhi (JAC Delhi)',
    type: 'state',
    authority: 'JAC Delhi Committee (DTU / NSUT / IGDTUW / IIIT-D / DSEU)',
    officialWebsite: 'https://jacdelhi.admissions.nic.in',
    participatingInstitutes: 'Delhi Technological University (DTU), Netaji Subhas University of Technology (NSUT), IGDTUW (Women), IIIT Delhi, DSEU',
    admissionsThrough: ['JEE Main Paper 1 CRL (with IIIT-Delhi bonus points for Olympiads/Sports)'],
    keyRules: [
      '85% Delhi Region Quota (for candidates who passed 12th from schools located within NCT of Delhi).',
      '15% Outside Delhi Region Quota for all other candidates.',
      'Extremely high demand programs (DTU CSE, NSUT CSE, IIITD CSE).',
      'Upgradation rounds and physical spot round conducted for remaining vacant seats.'
    ],
    eligibility: '60% marks in PCM aggregate in 12th board for DTU/NSUT; 70% in aggregate and 70% in Math for IIIT-D.',
    roundsCount: 5,
    timeline: 'June - July.',
    officialBrochureUrl: 'https://jacdelhi.admissions.nic.in',
    lastVerified: '2026-03-15'
  },
  {
    id: 'counselling-bits-iteration',
    name: 'BITS Pilani Iteration & Admission Allotment',
    type: 'university',
    authority: 'Admissions Division, BITS Pilani',
    officialWebsite: 'https://www.bitsadmission.com',
    participatingInstitutes: 'BITS Pilani (Pilani Campus), BITS Pilani (K.K. Birla Goa Campus), BITS Pilani (Hyderabad Campus)',
    admissionsThrough: ['BITSAT 2026 Total Score (out of 390)'],
    keyRules: [
      'Multi-round iterative seat allotment process.',
      'Candidates fill preference order across all branches in Pilani, Goa, and Hyderabad.',
      'If allocated a seat, candidate must pay admission fees to stay in consideration for upward iterations.',
      'Strict merit-based allotment without any reservation quotas.'
    ],
    eligibility: 'Minimum 75% aggregate in 12th PCM with at least 60% individually in Physics, Chemistry, and Math + Valid BITSAT score.',
    roundsCount: 6,
    timeline: 'July - August.',
    officialBrochureUrl: 'https://www.bitsadmission.com',
    lastVerified: '2026-03-15'
  }
];
