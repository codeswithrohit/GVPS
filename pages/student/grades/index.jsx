"use client";
import { useState } from "react";

const terms = ["Term 1 (Apr–Jun)", "Term 2 (Jul–Sep)", "Term 3 (Oct–Dec)"];

const results = {
  "Term 1 (Apr–Jun)": {
    total: 478, outOf: 600, rank: 7, classSize: 42,
    subjects: [
      { name: "Mathematics",      marks: 82, max: 100, grade: "A", written: 72, practical: 10 },
      { name: "Science",          marks: 79, max: 100, grade: "B+", written: 66, practical: 13 },
      { name: "English",          marks: 76, max: 100, grade: "B+", written: 68, practical: 8  },
      { name: "Hindi",            marks: 80, max: 100, grade: "A",  written: 72, practical: 8  },
      { name: "Social Studies",   marks: 71, max: 100, grade: "B",  written: 65, practical: 6  },
      { name: "Computer Science", marks: 85, max: 100, grade: "A+", written: 70, practical: 15 },
    ],
  },
  "Term 2 (Jul–Sep)": {
    total: 463, outOf: 600, rank: 9, classSize: 42,
    subjects: [
      { name: "Mathematics",      marks: 78, max: 100, grade: "B+", written: 68, practical: 10 },
      { name: "Science",          marks: 75, max: 100, grade: "B+", written: 63, practical: 12 },
      { name: "English",          marks: 72, max: 100, grade: "B",  written: 64, practical: 8  },
      { name: "Hindi",            marks: 77, max: 100, grade: "B+", written: 69, practical: 8  },
      { name: "Social Studies",   marks: 68, max: 100, grade: "B",  written: 62, practical: 6  },
      { name: "Computer Science", marks: 82, max: 100, grade: "A",  written: 67, practical: 15 },
    ],
  },
  "Term 3 (Oct–Dec)": {
    total: 487, outOf: 600, rank: 5, classSize: 42,
    subjects: [
      { name: "Mathematics",      marks: 92, max: 100, grade: "A+", written: 82, practical: 10 },
      { name: "Science",          marks: 85, max: 100, grade: "A",  written: 72, practical: 13 },
      { name: "English",          marks: 78, max: 100, grade: "B+", written: 70, practical: 8  },
      { name: "Hindi",            marks: 82, max: 100, grade: "A",  written: 74, practical: 8  },
      { name: "Social Studies",   marks: 74, max: 100, grade: "B",  written: 68, practical: 6  },
      { name: "Computer Science", marks: 88, max: 100, grade: "A+", written: 73, practical: 15 },
    ],
  },
};

const gradeColor = {
  "A+": { pill: "bg-green-100 text-green-800", bar: "bg-green-500" },
  "A":  { pill: "bg-green-100 text-green-700", bar: "bg-green-400" },
  "B+": { pill: "bg-yellow-100 text-yellow-800", bar: "bg-yellow-400" },
  "B":  { pill: "bg-orange-100 text-orange-700", bar: "bg-orange-400" },
  "C":  { pill: "bg-red-100 text-red-700", bar: "bg-red-400" },
};

