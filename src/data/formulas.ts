import type { FormulaEngineItem, ChemistryReaction } from '../types';

export const PHYSICS_FORMULAS: FormulaEngineItem[] = [
  {
    id: 'f-phy-01',
    subject: 'Physics',
    chapter: 'Kinematics',
    title: 'Horizontal Range of a Projectile',
    formula: 'R = \\frac{u^2 \\sin(2\\theta)}{g}',
    variables: [
      { symbol: 'R', meaning: 'Horizontal range', unit: 'm', dimensions: '[M^0 L^1 T^0]' },
      { symbol: 'u', meaning: 'Initial launch speed', unit: 'm/s', dimensions: '[M^0 L^1 T^{-1}]' },
      { symbol: '\\theta', meaning: 'Angle of projection with horizontal', unit: 'radians / degrees', dimensions: '[M^0 L^0 T^0]' },
      { symbol: 'g', meaning: 'Acceleration due to gravity', unit: 'm/s²', dimensions: '[M^0 L^1 T^{-2}]' }
    ],
    conditions: [
      'Level ground projection (launch and landing points at same horizontal height)',
      'Air resistance is negligible',
      'Gravitational acceleration g is uniform over trajectory'
    ],
    derivationSummary: 'T = \\frac{2u\\sin\\theta}{g}; \\quad R = u_x T = (u\\cos\\theta)\\left(\\frac{2u\\sin\\theta}{g}\\right) = \\frac{u^2 \\sin(2\\theta)}{g}',
    commonMistake: 'Using this formula for projection from a tower or onto an inclined plane where launch and landing heights differ.',
    sampleQuestion: 'A body is launched with speed 40 m/s at 30° to horizontal. Find its horizontal range (g = 10 m/s²). Answer: 40² * sin(60°) / 10 = 1600 * (√3/2) / 10 = 80√3 ≈ 138.56 m.'
  },
  {
    id: 'f-phy-02',
    subject: 'Physics',
    chapter: 'Work, Energy and Power',
    title: 'Work-Energy Theorem for Variable Force',
    formula: 'W_{net} = \\int_{r_1}^{r_2} \\vec{F}_{net} \\cdot d\\vec{r} = \\Delta K = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2',
    variables: [
      { symbol: 'W_{net}', meaning: 'Total work done by all forces (conservative, non-conservative, pseudo)', unit: 'J (Joules)', dimensions: '[M^1 L^2 T^{-2}]' },
      { symbol: 'm', meaning: 'Inertial mass of the body', unit: 'kg', dimensions: '[M^1 L^0 T^0]' },
      { symbol: 'v_f, v_i', meaning: 'Final and initial speeds of the body', unit: 'm/s', dimensions: '[M^0 L^1 T^{-1}]' }
    ],
    conditions: [
      'Valid in inertial frames directly',
      'In non-inertial reference frames, work done by pseudo forces MUST be included on the LHS'
    ],
    derivationSummary: '\\vec{F} = m \\frac{d\\vec{v}}{dt} \\implies \\int \\vec{F} \\cdot d\\vec{r} = m \\int \\frac{d\\vec{v}}{dt} \\cdot \\vec{v} dt = m \\int_{v_i}^{v_f} \\vec{v} \\cdot d\\vec{v} = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2',
    commonMistake: 'Omitting work done by friction or normal contact forces when calculating W_net.',
    sampleQuestion: 'A force F(x) = (3x² + 2x) N acts on a 2 kg block from x = 0 to x = 2 m. If initial speed is 0, find final speed. W = [x³ + x²]_0^2 = 8 + 4 = 12 J. 1/2 (2) v² = 12 => v = √12 ≈ 3.46 m/s.'
  },
  {
    id: 'f-phy-03',
    subject: 'Physics',
    chapter: 'Rotational Motion',
    title: 'Linear Acceleration of a Body Rolling Without Slipping on an Incline',
    formula: 'a = \\frac{g \\sin\\theta}{1 + \\frac{I_{cm}}{M R^2}} = \\frac{g \\sin\\theta}{1 + \\frac{k^2}{R^2}}',
    variables: [
      { symbol: 'a', meaning: 'Linear acceleration of center of mass', unit: 'm/s²', dimensions: '[M^0 L^1 T^{-2}]' },
      { symbol: '\\theta', meaning: 'Inclination angle of plane', unit: 'degrees', dimensions: '[M^0 L^0 T^0]' },
      { symbol: 'I_{cm}', meaning: 'Moment of inertia about central symmetry axis', unit: 'kg m²', dimensions: '[M^1 L^2 T^0]' },
      { symbol: 'k', meaning: 'Radius of gyration', unit: 'm', dimensions: '[M^0 L^1 T^0]' }
    ],
    conditions: [
      'Incline must have sufficient static friction coefficient: \\mu_s \\ge \\frac{\\tan\\theta}{1 + \\frac{M R^2}{I_{cm}}}',
      'Pure rolling (no sliding or skidding)'
    ],
    derivationSummary: 'Translational equation: Mg \\sin\\theta - f_s = Ma; Rotational equation: f_s R = I_{cm} \\alpha = I_{cm} (a/R) \\implies f_s = \\frac{I_{cm} a}{R^2}; Substitute f_s to obtain a.',
    commonMistake: 'Assuming kinetic friction acts during pure rolling (only static friction acts, doing zero instantaneous net work).',
    sampleQuestion: 'Compare acceleration of solid cylinder (I = 1/2 MR²) and solid sphere (I = 2/5 MR²). a_cyl = g sinθ / (1 + 1/2) = (2/3) g sinθ ≈ 0.67 g sinθ; a_sph = g sinθ / (1 + 2/5) = (5/7) g sinθ ≈ 0.71 g sinθ. Sphere accelerates faster.'
  },
  {
    id: 'f-phy-04',
    subject: 'Physics',
    chapter: 'Current Electricity',
    title: 'Balanced Wheatstone Bridge Condition',
    formula: '\\frac{P}{Q} = \\frac{R}{S} \\implies I_G = 0 \\quad (V_B = V_D)',
    variables: [
      { symbol: 'P, Q, R, S', meaning: 'Four bridge arm resistances', unit: '\\Omega (Ohms)', dimensions: '[M^1 L^2 T^{-3} I^{-2}]' },
      { symbol: 'I_G', meaning: 'Current passing through central galvanometer', unit: 'A (Amperes)', dimensions: '[M^0 L^0 T^0 I^1]' }
    ],
    conditions: [
      'Steady DC circuit equilibrium',
      'No external EMF sources inside the bridge mesh branches'
    ],
    derivationSummary: 'For V_B = V_D, current through galvanometer is zero. Current through P equals Q, and current through R equals S. I_1 P = I_2 R and I_1 Q = I_2 S. Dividing yields P/Q = R/S.',
    commonMistake: 'Trying to include the central galvanometer resistance in the series-parallel equivalent calculation when the bridge is already balanced (it can simply be removed).',
    sampleQuestion: 'In a bridge P = 10 Ω, Q = 20 Ω, R = 15 Ω, find S for null deflection. S = R * (Q/P) = 15 * (20/10) = 30 Ω.'
  }
];

