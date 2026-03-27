"use client";
import Link from "next/link";

const departments = [
  {
    icon: "🔬",
    title: "Science & Technology",
    desc: "Cutting-edge labs, hands-on experiments, and research programs in Physics, Chemistry, Biology, and Computer Science.",
    courses: ["Physics", "Chemistry", "Biology", "Computer Science"],
  },
  {
    icon: "📐",
    title: "Mathematics",
    desc: "From foundational arithmetic to advanced calculus and statistics, our math curriculum builds analytical thinkers.",
    courses: ["Algebra", "Geometry", "Calculus", "Statistics"],
  },
  {
    icon: "📖",
    title: "Languages & Literature",
    desc: "English, Hindi, Sanskrit and regional languages taught through classic texts, creative writing and debate.",
    courses: ["English", "Hindi", "Sanskrit", "Creative Writing"],
  },
  {
    icon: "🌍",
    title: "Social Sciences",
    desc: "History, Geography, Civics and Economics with field trips, projects and documentary study.",
    courses: ["History", "Geography", "Civics", "Economics"],
  },
  {
    icon: "🎨",
    title: "Arts & Design",
    desc: "Visual arts, music, dance and design thinking woven into the core curriculum for every student.",
    courses: ["Fine Arts", "Music", "Dance", "Design Thinking"],
  },
  {
    icon: "💼",
    title: "Commerce & Business",
    desc: "Accountancy, Business Studies and Entrepreneurship with live project mentorship.",
    courses: ["Accountancy", "Business Studies", "Economics", "Entrepreneurship"],
  },
];

const faculty = [
  { name: "Dr. Anita Sharma", role: "Head of Science", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { name: "Mr. Rajiv Mehta", role: "Head of Mathematics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" },
  { name: "Ms. Priya Nair", role: "Head of Languages", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
  { name: "Dr. Suresh Kumar", role: "Head of Social Sciences", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&q=80" },
];

const achievements = [
  { num: "180+", label: "Qualified Faculty" },
  { num: "98%", label: "Board Pass Rate" },
  { num: "42", label: "Subject Offerings" },
  { num: "12", label: "Research Awards" },
];

export default function AcademicPage() {
  return (
    <div className="font-sans bg-white">

      {/* PAGE HERO */}
      <section
        className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/80" />
        <div className="relative z-10 text-center">
          <p className="text-red-400 uppercase tracking-[0.25em] text-xs font-semibold mb-2">Gautam Valley Public School</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Academics</h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <span>/</span>
            <span className="text-red-400">Academics</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2252] leading-tight mb-5">
            A Rigorous Curriculum Built for Tomorrow's World
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Gautam Valley, academics go beyond textbooks. We combine CBSE curriculum standards with project-based learning,
            critical thinking workshops, and real-world problem solving — preparing students not just for exams, but for life.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our faculty of 180+ qualified educators bring passion and expertise to every classroom, supported by modern labs,
            a vast library, and digital learning tools.
          </p>
          <Link href="/nav-pages/courses" className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 text-sm font-semibold tracking-wide transition">
            Explore Courses →
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
            alt="Classroom"
            className="rounded shadow-lg w-full object-cover h-72 md:h-96"
          />
          <div className="absolute -bottom-5 -left-5 bg-red-600 text-white px-6 py-4 shadow-lg">
            <p className="text-3xl font-bold">42</p>
            <p className="text-xs uppercase tracking-widest">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a2252] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {achievements.map((a, i) => (
            <div key={i} className="py-4 border-r border-white/10 last:border-0">
              <p className="text-4xl font-bold text-red-400">{a.num}</p>
              <p className="text-gray-300 text-sm mt-1 uppercase tracking-widest">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">What We Teach</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Academic Departments</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="text-lg font-bold text-[#1a2252] mb-2 group-hover:text-red-600 transition">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
              <div className="flex flex-wrap gap-2">
                {d.courses.map((c, j) => (
                  <span key={j} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACULTY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Meet the Team</p>
            <h2 className="text-3xl font-bold text-[#1a2252]">Department Heads</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} className="text-center group">
                <div className="relative overflow-hidden rounded-full w-28 h-28 mx-auto mb-4">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h4 className="font-bold text-[#1a2252]">{f.name}</h4>
                <p className="text-red-600 text-xs uppercase tracking-wide mt-1">{f.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#" className="border-2 border-[#1a2252] text-[#1a2252] hover:bg-[#1a2252] hover:text-white px-8 py-3 text-sm font-semibold tracking-wide transition">
              View All Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/85" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Academic Journey?</h2>
          <p className="text-gray-300 mb-8">Applications for the 2025–26 session are now open. Join a community of curious, driven learners.</p>
          <Link href="/admissionPage" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-semibold tracking-wide transition">
            Apply for Admission
          </Link>
        </div>
      </section>

    </div>
  );
}
