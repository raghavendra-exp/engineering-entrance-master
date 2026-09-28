# ENGINEERING ENTRANCE MASTER INDIA

> **Complete Engineering Entrance Preparation, PYQ, Practice, Mock Test, Counselling & College Discovery Platform**

[![Content Validation & Build Verification](https://github.com/raghavendra-exp/engineering-entrance-master/actions/workflows/content-validation.yml/badge.svg)](https://github.com/raghavendra-exp/engineering-entrance-master/actions/workflows/content-validation.yml)
[![Deploy to GitHub Pages](https://github.com/raghavendra-exp/engineering-entrance-master/actions/workflows/deploy.yml/badge.svg)](https://github.com/raghavendra-exp/engineering-entrance-master/actions/workflows/deploy.yml)
[![Database Questions](https://img.shields.io/badge/Question%20Bank-1%2C048%20Authentic%20Questions-indigo)](https://github.com/raghavendra-exp/engineering-entrance-master)
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A4%8F-blue)](https://github.com/raghavendra-exp/engineering-entrance-master)
[![License](https://img.shields.io/badge/License-MIT-emerald)](LICENSE)

An open-access, client-side engineering entrance preparation web application engineered for Indian engineering aspirants. Built following the complete 10-stage preparation lifecycle:

```
ZERO → FOUNDATION → SYLLABUS → CONCEPT → NCERT → PRACTICE → PYQ → MOCK → REVISION → COUNSELLING → COLLEGE
```

---

## 🚀 Key Features & Capabilities

### 1. Core Examination Coverage (18+ Entrances)
- **National Level**: JEE Main, JEE Advanced, IAT (IISER Aptitude Test).
- **State CETs**: MHT-CET (Maharashtra), WBJEE (West Bengal), KCET (Karnataka), COMEDK UGET (Karnataka Private), KEAM (Kerala), GUJCET (Gujarat), AP EAPCET (Andhra Pradesh), TS EAPCET (Telangana), OJEE (Odisha).
- **University Entrances**: BITSAT (BITS Pilani), VITEEE (VIT), MET (Manipal), SRMJEEE (SRM), AEEE (Amrita), KIITEE (KIIT).
- **Distinct Admission Portals**: Clearly designated JEE-based admission processes (UPTAC - Uttar Pradesh, JAC Delhi - DTU/NSUT/IGDTUW).
- Multi-dimensional side-by-side exam comparison table.

### 2. 1,048+ Question Bank with Dynamic Integrity
- **Dynamic Counters**: Exact question counts (`1,048` total questions, `426` verified PYQs) computed directly from the live database.
- **Strict Distinction**: Every question carries either a `verified-pyq` badge (with official exam shift and session) or an `original-pyq-style` tag.
- **10 Practice Modes**:
  1. Chapter-Wise Practice
  2. Subject-Wise Drill
  3. Exam-Specific Mode
  4. Verified PYQs Archive (10-Year real questions)
  5. Mixed Full-Syllabus Test
  6. Timed Speed Drill
  7. Numerical-Only Drill
  8. Assertion-Reason Mastery
  9. Weak-Topic Targeting
  10. Bookmark & Mistake Revision

### 3. Full CBT Mock Test Simulation Engine
- Authentic NTA computer-based testing interface with 5-color status question palette:
  - 🟩 Answered
  - 🟥 Not Answered
  - 🟪 Marked for Review
  - 🟣 Answered & Marked for Review
  - ⬜ Not Visited
- Countdown timer with 5-minute auto-warning and auto-submit.
- Exam-accurate marking schemes:
  - JEE Main: `+4, -1, 0`
  - BITSAT: `+3, -1, 0`
  - MHT-CET: `+2 Math, +1 Physics/Chem, 0 negative`
  - WBJEE: Category 1 (`+1, -0.25`), Category 2 (`+2, -0.5`), Category 3 (`+2, 0`)
- Post-test scorecards, subject breakdowns, confetti celebration, and question-by-question solution review with step-by-step KaTeX explanations.

### 4. Scientific Error Notebook
- 8-fold root-cause mistake categorization:
  - `Concept Gap`
  - `Formula Error`
  - `Calculation Error`
  - `Silly Mistake`
  - `Misread Question`
  - `Guessing / Unsure`
  - `Time Pressure`
  - `Memory Retention Error`
- In-place student self-reflection notes.
- **Error Eradication Drill**: 1-click interactive quiz mode that re-tests unresolved errors until mastery.

### 5. Spaced Repetition Flashcards (Leitner 6-Box Model)
- High-yield physics formulas, organic reagents, calculus shortcuts, and tricky exceptions.
- Intervals: `1 Day → 3 Days → 7 Days → 15 Days → 30 Days → 60 Days`.
- Automatic daily review queue calculating cards due for revision today.
- Flip animation with KaTeX rendering and keyboard shortcuts (`Space` to flip, `1` for Forgot, `2` for Got It).

### 6. Formula Engine & Chemistry Reaction Maps
- **Physics & Mathematics Engine**: Variable definitions, SI units, dimensions, derivation summaries, limiting conditions of applicability, and examiner trap warnings.
- **Chemistry Reaction Maps**: Reactants → Reagents → Products flow diagram, reaction mechanisms, intermediates (carbene, enolate, isocyanate), and exceptions.

### 7. Speed Lab & Mental Math Accelerator
- Essential square tables (1-50) and cubes (1-25).
- Recurring fractional approximations ($1/7 = 0.1428$, $1/8 = 0.125$, $1/16 = 0.0625$).
- Universal physical constants ($h, \hbar, c, \varepsilon_0, \mu_0, R, N_A$).
- **60-Second Rapid Speed Drill**: Timed mental calculation game with live streak multipliers and personal high-score saving.

### 8. 10-Level Roadmap & Customizable Timetable
- Interactive checklists across all 10 stages:
  `ZERO → FOUNDATION → SYLLABUS → CONCEPT → NCERT → PRACTICE → PYQ → MOCK → REVISION → COUNSELLING → COLLEGE`
- Customizable daily timetable generator with profiles for Droppers, Class 12, and Class 11 students with printable schedule output.

### 9. Counselling & College Discovery
- **Counselling Blueprint**: JoSAA, CSAB Special Rounds, Maharashtra CAP, KEA, and WBJEEB seat allotment rules.
- 6-Stage Counselling Lifecycle flowchart and clear explanation of `Freeze`, `Float`, and `Slide` options.
- **Colleges Directory**: Top IITs, NITs, IIITs, BITS, and State Universities with NIRF ranks, verified B.Tech tuition fees, placement averages, and official historical JoSAA cutoffs.

### 10. Progressive Web App (PWA) & Offline Ready
- Includes `manifest.json` and `sw.js` service worker for offline syllabus, questions, and formula availability.
- Relative base paths (`./`) for GitHub Pages hosting.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 19, TypeScript, Vite |
| **Styling & Design** | Tailwind CSS v4, Lucide React Icons |
| **Mathematical Rendering** | KaTeX (KaTeX Auto-render with LaTeX syntax) |
| **Interactive UX** | Canvas-Confetti, LocalStorage persistence |
| **Build & CI/CD** | Node.js 20, GitHub Actions (`deploy.yml`, `content-validation.yml`) |

---

## 📦 Getting Started

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm

### Installation
```bash
# Clone repository
git clone https://github.com/raghavendra-exp/engineering-entrance-master.git

# Enter project directory
cd engineering-entrance-master

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Run TypeScript compilation and Vite production bundling
npm run build

# Preview production build locally
npm run preview
```

---

## 🛡️ Anti-Piracy & Primary Source Guarantee

- **Zero Copyright Infringement**: No full copyrighted textbook PDFs or unauthorized question banks are distributed.
- **Official References**: All NCERT chapters link directly to official Government repositories at `ncert.nic.in`.
- **Standard Reference Books**: Curated book guides link to legitimate publisher and retailer portals (Amazon, Flipkart, Google Books, Publisher official sites).
- **Public Notices**: Exam notices and updates link directly to official conducting authorities (NTA, IITs, State CET Cells, BITS Pilani).

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