export const MATH_FORMULAS: FormulaEngineItem[] = [
  {
    id: 'f-math-01',
    subject: 'Mathematics',
    chapter: 'Differential Calculus',
    title: 'Lagrange’s Mean Value Theorem (LMVT)',
    formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a}, \\quad c \\in (a, b)',
    variables: [
      { symbol: 'f(x)', meaning: 'Continuous and differentiable function' },
      { symbol: '[a, b]', meaning: 'Domain interval' },
      { symbol: 'c', meaning: 'Point at which instantaneous slope equals secant line slope' }
    ],
    conditions: [
      'f(x) is continuous on closed interval [a, b]',
      'f(x) is differentiable on open interval (a, b)'
    ],
    derivationSummary: 'Consider auxiliary function \\phi(x) = f(x) - \\left[f(a) + \\frac{f(b)-f(a)}{b-a}(x-a)\\right]. \\phi(a) = \\phi(b) = 0. By Rolle’s Theorem, \\phi\'(c) = 0 for some c in (a, b).',
    commonMistake: 'Applying LMVT to functions having sharp turns or asymptotes in the interval (e.g. f(x) = 1/x on [-1, 1] or f(x) = |x| on [-1, 2]).',
    sampleQuestion: 'Find c for f(x) = x² on [1, 3]. (f(3) - f(1))/(3 - 1) = (9 - 1)/2 = 4. f\'(c) = 2c = 4 => c = 2, which lies in (1, 3).'
  },
  {
    id: 'f-math-02',
    subject: 'Mathematics',
    chapter: 'Coordinate Geometry',
    title: 'Equation of Tangent to Parabola y² = 4ax in Slope Form',
    formula: 'y = m x + \\frac{a}{m} \\quad [m \\ne 0]',
    variables: [
      { symbol: 'm', meaning: 'Slope of tangent line' },
      { symbol: 'a', meaning: 'Focal parameter of parabola y² = 4ax' },
      { symbol: '(a/m², 2a/m)', meaning: 'Point of contact on parabola' }
    ],
    conditions: [
      'm ≠ 0 (vertical line x = 0 is tangent at vertex x = 0 with m -> ∞)',
      'Applicable strictly to parabola oriented along horizontal axis y² = 4ax'
    ],
    derivationSummary: 'Substitute y = mx + c into y² = 4ax: (mx + c)² = 4ax => m²x² + 2(mc - 2a)x + c² = 0. For tangency, discriminant D = 0: 4(mc - 2a)² - 4m²c² = 0 => -16amc + 16a² = 0 => c = a/m.',
    commonMistake: 'Using c = a/m for parabola x² = 4ay (for x² = 4ay, tangent in slope form is y = mx - am²).',
    sampleQuestion: 'Find equation of tangent to y² = 12x (a = 3) having slope m = 2. Tangent: y = 2x + 3/2 => 4x - 2y + 3 = 0.'
  },
  {
    id: 'f-math-03',
    subject: 'Mathematics',
    chapter: 'Integral Calculus',
    title: 'King’s Property of Definite Integrals',
    formula: '\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx',
    variables: [
      { symbol: 'a, b', meaning: 'Lower and upper integration limits' },
      { symbol: 'f(x)', meaning: 'Integrable integrand function' }
    ],
    conditions: [
      'f(x) must be continuous/integrable on [a, b]'
    ],
    derivationSummary: 'Let t = a + b - x => dt = -dx. When x = a, t = b; when x = b, t = a. \\int_a^b f(x) dx = \\int_b^a f(a+b-t) (-dt) = \\int_a^b f(a+b-t) dt = \\int_a^b f(a+b-x) dx.',
    commonMistake: 'Forgetting to add the original integral I and transformed integral I to get 2I before evaluating the simplified sum.',
    sampleQuestion: 'Evaluate I = ∫_0^(π/2) (sin x / (sin x + cos x)) dx. Applying property gives I = ∫_0^(π/2) (cos x / (cos x + sin x)) dx. Adding both: 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.'
  }
];

