"use client";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const periods = [
  { time: "8:00 – 8:45",   label: "Period 1" },
  { time: "8:45 – 9:30",   label: "Period 2" },
  { time: "9:30 – 10:15",  label: "Period 3" },
  { time: "10:15 – 10:30", label: "Break",   isBreak: true },
  { time: "10:30 – 11:15", label: "Period 4" },
  { time: "11:15 – 12:00", label: "Period 5" },
  { time: "12:00 – 12:45", label: "Lunch",   isBreak: true },
  { time: "12:45 – 1:30",  label: "Period 6" },
  { time: "1:30 – 2:15",   label: "Period 7" },
];

const subjectColors = {
  "Mathematics":      { bg: "bg-blue-50",   text: "text-blue-800",   border: "border-blue-200" },
  "Science":          { bg: "bg-green-50",  text: "text-green-800",  border: "border-green-200" },
  "English":          { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-200" },
  "Hindi":            { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-200" },
  "Social Studies":   { bg: "bg-red-50",    text: "text-red-800",    border: "border-red-200" },
  "Computer Science": { bg: "bg-cyan-50",   text: "text-cyan-800",   border: "border-cyan-200" },
  "PE / Sports":      { bg: "bg-yellow-50", text: "text-yellow-800", border: "border-yellow-200" },
  "Library":          { bg: "bg-gray-50",   text: "text-gray-700",   border: "border-gray-200" },
  "Art":              { bg: "bg-pink-50",   text: "text-pink-800",   border: "border-pink-200" },
};

const teachers = {
  "Mathematics":      "Mr. Rajiv Mehta",
  "Science":          "Dr. Anita Sharma",
  "English":          "Ms. Priya Nair",
  "Hindi":            "Mr. Arun Das",
  "Social Studies":   "Dr. Suresh Kumar",
  "Computer Science": "Mr. Vijay Sharma",
  "PE / Sports":      "Coach Rahul Singh",
  "Library":          "Ms. Ritu Gupta",
  "Art":              "Mr. Arun Das",
};

const schedule = [
  // [Mon, Tue, Wed, Thu, Fri]  — per period row
  ["Mathematics",      "English",        "Science",         "Mathematics",      "Computer Science"],
  ["Science",          "Mathematics",    "English",         "Social Studies",   "Mathematics"],
  ["English",          "Hindi",          "Mathematics",     "Science",          "Hindi"],
  null, // Break
  ["Hindi",            "Social Studies", "Hindi",           "English",          "Science"],
  ["Social Studies",   "Science",        "Social Studies",  "Computer Science", "English"],
  null, // Lunch
  ["Computer Science", "PE / Sports",    "Computer Science","PE / Sports",      "Social Studies"],
  ["PE / Sports",      "Library",        "Art",             "Library",          "PE / Sports"],
];

const today = new Date().getDay(); // 1=Mon … 5=Fri
const todayIndex = today >= 1 && today <= 5 ? today - 1 : 0;

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

export default function TimetablePage() {
  const [activeDay, setActiveDay] = useState(todayIndex);
  const [view, setView] = useState("weekly"); // "weekly" | "daily"

  const todaySchedule = schedule
    .map((row, i) => row === null ? { ...periods[i], subject: null } : { ...periods[i], subject: row[activeDay] })
    .filter(Boolean);

  const subjectList = [...new Set(schedule.flat().filter(Boolean))].sort();

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1a2252]">Timetable</h1>
          <p className="text-xs text-gray-400 mt-0.5">Grade 10 – Section A | Academic Year 2024–25</p>
        </div>
        <div className="flex gap-2">
          {["weekly", "daily"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-xs font-semibold px-4 py-2 rounded capitalize transition ${
                view === v ? "bg-[#1a2252] text-white" : "border border-gray-200 text-gray-500 hover:border-[#1a2252]"
              }`}
            >
              {v} View
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Class Teacher",   value: "Ms. Priya Nair" },
          { label: "Total Periods",   value: "7 / day" },
          { label: "School Hours",    value: "8am – 2:15pm" },
          { label: "Working Days",    value: "Mon – Fri" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-base font-semibold text-[#1a2252]">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Day selector (always shown) */}
      <div className="flex gap-2 bg-white rounded-xl border border-gray-100 shadow-sm p-2">
        {days.map((d, i) => (
          <button
            key={d}
            onClick={() => { setActiveDay(i); setView("daily"); }}
            className={`flex-1 text-xs font-semibold py-2.5 rounded-lg transition ${
              activeDay === i && view === "daily"
                ? "bg-[#1a2252] text-white"
                : i === todayIndex
                ? "border border-red-200 text-red-600"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <span className="hidden sm:inline">{d}</span>
            <span className="sm:hidden">{shortDays[i]}</span>
            {i === todayIndex && <span className="ml-1 text-[9px] opacity-70">(Today)</span>}
          </button>
        ))}
      </div>

      {view === "daily" ? (
        /* ── DAILY VIEW ── */
        <SectionCard title={`${days[activeDay]}'s Schedule`}>
          <div className="space-y-2">
            {todaySchedule.map((slot, i) => {
              if (slot.isBreak) return (
                <div key={i} className="flex items-center gap-4 py-2">
                  <span className="text-xs text-gray-400 w-28 flex-shrink-0">{slot.time}</span>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-gray-400 font-medium">{slot.label}</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
              );
              const subj = slot.subject;
              const c = subjectColors[subj] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
              return (
                <div key={i} className={`flex items-center gap-4 rounded-xl px-4 py-3 border ${c.bg} ${c.border}`}>
                  <div className="w-24 flex-shrink-0">
                    <p className="text-xs text-gray-400">{slot.label}</p>
                    <p className="text-xs font-semibold text-gray-600">{slot.time}</p>
                  </div>
                  <div className={`flex-1 font-semibold text-sm ${c.text}`}>{subj}</div>
                  <div className="text-xs text-gray-400 hidden sm:block">{teachers[subj]}</div>
                  <div className={`text-xs font-medium px-3 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                    45 min
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      ) : (
        /* ── WEEKLY VIEW ── */
        <SectionCard title="Weekly Schedule">
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ minWidth: "560px" }}>
              <thead>
                <tr>
                  <th className="bg-gray-50 text-gray-400 font-semibold text-left px-3 py-3 rounded-l-lg w-28">Time</th>
                  {days.map((d, i) => (
                    <th key={d} className={`px-2 py-3 text-center font-semibold ${i === todayIndex ? "bg-[#1a2252] text-white rounded-t-lg" : "bg-gray-50 text-gray-500"}`}>
                      {shortDays[i]}
                      {i === todayIndex && <span className="block text-[9px] opacity-70">Today</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, ri) => {
                  const period = periods[ri];
                  if (row === null) return (
                    <tr key={ri}>
                      <td className="px-3 py-2 text-gray-400 text-[10px]">{period.time}</td>
                      <td colSpan={5} className="text-center text-gray-400 bg-gray-50 py-2 text-[10px] font-medium tracking-widest">
                        — {period.label} —
                      </td>
                    </tr>
                  );
                  return (
                    <tr key={ri} className="border-b border-gray-50 last:border-0">
                      <td className="px-3 py-2 text-gray-400 whitespace-nowrap">{period.time}</td>
                      {row.map((subj, di) => {
                        const c = subjectColors[subj] || { bg: "bg-gray-50", text: "text-gray-600" };
                        return (
                          <td key={di} className="px-2 py-1.5">
                            <div className={`rounded-lg px-2 py-2 text-center font-semibold ${c.bg} ${c.text} leading-tight`}>
                              {subj.length > 12 ? subj.split(" ").map((w, i) => <span key={i} className="block">{w}</span>) : subj}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {/* Subject–Teacher mapping */}
      <SectionCard title="Subject Teachers">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjectList.map((subj) => {
            const c = subjectColors[subj] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
            return (
              <div key={subj} className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${c.bg} ${c.border}`}>
                <div className={`w-8 h-8 rounded-full ${c.bg} border ${c.border} flex items-center justify-center text-xs font-bold ${c.text}`}>
                  {subj[0]}
                </div>
                <div>
                  <p className={`text-xs font-semibold ${c.text}`}>{subj}</p>
                  <p className="text-xs text-gray-400">{teachers[subj]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}
