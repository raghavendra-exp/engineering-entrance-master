import type { NCERTChapterMapping } from '../types';

export const NCERT_MAPPINGS: NCERTChapterMapping[] = [
  // Class 11 Physics
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 1,
    chapterTitle: 'Units and Measurements',
    topics: ['SI Units', 'Error Analysis & Propagation', 'Significant Figures', 'Dimensional Analysis'],
    entranceRelevance: 'Direct 1-2 questions every year in JEE Main and State CETs. Key for dimensional checking and vernier/screw gauge accuracy.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=1-8',
    pyqFrequencyJee: 'Very High (1-2 questions guaranteed in every session)'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 2,
    chapterTitle: 'Motion in a Straight Line',
    topics: ['Frame of reference', 'v-t and x-t graphs', 'Uniform acceleration kinematic equations', 'Relative velocity in 1D'],
    entranceRelevance: 'Foundation for entire mechanics. Graph-based questions and stopping distance problems frequently asked.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=2-8',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 3,
    chapterTitle: 'Motion in a Plane',
    topics: ['Vectors operations', 'Projectile motion', 'Uniform circular motion kinematics', 'Relative motion in 2D'],
    entranceRelevance: 'High yield for ground projectile, horizontal projectile, and river-swimmer / rain-umbrella problems.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=3-8',
    pyqFrequencyJee: 'Very High'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 4,
    chapterTitle: 'Laws of Motion',
    topics: ['Newton laws', 'FBD and constraint equations', 'Friction (static, kinetic, rolling)', 'Circular dynamics & banking'],
    entranceRelevance: 'Core bedrock of mechanics. Block on block friction, pulley constraints, and banked road questions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=4-8',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 5,
    chapterTitle: 'Work, Energy and Power',
    topics: ['Work-Energy Theorem', 'Conservative forces & potential energy curve', 'Spring-mass systems', 'Collisions in 1D & 2D'],
    entranceRelevance: 'Indispensable tool. The Work-Energy Theorem solves complex mechanics problems much faster than Newton laws.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=5-8',
    pyqFrequencyJee: 'Very High'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 6,
    chapterTitle: 'System of Particles and Rotational Motion',
    topics: ['Center of Mass', 'Moment of Inertia', 'Torque and angular momentum conservation', 'Rolling without slipping'],
    entranceRelevance: 'Highest weightage chapter in Class 11 Physics. Pure rolling down incline and angular momentum conservation.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=6-8',
    pyqFrequencyJee: 'Very High (2-3 questions per paper)'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 7,
    chapterTitle: 'Gravitation',
    topics: ['Universal gravitation', 'Variation of g with height/depth/latitude', 'Escape speed and orbital motion', 'Kepler laws'],
    entranceRelevance: 'Direct conceptual and numerical questions. Very similar mathematical formulas to Electrostatics.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=7-8',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 8,
    chapterTitle: 'Mechanical Properties of Solids & Fluids',
    topics: ['Hooke law, Young modulus', 'Pascal law, Archimedes principle', 'Bernoulli theorem & Torricelli law', 'Surface tension & Viscosity'],
    entranceRelevance: 'Crucial for Bernoulli applications (Venturi meter, atomizers), capillary rise, and terminal velocity.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph2=1-7',
    pyqFrequencyJee: 'Medium'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 11,
    chapterTitle: 'Thermodynamics & Kinetic Theory',
    topics: ['First law of thermodynamics', 'Isothermal, adiabatic, isobaric, isochoric work', 'Carnot engine efficiency', 'RMS & average speeds', 'Equipartition of energy'],
    entranceRelevance: 'Huge scoring area across both Physics and Chemistry. P-V cyclic work calculations frequently asked.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph2=3-7',
    pyqFrequencyJee: 'Very High (2 questions guaranteed)'
  },
  {
    classLevel: '11',
    subject: 'Physics',
    chapterNumber: 13,
    chapterTitle: 'Oscillations and Waves',
    topics: ['SHM differential equation', 'Time period of pendulum & spring', 'Superposition of waves', 'Standing waves in strings & organ pipes', 'Beats'],
    entranceRelevance: 'High scoring. Resonance in organ pipes, end correction, and beat frequency appear in nearly every session.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph2=5-7',
    pyqFrequencyJee: 'High'
  },

  // Class 12 Physics
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 1,
    chapterTitle: 'Electric Charges and Fields & Electrostatic Potential',
    topics: ['Coulomb law', 'Gauss law & flux', 'Equipotential surfaces', 'Dipole in electric field', 'Capacitors and dielectrics'],
    entranceRelevance: 'Core foundation of Class 12. Dielectric insertion, common potential sharing, and Gaussian surface flux.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=1-8',
    pyqFrequencyJee: 'Very High (2-3 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 3,
    chapterTitle: 'Current Electricity',
    topics: ['Drift velocity and Ohm law', 'Temperature coefficient of resistance', 'Cell combinations & Kirchhoff laws', 'Wheatstone bridge & Meter bridge'],
    entranceRelevance: 'Very high yield and straightforward scoring. Circuit analysis with Kirchhoff laws and bridge null-points.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=3-8',
    pyqFrequencyJee: 'Very High (2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 4,
    chapterTitle: 'Moving Charges, Magnetism & Matter',
    topics: ['Biot-Savart law', 'Ampere circuital law', 'Lorentz force and helical motion', 'Galvanometer to ammeter/voltmeter', 'Dia-, para-, ferromagnetic materials'],
    entranceRelevance: 'Magnetic field at axis of loop, galvanometer shunts, and magnetic materials classification.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=4-8',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 6,
    chapterTitle: 'Electromagnetic Induction & Alternating Current',
    topics: ['Faraday & Lenz laws', 'Motional EMF', 'Self & mutual inductance', 'Series LCR resonance', 'Power factor & transformer'],
    entranceRelevance: 'Resonance condition (Z=R), Q-factor, and Lenz law induced currents are heavily tested.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=6-8',
    pyqFrequencyJee: 'Very High'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 9,
    chapterTitle: 'Ray Optics and Wave Optics',
    topics: ['Total internal reflection', 'Lens maker formula & combinations', 'Prism deviation', 'Young Double Slit Experiment (YDSE)', 'Single slit diffraction'],
    entranceRelevance: 'Consistently 2-3 questions in every entrance examination across India. YDSE fringe shift and lens combinations.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=1-6',
    pyqFrequencyJee: 'Very High (2-3 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 11,
    chapterTitle: 'Modern Physics (Dual Nature, Atoms & Nuclei)',
    topics: ['Photoelectric effect equation', 'de Broglie wavelength', 'Bohr hydrogen transitions', 'Binding energy and mass defect', 'Nuclear fission & fusion'],
    entranceRelevance: 'Highest return on investment in the entire Physics syllabus. Easy, direct, highly predictable numerical questions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=3-6',
    pyqFrequencyJee: 'Extremely High (3-4 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Physics',
    chapterNumber: 14,
    chapterTitle: 'Semiconductor Electronics',
    topics: ['Energy bands & doping', 'p-n junction diode forward/reverse characteristics', 'Half-wave & full-wave rectifiers', 'Zener diode voltage regulator', 'Logic gates'],
    entranceRelevance: 'Almost 100% predictable 1-2 questions on truth tables of logic gates or Zener diode circuits.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=6-6',
    pyqFrequencyJee: 'High (1-2 questions guaranteed)'
  },

  // Class 11 Chemistry
  {
    classLevel: '11',
    subject: 'Chemistry',
    chapterNumber: 1,
    chapterTitle: 'Some Basic Concepts of Chemistry',
    topics: ['Mole concept & stoichiometry', 'Limiting reagent', 'Empirical formula', 'Concentration terms (M, m, X, ppm)'],
    entranceRelevance: 'Prerequisite for physical chemistry. Molarity vs molality temperature dependence and limiting reagent problems.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=1-6',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Chemistry',
    chapterNumber: 2,
    chapterTitle: 'Structure of Atom',
    topics: ['Bohr model transitions', 'de Broglie & Heisenberg principles', 'Quantum numbers (n, l, m, s)', 'Aufbau, Pauli, Hund rules', 'Radial & angular nodes'],
    entranceRelevance: 'Direct questions on electronic configurations of Cr/Cu, orbital shapes, node counting, and Bohr radii/velocities.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=2-6',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Chemistry',
    chapterNumber: 4,
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    topics: ['Lewis structures & formal charge', 'VSEPR geometry & shapes', 'Hybridization (sp to sp3d2)', 'Molecular Orbital Theory (MOT)', 'Hydrogen bonding'],
    entranceRelevance: 'The single most important chapter in Inorganic Chemistry. MOT bond orders, magnetic properties, and VSEPR geometries.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=4-6',
    pyqFrequencyJee: 'Extremely High (2-3 questions per paper)'
  },
  {
    classLevel: '11',
    subject: 'Chemistry',
    chapterNumber: 5,
    chapterTitle: 'Chemical Thermodynamics & Equilibrium',
    topics: ['Enthalpy & Hess law', 'Gibbs free energy & spontaneity', 'Kp and Kc relations', 'Le Chatelier principle', 'pH, buffer solutions & Ksp'],
    entranceRelevance: 'Massive weightage. Calculation of buffer pH, solubility products, and Gibbs free energy conditions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=5-6',
    pyqFrequencyJee: 'Very High (2-3 questions per paper)'
  },
  {
    classLevel: '11',
    subject: 'Chemistry',
    chapterNumber: 8,
    chapterTitle: 'Organic Chemistry: Basic Principles and Hydrocarbons',
    topics: ['IUPAC naming', 'Inductive, resonance, hyperconjugation', 'Carbocation/free radical stability', 'Markovnikov & anti-Markovnikov', 'Ozonolysis', 'Aromaticity'],
    entranceRelevance: 'The vital backbone of Organic Chemistry. Carbocation rearrangements and electrophilic additions are heavily tested.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech2=2-3',
    pyqFrequencyJee: 'Very High (3 questions per paper)'
  },

  // Class 12 Chemistry
  {
    classLevel: '12',
    subject: 'Chemistry',
    chapterNumber: 1,
    chapterTitle: 'Solutions',
    topics: ['Raoult law and azeotropes', 'Colligative properties', 'van ’t Hoff factor (i)', 'Abnormal molar mass'],
    entranceRelevance: 'Colligative properties numericals with degree of dissociation or association are guaranteed in every paper.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=1-5',
    pyqFrequencyJee: 'High (1-2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Chemistry',
    chapterNumber: 2,
    chapterTitle: 'Electrochemistry',
    topics: ['Nernst equation & cell potential', 'Electrolytic conductance & Kohlrausch law', 'Faraday laws of electrolysis', 'Batteries & fuel cells'],
    entranceRelevance: 'Nernst equation for galvanic cells and limiting molar conductivities calculation.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=2-5',
    pyqFrequencyJee: 'Very High (1-2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Chemistry',
    chapterNumber: 3,
    chapterTitle: 'Chemical Kinetics',
    topics: ['Order and molecularity', 'Integrated rate law for zero & first order', 'Half-life', 'Arrhenius equation & activation energy'],
    entranceRelevance: 'First-order rate calculations and Arrhenius temperature ratio problems are standard questions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=3-5',
    pyqFrequencyJee: 'High (1-2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Chemistry',
    chapterNumber: 4,
    chapterTitle: 'd- and f-Block Elements & Coordination Compounds',
    topics: ['Transition metal properties & colored ions', 'Lanthanoid contraction', 'Werner theory & IUPAC naming', 'CFT crystal field splitting', 'Isomerism & magnetic moments'],
    entranceRelevance: 'Cornerstone of Class 12 Inorganic. CFSE calculation, spin-only magnetic moments, and optical isomerism.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=4-5',
    pyqFrequencyJee: 'Very High (2-3 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Chemistry',
    chapterNumber: 6,
    chapterTitle: 'Organic Compounds with Oxygen & Nitrogen',
    topics: ['SN1 and SN2 mechanisms', 'Reimer-Tiemann & Kolbe reactions', 'Aldol condensation & Cannizzaro', 'Hoffmann bromamide & Gabriel synthesis', 'Diazonium salts'],
    entranceRelevance: 'Covers over 50% of the entire Organic Chemistry entrance exam questions. Named reactions and multi-step synthesis.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech2=1-5',
    pyqFrequencyJee: 'Extremely High (3-4 questions per paper)'
  },

  // Class 11 & 12 Mathematics
  {
    classLevel: '11',
    subject: 'Mathematics',
    chapterNumber: 1,
    chapterTitle: 'Sets, Relations and Functions',
    topics: ['Cartesian product & relations', 'Types of relations (equivalence)', 'Domain, codomain, range of functions', 'One-one, onto functions and inverse'],
    entranceRelevance: 'Foundation for entire calculus. Identifying domain and range of composite and inverse functions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=1-9',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Mathematics',
    chapterNumber: 4,
    chapterTitle: 'Complex Numbers and Quadratic Equations',
    topics: ['Algebra of complex numbers', 'Modulus and argument properties', 'Cube roots of unity', 'Relation between roots and coefficients', 'Location of roots'],
    entranceRelevance: 'Geometry of complex numbers (|z - z0| = r) and location of roots conditions in quadratics.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=4-9',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Mathematics',
    chapterNumber: 8,
    chapterTitle: 'Sequences and Series',
    topics: ['AP and GP general terms & sum', 'Infinite GP', 'Arithmetic-Geometric Progression (AGP)', 'AM-GM inequality applications'],
    entranceRelevance: 'Sum of special series and AM >= GM minimization questions.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=8-9',
    pyqFrequencyJee: 'High'
  },
  {
    classLevel: '11',
    subject: 'Mathematics',
    chapterNumber: 9,
    chapterTitle: 'Straight Lines and Conic Sections',
    topics: ['Distance and angle between lines', 'Family of lines', 'Standard circles and tangents', 'Parabola, ellipse, hyperbola equations and tangents'],
    entranceRelevance: 'Massive weightage in engineering exams. Tangent equations in slope form and locus problems.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=9-9',
    pyqFrequencyJee: 'Extremely High (3-4 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 3,
    chapterTitle: 'Matrices and Determinants',
    topics: ['Matrix multiplication & transpose', 'Symmetric & skew-symmetric matrices', 'Adjoint and inverse of matrix', 'Cramer rule & consistency of linear equations'],
    entranceRelevance: '1-2 questions guaranteed. Cramer’s rule (\\Delta = 0, \\Delta_x = 0) system of equations is asked in nearly every shift.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh1=3-6',
    pyqFrequencyJee: 'Very High (2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 5,
    chapterTitle: 'Continuity, Differentiability & Application of Derivatives',
    topics: ['Limits and L’Hôpital rule', 'Continuity & differentiability tests', 'Chain rule & implicit differentiation', 'Monotonicity & local/global extrema', 'Rolle & LMVT'],
    entranceRelevance: 'Huge calculus section. Finding maximum/minimum values, critical points, and tangents.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh1=5-6',
    pyqFrequencyJee: 'Extremely High (3-4 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 7,
    chapterTitle: 'Integrals and Application of Integrals',
    topics: ['Indefinite integration techniques', 'Definite integral properties (King property)', 'Leibniz differentiation of integrals', 'Area bounded between curves'],
    entranceRelevance: 'Central pillar of JEE Math. Area between parabolas and lines, King’s property definite integrals.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=1-6',
    pyqFrequencyJee: 'Extremely High (3 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 9,
    chapterTitle: 'Differential Equations',
    topics: ['Order and degree', 'Variable separable method', 'Homogeneous equations', 'Linear differential equations with integrating factor'],
    entranceRelevance: 'Solving 1st order linear differential equations with integrating factor e^{\\int P dx}. Highly scoring.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=3-6',
    pyqFrequencyJee: 'High (1-2 questions guaranteed)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 10,
    chapterTitle: 'Vectors and Three-Dimensional Geometry',
    topics: ['Dot and cross products', 'Scalar triple product', 'Line in 3D: vector and Cartesian form', 'Shortest distance between skew lines', 'Coplanarity of lines'],
    entranceRelevance: 'Highest return on investment in entire Mathematics syllabus. Shortest distance formula between skew lines.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=4-6',
    pyqFrequencyJee: 'Extremely High (3-4 questions per paper)'
  },
  {
    classLevel: '12',
    subject: 'Mathematics',
    chapterNumber: 13,
    chapterTitle: 'Probability',
    topics: ['Conditional probability', 'Multiplication theorem', 'Bayes theorem', 'Random variable & probability distribution'],
    entranceRelevance: 'Conditional probability and multi-stage urn/coin problems via Bayes theorem.',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=6-6',
    pyqFrequencyJee: 'High (1-2 questions per paper)'
  }
];
