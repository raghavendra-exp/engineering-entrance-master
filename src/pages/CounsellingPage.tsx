import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COUNSELLING_DATA } from '../data/counselling';
import type { CounsellingBody } from '../types';
import {
  GitMerge,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Building2,
  Calendar,
  Layers,
  Search,
  ArrowRight
} from 'lucide-react';

export const CounsellingPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Counselling & Seat Allocation Guide', hindiLabel: 'काउंसलिंग और सीट आवंटन गाइड', route: 'counselling' }
    ]);
  }, [setBreadcrumbs]);

  const filteredCounselling = COUNSELLING_DATA.filter(c => {
    if (selectedType !== 'All' && c.type !== selectedType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = c.name.toLowerCase().includes(q);
      const matchAuth = c.authority.toLowerCase().includes(q);
      const matchInst = c.participatingInstitutes.toLowerCase().includes(q);
      if (!matchName && !matchAuth && !matchInst) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-300 border border-white/15">
            <GitMerge className="w-3.5 h-3.5" /> Central & State Seat Allocation Blueprint
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'काउंसलिंग और सीट आवंटन संपूर्ण गाइड' : 'Engineering Counselling & Seat Allocation Guide'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'जोसा (JoSAA), सीएसएबी (CSAB), राज्य सीईटी कैप और विश्वविद्यालय काउंसलिंग प्रक्रियाओं के आधिकारिक नियम, च्वाइस फिलिंग रणनीति और फ्रीज/फ्लोट/स्लाइड नियम।'
              : 'Securing an engineering seat requires strategic choice ordering and error-free reporting. Understand the exact mechanics of JoSAA, CSAB Special Rounds, Maharashtra CAP, and State seat allocations.'}
          </p>
        </div>
      </div>

      {/* Visual Step-by-Step Counselling Lifecycle Flowchart */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" /> The Universal 6-Stage Counselling Lifecycle
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Follow this chronological sequence to guarantee that you never lose a deserved seat due to procedural technicalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {[
            {
              step: 'Stage 1',
              title: 'Document Readiness',
              desc: 'EWS/OBC-NCL issued after April 1st of admission year, PwD verify, Medical fitness, Class 10/12 marksheet.'
            },
            {
              step: 'Stage 2',
              title: 'Choice Filling & Lock',
              desc: 'Enter choices in descending true preference. Top dream institutes at top, safety options at bottom.'
            },
            {
              step: 'Stage 3',
              title: 'Seat Allotment',
              desc: 'Seat assigned based strictly on merit rank and preference order. View provisional allotment letter.'
            },
            {
              step: 'Stage 4',
              title: 'Freeze / Float / Slide',
              desc: 'Freeze (final acceptance), Slide (upgrade within institute), Float (upgrade across all institutes).'
            },
            {
              step: 'Stage 5',
              title: 'SAF & e-Scrutiny',
              desc: 'MANDATORY: Pay Seat Acceptance Fee and upload required documents online before round deadline!'
            },
            {
              step: 'Stage 6',
              title: 'Physical Reporting',
              desc: 'Report to allotted campus with original documents, medical certificate, and pay balance college fee.'
            }
          ].map(st => (
            <div key={st.step} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 block tracking-wider">
                {st.step}
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {st.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warning Callout */}
        <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold block text-sm">CRITICAL WARNING: The Round 1 Non-Reporting Penalty</strong>
            <p className="leading-relaxed">
              In JoSAA and most State CAPs, if you are allotted any seat in Round 1 and fail to upload documents or pay the Seat Acceptance Fee (SAF) before the deadline, your allotted seat is cancelled, and you are <strong>permanently disqualified</strong> from all subsequent rounds! Always respond to allotments promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'All', label: 'All Processes' },
            { id: 'national-josaa', label: 'JoSAA (IITs/NITs)' },
            { id: 'national-csab', label: 'CSAB (Vacant Seats)' },
            { id: 'state', label: 'State CAPs' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedType(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedType === f.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search counselling portal..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Counselling Bodies List */}
      <div className="space-y-6">
        {filteredCounselling.map(body => (
          <div
            key={body.id}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6"
          >
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {body.type.toUpperCase()}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-2">
                  {body.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Authority: {body.authority}
                </p>
              </div>

              <a
                href={body.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Participating Institutes</span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold">{body.participatingInstitutes}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Admissions Through</span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold">{body.admissionsThrough.join(' • ')}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Typical Rounds & Timeline</span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold">{body.roundsCount} Rounds • {body.timeline}</p>
              </div>
            </div>

            {/* Key Seat Rules */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Seat Allocation Rules & Operational Guidelines:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {body.keyRules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Banner */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-slate-200">Eligibility Criteria: </strong>
              {body.eligibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
