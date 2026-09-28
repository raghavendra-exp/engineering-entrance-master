import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COLLEGES_DATA } from '../data/colleges';
import type { College } from '../types';
import {
  GraduationCap,
  ExternalLink,
  MapPin,
  TrendingUp,
  Search,
  Filter,
  DollarSign,
  Award,
  Layers,
  Info
} from 'lucide-react';

export const CollegesPage: React.FC = () => {
  const { language, setBreadcrumbs } = useApp();

  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCollegeForCutoffs, setSelectedCollegeForCutoffs] = useState<College | null>(null);

  useEffect(() => {
    setBreadcrumbs([
      { label: 'Home', hindiLabel: 'होम', route: 'home' },
      { label: 'Colleges & Cutoff Explorer', hindiLabel: 'कॉलेज और कटऑफ खोजक', route: 'colleges' }
    ]);
  }, [setBreadcrumbs]);

  // Extract states list
  const stateList = Array.from(new Set(COLLEGES_DATA.map(c => c.state))).sort();

  const filteredColleges = COLLEGES_DATA.filter(col => {
    if (selectedType !== 'All' && col.instituteType !== selectedType) return false;
    if (selectedState !== 'All' && col.state !== selectedState) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = col.name.toLowerCase().includes(q);
      const matchShort = col.shortName.toLowerCase().includes(q);
      const matchCity = col.city.toLowerCase().includes(q);
      const matchBranches = col.branches.some(b => b.toLowerCase().includes(q));
      if (!matchName && !matchShort && !matchCity && !matchBranches) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-300 border border-white/15">
            <GraduationCap className="w-3.5 h-3.5" /> Factual Admissions & Cutoff Explorer
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'शीर्ष इंजीनियरिंग कॉलेज और कटऑफ' : 'Top Engineering Colleges & Official Cutoffs'}
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            {language === 'hi'
              ? 'आईआईटी, एनआईटी, आईआईआईटी, बिट्स और राज्य सरकार के प्रमुख विश्वविद्यालयों की वास्तविक सीटें, एनआईआरएफ रैंक, फीस, प्लेसमेंट और आधिकारिक जोसा कटऑफ।'
              : 'Explore verified official benchmarks across premier IITs, NITs, IIITs, BITS, and State Technical Universities without ungrounded ranking claims.'}
          </p>
        </div>
      </div>

      {/* Disclaimers & Ethics Alert */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
        <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-slate-800 dark:text-slate-200 block font-bold">Factual Data Disclosure:</strong>
          <p className="leading-relaxed">
            Cutoff ranges shown are factual historical benchmarks derived from official JoSAA, CSAB, and State CAP allotment round records. Cutoffs fluctuate yearly depending on applicant pools, seat additions, and category distributions. We do not provide speculative "guaranteed chance" predictions.
          </p>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[260px] relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search college name, city, or engineering branch..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* State Dropdown */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <select
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)}
              className="text-xs font-semibold p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="All">All States / UTs</option>
              {stateList.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Institute Type Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
          {['All', 'IIT', 'NIT', 'IIIT', 'BITS', 'State-Gov'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedType === type
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {type === 'All' ? 'All Institutes' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Colleges List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredColleges.map(col => (
          <div
            key={col.id}
            className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex justify-between items-start gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {col.instituteType}
                    </span>
                    {col.nirfRank && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> NIRF #{col.nirfRank}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                    {col.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{col.city}, {col.state}</span>
                  </div>
                </div>

                <a
                  href={col.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-emerald-600 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shrink-0"
                  title="Official Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Admissions Through Pill */}
              <div className="text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 font-medium">Entrance Exams:</span>
                {col.admissionExams.map(ex => (
                  <span key={ex} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 font-semibold text-slate-700 dark:text-slate-200">
                    {ex}
                  </span>
                ))}
                <span className="text-slate-400">• Counselling: {col.counsellingAuthority}</span>
              </div>

              {/* Fee and Placement Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Annual Tuition
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-[11px] leading-tight">
                    {col.estimatedFeePerYear}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-500" /> Avg Placement
                  </span>
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {col.placementStats?.averagePackageLPA ? `₹${col.placementStats.averagePackageLPA} LPA Avg` : 'Official Report'}
                  </p>
                  <span className="text-[10px] text-slate-400 block">
                    Highest: ₹{col.placementStats?.highestPackageLPA || 'N/A'} LPA ({col.placementStats?.year || 'Recent'})
                  </span>
                </div>
              </div>

              {/* Branches summary */}
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Popular Engineering Branches Offered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {col.branches.slice(0, 4).map(b => (
                    <span key={b} className="text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {b}
                    </span>
                  ))}
                  {col.branches.length > 4 && (
                    <span className="text-[11px] px-2 py-0.5 rounded-lg text-slate-400">
                      +{col.branches.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Cutoffs Button */}
            {col.sampleCutoffs && col.sampleCutoffs.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCollegeForCutoffs(col)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" /> View Official Benchmark Cutoffs ({col.sampleCutoffs.length})
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal: Detailed Cutoffs Table */}
      {selectedCollegeForCutoffs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-5">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedCollegeForCutoffs.instituteType} • Official Allotment Archive
                </span>
                <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                  {selectedCollegeForCutoffs.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCollegeForCutoffs(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-900/60 uppercase font-bold text-slate-500 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">Branch</th>
                    <th className="p-3">Quota</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Opening Rank</th>
                    <th className="p-3">Closing Rank</th>
                    <th className="p-3">Round</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  {selectedCollegeForCutoffs.sampleCutoffs?.map((cut, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                      <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{cut.branch}</td>
                      <td className="p-3 text-slate-600 dark:text-slate-300">{cut.quota}</td>
                      <td className="p-3 text-slate-600 dark:text-slate-300">{cut.category}</td>
                      <td className="p-3 font-mono text-emerald-600 font-bold">{cut.openingRank}</td>
                      <td className="p-3 font-mono text-indigo-600 font-bold">{cut.closingRank}</td>
                      <td className="p-3 text-slate-400">{cut.round} ({cut.year})</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-400 flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-700">
              <span>Source: {selectedCollegeForCutoffs.source}</span>
              <button
                onClick={() => setSelectedCollegeForCutoffs(null)}
                className="px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
