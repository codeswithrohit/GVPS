"use client";
import { useState } from "react";

const months = [
  { name: "April 2024",    total: 22, present: 20 },
  { name: "May 2024",      total: 22, present: 21 },
  { name: "June 2024",     total: 20, present: 18 },
  { name: "July 2024",     total: 22, present: 22 },
  { name: "August 2024",   total: 22, present: 20 },
  { name: "September 2024",total: 20, present: 19 },
  { name: "October 2024",  total: 22, present: 21 },
  { name: "November 2024", total: 20, present: 18 },
  { name: "December 2024", total: 8,  present: 3  },
];

const subjectAttendance = [
  { subject: "Mathematics",     present: 95, total: 100 },
  { subject: "Science",         present: 92, total: 100 },
  { subject: "English",         present: 88, total: 100 },
  { subject: "Hindi",           present: 90, total: 100 },
  { subject: "Social Studies",  present: 85, total: 100 },
  { subject: "Computer Science",present: 91, total: 100 },
];

// Generate a simple calendar-style day grid for a selected month
const aprilDays = Array.from({ length: 30 }, (_, i) => {
  const d = i + 1;
  if ([6, 7, 13, 14, 20, 21, 27, 28].includes(d)) return "holiday";
  if ([3, 10, 17, 23].includes(d)) return "absent";
  return "present";
});

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function pctColor(pct) {
  if (pct >= 90) return { text: "text-green-700", bar: "bg-green-500", bg: "bg-green-100" };
  if (pct >= 75) return { text: "text-yellow-700", bar: "bg-yellow-500", bg: "bg-yellow-100" };
  return { text: "text-red-700", bar: "bg-red-500", bg: "bg-red-100" };
}

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

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const totalPresent = months.reduce((a, m) => a + m.present, 0);
  const totalDays    = months.reduce((a, m) => a + m.total, 0);
  const overallPct   = Math.round((totalPresent / totalDays) * 100);
  const colors       = pctColor(overallPct);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-[#1a2252]">Attendance Tracker</h1>
        <p className="text-xs text-gray-400 mt-0.5">Academic Year 2024–25</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Working Days", value: totalDays, sub: "This year" },
          { label: "Days Present", value: totalPresent, sub: "Attended", valColor: "text-green-700" },
          { label: "Days Absent", value: totalDays - totalPresent, sub: "Missed", valColor: "text-red-600" },
          { label: "Overall %", value: `${overallPct}%`, sub: overallPct >= 75 ? "Safe Zone ✓" : "Below Minimum ⚠", valColor: colors.text },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.valColor || "text-[#1a2252]"}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Overall Attendance</span>
          <span className={`font-bold ${colors.text}`}>{overallPct}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className={`h-full ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${overallPct}%` }} />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>{totalPresent} days present of {totalDays} total</span>
          <span className={`font-semibold ${overallPct >= 75 ? "text-green-600" : "text-red-600"}`}>
            Min. required: 75%
          </span>
        </div>
      </div>

      {/* Month Grid + Calendar */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Monthly breakdown */}
        <SectionCard title="Month-wise Breakdown">
          <div className="space-y-3">
            {months.map((m, i) => {
              const pct = Math.round((m.present / m.total) * 100);
              const c = pctColor(pct);
              return (
                <button
                  key={i}
                  onClick={() => setSelectedMonth(i)}
                  className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 transition ${selectedMonth === i ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"}`}
                >
                  <span className="text-xs text-gray-400 w-28 text-left flex-shrink-0">{m.name}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.bar} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className={`text-xs font-bold w-10 text-right ${c.text}`}>{pct}%</span>
                  <span className="text-xs text-gray-400 w-14 text-right">{m.present}/{m.total} days</span>
                </button>
              );
            })}
          </div>
        </SectionCard>

        {/* Day-level calendar */}
        <SectionCard title={`Daily View — ${months[selectedMonth].name}`}>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {weekDays.map((d) => (
              <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">{d}</div>
            ))}
          </div>
          {/* Days — April starts on Monday (col 2) */}
          <div className="grid grid-cols-7 gap-1">
            {/* offset for April start = Monday = 1 */}
            {Array.from({ length: 1 }).map((_, i) => <div key={`e${i}`} />)}
            {aprilDays.map((status, i) => (
              <div
                key={i}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-xs font-medium ${
                  status === "present" ? "bg-green-100 text-green-800" :
                  status === "absent"  ? "bg-red-100 text-red-700" :
                  "bg-gray-100 text-gray-400"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-200 inline-block" />Present</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-200 inline-block" />Absent</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 inline-block" />Holiday</span>
          </div>
        </SectionCard>
      </div>

      {/* Subject-wise */}
      <SectionCard title="Subject-wise Attendance">
        <div className="space-y-4">
          {subjectAttendance.map((s, i) => {
            const pct = Math.round((s.present / s.total) * 100);
            const c = pctColor(pct);
            return (
              <div key={i} className="flex items-center gap-4">
                <span className="text-sm text-gray-700 w-40 flex-shrink-0">{s.subject}</span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${c.bar} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                </div>
                <span className={`text-sm font-semibold w-12 text-right ${c.text}`}>{pct}%</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.bg} ${c.text} w-20 text-center`}>
                  {s.present}/{s.total}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
          ⚠ Students must maintain ≥75% attendance per subject to be eligible for examinations.
        </div>
      </SectionCard>

      {/* Leave requests */}
      <SectionCard title="Leave Applications">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {["Date", "Days", "Reason", "Status"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 py-3 first:rounded-l-lg last:rounded-r-lg">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { date: "15 Jun 2024", days: 2, reason: "Family function", status: "approved" },
                { date: "23 Sep 2024", days: 1, reason: "Medical appointment", status: "approved" },
                { date: "18 Nov 2024", days: 3, reason: "Out of town", status: "rejected" },
                { date: "2 Dec 2024",  days: 5, reason: "Illness (Doctor's note attached)", status: "approved" },
              ].map((l, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition last:border-0">
                  <td className="px-4 py-3 text-gray-500">{l.date}</td>
                  <td className="px-4 py-3 font-semibold">{l.days} day{l.days > 1 ? "s" : ""}</td>
                  <td className="px-4 py-3 text-gray-600">{l.reason}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${l.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700"}`}>
                      {l.status === "approved" ? "✓ " : "✕ "}{l.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 text-xs font-semibold border border-[#1a2252] text-[#1a2252] hover:bg-[#1a2252] hover:text-white px-4 py-2 rounded transition">
          + Apply for Leave
        </button>
      </SectionCard>
    </div>
  );
}
