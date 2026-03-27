"use client";
import { useState } from "react";
import Link from "next/link";

const allCourses = [
  { id: 1, dept: "Science", grade: "9-10", title: "Physics – Mechanics & Waves", teacher: "Dr. R. Kapoor", duration: "1 Year", sessions: "5/week", icon: "⚛️" },
  { id: 2, dept: "Science", grade: "11-12", title: "Advanced Chemistry", teacher: "Dr. Anita Sharma", duration: "1 Year", sessions: "5/week", icon: "🧪" },
  { id: 3, dept: "Science", grade: "11-12", title: "Biology & Human Physiology", teacher: "Ms. Meena Rao", duration: "1 Year", sessions: "5/week", icon: "🧬" },
  { id: 4, dept: "Maths", grade: "9-10", title: "Algebra & Coordinate Geometry", teacher: "Mr. Rajiv Mehta", duration: "1 Year", sessions: "6/week", icon: "📐" },
  { id: 5, dept: "Maths", grade: "11-12", title: "Calculus & Probability", teacher: "Mr. Rajiv Mehta", duration: "1 Year", sessions: "6/week", icon: "∑" },
  { id: 6, dept: "Commerce", grade: "11-12", title: "Accountancy – Financial Statements", teacher: "Ms. Sunita Gupta", duration: "1 Year", sessions: "4/week", icon: "📊" },
  { id: 7, dept: "Commerce", grade: "11-12", title: "Business Studies", teacher: "Mr. Alok Verma", duration: "1 Year", sessions: "4/week", icon: "💼" },
  { id: 8, dept: "Languages", grade: "6-8", title: "English Literature & Grammar", teacher: "Ms. Priya Nair", duration: "1 Year", sessions: "5/week", icon: "📖" },
  { id: 9, dept: "Languages", grade: "9-10", title: "Creative Writing & Debate", teacher: "Ms. Priya Nair", duration: "1 Year", sessions: "3/week", icon: "✍️" },
  { id: 10, dept: "Arts", grade: "6-10", title: "Visual Arts & Sketching", teacher: "Mr. Arun Das", duration: "1 Year", sessions: "3/week", icon: "🎨" },
  { id: 11, dept: "Arts", grade: "6-12", title: "Music – Vocals & Instruments", teacher: "Ms. Ritu Singh", duration: "1 Year", sessions: "2/week", icon: "🎵" },
  { id: 12, dept: "Technology", grade: "9-12", title: "Computer Science & Python", teacher: "Mr. Vijay Sharma", duration: "1 Year", sessions: "4/week", icon: "💻" },
  { id: 13, dept: "Technology", grade: "11-12", title: "Artificial Intelligence Basics", teacher: "Mr. Vijay Sharma", duration: "6 Months", sessions: "3/week", icon: "🤖" },
  { id: 14, dept: "Social Sciences", grade: "6-10", title: "History of India & World", teacher: "Dr. Suresh Kumar", duration: "1 Year", sessions: "4/week", icon: "🌍" },
  { id: 15, dept: "Social Sciences", grade: "9-12", title: "Economics & Development", teacher: "Dr. Suresh Kumar", duration: "1 Year", sessions: "4/week", icon: "📈" },
];

const depts = ["All", "Science", "Maths", "Commerce", "Languages", "Arts", "Technology", "Social Sciences"];
const gradeFilters = ["All Grades", "6-8", "9-10", "11-12"];

export default function CoursesPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [activeGrade, setActiveGrade] = useState("All Grades");
  const [search, setSearch] = useState("");

  const filtered = allCourses.filter(c => {
    const deptOk = activeDept === "All" || c.dept === activeDept;
    const gradeOk = activeGrade === "All Grades" || c.grade === activeGrade;
    const searchOk = c.title.toLowerCase().includes(search.toLowerCase()) || c.teacher.toLowerCase().includes(search.toLowerCase());
    return deptOk && gradeOk && searchOk;
  });

  return (
    <div className="font-sans bg-white">

      {/* PAGE HERO */}
      <section
        className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/80" />
        <div className="relative z-10 text-center">
          <p className="text-red-400 uppercase tracking-[0.25em] text-xs font-semibold mb-2">Gautam Valley Public School</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Courses</h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <span>/</span>
            <span className="text-red-400">Courses</span>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="bg-gray-50 py-8 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search courses or teachers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#1a2252]"
            />
            <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
          </div>

          {/* Grade filter */}
          <div className="flex gap-2 flex-wrap">
            {gradeFilters.map(g => (
              <button
                key={g}
                onClick={() => setActiveGrade(g)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide border transition ${
                  activeGrade === g
                    ? "bg-[#1a2252] text-white border-[#1a2252]"
                    : "border-gray-300 text-gray-600 hover:border-[#1a2252]"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Dept tabs */}
        <div className="max-w-6xl mx-auto px-6 mt-4 flex gap-2 flex-wrap">
          {depts.map(d => (
            <button
              key={d}
              onClick={() => setActiveDept(d)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition ${
                activeDept === d
                  ? "bg-red-600 text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:border-red-400"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS COUNT */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-[#1a2252]">{filtered.length}</span> courses
          {activeDept !== "All" && <> in <span className="text-red-600 font-semibold">{activeDept}</span></>}
        </p>
      </div>

      {/* COURSE GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">📭</p>
            <p className="font-semibold text-lg">No courses found</p>
            <p className="text-sm mt-1">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {filtered.map(c => (
              <div key={c.id} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                {/* Card top accent */}
                <div className="bg-[#1a2252] px-6 py-5 flex items-center gap-4">
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">{c.dept}</span>
                    <h3 className="text-white font-bold text-sm leading-tight mt-0.5">{c.title}</h3>
                  </div>
                </div>
                {/* Card body */}
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <span>👨‍🏫</span>
                    <span>{c.teacher}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="text-[#1a2252] font-semibold">Grade:</span> {c.grade}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#1a2252] font-semibold">Duration:</span> {c.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#1a2252] font-semibold">Sessions:</span> {c.sessions}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/admissions" className="text-red-600 text-xs font-semibold hover:underline">Enrol Now →</Link>
                    <Link href="/academic" className="text-gray-400 text-xs hover:text-[#1a2252] transition">View Department →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA STRIP */}
      <section className="bg-red-600 py-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Can't find the course you're looking for?</h2>
        <p className="text-red-100 text-sm mb-5">Contact our academic team — we're happy to guide you.</p>
        <Link href="/admissions" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 font-semibold text-sm transition">
          Talk to Admissions
        </Link>
      </section>

    </div>
  );
}