function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-[#1a2252] uppercase tracking-widest">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

export default function GradesPage() {
  const [activeTerm, setActiveTerm] = useState("Term 3 (Oct–Dec)");
  const current = results[activeTerm];
  const pct = Math.round((current.total / current.outOf) * 100);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1a2252]">Results & Grades</h1>
          <p className="text-xs text-gray-400 mt-0.5">Academic Year 2024–25</p>
        </div>
        <button className="flex items-center gap-2 text-xs border border-[#1a2252] text-[#1a2252] hover:bg-[#1a2252] hover:text-white px-4 py-2 rounded transition font-medium">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path d="M2 12l3-3 3 3 5-7M14 12H2" />
          </svg>
          Download Report Card
        </button>
      </div>

      {/* Term Tabs */}
      <div className="flex gap-2 bg-white rounded-xl border border-gray-100 shadow-sm p-2">
        {terms.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTerm(t)}
            className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition ${
              activeTerm === t
                ? "bg-[#1a2252] text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Marks", value: `${current.total}/${current.outOf}`, color: "text-[#1a2252]" },
          { label: "Percentage", value: `${pct}%`, color: pct >= 80 ? "text-green-700" : pct >= 60 ? "text-yellow-600" : "text-red-600" },
          { label: "Overall Grade", value: pct >= 90 ? "A+" : pct >= 80 ? "A" : pct >= 70 ? "B+" : "B", color: "text-[#1a2252]" },
          { label: "Class Rank", value: `#${current.rank} / ${current.classSize}`, color: "text-[#1a2252]" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Subject Results */}
      <SectionCard title={`Subject Results — ${activeTerm}`}>
        <div className="space-y-5">
          {current.subjects.map((s, i) => {
            const gc = gradeColor[s.grade] || gradeColor["B"];
            const pct = Math.round((s.marks / s.max) * 100);
            return (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-800">{s.name}</span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${gc.pill}`}>{s.grade}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Written: <strong className="text-gray-700">{s.written}</strong></span>
                    <span>Practical: <strong className="text-gray-700">{s.practical}</strong></span>
                    <span className="font-bold text-gray-800 text-sm">{s.marks}/{s.max}</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${gc.bar} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* Term Comparison Table */}
      <SectionCard title="Term-wise Performance Summary">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {["Term", "Total Marks", "Percentage", "Grade", "Class Rank", "Trend"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 py-3 first:rounded-l-lg last:rounded-r-lg">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {terms.map((t, i) => {
                const r = results[t];
                const p = Math.round((r.total / r.outOf) * 100);
                const prev = i > 0 ? Math.round((results[terms[i - 1]].total / results[terms[i - 1]].outOf) * 100) : null;
                const trend = prev === null ? "—" : p > prev ? "↑ Up" : p < prev ? "↓ Down" : "→ Same";
                const trendColor = trend.includes("↑") ? "text-green-600" : trend.includes("↓") ? "text-red-500" : "text-gray-400";
                const gc = gradeColor[p >= 90 ? "A+" : p >= 80 ? "A" : p >= 70 ? "B+" : "B"];
                return (
                  <tr key={t} className={`border-b border-gray-50 hover:bg-gray-50 transition last:border-0 ${activeTerm === t ? "bg-blue-50" : ""}`}>
                    <td className="px-4 py-3 font-semibold text-[#1a2252]">{t}</td>
                    <td className="px-4 py-3 font-semibold">{r.total}/{r.outOf}</td>
                    <td className="px-4 py-3 font-bold text-[#1a2252]">{p}%</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${gc.pill}`}>
                        {p >= 90 ? "A+" : p >= 80 ? "A" : p >= 70 ? "B+" : "B"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">#{r.rank} / {r.classSize}</td>
                    <td className={`px-4 py-3 font-semibold text-sm ${trendColor}`}>{trend}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Grade Scale Reference */}
      <SectionCard title="Grading Scale">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { grade: "A+", range: "90–100%", color: "bg-green-100 text-green-800" },
            { grade: "A",  range: "80–89%",  color: "bg-green-50 text-green-700" },
            { grade: "B+", range: "70–79%",  color: "bg-yellow-100 text-yellow-800" },
            { grade: "B",  range: "60–69%",  color: "bg-orange-100 text-orange-700" },
            { grade: "C",  range: "Below 60%",color: "bg-red-100 text-red-700" },
          ].map((g) => (
            <div key={g.grade} className={`rounded-xl px-4 py-4 text-center ${g.color}`}>
              <p className="text-2xl font-bold">{g.grade}</p>
              <p className="text-xs mt-1 font-medium opacity-80">{g.range}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
