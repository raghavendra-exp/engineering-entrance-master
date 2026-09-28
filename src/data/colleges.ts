import type { College } from '../types';

export const COLLEGES_DATA: College[] = [
  // ==================== IITs ====================
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    instituteType: 'IIT',
    state: 'Maharashtra',
    city: 'Mumbai',
    officialWebsite: 'https://www.iitb.ac.in',
    admissionExams: ['JEE Advanced'],
    counsellingAuthority: 'JoSAA',
    nirfRank: 3,
    branches: ['Computer Science and Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Aerospace Engineering', 'Civil Engineering', 'Metallurgical Engineering and Materials Science'],
    officialSeatsCount: 1360,
    estimatedFeePerYear: '₹2,28,000 (Tuition + Hostel/Mess; 100% tuition waiver for SC/ST/PwD and family income < ₹1 Lakh)',
    placementStats: {
      highestPackageLPA: '168.0',
      averagePackageLPA: '23.5',
      medianPackageLPA: '19.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'AI', openingRank: 1, closingRank: 68, year: '2025', round: 'Round 5' },
      { branch: 'Electrical Engineering', category: 'OPEN', quota: 'AI', openingRank: 110, closingRank: 460, year: '2025', round: 'Round 5' },
      { branch: 'Mechanical Engineering', category: 'OPEN', quota: 'AI', openingRank: 650, closingRank: 1680, year: '2025', round: 'Round 5' }
    ],
    source: 'JoSAA Official Allotment Archives & IITB Official Placement Report',
    lastVerified: '2026-03-15'
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    instituteType: 'IIT',
    state: 'Delhi (NCT)',
    city: 'New Delhi',
    officialWebsite: 'https://home.iitd.ac.in',
    admissionExams: ['JEE Advanced'],
    counsellingAuthority: 'JoSAA',
    nirfRank: 2,
    branches: ['Computer Science and Engineering', 'Electrical Engineering', 'Mathematics and Computing', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Biochemical Engineering and Biotechnology'],
    officialSeatsCount: 1210,
    estimatedFeePerYear: '₹2,25,000 (Subject to income-based waivers)',
    placementStats: {
      highestPackageLPA: '150.0',
      averagePackageLPA: '24.2',
      medianPackageLPA: '20.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'AI', openingRank: 25, closingRank: 116, year: '2025', round: 'Round 5' },
      { branch: 'Mathematics and Computing', category: 'OPEN', quota: 'AI', openingRank: 120, closingRank: 330, year: '2025', round: 'Round 5' },
      { branch: 'Electrical Engineering', category: 'OPEN', quota: 'AI', openingRank: 280, closingRank: 620, year: '2025', round: 'Round 5' }
    ],
    source: 'JoSAA Official Cutoff Records',
    lastVerified: '2026-03-15'
  },
  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    instituteType: 'IIT',
    state: 'Tamil Nadu',
    city: 'Chennai',
    officialWebsite: 'https://www.iitm.ac.in',
    admissionExams: ['JEE Advanced'],
    counsellingAuthority: 'JoSAA',
    nirfRank: 1, // #1 Engineering Institution in NIRF
    branches: ['Computer Science and Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Aerospace Engineering', 'Chemical Engineering', 'Civil Engineering', 'Naval Architecture and Ocean Engineering'],
    officialSeatsCount: 1130,
    estimatedFeePerYear: '₹2,20,000',
    placementStats: {
      highestPackageLPA: '140.0',
      averagePackageLPA: '22.8',
      medianPackageLPA: '18.5',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'AI', openingRank: 50, closingRank: 155, year: '2025', round: 'Round 5' },
      { branch: 'Electrical Engineering', category: 'OPEN', quota: 'AI', openingRank: 340, closingRank: 950, year: '2025', round: 'Round 5' },
      { branch: 'Aerospace Engineering', category: 'OPEN', quota: 'AI', openingRank: 1200, closingRank: 3200, year: '2025', round: 'Round 5' }
    ],
    source: 'NIRF Official Data & JoSAA Archives',
    lastVerified: '2026-03-15'
  },

  // ==================== NITs ====================
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    instituteType: 'NIT',
    state: 'Tamil Nadu',
    city: 'Tiruchirappalli',
    officialWebsite: 'https://www.nitt.edu',
    admissionExams: ['JEE Main'],
    counsellingAuthority: 'JoSAA / CSAB',
    nirfRank: 9,
    branches: ['Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Instrumentation and Control'],
    officialSeatsCount: 1040,
    estimatedFeePerYear: '₹1,55,000',
    placementStats: {
      highestPackageLPA: '52.0',
      averagePackageLPA: '16.5',
      medianPackageLPA: '14.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'OS', openingRank: 850, closingRank: 1520, year: '2025', round: 'Round 5' },
      { branch: 'Electronics and Communication Engineering', category: 'OPEN', quota: 'OS', openingRank: 1800, closingRank: 3600, year: '2025', round: 'Round 5' },
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'HS', openingRank: 1200, closingRank: 4400, year: '2025', round: 'Round 5' }
    ],
    source: 'JoSAA Cutoff Portal',
    lastVerified: '2026-03-15'
  },
  {
    id: 'nit-surathkal',
    name: 'National Institute of Technology Karnataka, Surathkal',
    shortName: 'NIT Surathkal',
    instituteType: 'NIT',
    state: 'Karnataka',
    city: 'Surathkal / Mangalore',
    officialWebsite: 'https://www.nitk.ac.in',
    admissionExams: ['JEE Main'],
    counsellingAuthority: 'JoSAA / CSAB',
    nirfRank: 12,
    branches: ['Computer Science and Engineering', 'Information Technology', 'Artificial Intelligence', 'Electronics and Communication', 'Electrical and Electronics', 'Mechanical Engineering'],
    officialSeatsCount: 930,
    estimatedFeePerYear: '₹1,60,000',
    placementStats: {
      highestPackageLPA: '54.0',
      averagePackageLPA: '18.2',
      medianPackageLPA: '15.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'OS', openingRank: 1100, closingRank: 2150, year: '2025', round: 'Round 5' },
      { branch: 'Information Technology', category: 'OPEN', quota: 'OS', openingRank: 2200, closingRank: 3400, year: '2025', round: 'Round 5' }
    ],
    source: 'JoSAA Archive Data',
    lastVerified: '2026-03-15'
  },

  // ==================== IIITs ====================
  {
    id: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad',
    shortName: 'IIIT Hyderabad',
    instituteType: 'IIIT',
    state: 'Telangana',
    city: 'Hyderabad',
    officialWebsite: 'https://www.iiit.ac.in',
    admissionExams: ['JEE Main (via IIIT-H Portal)', 'UGEE (Dual Degree)', 'Olympiad Channel'],
    counsellingAuthority: 'IIIT Hyderabad Independent Admissions Portal',
    nirfRank: 55,
    branches: ['Computer Science and Engineering (B.Tech & Dual Degree)', 'Electronics and Communication Engineering (B.Tech & Dual Degree)', 'Computing and Human Sciences (Dual Degree)'],
    officialSeatsCount: 340,
    estimatedFeePerYear: '₹3,90,000 (Tuition + Hostel)',
    placementStats: {
      highestPackageLPA: '69.0',
      averagePackageLPA: '30.2',
      medianPackageLPA: '28.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering (4 Year)', category: 'OPEN', quota: 'AI', openingRank: 250, closingRank: 1450, year: '2025', round: 'Round 3' },
      { branch: 'Electronics and Communication Engineering', category: 'OPEN', quota: 'AI', openingRank: 1500, closingRank: 3800, year: '2025', round: 'Round 3' }
    ],
    source: 'IIIT Hyderabad Official Admissions Division',
    lastVerified: '2026-03-15'
  },
  {
    id: 'iiit-allahabad',
    name: 'Indian Institute of Information Technology Allahabad',
    shortName: 'IIIT Allahabad',
    instituteType: 'IIIT',
    state: 'Uttar Pradesh',
    city: 'Prayagraj / Allahabad',
    officialWebsite: 'https://www.iiita.ac.in',
    admissionExams: ['JEE Main'],
    counsellingAuthority: 'JoSAA / CSAB',
    nirfRank: 89,
    branches: ['Information Technology', 'Information Technology (Business Informatics)', 'Electronics and Communication Engineering'],
    officialSeatsCount: 420,
    estimatedFeePerYear: '₹2,10,000',
    placementStats: {
      highestPackageLPA: '56.0',
      averagePackageLPA: '26.1',
      medianPackageLPA: '22.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Information Technology', category: 'OPEN', quota: 'AI', openingRank: 3500, closingRank: 6200, year: '2025', round: 'Round 5' },
      { branch: 'Electronics and Communication Engineering', category: 'OPEN', quota: 'AI', openingRank: 6500, closingRank: 10400, year: '2025', round: 'Round 5' }
    ],
    source: 'JoSAA Cutoff Records',
    lastVerified: '2026-03-15'
  },

  // ==================== BITS PILANI CAMPUSES ====================
  {
    id: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    shortName: 'BITS Pilani',
    instituteType: 'BITS',
    state: 'Rajasthan',
    city: 'Pilani',
    officialWebsite: 'https://www.bits-pilani.ac.in',
    admissionExams: ['BITSAT'],
    counsellingAuthority: 'BITS Pilani Admissions Division',
    nirfRank: 20,
    branches: ['B.E. Computer Science', 'B.E. Electrical and Electronics', 'B.E. Electronics and Communication', 'B.E. Mechanical', 'B.E. Chemical', 'M.Sc. Economics (Dual)', 'M.Sc. Mathematics (Dual)'],
    officialSeatsCount: 1050,
    estimatedFeePerYear: '₹5,75,000 (Tuition + Hostel/Mess; Merit-cum-Need scholarships up to 80% available)',
    placementStats: {
      highestPackageLPA: '60.7',
      averagePackageLPA: '20.9',
      medianPackageLPA: '18.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'B.E. Computer Science', category: 'OPEN', quota: 'AI', openingRank: 331, closingRank: 335, year: '2025', round: 'Iteration 5 (Score out of 390)' },
      { branch: 'B.E. Electronics and Communication', category: 'OPEN', quota: 'AI', openingRank: 295, closingRank: 302, year: '2025', round: 'Iteration 5' },
      { branch: 'B.E. Mechanical', category: 'OPEN', quota: 'AI', openingRank: 245, closingRank: 254, year: '2025', round: 'Iteration 5' }
    ],
    source: 'BITS Pilani Official Admission Iteration Records',
    lastVerified: '2026-03-15'
  },

  // ==================== TOP STATE & AUTONOMOUS UNIVERSITIES ====================
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University (formerly DCE)',
    shortName: 'DTU',
    instituteType: 'State-Gov',
    state: 'Delhi (NCT)',
    city: 'Delhi',
    officialWebsite: 'http://dtu.ac.in',
    admissionExams: ['JEE Main'],
    counsellingAuthority: 'JAC Delhi',
    nirfRank: 29,
    branches: ['Computer Science and Engineering', 'Information Technology', 'Software Engineering', 'Mathematics and Computing', 'Electronics and Communication', 'Mechanical Engineering', 'Electrical Engineering'],
    officialSeatsCount: 2500,
    estimatedFeePerYear: '₹2,19,000',
    placementStats: {
      highestPackageLPA: '82.0',
      averagePackageLPA: '15.4',
      medianPackageLPA: '13.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'Delhi Region (85%)', openingRank: 2400, closingRank: 12500, year: '2025', round: 'Round 5' },
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'Outside Delhi (15%)', openingRank: 1800, closingRank: 4200, year: '2025', round: 'Round 5' }
    ],
    source: 'JAC Delhi Cutoff Archives',
    lastVerified: '2026-03-15'
  },
  {
    id: 'jadavpur-university',
    name: 'Jadavpur University (Faculty of Engineering and Technology)',
    shortName: 'Jadavpur University',
    instituteType: 'State-Gov',
    state: 'West Bengal',
    city: 'Kolkata',
    officialWebsite: 'http://www.jaduniv.edu.in',
    admissionExams: ['WBJEE'],
    counsellingAuthority: 'WBJEEB Centralized Counselling',
    nirfRank: 10,
    branches: ['Computer Science and Engineering', 'Information Technology', 'Electronics and Telecommunication Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Power Engineering'],
    officialSeatsCount: 1280,
    estimatedFeePerYear: '₹2,400 to ₹10,000 (One of the most affordable premier institutions in India)',
    placementStats: {
      highestPackageLPA: '85.0',
      averagePackageLPA: '18.1',
      medianPackageLPA: '15.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'OPEN', quota: 'WB Domicile (Home State)', openingRank: 1, closingRank: 85, year: '2025', round: 'Round 3 (GMR)' },
      { branch: 'Information Technology', category: 'OPEN', quota: 'WB Domicile', openingRank: 90, closingRank: 280, year: '2025', round: 'Round 3' },
      { branch: 'Electronics and Telecommunication', category: 'OPEN', quota: 'WB Domicile', openingRank: 110, closingRank: 320, year: '2025', round: 'Round 3' }
    ],
    source: 'WBJEEB Official Counselling Cutoffs',
    lastVerified: '2026-03-15'
  },
  {
    id: 'coep-pune',
    name: 'COEP Technological University (College of Engineering Pune)',
    shortName: 'COEP Pune',
    instituteType: 'State-Gov',
    state: 'Maharashtra',
    city: 'Pune',
    officialWebsite: 'https://www.coeptech.ac.in',
    admissionExams: ['MHT-CET', 'JEE Main (AI Quota)'],
    counsellingAuthority: 'Maharashtra State CET Cell (CAP)',
    nirfRank: 73,
    branches: ['Computer Engineering', 'Artificial Intelligence and Data Science', 'Electronics and Telecommunication', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Metallurgical Engineering'],
    officialSeatsCount: 920,
    estimatedFeePerYear: '₹1,05,000',
    placementStats: {
      highestPackageLPA: '50.5',
      averagePackageLPA: '11.8',
      medianPackageLPA: '10.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Engineering', category: 'GOPENS', quota: 'Maharashtra State (Home)', openingRank: 99.82, closingRank: 99.91, year: '2025', round: 'CAP Round 3 (Percentile)' },
      { branch: 'Electronics and Telecommunication', category: 'GOPENS', quota: 'Maharashtra State', openingRank: 99.30, closingRank: 99.60, year: '2025', round: 'CAP Round 3' }
    ],
    source: 'MHT-CET CAP Allotment Cutoffs',
    lastVerified: '2026-03-15'
  },
  {
    id: 'rvce-bengaluru',
    name: 'R.V. College of Engineering, Bengaluru',
    shortName: 'RVCE',
    instituteType: 'Private-University',
    state: 'Karnataka',
    city: 'Bengaluru',
    officialWebsite: 'https://www.rvce.edu.in',
    admissionExams: ['KCET', 'COMEDK UGET'],
    counsellingAuthority: 'KEA / COMEDK',
    nirfRank: 96,
    branches: ['Computer Science and Engineering', 'Information Science and Engineering', 'Artificial Intelligence and Machine Learning', 'Electronics and Communication', 'Electrical and Electronics', 'Mechanical Engineering'],
    officialSeatsCount: 1420,
    estimatedFeePerYear: '₹95,000 (KCET Govt Quota) / ₹2,75,000 (COMEDK Quota)',
    placementStats: {
      highestPackageLPA: '62.0',
      averagePackageLPA: '14.5',
      medianPackageLPA: '12.0',
      year: '2024-25'
    },
    sampleCutoffs: [
      { branch: 'Computer Science and Engineering', category: 'GM', quota: 'KCET Karnataka', openingRank: 120, closingRank: 380, year: '2025', round: 'Round 2' },
      { branch: 'Computer Science and Engineering', category: 'GM', quota: 'COMEDK All India', openingRank: 180, closingRank: 490, year: '2025', round: 'Round 3' }
    ],
    source: 'KEA and COMEDK Allotment Matrices',
    lastVerified: '2026-03-15'
  }
];