export const CHEMISTRY_REACTIONS: ChemistryReaction[] = [
  {
    id: 'rx-01',
    name: 'Aldol Condensation',
    type: 'Organic',
    chapter: 'Aldehydes, Ketones and Carboxylic Acids',
    reactants: '2 molecules of Aldehyde or Ketone containing at least one \\alpha-hydrogen (e.g. Acetaldehyde CH3CHO)',
    reagents: 'Dilute alkali (dil. NaOH or Ba(OH)2)',
    conditions: 'Mild basic temperature followed by heating (\\Delta) for dehydration',
    products: '\\beta-hydroxyaldehyde (Aldol) -> \\alpha,\\beta-unsaturated aldehyde (e.g. But-2-enal / Crotonaldehyde)',
    mechanism: 'Base abstracts acidic \\alpha-proton forming resonance-stabilized enolate ion; nucleophilic addition of enolate onto second carbonyl; protonation gives aldol; elimination of water gives conjugated enone.',
    exceptions: 'Formaldehyde (HCHO) and Benzaldehyde (C6H5CHO) have no \\alpha-hydrogen, so they do NOT undergo self-aldol (they undergo Cannizzaro reaction instead).',
    pyqFrequency: 'Very High (Featured in JEE Main and Advanced repeatedly)'
  },
  {
    id: 'rx-02',
    name: 'Cannizzaro Reaction',
    type: 'Organic',
    chapter: 'Aldehydes, Ketones and Carboxylic Acids',
    reactants: 'Aldehydes lacking \\alpha-hydrogens (e.g. HCHO, Benzaldehyde, Trimethylacetaldehyde (CH3)3C-CHO)',
    reagents: 'Concentrated alkali (50% NaOH or conc. KOH)',
    conditions: 'Heating with concentrated strong base',
    products: 'One molecule is reduced to an Alcohol; one molecule is oxidized to a Carboxylate salt (Self-oxidation-reduction / Disproportionation)',
    mechanism: 'Nucleophilic attack of OH^- on carbonyl carbon; hydride ion (H:-) transfer from tetrahedral intermediate to another aldehyde molecule (slowest/rate determining step).',
    exceptions: 'If two different aldehydes without \\alpha-H are used (Crossed Cannizzaro with HCHO), Formaldehyde is preferentially oxidized to Formate due to sterically unhindered, rapid attack.',
    pyqFrequency: 'High (Core NCERT named reaction)'
  },
  {
    id: 'rx-03',
    name: 'Reimer-Tiemann Reaction',
    type: 'Organic',
    chapter: 'Alcohols, Phenols and Ethers',
    reactants: 'Phenol (C6H5OH)',
    reagents: 'Chloroform (CHCl3) + aqueous NaOH / KOH',
    conditions: '60 - 70 °C heating followed by acid hydrolysis (H+)',
    products: 'Salicylaldehyde (2-hydroxybenzaldehyde) as major product (due to intramolecular hydrogen bonding) along with minor p-isomer',
    mechanism: 'Electrophilic aromatic substitution where electrophile is neutral electron-deficient Dichlorocarbene (:CCl2) generated via \\alpha-elimination from CHCl3 by base.',
    exceptions: 'If Carbon tetrachloride (CCl4) is used instead of Chloroform (CHCl3), Salicylic acid (2-hydroxybenzoic acid) is formed as the main product.',
    pyqFrequency: 'Very High (Frequently tested on electrophile identity :CCl2)'
  },
  {
    id: 'rx-04',
    name: 'Kolbe’s Reaction (Kolbe-Schmitt)',
    type: 'Organic',
    chapter: 'Alcohols, Phenols and Ethers',
    reactants: 'Phenol',
    reagents: 'NaOH, followed by Carbon Dioxide (CO2), then dilute acid (H+)',
    conditions: '120 - 140 °C, 4 - 7 atm pressure',
    products: 'Salicylic acid (2-Hydroxybenzoic acid)',
    mechanism: 'Sodium phenoxide is more nucleophilic than phenol; reacts with weak electrophile CO2 at ortho position via electrophilic aromatic substitution.',
    exceptions: 'At higher temperatures (>200 °C), para-isomer predominates.',
    pyqFrequency: 'High'
  },
  {
    id: 'rx-05',
    name: 'Hoffmann Bromamide Degradation',
    type: 'Organic',
    chapter: 'Amines',
    reactants: 'Primary Carboxamide (R-CONH2 or Ar-CONH2)',
    reagents: 'Bromine (Br2) + 4 equivalents of aqueous/ethanolic KOH or NaOH',
    conditions: 'Gentle warming',
    products: 'Primary Amine (R-NH2) with ONE LESS carbon atom + K2CO3 + 2 KBr + 2 H2O',
    mechanism: 'Forms N-bromoamide -> isocyanate intermediate (R-N=C=O) via intramolecular alkyl migration with retention of configuration -> hydrolysis yields primary amine and CO2.',
    exceptions: 'Secondary and tertiary amides do not undergo this reaction.',
    pyqFrequency: 'Very High'
  }
];
