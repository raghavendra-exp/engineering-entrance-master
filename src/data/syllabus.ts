import type { SyllabusChapter } from '../types';

export const SYLLABUS_DATA: SyllabusChapter[] = [
  // ==========================================
  // PHYSICS CHAPTERS (23 Major Topic Groups)
  // ==========================================
  {
    id: 'phy-units-measurements',
    subject: 'Physics',
    name: 'Units and Measurements',
    hindiName: 'इकाइयां एवं मापन',
    classLevel: '11',
    unit: 'Mechanics & Foundation',
    weightagePercent: '3-4%',
    topics: [
      'Units of measurement', 'System of units (SI)', 'Fundamental and derived units',
      'Least count and accuracy of instruments', 'Errors in measurement (absolute, relative, percentage error)',
      'Propagation of errors in mathematical operations', 'Significant figures and rounding off rules',
      'Dimensions of physical quantities and dimensional analysis', 'Applications of dimensional analysis & limitations'
    ],
    prerequisites: ['Basic high school algebra', 'Powers of ten and scientific notation'],
    keyFormulae: [
      { name: 'Relative & Percentage Error', formula: 'Fractional = \\frac{\\Delta x}{x}, \\quad \\% = \\frac{\\Delta x}{x} \\times 100\\%', desc: 'Relative and fractional uncertainty quantification' },
      { name: 'Error Propagation in Power', formula: 'Z = A^p B^q \\implies \\frac{\\Delta Z}{Z} = p \\frac{\\Delta A}{A} + q \\frac{\\Delta B}{B}', desc: 'Maximum fractional error propagation rule' },
      { name: 'Vernier Caliper Least Count', formula: 'LC = 1 \\text{ MSD} - 1 \\text{ VSD}', desc: 'Smallest measurable distance with vernier scale' },
      { name: 'Screw Gauge Least Count', formula: 'LC = \\frac{\\text{Pitch}}{\\text{Total Circular Scale Divisions}}', desc: 'Precision micrometer least count formula' }
    ],
    importantResults: [
      'Pure numbers and trigonometric/logarithmic/exponential arguments are strictly dimensionless [M^0 L^0 T^0].',
      'Principle of Homogeneity: Only quantities possessing the same dimensional formula can be added or subtracted.',
      'A dimensionally correct equation may not be physically correct, but a physically correct equation must be dimensionally consistent.'
    ],
    commonMistakes: [
      'Subtracting percentage errors in division operations (errors always compound/add in worst-case analysis).',
      'Forgetting zero errors in screw gauge (positive zero error must be subtracted, negative zero error added).'
    ],
    shortTricks: [
      'Check dimensions of four options in JEE Main questions before solving lengthy algebra—frequently 2-3 options can be eliminated immediately.'
    ],
    ncertChapterName: 'Chapter 1: Units and Measurements',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=1-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'Medium', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-kinematics',
    subject: 'Physics',
    name: 'Kinematics',
    hindiName: 'शुद्ध गतिकी',
    classLevel: '11',
    unit: 'Mechanics',
    weightagePercent: '6-8%',
    topics: [
      'Frame of reference, Motion in a straight line', 'Position-time graph, Speed and velocity',
      'Uniform and non-uniform motion, Average speed and instantaneous velocity',
      'Uniformly accelerated motion and kinematic equations', 'Relative velocity in 1D and 2D',
      'Motion in a plane, Projectile motion (ground to ground & inclined plane)',
      'Equation of path of a projectile', 'Uniform circular motion kinematics'
    ],
    prerequisites: ['Basic differentiation & integration', 'Vector addition & dot/cross products'],
    keyFormulae: [
      { name: 'Kinematic Equations', formula: 'v = u + at, \\quad s = ut + \\frac{1}{2}at^2, \\quad v^2 - u^2 = 2as', desc: 'Equations for constant acceleration' },
      { name: 'Distance in n-th Second', formula: 's_n = u + \\frac{a}{2}(2n - 1)', desc: 'Displacement during the specific n-th second' },
      { name: 'Ground Projectile Range', formula: 'R = \\frac{u^2 \\sin(2\\theta)}{g}, \\quad H = \\frac{u^2 \\sin^2\\theta}{2g}, \\quad T = \\frac{2u \\sin\\theta}{g}', desc: 'Max height, time of flight and horizontal range' },
      { name: 'Trajectory Equation', formula: 'y = x \\tan\\theta \\left(1 - \\frac{x}{R}\\right)', desc: 'Parabolic trajectory in terms of range' },
      { name: 'Relative Velocity', formula: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B', desc: 'Velocity of body A relative to body B' }
    ],
    importantResults: [
      'Complementary projection angles (\\theta and 90° - \\theta) yield identical horizontal ranges for identical launch speeds.',
      'Radius of curvature at any point of projectile path is \\rho = \\frac{v^2}{a_\\perp}. At top point, \\rho = \\frac{u^2 \\cos^2\\theta}{g}.',
      'Area under v-t curve gives displacement; slope of v-t curve gives instantaneous acceleration.'
    ],
    commonMistakes: [
      'Applying constant acceleration formulas when acceleration depends on time or position (must integrate a = dv/dt or v dv/ds).',
      'Mixing up speed and velocity in average calculations: v_avg = total displacement / total time, not (v1+v2)/2.'
    ],
    shortTricks: [
      'For river swimmer crossing in minimum time, aim perpendicular to river flow (t_min = d / v_br).',
      'When two bodies are projected towards each other under gravity, relative acceleration is zero (straight-line relative motion).'
    ],
    ncertChapterName: 'Chapter 2: Motion in a Straight Line & Chapter 3: Motion in a Plane',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=2-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-laws-of-motion',
    subject: 'Physics',
    name: 'Laws of Motion',
    hindiName: 'गति के नियम',
    classLevel: '11',
    unit: 'Mechanics',
    weightagePercent: '6-8%',
    topics: [
      'Newton’s first law: inertia', 'Newton’s second law: momentum and impulse',
      'Newton’s third law: action-reaction pairs', 'Law of conservation of linear momentum',
      'Equilibrium of concurrent forces and Lami’s theorem', 'Free Body Diagrams (FBD)',
      'Static and kinetic friction, laws of friction', 'Rolling friction and angle of repose',
      'Dynamics of uniform circular motion: Centripetal force', 'Vehicle banking on curved roads'
    ],
    prerequisites: ['Vector resolution', 'Kinematics in 1D and 2D'],
    keyFormulae: [
      { name: 'Second Law of Motion', formula: '\\vec{F}_{ext} = \\frac{d\\vec{p}}{dt} = m\\vec{a}', desc: 'Rate of change of momentum is net external force' },
      { name: 'Impulse-Momentum Theorem', formula: '\\vec{J} = \\int \\vec{F} dt = \\Delta \\vec{p}', desc: 'Impulse equals total change in linear momentum' },
      { name: 'Limiting Static Friction', formula: 'f_s \\le \\mu_s N, \\quad f_k = \\mu_k N', desc: 'Friction bounds and normal reaction' },
      { name: 'Optimum Road Banking Speed', formula: 'v = \\sqrt{rg \\tan\\theta}', desc: 'Speed where friction is zero on banked road' },
      { name: 'Max Safe Speed with Friction', formula: 'v_{max} = \\sqrt{rg \\frac{\\mu + \\tan\\theta}{1 - \\mu \\tan\\theta}}', desc: 'Upper limit of vehicle velocity on banked curve' }
    ],
    importantResults: [
      'In non-inertial frames (acceleration \\vec{A}), a pseudo force -m\\vec{A} must be applied at the centre of mass.',
      'Tension in a mass-bearing rope varies continuously along its length; in massless string/pulley systems tension is uniform.',
      'Normal reaction is not always equal to mg; it adjusts to prevent interpenetration of surfaces.'
    ],
    commonMistakes: [
      'Assuming friction always opposes motion; friction actually opposes relative sliding between contact surfaces (can cause forward motion in walking/cars).',
      'Treating action and reaction forces as acting on the same object (they act on two different bodies and never cancel each other).'
    ],
    shortTricks: [
      'For pulley systems with multiple movable blocks, use string constraint: \\sum \\vec{T} \\cdot \\vec{a} = 0 to rapidly link accelerations.'
    ],
    ncertChapterName: 'Chapter 4: Laws of Motion',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=4-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-work-energy-power',
    subject: 'Physics',
    name: 'Work, Energy and Power',
    hindiName: 'कार्य, ऊर्जा एवं शक्ति',
    classLevel: '11',
    unit: 'Mechanics',
    weightagePercent: '5-7%',
    topics: [
      'Work done by constant and variable force', 'Kinetic energy and Work-Energy Theorem',
      'Conservative and non-conservative forces', 'Potential energy of a spring and gravitational potential energy',
      'Conservation of mechanical energy', 'Equilibrium types (stable, unstable, neutral)',
      'Power (instantaneous and average)', 'Collisions in 1D and 2D (elastic and inelastic)',
      'Coefficient of restitution'
    ],
    prerequisites: ['Laws of motion', 'Dot product of vectors', 'Definite integration'],
    keyFormulae: [
      { name: 'Work Done by Variable Force', formula: 'W = \\int_{r_1}^{r_2} \\vec{F} \\cdot d\\vec{r}', desc: 'Line integral of force vector along path' },
      { name: 'Work-Energy Theorem', formula: 'W_{all} = \\Delta K = K_f - K_i', desc: 'Work done by ALL forces equals change in kinetic energy' },
      { name: 'Conservative Force Field', formula: 'F = -\\frac{dU}{dx} \\quad \\text{or} \\quad \\vec{F} = -\\nabla U', desc: 'Force is negative spatial gradient of potential energy' },
      { name: 'Spring Potential Energy', formula: 'U_s = \\frac{1}{2} k x^2', desc: 'Elastic energy stored in ideal Hooke spring' },
      { name: 'Coefficient of Restitution', formula: 'e = \\frac{v_2 - v_1}{u_1 - u_2} = \\frac{\\text{velocity of separation}}{\\text{velocity of approach}}', desc: 'Ratio of separation to approach speed along normal' }
    ],
    importantResults: [
      'Work done by conservative force in any closed loop is zero (\\oint \\vec{F} \\cdot d\\vec{r} = 0).',
      'Stable equilibrium occurs at potential minimum: dU/dx = 0 and d^2U/dx^2 > 0.',
      'In a completely inelastic collision (e = 0), bodies stick together and kinetic energy loss is maximized.'
    ],
    commonMistakes: [
      'Omitting work done by friction or normal force in the Work-Energy equation (remember: W_conservative + W_non-conservative + W_external = \\Delta K).',
      'Confusing coefficient of restitution along surface tangent with line of impact normal.'
    ],
    shortTricks: [
      'For vertical circular motion with light string of length L, critical speeds at bottom: v_B = \\sqrt{5gL} (to loop the loop), v_B = \\sqrt{2gL} (to oscillate 90°).'
    ],
    ncertChapterName: 'Chapter 5: Work, Energy and Power',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=5-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-rotational-motion',
    subject: 'Physics',
    name: 'System of Particles & Rotational Motion',
    hindiName: 'कणों के निकाय एवं घूर्णी गति',
    classLevel: '11',
    unit: 'Mechanics',
    weightagePercent: '8-10%',
    topics: [
      'Centre of mass of two-particle and rigid body systems', 'Momentum conservation and COM motion',
      'Torque and angular momentum', 'Conservation of angular momentum and applications',
      'Moment of inertia, radius of gyration', 'Parallel and perpendicular axes theorems',
      'Values of moment of inertia for simple geometrical objects', 'Rigid body rotation equations',
      'Rolling motion without slipping on horizontal and inclined planes'
    ],
    prerequisites: ['Newton’s laws of motion', 'Work and energy principles', 'Cross product of vectors'],
    keyFormulae: [
      { name: 'Centre of Mass Coordinates', formula: '\\vec{R}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{1}{M} \\int \\vec{r} dm', desc: 'Mass-weighted mean position vector' },
      { name: 'Parallel Axis Theorem', formula: 'I = I_{cm} + M d^2', desc: 'Moment of inertia about parallel axis at distance d' },
      { name: 'Perpendicular Axis Theorem', formula: 'I_z = I_x + I_y', desc: 'Applicable strictly to planar (lamina) bodies' },
      { name: 'Torque & Angular Acceleration', formula: '\\vec{\\tau} = \\vec{r} \\times \\vec{F} = I \\vec{\\alpha}', desc: 'Rotational analog of Newton second law' },
      { name: 'Pure Rolling Acceleration on Incline', formula: 'a = \\frac{g \\sin\\theta}{1 + \\frac{I_{cm}}{MR^2}}', desc: 'Linear acceleration of body rolling without slip' }
    ],
    importantResults: [
      'Angular momentum is conserved whenever external torque about that specific reference point is zero.',
      'In pure rolling on a stationary surface, the instantaneous point of contact has zero instantaneous velocity (v = 0). Work done by static friction is zero.',
      'Total kinetic energy in rolling = Translational KE + Rotational KE = \\frac{1}{2} M v_{cm}^2 + \\frac{1}{2} I_{cm} \\omega^2.'
    ],
    commonMistakes: [
      'Applying perpendicular axis theorem to 3D solid spheres or cylinders (only valid for 2D lamina in xy plane).',
      'Calculating torque about an accelerating point without including the pseudo-torque term.'
    ],
    shortTricks: [
      'Rank of acceleration down incline: Solid sphere > Solid cylinder > Hollow sphere > Ring (smaller I_{cm}/MR^2 reaches bottom faster).'
    ],
    ncertChapterName: 'Chapter 6: System of Particles and Rotational Motion',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=6-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-gravitation',
    subject: 'Physics',
    name: 'Gravitation',
    hindiName: 'गुरुत्वाकर्षण',
    classLevel: '11',
    unit: 'Mechanics',
    weightagePercent: '4-6%',
    topics: [
      'Universal law of gravitation', 'Acceleration due to gravity and its variation with altitude, depth, and latitude',
      'Gravitational potential and potential energy', 'Escape speed and orbital speed of satellites',
      'Kepler’s laws of planetary motion', 'Geostationary and polar satellites', 'Weightlessness'
    ],
    prerequisites: ['Circular motion', 'Conservation of energy and angular momentum'],
    keyFormulae: [
      { name: 'Gravitational Force', formula: 'F = G \\frac{m_1 m_2}{r^2}', desc: 'Universal law of inverse-square attraction' },
      { name: 'Variation of g with Altitude & Depth', formula: 'g_h \\approx g \\left(1 - \\frac{2h}{R}\\right) \\quad [h \\ll R], \\quad g_d = g \\left(1 - \\frac{d}{R}\\right)', desc: 'Acceleration due to gravity above and below surface' },
      { name: 'Escape Speed from Planet Surface', formula: 'v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}', desc: 'Minimum launch speed to escape planetary gravity' },
      { name: 'Satellite Orbital Speed & Period', formula: 'v_o = \\sqrt{\\frac{GM}{r}}, \\quad T^2 = \\frac{4\\pi^2}{GM} r^3', desc: 'Orbital velocity and Kepler third law relationship' }
    ],
    importantResults: [
      'Gravitational field inside a uniform spherical shell is strictly zero; potential inside is constant and equals -GM/R.',
      'Total mechanical energy of a bound satellite is negative: E = -K = U/2 = -\\frac{GMm}{2r}.',
      'Kepler’s second law (areal velocity dA/dt = L/2m = constant) is a direct consequence of conservation of angular momentum.'
    ],
    commonMistakes: [
      'Using the approximation formula g_h = g(1 - 2h/R) when h is comparable to R (e.g. h = R/2; must use g_h = g R^2 / (R+h)^2).',
      'Forgetting that gravitational potential energy is always negative relative to infinity.'
    ],
    shortTricks: [
      'Ratio of escape speed to orbital speed near Earth surface is always \\sqrt{2} (v_e = \\sqrt{2} v_o \\approx 1.414 v_o).'
    ],
    ncertChapterName: 'Chapter 7: Gravitation',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph1=7-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'Medium', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-thermodynamics',
    subject: 'Physics',
    name: 'Thermodynamics & Kinetic Theory of Gases',
    hindiName: 'ऊष्मागतिकी एवं गैसों का अणुगति सिद्धांत',
    classLevel: '11',
    unit: 'Heat & Thermodynamics',
    weightagePercent: '8-10%',
    topics: [
      'Thermal equilibrium and Zeroth law', 'Heat, work, and internal energy',
      'First law of thermodynamics and its applications', 'Isothermal, adiabatic, isobaric, isochoric processes',
      'Work done in various thermodynamic processes', 'Second law of thermodynamics: Reversible and irreversible processes',
      'Carnot engine and its efficiency', 'Kinetic theory of gases: Assumptions and pressure expression',
      'RMS, average, and most probable speeds', 'Degrees of freedom, Law of equipartition of energy',
      'Specific heat capacities (Cp, Cv) of monoatomic, diatomic, polyatomic gases', 'Mean free path'
    ],
    prerequisites: ['Ideal gas equation PV = nRT', 'Work-energy theorem', 'Basic calculus'],
    keyFormulae: [
      { name: 'First Law of Thermodynamics', formula: '\\Delta Q = \\Delta U + \\Delta W, \\quad \\Delta U = n C_v \\Delta T', desc: 'Conservation of energy in thermodynamic systems' },
      { name: 'Work in Adiabatic Process', formula: 'W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}', desc: 'Work done during reversible adiabatic expansion' },
      { name: 'Molar Heat Capacities', formula: 'C_p - C_v = R, \\quad \\gamma = \\frac{C_p}{C_v} = 1 + \\frac{2}{f}', desc: 'Mayer relation and adiabatic index with degrees of freedom' },
      { name: 'Gas Molecular Speeds', formula: 'v_{rms} = \\sqrt{\\frac{3RT}{M}}, \\quad v_{avg} = \\sqrt{\\frac{8RT}{\\pi M}}, \\quad v_{mp} = \\sqrt{\\frac{2RT}{M}}', desc: 'Root mean square, average, and peak Maxwell speeds' },
      { name: 'Carnot Engine Efficiency', formula: '\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}', desc: 'Maximum theoretical thermal efficiency between two reservoirs' }
    ],
    importantResults: [
      'Change in internal energy (\\Delta U) depends ONLY on initial and final temperature; it is zero for any cyclic process or ideal gas isothermal process.',
      'Slope of adiabatic curve on P-V indicator diagram is \\gamma times steeper than isothermal slope (dP/dV|_ad = \\gamma dP/dV|_iso).',
      'Area enclosed by a closed loop on a P-V diagram equals the net work done per cycle (clockwise = positive work, counter-clockwise = negative work).'
    ],
    commonMistakes: [
      'Mixing up physics and chemistry sign conventions (Physics: \\Delta Q = \\Delta U + W, where W is work done BY gas; Chemistry: \\Delta U = q + w, where w is work done ON system).',
      'Using Celsius temperatures instead of Kelvin in Carnot efficiency or RMS speed calculations.'
    ],
    shortTricks: [
      'For mixture of non-reacting gases: C_{v,mix} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2}, \\quad \\gamma_{mix} = \\frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}.'
    ],
    ncertChapterName: 'Chapter 11: Thermodynamics & Chapter 12: Kinetic Theory',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph2=3-7',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-oscillations-waves',
    subject: 'Physics',
    name: 'Oscillations and Waves',
    hindiName: 'दोलन एवं तरंगें',
    classLevel: '11',
    unit: 'Vibrations & Waves',
    weightagePercent: '6-8%',
    topics: [
      'Periodic and oscillatory motions, Simple Harmonic Motion (SHM)',
      'Differential equation of SHM and its solution', 'Phase, displacement, velocity, acceleration in SHM',
      'Energy in SHM (Kinetic and Potential)', 'Simple pendulum and physical pendulum',
      'Spring-mass system (series and parallel combinations)', 'Free, forced, and damped oscillations, resonance',
      'Wave motion: Longitudinal and transverse waves, Speed of sound (Laplace correction)',
      'Displacement relation for progressive wave', 'Principle of superposition of waves',
      'Reflection of waves, Standing waves in strings and organ pipes', 'Beats'
    ],
    prerequisites: ['Trigonometric identities', 'Conservation of mechanical energy'],
    keyFormulae: [
      { name: 'SHM Governing Equation', formula: '\\frac{d^2 x}{dt^2} + \\omega^2 x = 0, \\quad x(t) = A \\sin(\\omega t + \\phi)', desc: 'Fundamental second-order ODE for harmonic oscillator' },
      { name: 'Velocity and Energy in SHM', formula: 'v = \\omega \\sqrt{A^2 - x^2}, \\quad E_{total} = \\frac{1}{2} m \\omega^2 A^2', desc: 'Velocity as function of position and constant total mechanical energy' },
      { name: 'Simple Pendulum Period', formula: 'T = 2\\pi \\sqrt{\\frac{L}{g}}', desc: 'Time period of small-angle simple pendulum' },
      { name: 'Organ Pipe Harmonics', formula: 'f_n = n \\frac{v}{2L} \\quad [\\text{Open, } n=1,2,3...], \\quad f_m = (2m-1) \\frac{v}{4L} \\quad [\\text{Closed, } m=1,2,3...]', desc: 'Resonant frequencies of open and closed air columns' },
      { name: 'Beat Frequency', formula: 'f_{beat} = |f_1 - f_2|', desc: 'Number of periodic intensity maxima per second' }
    ],
    importantResults: [
      'In SHM, acceleration is directly proportional to displacement and always directed towards mean position (a = -\\omega^2 x).',
      'When two waves superimpose at open boundary, no phase change occurs; reflection at rigid boundary produces a \\pi (180°) phase shift.',
      'Closed organ pipe produces only odd harmonics, whereas open organ pipe produces all harmonics (richer musical timbre).'
    ],
    commonMistakes: [
      'Confusing phase difference (\\Delta \\phi) with path difference (\\Delta x): \\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x.',
      'Assuming beat frequency can be arbitrarily large (beats are only audibly perceptible when |f1 - f2| <= 10 Hz due to persistence of hearing).'
    ],
    shortTricks: [
      'Effective spring constant: Series: \\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2}; Parallel: k_{eq} = k_1 + k_2.'
    ],
    ncertChapterName: 'Chapter 13: Oscillations & Chapter 14: Waves',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?keph2=5-7',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-electrostatics',
    subject: 'Physics',
    name: 'Electrostatics',
    hindiName: 'स्थिरवैद्युतिकी',
    classLevel: '12',
    unit: 'Electromagnetism',
    weightagePercent: '8-10%',
    topics: [
      'Electric charges and conservation/quantization', 'Coulomb’s law in vector form and superposition principle',
      'Electric field due to point charge and dipole', 'Electric field lines and properties',
      'Electric flux and Gauss’s law with applications (wire, sheet, spherical shell)',
      'Electric potential and potential difference, Equipotential surfaces',
      'Electric potential energy of charge systems and dipoles', 'Conductors in electrostatic equilibrium',
      'Capacitors and capacitance, Parallel plate capacitor with dielectric',
      'Series and parallel combinations of capacitors', 'Energy stored in a capacitor and energy density'
    ],
    prerequisites: ['Vector calculus & integration', 'Newtonian gravitation analog', 'Work and potential energy'],
    keyFormulae: [
      { name: 'Coulomb’s Law', formula: '\\vec{F} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}', desc: 'Force between point charges in free space' },
      { name: 'Gauss’s Law', formula: '\\Phi = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\varepsilon_0}', desc: 'Total electric flux through any closed Gaussian surface' },
      { name: 'Electric Potential from Field', formula: 'V = -\\int \\vec{E} \\cdot d\\vec{r}, \\quad \\vec{E} = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)', desc: 'Potential as negative gradient of electric field' },
      { name: 'Parallel Plate Capacitance', formula: 'C = \\frac{K \\varepsilon_0 A}{d}', desc: 'Capacitance with dielectric slab filling gap' },
      { name: 'Energy Density in Electric Field', formula: 'u_E = \\frac{1}{2} \\varepsilon_0 E^2', desc: 'Energy stored per unit volume in electrostatic field' }
    ],
    importantResults: [
      'Electric field inside a conducting cavity of any shape containing no charge is identically zero (Electrostatic Shielding).',
      'Equipotential surfaces are always perpendicular to electric field lines at every point.',
      'When dielectric is inserted with battery connected: V remains constant, C increases (KC), Q increases (KQ), E remains constant, energy increases (KU).'
    ],
    commonMistakes: [
      'Assuming work done moving charge on equipotential surface is non-zero (W = q \\Delta V = 0).',
      'Using series formula for parallel capacitors (Capacitors in parallel add directly: C_eq = C1 + C2).'
    ],
    shortTricks: [
      'Electric field of an electric dipole: Axial: E_{axial} = \\frac{2kp}{r^3}; Equatorial: E_{eq} = \\frac{kp}{r^3}. Exactly double on the axis at large distances.'
    ],
    ncertChapterName: 'Chapter 1: Electric Charges and Fields & Chapter 2: Electrostatic Potential and Capacitance',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=1-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-current-electricity',
    subject: 'Physics',
    name: 'Current Electricity',
    hindiName: 'विद्युत धारा',
    classLevel: '12',
    unit: 'Electromagnetism',
    weightagePercent: '6-8%',
    topics: [
      'Electric current, drift velocity, mobility and their relation with current', 'Ohm’s law, V-I characteristics, electrical resistance',
      'Resistivity and conductivity, Temperature dependence of resistance',
      'Internal resistance of a cell, terminal potential difference and emf of a cell',
      'Combination of cells in series and parallel', 'Kirchhoff’s laws (Junction and Loop rules)',
      'Wheatstone bridge and meter bridge principle', 'Electrical energy and power, heating effect'
    ],
    prerequisites: ['Electrostatics potential difference', 'Basic circuit algebra'],
    keyFormulae: [
      { name: 'Current & Drift Velocity', formula: 'I = n e A v_d, \\quad v_d = \\frac{e E \\tau}{m}', desc: 'Microscopic relation between drift speed and macroscopic current' },
      { name: 'Resistance Temperature Dependence', formula: 'R_T = R_0 (1 + \\alpha \\Delta T)', desc: 'Linear variation of resistance with temperature' },
      { name: 'Cell Terminal Voltage', formula: 'V = \\mathcal{E} - I r \\quad [\\text{Discharging}], \\quad V = \\mathcal{E} + I r \\quad [\\text{Charging}]', desc: 'Potential difference across cell terminals' },
      { name: 'Balanced Wheatstone Bridge', formula: '\\frac{P}{Q} = \\frac{R}{S} \\implies I_G = 0', desc: 'Null galvanometer deflection condition' },
      { name: 'Maximum Power Transfer Theorem', formula: 'P_{max} = \\frac{\\mathcal{E}^2}{4r} \\quad [\\text{when } R_{load} = r]', desc: 'Load resistance matched to internal resistance' }
    ],
    importantResults: [
      'Kirchhoff’s Current Law (Junction Rule) is based on conservation of charge.',
      'Kirchhoff’s Voltage Law (Loop Rule) is based on conservation of energy.',
      'Electric power dissipated: P = V I = I^2 R = V^2 / R.'
    ],
    commonMistakes: [
      'Taking drift velocity to be equal to thermal velocity (drift velocity is ~mm/s, thermal velocity is ~10^5 m/s).',
      'Forgetting internal resistance drop when calculating branch currents in non-ideal cells.'
    ],
    shortTricks: [
      'Parallel cells equivalent formula: \\mathcal{E}_{eq} = \\frac{\\sum \\frac{\\mathcal{E}_i}{r_i}}{\\sum \\frac{1}{r_i}}, \\quad \\frac{1}{r_{eq}} = \\sum \\frac{1}{r_i}.'
    ],
    ncertChapterName: 'Chapter 3: Current Electricity',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=3-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-magnetism',
    subject: 'Physics',
    name: 'Magnetic Effects of Current & Magnetism',
    hindiName: 'धारा के चुंबकीय प्रभाव एवं चुंबकत्व',
    classLevel: '12',
    unit: 'Electromagnetism',
    weightagePercent: '6-8%',
    topics: [
      'Biot-Savart law and its application to current carrying loop', 'Ampere’s circuital law and applications (straight wire, solenoid, toroid)',
      'Force on a moving charge in uniform magnetic and electric fields (Lorentz force)',
      'Force on a current-carrying conductor in a uniform magnetic field', 'Force between two parallel current-carrying conductors and ampere definition',
      'Torque experienced by a current loop in uniform magnetic field', 'Moving coil galvanometer: sensitivity and conversion to ammeter and voltmeter',
      'Current loop as magnetic dipole and magnetic dipole moment', 'Magnetic field lines and Earth’s magnetic field elements',
      'Magnetic properties of materials: Diamagnetic, paramagnetic, ferromagnetic substances'
    ],
    prerequisites: ['Vectors cross product', 'Current electricity', 'Mechanics rotation'],
    keyFormulae: [
      { name: 'Biot-Savart Law', formula: 'd\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}', desc: 'Differential magnetic flux density due to current element' },
      { name: 'Magnetic Field at Centre of Circular Coil', formula: 'B = \\frac{\\mu_0 N I}{2R}', desc: 'Central field of flat circular multi-turn coil' },
      { name: 'Ampere’s Circuital Law', formula: '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enclosed}', desc: 'Line integral of magnetic field around closed contour' },
      { name: 'Lorentz Force', formula: '\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})', desc: 'Total electromagnetic force on moving charge' },
      { name: 'Galvanometer Conversion to Ammeter & Voltmeter', formula: 'S = \\frac{I_g G}{I - I_g}, \\quad R = \\frac{V}{I_g} - G', desc: 'Shunt for ammeter and high series resistance for voltmeter' }
    ],
    importantResults: [
      'Magnetic force does ZERO work on a charged particle because \\vec{F} \\perp \\vec{v} at every instant; speed and kinetic energy remain strictly constant.',
      'A charged particle projected perpendicular to uniform magnetic field undergoes uniform circular motion with radius r = mv / qB and period T = 2\\pi m / qB (independent of speed).',
      'Diamagnetic materials have negative magnetic susceptibility (\\chi < 0) and are repelled by magnetic fields.'
    ],
    commonMistakes: [
      'Right hand rule orientation mistakes in vector cross product \\vec{v} \\times \\vec{B} (especially forgetting the sign of negative charges like electrons).',
      'Confusing magnetic susceptibility with relative permeability: \\mu_r = 1 + \\chi.'
    ],
    shortTricks: [
      'Force per unit length between two parallel conductors carrying currents I1 and I2 separated by d: \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} (attractive for parallel, repulsive for anti-parallel).'
    ],
    ncertChapterName: 'Chapter 4: Moving Charges and Magnetism & Chapter 5: Magnetism and Matter',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=4-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-emi-ac',
    subject: 'Physics',
    name: 'Electromagnetic Induction & Alternating Currents',
    hindiName: 'विद्युतचुंबकीय प्रेरण एवं प्रत्यावर्ती धारा',
    classLevel: '12',
    unit: 'Electromagnetism',
    weightagePercent: '6-8%',
    topics: [
      'Electromagnetic induction: Faraday’s laws, induced EMF and current', 'Lenz’s law and conservation of energy',
      'Motional EMF in translating and rotating conductors', 'Self and mutual induction and inductors',
      'Alternating currents, peak and RMS value of AC/voltage', 'Reactance and impedance',
      'LCR series circuit, Phasor diagrams', 'Resonance in LCR circuits and Quality factor (Q)',
      'Power in AC circuits, Wattless current', 'AC generator and Transformer'
    ],
    prerequisites: ['Magnetic flux concepts', 'Basic trigonometry and phasors'],
    keyFormulae: [
      { name: 'Faraday-Lenz Law', formula: '\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -N \\frac{d}{dt}(B A \\cos\\theta)', desc: 'Induced electromotive force opposes rate of flux change' },
      { name: 'Motional EMF', formula: '\\mathcal{E} = B v l \\quad [\\text{Straight wire}], \\quad \\mathcal{E} = \\frac{1}{2} B \\omega L^2 \\quad [\\text{Rotating rod}]', desc: 'EMF induced by conductor cutting magnetic field lines' },
      { name: 'LCR Series Impedance', formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad X_L = \\omega L, \\quad X_C = \\frac{1}{\\omega C}', desc: 'Total opposition to alternating sinusoidal current' },
      { name: 'Resonant Angular Frequency', formula: '\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad f_0 = \\frac{1}{2\\pi \\sqrt{LC}}', desc: 'Frequency where impedance is minimum (Z = R) and current is max' },
      { name: 'Average AC Power & Power Factor', formula: 'P_{avg} = V_{rms} I_{rms} \\cos\\phi, \\quad \\cos\\phi = \\frac{R}{Z}', desc: 'Real power dissipation in reactive circuit' }
    ],
    importantResults: [
      'Lenz’s law is a direct embodiment of the law of conservation of energy.',
      'In a purely inductive circuit, current lags voltage by 90° (\\pi/2); in purely capacitive circuit, current leads voltage by 90°.',
      'At resonance in series LCR: Z = R (minimum), I is maximum and in phase with V, power factor \\cos\\phi = 1.'
    ],
    commonMistakes: [
      'Using peak voltage instead of RMS voltage in power calculations (household mains 220 V is RMS; peak is 220\\sqrt{2} \\approx 311 V).',
      'Forgetting that a pure inductor or capacitor consumes zero average power over a complete cycle (\\cos\\phi = 0, wattless current).'
    ],
    shortTricks: [
      'In LCR series circuit, Q-factor = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}.'
    ],
    ncertChapterName: 'Chapter 6: Electromagnetic Induction & Chapter 7: Alternating Current',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph1=6-8',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-optics',
    subject: 'Physics',
    name: 'Optics (Ray and Wave Optics)',
    hindiName: 'प्रकाशिकी (किरण एवं तरंग प्रकाशिकी)',
    classLevel: '12',
    unit: 'Optics',
    weightagePercent: '8-10%',
    topics: [
      'Reflection of light, spherical mirrors, mirror formula', 'Refraction of light, Snell’s law, Total Internal Reflection (TIR) and optical fibres',
      'Refraction at spherical surfaces, Thin lens formula, Lens maker’s formula', 'Magnification, Power of a lens, Combination of thin lenses in contact',
      'Refraction through a prism and minimum deviation', 'Optical instruments: Microscopes and Astronomical telescopes',
      'Wave optics: Wavefront and Huygens’ principle, Reflection and refraction of plane waves',
      'Interference of light waves and Young’s double slit experiment (YDSE)',
      'Fringe width expression and fringe shift by thin mica sheet',
      'Diffraction due to a single slit and width of central maximum'
    ],
    prerequisites: ['Geometry and trigonometry', 'Wave superposition principles'],
    keyFormulae: [
      { name: 'Snell’s Law of Refraction', formula: 'n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2', desc: 'Refraction across planar optical boundary' },
      { name: 'Lens Maker’s Formula', formula: '\\frac{1}{f} = (n_{rel} - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)', desc: 'Focal length in terms of radii of curvature and refractive index' },
      { name: 'Prism Formula', formula: 'n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}', desc: 'Refractive index via angle of prism and angle of minimum deviation' },
      { name: 'YDSE Fringe Width', formula: '\\beta = \\frac{\\lambda D}{d}', desc: 'Separation between adjacent bright or dark fringes' },
      { name: 'Single Slit Central Maxima Width', formula: 'W = \\frac{2\\lambda D}{a}', desc: 'Linear spread of central diffraction peak on screen' }
    ],
    importantResults: [
      'Total Internal Reflection occurs only when light travels from an optically denser medium to rarer medium at an angle of incidence greater than critical angle (\\sin\\theta_c = n_2/n_1).',
      'When two thin lenses of focal lengths f1 and f2 are in contact, 1/F = 1/f1 + 1/f2 and total power P = P1 + P2.',
      'In YDSE, if white light is used, the central fringe is white, while adjacent fringes are colored with violet closest to center.'
    ],
    commonMistakes: [
      'Sign convention errors in lens and mirror formulas (Cartesian sign convention: measure all distances from pole/optical center along incident ray direction).',
      'Confusing condition for maxima in interference (path difference = n\\lambda) with condition for minima in single slit diffraction (path difference = n\\lambda).'
    ],
    shortTricks: [
      'If medium changes to water (n=4/3), focal length of glass lens (n=1.5) becomes approximately 4 times its focal length in air (f_water \\approx 4 f_air).'
    ],
    ncertChapterName: 'Chapter 9: Ray Optics and Optical Instruments & Chapter 10: Wave Optics',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=1-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-modern-physics',
    subject: 'Physics',
    name: 'Modern Physics (Dual Nature, Atoms & Nuclei)',
    hindiName: 'आधुनिक भौतिकी (दोहरी प्रकृति, परमाणु एवं नाभिक)',
    classLevel: '12',
    unit: 'Modern Physics',
    weightagePercent: '10-12%',
    topics: [
      'Photoelectric effect: Hertz and Lenard’s observations, Einstein’s photoelectric equation',
      'Matter waves: Wave nature of particles, de Broglie relation',
      'Alpha-particle scattering experiment, Rutherford’s model of atom',
      'Bohr model of hydrogen atom: Energy levels, Rydberg formula, Hydrogen spectral series',
      'De-Broglie’s explanation of Bohr’s second postulate', 'Composition and size of nucleus, Nuclear density',
      'Mass defect and Binding energy per nucleon curve', 'Nuclear fission and fusion', 'Radioactivity (where applicable)'
    ],
    prerequisites: ['Basic quantum concept E = hf', 'Electrostatics Coulomb attraction', 'Circular motion'],
    keyFormulae: [
      { name: 'Einstein Photoelectric Equation', formula: 'K_{max} = h\\nu - \\Phi_0 = e V_0', desc: 'Maximum kinetic energy and stopping potential' },
      { name: 'de Broglie Wavelength', formula: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}} = \\frac{h}{\\sqrt{2mqV}}', desc: 'Wavelength associated with moving quantum particle' },
      { name: 'Bohr Hydrogen Energy Levels', formula: 'E_n = -\\frac{13.6 \\, Z^2}{n^2} \\, \\text{eV}, \\quad r_n = 0.529 \\frac{n^2}{Z} \\, \\text{Å}', desc: 'Quantized energy and orbital radius of hydrogenic atom' },
      { name: 'Rydberg Formula for Emission', formula: '\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)', desc: 'Wavelength of photon emitted during electronic transition' },
      { name: 'Mass Defect & Binding Energy', formula: '\\Delta m = [Z m_p + (A-Z) m_n] - M, \\quad E_b = \\Delta m \\times 931.5 \\, \\text{MeV}', desc: 'Nuclear binding energy equivalence' }
    ],
    importantResults: [
      'Photoelectric emission is instantaneous (< 10^-9 s). Stopping potential depends on frequency of incident light, not intensity.',
      'Nuclear density is independent of mass number A (~2.3 × 10^17 kg/m^3 for all atomic nuclei).',
      'Lyman series lies in Ultraviolet region; Balmer series in Visible region; Paschen, Brackett, Pfund in Infrared region.'
    ],
    commonMistakes: [
      'Forgetting to convert eV to Joules when using Planck’s constant h in SI units (1 eV = 1.6 × 10^-19 J).',
      'Calculating de Broglie wavelength for relativistic speeds using non-relativistic formula.'
    ],
    shortTricks: [
      'For electron accelerated through potential difference V volts: \\lambda = \\frac{12.27}{\\sqrt{V}} \\, \\text{Å}.'
    ],
    ncertChapterName: 'Chapter 11: Dual Nature, Chapter 12: Atoms & Chapter 13: Nuclei',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=3-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'phy-semiconductors',
    subject: 'Physics',
    name: 'Semiconductor Electronics & Experimental Physics',
    hindiName: 'अर्धचालक इलेक्ट्रॉनिक्स एवं प्रयोगात्मक भौतिकी',
    classLevel: '12',
    unit: 'Electronics & Practical Skills',
    weightagePercent: '6-8%',
    topics: [
      'Energy bands in conductors, semiconductors and insulators', 'Intrinsic and extrinsic semiconductors (p-type and n-type)',
      'p-n junction: Formation of depletion layer and potential barrier', 'p-n junction diode in forward and reverse bias, I-V characteristics',
      'Diode as half-wave and full-wave rectifier', 'Zener diode as voltage regulator',
      'Logic gates: NOT, OR, AND, NAND, NOR and truth tables',
      'Experimental Physics: Vernier calipers, Screw gauge, Simple pendulum, Meter bridge, Potentiometer, Focal length of mirrors/lenses'
    ],
    prerequisites: ['Basic electrostatics', 'Current electricity concepts'],
    keyFormulae: [
      { name: 'Mass Action Law in Semiconductors', formula: 'n_e \\cdot n_h = n_i^2', desc: 'Carrier density product in thermal equilibrium' },
      { name: 'Conductivity of Semiconductor', formula: '\\sigma = e(n_e \\mu_e + n_h \\mu_h)', desc: 'Total electrical conductivity due to electrons and holes' },
      { name: 'Rectifier Ripple Frequency', formula: 'f_{ripple} = f \\quad [\\text{Half-Wave}], \\quad f_{ripple} = 2f \\quad [\\text{Full-Wave}]', desc: 'Output ripple frequency for 50 Hz AC supply' },
      { name: 'De Morgan’s Laws (Logic)', formula: '\\overline{A + B} = \\overline{A} \\cdot \\overline{B}, \\quad \\overline{A \\cdot B} = \\overline{A} + \\overline{B}', desc: 'Boolean algebraic dual transformation rules' }
    ],
    importantResults: [
      'NAND and NOR gates are universal logic gates because any Boolean function can be implemented using them alone.',
      'In forward bias of p-n junction, depletion layer width decreases and barrier height lowers; in reverse bias, width increases.',
      'Zener diode operates under reverse breakdown voltage where voltage remains constant despite sharp current changes.'
    ],
    commonMistakes: [
      'Believing extrinsic semiconductors are charged (both n-type and p-type materials remain electrically neutral overall).',
      'Connecting Zener diode in forward bias when intending voltage regulation.'
    ],
    shortTricks: [
      'Full-wave rectifier efficiency is maximum 81.2% (exactly double half-wave rectifier max efficiency 40.6%).'
    ],
    ncertChapterName: 'Chapter 14: Semiconductor Electronics: Materials, Devices and Simple Circuits',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?leph2=6-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'Medium', stateExams: 'High', bitsat: 'High' }
  },

  // ==========================================
  // CHEMISTRY CHAPTERS
  // ==========================================
  {
    id: 'chem-mole-concept',
    subject: 'Chemistry',
    name: 'Some Basic Concepts of Chemistry (Mole Concept)',
    hindiName: 'रसायन विज्ञान की कुछ मूल अवधारणाएँ',
    classLevel: '11',
    unit: 'Physical Chemistry',
    weightagePercent: '4-6%',
    topics: [
      'Matter and its nature, Dalton’s atomic theory', 'Atomic mass, molecular mass, equivalent mass',
      'Mole concept, molar mass, Avogadro number', 'Percentage composition and empirical/molecular formula',
      'Chemical equations and stoichiometry', 'Limiting reagent and percentage yield',
      'Concentration terms: Molarity (M), Molality (m), Normality (N), Mole fraction (X), ppm'
    ],
    prerequisites: ['Basic arithmetic', 'Periodic table symbols and atomic weights'],
    keyFormulae: [
      { name: 'Mole Fundamental Formula', formula: 'n = \\frac{w}{M} = \\frac{N}{N_A} = \\frac{V_{STP}}{22.4 \\, \\text{L}}', desc: 'Conversion between mass, particles and STP gas volume' },
      { name: 'Molarity & Molality Relation', formula: 'm = \\frac{1000 M}{1000 d - M M_2}', desc: 'Molality in terms of molarity, density and solute molecular weight' },
      { name: 'Limiting Reagent Condition', formula: '\\frac{n_A}{a} < \\frac{n_B}{b} \\implies A \\text{ is limiting}', desc: 'Stoichiometric mole ratio comparison for reaction aA + bB -> Products' }
    ],
    importantResults: [
      'Molality and mole fraction are independent of temperature because they depend only on mass, whereas molarity and normality change with temperature due to volume expansion.',
      'Law of Chemical Equivalence: Gram equivalents of all reacting substances and products in a complete reaction are strictly equal.'
    ],
    commonMistakes: [
      'Confusing solvent mass with solution mass when calculating molality.',
      'Forgetting that stoichiometric coefficients must be used to identify the limiting reagent, not just initial masses.'
    ],
    shortTricks: [
      'Molarity from mass percentage: M = \\frac{\\%(w/w) \\times 10 \\times d}{M_{solute}}.'
    ],
    ncertChapterName: 'Chapter 1: Some Basic Concepts of Chemistry',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=1-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-atomic-structure',
    subject: 'Chemistry',
    name: 'Structure of Atom',
    hindiName: 'परमाणु की संरचना',
    classLevel: '11',
    unit: 'Physical Chemistry',
    weightagePercent: '5-7%',
    topics: [
      'Subatomic particles, Thomson and Rutherford atomic models', 'Electromagnetic radiation, Planck’s quantum theory, Photoelectric effect',
      'Bohr model of hydrogen atom, line spectrum of hydrogen', 'Dual behavior of matter: de Broglie relation',
      'Heisenberg uncertainty principle', 'Quantum mechanical model of atom, wave function (\\psi)',
      'Quantum numbers (n, l, m, s) and their significance', 'Shapes of s, p, d, f orbitals',
      'Rules for filling orbitals: Aufbau principle, Pauli exclusion principle, Hund’s rule of maximum multiplicity'
    ],
    prerequisites: ['Basic wave nature', 'Bohr orbits in physics'],
    keyFormulae: [
      { name: 'Planck Quantum Equation', formula: 'E = h\\nu = \\frac{hc}{\\lambda}', desc: 'Energy carried by a single photon' },
      { name: 'Heisenberg Uncertainty Principle', formula: '\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}', desc: 'Fundamental limit on simultaneous precision of position and momentum' },
      { name: 'Orbital Nodes Formula', formula: '\\text{Radial nodes} = n - l - 1, \\quad \\text{Angular nodes} = l, \\quad \\text{Total} = n - 1', desc: 'Locations where electron probability density drops to zero' }
    ],
    importantResults: [
      'Magnetic moment (spin-only): \\mu_s = \\sqrt{n(n+2)} \\, \\text{BM}, where n is number of unpaired electrons.',
      'Chromium (Z=24: [Ar] 3d^5 4s^1) and Copper (Z=29: [Ar] 3d^10 4s^1) exhibit anomalous configurations due to extra stability of half-filled and fully-filled subshells.'
    ],
    commonMistakes: [
      'Assigning incorrect magnetic quantum number values (m ranges from -l to +l, giving 2l+1 values).',
      'Violating Pauli’s principle by putting two electrons with same spin in the same orbital.'
    ],
    shortTricks: [
      'Total number of orbitals in n-th principal shell = n^2; maximum number of electrons = 2n^2.'
    ],
    ncertChapterName: 'Chapter 2: Structure of Atom',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=2-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-bonding',
    subject: 'Chemistry',
    name: 'Chemical Bonding and Molecular Structure',
    hindiName: 'रासायनिक आबंधन तथा आण्विक संरचना',
    classLevel: '11',
    unit: 'Inorganic Chemistry',
    weightagePercent: '8-10%',
    topics: [
      'Kossel-Lewis approach to chemical bonding, Ionic bond, Lattice enthalpy, Born-Haber cycle',
      'Covalent bond, Lewis structures, Formal charge', 'VSEPR theory and geometry of molecules',
      'Valence Bond Theory (VBT), Orbital overlap, Hybridization (sp, sp2, sp3, sp3d, sp3d2)',
      'Molecular Orbital Theory (MOT): LCAO method, Bonding and antibonding orbitals',
      'Electronic configuration of homonuclear diatomic molecules, Bond order, Magnetic behavior',
      'Hydrogen bonding (intermolecular and intramolecular)'
    ],
    prerequisites: ['Periodic table trends', 'Atomic structure and orbitals'],
    keyFormulae: [
      { name: 'Molecular Orbital Bond Order', formula: '\\text{Bond Order} = \\frac{N_b - N_a}{2}', desc: 'Difference between bonding and antibonding electrons' },
      { name: 'Formal Charge Formula', formula: 'FC = V - L - \\frac{1}{2}S', desc: 'Valence electrons minus non-bonding minus half bonding electrons' },
      { name: 'Steric Number (Hybridization)', formula: 'SN = \\text{Lone pairs on central atom} + \\text{Number of attached atoms}', desc: 'Total electron pairs determining electronic geometry' }
    ],
    importantResults: [
      'Paramagnetism requires presence of unpaired electrons (e.g., O2 is paramagnetic with bond order 2 due to 2 unpaired electrons in \\pi^*2p orbitals according to MOT).',
      'Species with bond order 0 cannot exist as stable diatomic molecules (e.g. He2, Be2).',
      'Dipole moment: Symmetric molecules (CO2, BF3, CCl4, SF6) have \\mu = 0 despite having polar individual bonds.'
    ],
    commonMistakes: [
      'Applying regular MOT orbital energy sequence (\\sigma2p_z < \\pi2p_x = \\pi2p_y) to molecules with <= 14 electrons like B2, C2, N2 (they undergo sp mixing: \\pi2p_x = \\pi2p_y < \\sigma2p_z).',
      'Confusing electron pair geometry with molecular shape (e.g. NH3 has tetrahedral electron pair geometry but trigonal pyramidal molecular shape due to 1 lone pair).'
    ],
    shortTricks: [
      'Quick MOT Bond Order table for 14-electron species: N2 (14 e-) = 3.0; for each electron added or removed, bond order drops by 0.5 (13 e- = 2.5, 15 e- = 2.5, 16 e- = 2.0).'
    ],
    ncertChapterName: 'Chapter 4: Chemical Bonding and Molecular Structure',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=4-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-thermodynamics-equilibrium',
    subject: 'Chemistry',
    name: 'Chemical Thermodynamics & Equilibrium',
    hindiName: 'रासायनिक ऊष्मागतिकी एवं साम्यावस्था',
    classLevel: '11',
    unit: 'Physical Chemistry',
    weightagePercent: '8-10%',
    topics: [
      'First law of thermodynamics: Internal energy, enthalpy, Hess’s law of constant heat summation',
      'Standard enthalpy of formation, combustion, neutralization, bond dissociation enthalpy',
      'Second law: Spontaneity, Entropy (S), Gibbs free energy (G), \\Delta G = \\Delta H - T\\Delta S',
      'Equilibrium: Physical and chemical processes, Law of mass action, Kp and Kc relationship',
      'Le Chatelier’s principle and industrial applications (Haber process)',
      'Ionic equilibrium: Arrhenius, Bronsted-Lowry, and Lewis acid-base concepts',
      'Ionization of water, pH scale, Ionization constants of weak acids/bases',
      'Common ion effect, Buffer solutions and Henderson-Hasselbalch equation',
      'Solubility product (Ksp) and precipitation condition'
    ],
    prerequisites: ['Mole concept', 'First law in physics', 'Logarithms'],
    keyFormulae: [
      { name: 'Gibbs Free Energy & Spontaneity', formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -RT \\ln K', desc: 'Thermodynamic criterion for spontaneity (\\Delta G < 0)' },
      { name: 'Kp and Kc Relation', formula: 'K_p = K_c (RT)^{\\Delta n_g}', desc: 'Equilibrium constants relation with gaseous mole difference' },
      { name: 'Henderson-Hasselbalch Equation', formula: 'pH = pK_a + \\log\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}\\right)', desc: 'Calculates pH of an acidic buffer solution' },
      { name: 'Precipitation Criterion', formula: 'Q_{sp} > K_{sp} \\implies \\text{Precipitation occurs}', desc: 'Ionic product comparison with thermodynamic solubility product' }
    ],
    importantResults: [
      'Catalysts do NOT alter equilibrium constants (K) or position of equilibrium; they only accelerate attainment of equilibrium by lowering activation energy equally in both directions.',
      'A reaction is spontaneous at all temperatures if \\Delta H < 0 (exothermic) and \\Delta S > 0 (entropy increases).',
      'Buffer solutions resist changes in pH upon addition of small amounts of strong acid or base.'
    ],
    commonMistakes: [
      'Including pure solids and pure liquids in the equilibrium constant expression (their activity is 1).',
      'Forgetting that pH + pOH = 14 only holds at 25 °C (298 K); at higher temperatures Kw increases and neutral pH drops below 7.'
    ],
    shortTricks: [
      'Solubility product calculation for AxBy salt: Ksp = x^x \\cdot y^y \\cdot S^{x+y}. For AgCl (AB): Ksp = S^2; for CaF2 (AB2): Ksp = 4S^3; for Al(OH)3 (AB3): Ksp = 27S^4.'
    ],
    ncertChapterName: 'Chapter 5: Thermodynamics & Chapter 6: Equilibrium',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech1=5-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-organic-goc',
    subject: 'Chemistry',
    name: 'General Organic Chemistry (GOC) & Hydrocarbons',
    hindiName: 'सामान्य कार्बनिक रसायन एवं हाइड्रोकार्बन',
    classLevel: '11',
    unit: 'Organic Chemistry',
    weightagePercent: '10-12%',
    topics: [
      'IUPAC nomenclature of organic compounds', 'Electronic displacements: Inductive effect, Electromeric effect, Resonance, Hyperconjugation',
      'Aromaticity: Huckel’s rule (4n+2 \\pi electrons)', 'Reactive intermediates: Carbocations, carbanions, free radicals, carbenes (stability order)',
      'Types of organic reactions: Substitution, addition, elimination, rearrangement',
      'Isomerism: Structural isomerism and stereoisomerism (geometrical and optical isomerism, chirality, enantiomers, diastereomers)',
      'Alkanes: Conformations (ethane, butane), Wurtz reaction, free radical halogenation',
      'Alkenes: Preparation, Markovnikov’s rule and anti-Markovnikov (peroxide effect), Ozonolysis',
      'Alkynes: Acidity of terminal alkynes, addition reactions',
      'Arenes: Electrophilic aromatic substitution (nitration, halogenation, Friedel-Crafts alkylation/acylation)'
    ],
    prerequisites: ['Chemical bonding', 'Hybridization of carbon'],
    keyFormulae: [
      { name: 'Hückel’s Rule of Aromaticity', formula: '\\text{Number of } \\pi \\text{ electrons} = 4n + 2 \\quad [n = 0, 1, 2...]', desc: 'Planar, cyclic, conjugated systems with exceptional stability' },
      { name: 'Enantiomeric Excess', formula: '\\% ee = \\frac{|[\\alpha]_{sample}|}{|[\\alpha]_{pure}|} \\times 100\\%', desc: 'Optical purity of chiral mixture' },
      { name: 'Ozonolysis Shortcut', formula: 'C=C + O_3/Zn,H_2O \\longrightarrow C=O + O=C', desc: 'Cleavage of double bond into carbonyl fragments' }
    ],
    importantResults: [
      'Carbocation stability: 3° > 2° > 1° > methyl (governed by hyperconjugation and +I effect; allylic and benzylic carbocations are stabilized by resonance).',
      'Anti-Markovnikov addition of HBr (Kharasch effect) occurs ONLY with HBr in presence of peroxides via a free-radical mechanism; does not work with HCl or HI due to unfavorable thermodynamics.',
      'Aromatic > Non-aromatic > Anti-aromatic in terms of thermodynamic stability.'
    ],
    commonMistakes: [
      'Forgetting carbocation rearrangement (hydride and methyl shifts) in Markovnikov addition of HX or acid-catalyzed hydration.',
      'Confusing meso compounds with racemic mixtures (meso is optically inactive due to internal compensation; racemic due to external compensation).'
    ],
    shortTricks: [
      'To identify ozonolysis products, simply snip the C=C double bond and cap each severed end with an oxygen atom (=O).'
    ],
    ncertChapterName: 'Chapter 8: Organic Chemistry: Some Basic Principles and Techniques & Chapter 9: Hydrocarbons',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kech2=2-3',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-solutions-kinetics-electro',
    subject: 'Chemistry',
    name: 'Solutions, Electrochemistry & Chemical Kinetics',
    hindiName: 'विलयन, विद्युत रसायन एवं रासायनिक बलगतिकी',
    classLevel: '12',
    unit: 'Physical Chemistry',
    weightagePercent: '10-12%',
    topics: [
      'Solutions: Types, Raoult’s law for volatile solutes, Ideal and non-ideal solutions (azeotropes)',
      'Colligative properties: Relative lowering of vapor pressure, Elevation of boiling point, Depression of freezing point, Osmotic pressure',
      'Abnormal molar mass and van ’t Hoff factor (i)',
      'Electrochemistry: Redox reactions, Galvanic cells, Nernst equation and EMF of cells',
      'Conductance in electrolytic solutions, Kohlrausch’s law, Faraday’s laws of electrolysis',
      'Chemical Kinetics: Rate of reaction, Order and molecularity, Rate law expression',
      'Integrated rate equations for zero and first order reactions, Half-life',
      'Arrhenius equation, Activation energy (Ea) and temperature dependence of rate constant'
    ],
    prerequisites: ['Mole concept', 'Chemical equilibrium', 'Basic integration'],
    keyFormulae: [
      { name: 'Nernst Equation', formula: 'E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{n} \\log Q \\quad [\\text{at } 298 \\, \\text{K}]', desc: 'Cell potential under non-standard concentrations' },
      { name: 'Colligative Elevation & Depression', formula: '\\Delta T_b = i K_b m, \\quad \\Delta T_f = i K_f m, \\quad \\Pi = i C R T', desc: 'Boiling point elevation, freezing point depression, osmotic pressure' },
      { name: 'First Order Integrated Rate Law', formula: 'k = \\frac{2.303}{t} \\log\\left(\\frac{[A]_0}{[A]_t}\\right), \\quad t_{1/2} = \\frac{0.693}{k}', desc: 'Rate constant and concentration-independent half life' },
      { name: 'Arrhenius Equation', formula: 'k = A e^{-E_a/RT} \\implies \\log\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R}\\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)', desc: 'Temperature dependence of reaction rate constant' },
      { name: 'Kohlrausch’s Law of Independent Migration', formula: '\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ', desc: 'Limiting molar conductivity of electrolyte at infinite dilution' }
    ],
    importantResults: [
      'For first-order reactions, half-life is strictly independent of initial reactant concentration (t_1/2 = 0.693/k).',
      'Osmotic pressure (\\Pi = iCRT) is the preferred colligative method for determining molar masses of polymers and biomolecules because measurements are conducted at room temperature and produce measurable magnitudes even at low molarities.',
      'Galvanic cell: Anode is negative (oxidation occurs), Cathode is positive (reduction occurs); electrons flow from anode to cathode in external circuit.'
    ],
    commonMistakes: [
      'Forgetting the van ’t Hoff factor (i) for dissociating electrolytes (e.g. NaCl has i \\approx 2, BaCl2 has i \\approx 3).',
      'Writing stoichiometric coefficients as reaction orders without experimental rate law verification (molecularity is theoretical; order is purely empirical).'
    ],
    shortTricks: [
      'Degree of dissociation \\alpha from van ’t Hoff factor i: \\alpha = \\frac{i - 1}{n - 1}, where n is number of ions produced per molecule.'
    ],
    ncertChapterName: 'Chapter 1: Solutions, Chapter 2: Electrochemistry & Chapter 3: Chemical Kinetics',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=1-5',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-coordination-dblock',
    subject: 'Chemistry',
    name: 'Coordination Compounds & d- and f-Block Elements',
    hindiName: 'उपसहसंयोजन यौगिक एवं d- तथा f-ब्लॉक के तत्व',
    classLevel: '12',
    unit: 'Inorganic Chemistry',
    weightagePercent: '8-10%',
    topics: [
      'd-Block elements: Electronic configuration, variable oxidation states, catalytic properties, colored ions',
      'Lanthanoid contraction and consequences on 4d/5d transition series radii',
      'Preparation, properties, and oxidizing actions of K2Cr2O7 and KMnO4',
      'Coordination compounds: Werner’s theory, Ligands, Denticity, Chelation, Coordination number',
      'IUPAC nomenclature of mononuclear coordination entities',
      'Isomerism in coordination compounds: Geometrical, optical, ionization, solvate, linkage, coordination',
      'Valence Bond Theory (inner vs outer orbital complexes)',
      'Crystal Field Theory (CFT): Crystal field splitting in octahedral (\\Delta_o) and tetrahedral (\\Delta_t) fields',
      'Spectrochemical series, High spin vs low spin complexes, Magnetic properties'
    ],
    prerequisites: ['Periodic table', 'Electronic configuration Aufbau rules', 'VBT/MOT'],
    keyFormulae: [
      { name: 'Spin-Only Magnetic Moment', formula: '\\mu = \\sqrt{n(n+2)} \\, \\text{BM}', desc: 'Bohr magneton calculation from unpaired electrons' },
      { name: 'Crystal Field Splitting Relation', formula: '\\Delta_t = \\frac{4}{9} \\Delta_o', desc: 'Tetrahedral splitting is always less than octahedral' },
      { name: 'Crystal Field Stabilization Energy (CFSE)', formula: '\\text{CFSE} = [-0.4 n_{t2g} + 0.6 n_{eg}] \\Delta_o + mP', desc: 'Energy stabilization due to d-orbital splitting' }
    ],
    importantResults: [
      'Lanthanoid contraction causes the atomic and ionic radii of 4d (Zr) and 5d (Hf) elements to be almost identical (Zr \\approx Hf = 160 pm), making their chemical separation difficult.',
      'Strong field ligands (CN^-, CO, en, NH3) cause pairing of electrons (\\Delta_o > P), forming low spin inner orbital complexes (d2sp3).',
      'Tetrahedral complexes NEVER form low spin complexes because \\Delta_t is too small to overcome pairing energy (\\Delta_t < P).'
    ],
    commonMistakes: [
      'Assuming all transition metals form colored compounds: Sc3+ (3d0) and Zn2+ (3d10) compounds are colorless due to absence of d-d transitions.',
      'Misidentifying linkage isomerism (occurs only with ambidentate ligands like NO2^-/ONO^- or SCN^-/NCS^-).'
    ],
    shortTricks: [
      'Spectrochemical series memory order: I^- < Br^- < S^2- < SCN^- < Cl^- < NO3^- < F^- < OH^- < ox^2- < H2O < NCS^- < edta^4- < NH3 < en < NO2^- < CN^- < CO.'
    ],
    ncertChapterName: 'Chapter 4: d- and f-Block Elements & Chapter 5: Coordination Compounds',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech1=4-5',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'chem-functional-organic',
    subject: 'Chemistry',
    name: 'Organic Compounds with Oxygen & Nitrogen (Aldehydes, Ketones, Amines)',
    hindiName: 'ऑक्सीजन एवं नाइट्रोजन युक्त कार्बनिक यौगिक',
    classLevel: '12',
    unit: 'Organic Chemistry',
    weightagePercent: '12-14%',
    topics: [
      'Haloalkanes and Haloarenes: SN1 and SN2 mechanisms, stereochemistry, inversion vs racemization',
      'Alcohols, Phenols, Ethers: Preparation, acidity of phenols, Kolbe’s reaction, Reimer-Tiemann reaction, Williamson ether synthesis',
      'Aldehydes and Ketones: Nucleophilic addition reactions, Aldol condensation, Cannizzaro reaction',
      'Carboxylic acids: Acidic strength, decarboxylation, Hell-Volhard-Zelinsky (HVZ) reaction',
      'Amines: Basicity of aliphatic and aromatic amines, Gabriel phthalimide synthesis, Hoffmann bromamide degradation',
      'Diazonium salts: Sandmeyer, Gattermann reactions, coupling reactions',
      'Biomolecules: Carbohydrates (glucose structure, anomers), Proteins (amino acids, peptide bond, denaturation), Nucleic acids'
    ],
    prerequisites: ['GOC and reaction intermediates', 'Electronic effects (+I, -I, +M, -M)'],
    keyFormulae: [
      { name: 'Aldol Condensation', formula: '2 \\text{ R-CH}_2\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\beta\\text{-hydroxyaldehyde} \\xrightarrow{\\Delta} \\alpha,\\beta\\text{-unsaturated aldehyde}', desc: 'Requires at least one \\alpha-hydrogen' },
      { name: 'Cannizzaro Disproportionation', formula: '2 \\text{ HCHO} \\xrightarrow{\\text{conc. KOH}} \\text{CH}_3\\text{OH} + \\text{HCOOK}', desc: 'Aldehydes lacking \\alpha-hydrogen undergo redox self-disproportionation' },
      { name: 'Hoffmann Bromamide Reaction', formula: '\\text{R-CONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\longrightarrow \\text{R-NH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}', desc: 'Degrades primary amide to primary amine with ONE LESS carbon' }
    ],
    importantResults: [
      'SN1 proceeds with carbocation intermediate, 2-step mechanism, 3° > 2° > 1° reactivity, and racemization with partial inversion.',
      'SN2 proceeds via single concerted transition state, backside nucleophilic attack, 1° > 2° > 3° reactivity, and 100% Walden inversion.',
      'Basicity of aliphatic amines in aqueous medium: (CH3)2NH > CH3NH2 > (CH3)3N > NH3 (governed by inductive, steric and hydration effects).'
    ],
    commonMistakes: [
      'Attempting Gabriel Phthalimide synthesis with aryl halides (haloarenes do not undergo nucleophilic substitution due to partial double bond character).',
      'Conducting Friedel-Crafts reaction on aniline (AlCl3 Lewis acid coordinates with NH2 lone pair, deactivating the ring).'
    ],
    shortTricks: [
      'Distinguishing Tests: Tollen’s and Fehling’s tests are given by Aldehydes (not Ketones); Iodoform test (I2 + NaOH) is given by compounds having CH3-C=O or CH3-CH(OH)- groups (yellow CHI3 precipitate).'
    ],
    ncertChapterName: 'Chapter 6: Haloalkanes, Chapter 7: Alcohols, Chapter 8: Aldehydes & Chapter 9: Amines',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lech2=1-5',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },

  // ==========================================
  // MATHEMATICS CHAPTERS
  // ==========================================
  {
    id: 'math-algebra-foundations',
    subject: 'Mathematics',
    name: 'Algebra: Sets, Relations, Complex Numbers & Quadratics',
    hindiName: 'बीजगणित: समुच्चय, संबंध, सम्मिश्र संख्याएँ एवं द्विघात समीकरण',
    classLevel: '11',
    unit: 'Algebra',
    weightagePercent: '8-10%',
    topics: [
      'Sets and their representation, Union, intersection, difference, complement, Cartesian product',
      'Relations: Equivalence relations, domain and range',
      'Quadratic equations: Roots, discriminant, nature of roots, relation between roots and coefficients',
      'Common roots conditions, Location of roots in quadratic expressions',
      'Complex numbers: Real and imaginary parts, Modulus, argument, conjugate and their properties',
      'Polar and Euler representation (e^{i\\theta}), Triangle inequality',
      'De Moivre’s theorem, Cube roots of unity (1, \\omega, \\omega^2) and properties',
      'Sequences and Series: Arithmetic Progression (AP), Geometric Progression (GP), Arithmetico-Geometric Progression (AGP)',
      'Sum of n terms, infinite GP sum, Insertion of means (AM, GM), AM \\ge GM \\ge HM inequality'
    ],
    prerequisites: ['Basic polynomial factorization', 'Cartesian coordinates'],
    keyFormulae: [
      { name: 'Quadratic Roots & Relations', formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad \\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha \\beta = \\frac{c}{a}', desc: 'Fundamental quadratic solutions and Vieta formulas' },
      { name: 'Cube Roots of Unity', formula: '1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1', desc: 'Properties of complex cube roots of unity' },
      { name: 'AM-GM Inequality', formula: '\\frac{a_1 + a_2 + \\dots + a_n}{n} \\ge (a_1 a_2 \\dots a_n)^{1/n}', desc: 'Critical optimization inequality for positive real numbers' },
      { name: 'Infinite GP Sum', formula: 'S_\\infty = \\frac{a}{1 - r} \\quad [|r| < 1]', desc: 'Sum of convergent infinite geometric series' }
    ],
    importantResults: [
      'If coefficients a, b, c of quadratic equation are real and D < 0, complex roots occur in conjugate pairs (\\alpha \\pm i\\beta).',
      'Triangle Inequality: ||z_1| - |z_2|| \\le |z_1 + z_2| \\le |z_1| + |z_2|.',
      'Condition for both roots of ax^2 + bx + c = 0 to be greater than a real number k: D \\ge 0, -b/2a > k, and a \\cdot f(k) > 0.'
    ],
    commonMistakes: [
      'Applying AM >= GM to variables without verifying that all terms are strictly positive.',
      'Treating argument of complex number z = x + iy simply as \\tan^{-1}(y/x) without checking the correct quadrant.'
    ],
    shortTricks: [
      'If a + b + c = 0 in ax^2 + bx + c = 0, roots are immediately 1 and c/a.'
    ],
    ncertChapterName: 'Chapter 1: Sets, Chapter 2: Relations, Chapter 4: Complex Numbers & Chapter 8: Sequences',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=1-9',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-combinatorics-matrices',
    subject: 'Mathematics',
    name: 'Permutations, Combinations, Binomial, Matrices & Determinants',
    hindiName: 'क्रमचय, संचय, द्विपद प्रमेय, आव्यूह एवं सारणिक',
    classLevel: '12',
    unit: 'Algebra',
    weightagePercent: '10-12%',
    topics: [
      'Fundamental principles of counting (multiplication and addition)', 'Permutations of n distinct objects and with repetition',
      'Combinations: nCr properties, Circular permutations, Division into groups',
      'Binomial theorem for positive integral index, General and middle terms, Greatest term',
      'Matrices: Types, operations (addition, scalar multiplication, multiplication)',
      'Transpose, Symmetric and skew-symmetric matrices, Orthogonal matrices',
      'Determinants: Evaluation, minors, cofactors, properties of determinants',
      'Adjoint and inverse of a square matrix, System of linear equations (Cramer’s rule and Matrix inversion method)',
      'Consistency and number of solutions (unique, infinitely many, no solution)'
    ],
    prerequisites: ['Basic algebraic equations', 'Factorial notation'],
    keyFormulae: [
      { name: 'Combinations Identity', formula: '^nC_r + ^nC_{r-1} = ^{n+1}C_r', desc: 'Pascal identity for combinations' },
      { name: 'Binomial Expansion General Term', formula: 'T_{r+1} = ^nC_r x^{n-r} y^r', desc: 'r-th term in expansion of (x + y)^n' },
      { name: 'Determinant & Adjoint Properties', formula: 'A \\cdot \\text{adj}(A) = |A| I_n, \\quad |\\text{adj}(A)| = |A|^{n-1}', desc: 'Matrix inverse and determinant of adjoint' },
      { name: 'Cramer’s Rule for Linear System', formula: 'x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta}', desc: 'Solution of 3x3 linear system using determinants' }
    ],
    importantResults: [
      'Determinant of any odd-order skew-symmetric matrix is always zero (|A| = 0).',
      'If \\Delta = 0 and at least one of \\Delta_x, \\Delta_y, \\Delta_z \\ne 0, system of linear equations is inconsistent and has NO SOLUTION.',
      'Sum of binomial coefficients: C_0 + C_1 + C_2 + \\dots + C_n = 2^n.'
    ],
    commonMistakes: [
      'Assuming matrix multiplication is commutative (AB \\ne BA in general).',
      'Using |kA| = k|A| instead of |kA| = k^n |A| for an n x n matrix.'
    ],
    shortTricks: [
      'Number of non-negative integer solutions to x1 + x2 + ... + xr = n is ^{n+r-1}C_{r-1}.'
    ],
    ncertChapterName: 'Chapter 3: Matrices & Chapter 4: Determinants',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh1=3-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-calculus-differential',
    subject: 'Mathematics',
    name: 'Differential Calculus (Limits, Continuity, Derivatives, AOD)',
    hindiName: 'अवकलन कलन (सीमा, सांतत्य, अवकलज एवं अनुप्रयोग)',
    classLevel: '12',
    unit: 'Calculus',
    weightagePercent: '12-14%',
    topics: [
      'Limits: Standard algebraic, trigonometric, exponential, and logarithmic limits',
      'L’Hôpital’s rule for indeterminate forms (0/0 and \\infty/\\infty), 1^\\infty form',
      'Continuity of functions at a point and in an interval, Intermediate Value Theorem',
      'Differentiability: Differentiability implies continuity, non-differentiable sharp turns',
      'Derivative rules: Product, quotient, chain rule, implicit differentiation, logarithmic differentiation',
      'Applications of Derivatives (AOD): Rate of change of quantities',
      'Monotonicity: Increasing and decreasing functions (f\'(x) \\ge 0)',
      'Maxima and Minima: First and second derivative tests, Global extrema on closed intervals',
      'Rolle’s theorem and Lagrange’s Mean Value Theorem (LMVT)'
    ],
    prerequisites: ['Functions, domain and range', 'Trigonometric identities'],
    keyFormulae: [
      { name: 'Standard Limit', formula: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x \\to 0} (1 + x)^{1/x} = e', desc: 'Fundamental transcendental limits' },
      { name: 'Indeterminate 1^\\infty Form', formula: '\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)[f(x) - 1]}', desc: 'Direct evaluation rule for power indeterminacy' },
      { name: 'Lagrange’s Mean Value Theorem', formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a} \\quad [c \\in (a, b)]', desc: 'Instantaneous slope equals average secant slope' }
    ],
    importantResults: [
      'Every differentiable function is continuous, but the converse is not true (e.g. f(x) = |x| is continuous at 0 but not differentiable).',
      'Point of inflection occurs where concavity changes sign: f\'\'(x) = 0 (or undefined) and f\'\'(x) changes sign around that point.',
      'If f\'(x) > 0 for all x in (a, b), f(x) is strictly increasing and has a unique inverse.'
    ],
    commonMistakes: [
      'Applying L’Hôpital’s rule without verifying that limit is an indeterminate form (0/0 or \\infty/\\infty).',
      'Forgetting endpoint values when finding absolute (global) maximum/minimum on a closed interval [a, b].'
    ],
    shortTricks: [
      'To check whether a cubic polynomial ax^3 + bx^2 + cx + d is monotonic everywhere, check discriminant of derivative: b^2 - 3ac \\le 0.'
    ],
    ncertChapterName: 'Chapter 5: Continuity and Differentiability & Chapter 6: Application of Derivatives',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh1=5-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-calculus-integral',
    subject: 'Mathematics',
    name: 'Integral Calculus & Differential Equations',
    hindiName: 'समाकलन कलन एवं अवकल समीकरण',
    classLevel: '12',
    unit: 'Calculus',
    weightagePercent: '12-14%',
    topics: [
      'Indefinite integrals: Standard integrals, integration by substitution, integration by parts',
      'Integration using partial fractions, Trigonometric integrals',
      'Definite integrals: Fundamental theorem of calculus, properties of definite integrals',
      'King’s property \\int_a^b f(x) dx = \\int_a^b f(a+b-x) dx and applications',
      'Definite integral as limit of a sum, Leibniz rule for differentiation under integral sign',
      'Area under curves: Area between curves using vertical and horizontal strips',
      'Differential equations: Order and degree, General and particular solutions',
      'Formation of differential equations, Variable separable method, Homogeneous differential equations',
      'First order Linear Differential Equations (Integrating Factor method)'
    ],
    prerequisites: ['Differentiation rules', 'Algebraic partial fractions', 'Graph plotting'],
    keyFormulae: [
      { name: 'Integration by Parts (ILATE)', formula: '\\int u v dx = u \\int v dx - \\int \\left(u\' \\int v dx\\right) dx', desc: 'Product rule reversal with priority order' },
      { name: 'King’s Property of Definite Integrals', formula: '\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx', desc: 'Most utilized definite integral symmetry property in JEE' },
      { name: 'Leibniz Differentiation Rule', formula: '\\frac{d}{dx} \\int_{g(x)}^{h(x)} f(t) dt = f(h(x)) h\'(x) - f(g(x)) g\'(x)', desc: 'Derivative of integral with variable limits' },
      { name: 'Linear Differential Equation Solution', formula: '\\frac{dy}{dx} + P y = Q \\implies y \\cdot e^{\\int P dx} = \\int Q e^{\\int P dx} dx + C', desc: 'Integrating factor e^{int P dx} method' }
    ],
    importantResults: [
      'Degree of a differential equation is the power of the highest order derivative, provided the equation is a polynomial in derivatives (if y\'\' is inside sin or log, degree is undefined).',
      'Area bounded by y^2 = 4ax and x^2 = 4by is \\frac{16ab}{3}.',
      '\\int_0^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx = \\frac{\\pi}{4} for any real power n.'
    ],
    commonMistakes: [
      'Forgetting absolute value in logarithms: \\int \\frac{1}{x} dx = \\ln|x| + C.',
      'Integrating without checking sign of function in area problems (area is always positive: \\int |f(x) - g(x)| dx).'
    ],
    shortTricks: [
      'Area between parabola y^2 = 4ax and line y = mx is \\frac{8a^2}{3m^3}.'
    ],
    ncertChapterName: 'Chapter 7: Integrals, Chapter 8: Application of Integrals & Chapter 9: Differential Equations',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=1-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-coordinate-geometry',
    subject: 'Mathematics',
    name: 'Coordinate Geometry (Lines, Circles, Conic Sections)',
    hindiName: 'निर्देशांक ज्यामिति (सरल रेखाएँ, वृत्त एवं शांकव परिच्छेद)',
    classLevel: '11',
    unit: 'Coordinate Geometry',
    weightagePercent: '12-14%',
    topics: [
      'Cartesian system, Distance formula, Section formula, Area of triangle',
      'Slope of a line, Angle between two lines, Various forms of equations of a line',
      'Distance of a point from a line, Distance between parallel lines, Family of lines',
      'Standard equation of a circle, General equation x^2 + y^2 + 2gx + 2fy + c = 0',
      'Intercepts made by circle on axes, Equation of tangent to a circle (point and slope forms)',
      'Conic sections definition: Focus, directrix, eccentricity (e)',
      'Parabola: Standard equations (y^2 = 4ax), Focus, vertex, latus rectum, tangent condition (y = mx + a/m)',
      'Ellipse: Standard equation (x^2/a^2 + y^2/b^2 = 1), Eccentricity b^2 = a^2(1 - e^2), Foci, directrices, tangent condition',
      'Hyperbola: Standard equation (x^2/a^2 - y^2/b^2 = 1), Asymptotes, Rectangular hyperbola (xy = c^2)'
    ],
    prerequisites: ['Basic 2D geometry', 'Quadratic equations and tangency discriminant D = 0'],
    keyFormulae: [
      { name: 'Perpendicular Distance from Point to Line', formula: 'd = \\frac{|a x_1 + b y_1 + c|}{\\sqrt{a^2 + b^2}}', desc: 'Orthogonal distance from (x1, y1) to ax + by + c = 0' },
      { name: 'Parabola Tangent in Slope Form', formula: 'y = m x + \\frac{a}{m} \\quad [m \\ne 0]', desc: 'Condition of tangency for y^2 = 4ax' },
      { name: 'Ellipse Tangency Condition', formula: 'y = m x \\pm \\sqrt{a^2 m^2 + b^2}', desc: 'Line y = mx + c touches ellipse x^2/a^2 + y^2/b^2 = 1' },
      { name: 'Director Circle Radii', formula: 'x^2 + y^2 = a^2 + b^2 \\quad [\\text{Ellipse}], \\quad x^2 + y^2 = a^2 - b^2 \\quad [\\text{Hyperbola}]', desc: 'Locus of intersection of perpendicular tangents' }
    ],
    importantResults: [
      'Eccentricity classification: e = 0 (Circle), 0 < e < 1 (Ellipse), e = 1 (Parabola), e > 1 (Hyperbola).',
      'Focal property of reflection: Rays emitted from one focus of an ellipse reflect through the other focus; rays from focus of parabola reflect parallel to principal axis.',
      'Equation of chord with given midpoint (x1, y1) for any second degree curve is T = S1.'
    ],
    commonMistakes: [
      'Confusing major and minor axes orientation when b > a in ellipse x^2/a^2 + y^2/b^2 = 1 (foci lie on y-axis).',
      'Applying slope form tangent formula for vertical tangents with undefined slope (m -> \\infty).'
    ],
    shortTricks: [
      'Product of perpendiculars from foci onto any tangent to ellipse x^2/a^2 + y^2/b^2 = 1 is always b^2 (semi-minor axis squared).'
    ],
    ncertChapterName: 'Chapter 9: Straight Lines & Chapter 10: Conic Sections',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?kemh1=9-9',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-vectors-3d',
    subject: 'Mathematics',
    name: 'Vectors and Three-Dimensional Geometry',
    hindiName: 'सदिश एवं त्रिविमीय ज्यामिति',
    classLevel: '12',
    unit: 'Vectors & 3D',
    weightagePercent: '10-12%',
    topics: [
      'Vectors and scalars, Direction cosines and direction ratios of a vector',
      'Types of vectors, Position vector, Addition and multiplication by scalar',
      'Dot (scalar) product of two vectors, Projection of a vector on a line',
      'Cross (vector) product of two vectors, Scalar triple product [a b c] and volume of parallelepiped',
      'Vector equation and Cartesian equation of a line in 3D',
      'Angle between two lines, Skew lines and shortest distance between them',
      'Coplanarity of two lines',
      'Vector and Cartesian equations of planes (where applicable in current syllabus)'
    ],
    prerequisites: ['Trigonometry', 'Cartesian coordinates', 'Determinants evaluation'],
    keyFormulae: [
      { name: 'Dot Product & Angle', formula: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\theta, \\quad \\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}', desc: 'Scalar product and orthogonality test' },
      { name: 'Cross Product Area', formula: '\\text{Area of } \\Delta = \\frac{1}{2} |\\vec{a} \\times \\vec{b}|, \\quad \\text{Area of Parallelogram} = |\\vec{a} \\times \\vec{b}|', desc: 'Vector product geometric area representation' },
      { name: 'Scalar Triple Product Volume', formula: 'V = |[\\vec{a} \\, \\vec{b} \\, \\vec{c}]| = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|', desc: 'Volume of parallelepiped formed by coterminous edges' },
      { name: 'Shortest Distance Between Skew Lines', formula: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}', desc: 'Distance between non-parallel, non-intersecting lines' }
    ],
    importantResults: [
      'Two non-zero vectors are perpendicular if and only if \\vec{a} \\cdot \\vec{b} = 0; parallel if \\vec{a} \\times \\vec{b} = \\vec{0}.',
      'Three vectors \\vec{a}, \\vec{b}, \\vec{c} are coplanar if and only if [\\vec{a} \\, \\vec{b} \\, \\vec{c}] = 0.',
      'Sum of squares of direction cosines of any line is strictly 1: l^2 + m^2 + n^2 = \\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1.'
    ],
    commonMistakes: [
      'Dividing by a vector (vector division is undefined in mathematics).',
      'Confusing direction ratios (proportional numbers a, b, c) with normalized direction cosines (l, m, n).'
    ],
    shortTricks: [
      'Two lines are intersecting if and only if the shortest distance between them is zero ((\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0).'
    ],
    ncertChapterName: 'Chapter 10: Vector Algebra & Chapter 11: Three Dimensional Geometry',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=4-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  },
  {
    id: 'math-probability-statistics',
    subject: 'Mathematics',
    name: 'Probability and Statistics',
    hindiName: 'प्रायिकता एवं सांख्यिकी',
    classLevel: '12',
    unit: 'Probability & Statistics',
    weightagePercent: '6-8%',
    topics: [
      'Random experiments, Sample space, Events and types of events',
      'Axiomatic definition of probability, Addition theorem of probability',
      'Conditional probability P(A|B), Multiplication theorem on probability, Independent events',
      'Total probability theorem and Bayes’ theorem',
      'Random variable and its probability distribution, Mean and variance',
      'Statistics: Measures of dispersion: Range, Mean deviation from mean and median',
      'Variance and Standard Deviation for ungrouped and grouped frequency data',
      'Effect of change of origin and scale on variance and standard deviation'
    ],
    prerequisites: ['Sets and Venn diagrams', 'Permutations & combinations'],
    keyFormulae: [
      { name: 'Conditional Probability', formula: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad [P(B) > 0]', desc: 'Probability of event A given B has occurred' },
      { name: 'Bayes’ Theorem', formula: 'P(E_i|A) = \\frac{P(E_i) P(A|E_i)}{\\sum_{j=1}^k P(E_j) P(A|E_j)}', desc: 'Posterior probability of hypothesis given evidence' },
      { name: 'Variance of Data Set', formula: '\\sigma^2 = \\frac{1}{N} \\sum x_i^2 - (\\bar{x})^2', desc: 'Mean of squares minus square of mean' },
      { name: 'Change of Scale on Variance', formula: 'y_i = a x_i + b \\implies \\sigma_y^2 = a^2 \\sigma_x^2, \\quad \\sigma_y = |a| \\sigma_x', desc: 'Variance is independent of origin shift (b) and scales by a^2' }
    ],
    importantResults: [
      'Independent events: P(A \\cap B) = P(A) \\cdot P(B). Note: Mutually exclusive events with non-zero probability can NEVER be independent.',
      'Variance cannot be negative (\\sigma^2 \\ge 0). If variance is zero, all observations are identical.',
      'Adding a constant c to every observation leaves standard deviation and variance unchanged.'
    ],
    commonMistakes: [
      'Confusing mutually exclusive events (A \\cap B = \\emptyset) with independent events.',
      'Multiplying standard deviation by negative scale factor without taking absolute value (\\sigma is always >= 0).'
    ],
    shortTricks: [
      'Variance of first n natural numbers {1, 2, ..., n} is always \\frac{n^2 - 1}{12}.'
    ],
    ncertChapterName: 'Chapter 13: Probability (Class 12) & Chapter 13: Statistics (Class 11)',
    ncertOfficialUrl: 'https://ncert.nic.in/textbook.php?lemh2=6-6',
    examRelevance: { jeeMain: 'High', jeeAdvanced: 'High', stateExams: 'High', bitsat: 'High' }
  }
];
