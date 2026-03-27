"use client";
import Link from "next/link";

const stats = [
  { label: "Student ID", value: "GV-2024-0341" },
  { label: "Class", value: "Grade 10 – A" },
  { label: "Roll No.", value: "17" },
  { label: "Academic Year", value: "2024–25" },
];

const personalDetails = [
  { label: "Full Name", value: "Aryan Rajput" },
  { label: "Date of Birth", value: "12 March 2010" },
  { label: "Gender", value: "Male" },
  { label: "Blood Group", value: "B+" },
  { label: "Nationality", value: "Indian" },
  { label: "Admission Date", value: "1 April 2019" },
  { label: "House", value: "Phoenix House" },
  { label: "Bus Route", value: "Route 7 – Nehru Nagar" },
];

const parentDetails = [
  { label: "Father's Name", value: "Mr. Suresh Rajput" },
  { label: "Mother's Name", value: "Mrs. Priya Rajput" },
  { label: "Occupation", value: "Business / Homemaker" },
  { label: "Contact", value: "+91 98765 43210" },
  { label: "Email", value: "suresh.rajput@gmail.com" },
  { label: "Emergency No.", value: "+91 91234 56789" },
];

const addressDetails = [
  { label: "Street", value: "42, Nehru Nagar, Block C" },
  { label: "City", value: "New Delhi" },
  { label: "PIN Code", value: "110016" },
  { label: "State", value: "Delhi" },
];

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-semibold text-[#1a2252]">{value}</p>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-sm font-semibold text-[#1a2252] uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-start py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400 w-40 flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-sm font-medium text-gray-800">{value}</span>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1a2252]">My Profile</h1>
          <p className="text-xs text-gray-400 mt-0.5">Academic Year 2024–25</p>
        </div>
        <button className="flex items-center gap-2 text-xs border border-[#1a2252] text-[#1a2252] hover:bg-[#1a2252] hover:text-white px-4 py-2 rounded transition font-medium">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <path d="M11 2l3 3-7 7H4v-3L11 2z" />
          </svg>
          Edit Profile
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Profile Card */}
      <SectionCard title="Student Information">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-[#1a2252] flex items-center justify-center text-white text-3xl font-bold">
              AR
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#1a2252] text-base">Aryan Rajput</p>
              <p className="text-red-600 text-xs font-semibold mt-0.5">Grade 10 – Section A</p>
              <span className="inline-block mt-2 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                Active Student
              </span>
            </div>
            <div className="w-full mt-2 space-y-1.5">
              {[
                { label: "Attendance", value: "90%", color: "bg-green-500", width: "w-[90%]" },
                { label: "Fees Paid", value: "75%", color: "bg-[#1a2252]", width: "w-[75%]" },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs text-gray-400 mb-0.5">
                    <span>{b.label}</span><span>{b.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${b.color} ${b.width} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            {personalDetails.map((d) => <DetailRow key={d.label} {...d} />)}
          </div>
        </div>
      </SectionCard>

      {/* Parent + Address */}
      <div className="grid md:grid-cols-2 gap-5">
        <SectionCard title="Parent / Guardian Details">
          {parentDetails.map((d) => <DetailRow key={d.label} {...d} />)}
        </SectionCard>
        <SectionCard title="Address">
          {addressDetails.map((d) => <DetailRow key={d.label} {...d} />)}
          <div className="mt-4 rounded-lg overflow-hidden border border-gray-100">
            <div className="bg-gray-50 px-4 py-8 text-center text-xs text-gray-400">
              📍 42, Nehru Nagar, Block C, New Delhi – 110016
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Quick Links */}
      <SectionCard title="Quick Actions">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "View Fees", href: "/student/fees", icon: "💳", color: "bg-red-50 text-red-700" },
            { label: "Attendance", href: "/student/attendance", icon: "📅", color: "bg-green-50 text-green-700" },
            { label: "Results", href: "/student/grades", icon: "📊", color: "bg-blue-50 text-blue-700" },
            { label: "Timetable", href: "/student/timetable", icon: "🗓️", color: "bg-yellow-50 text-yellow-700" },
          ].map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className={`flex flex-col items-center gap-2 py-4 rounded-xl text-sm font-medium transition hover:scale-105 ${q.color}`}
            >
              <span className="text-2xl">{q.icon}</span>
              {q.label}
            </Link>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
