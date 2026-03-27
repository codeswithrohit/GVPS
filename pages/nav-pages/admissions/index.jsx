"use client";
import { useState } from "react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Online Application", desc: "Fill out our online application form with student details, academic records and parent information." },
  { num: "02", title: "Document Submission", desc: "Submit required documents — previous marksheets, birth certificate, transfer certificate and passport photos." },
  { num: "03", title: "Entrance Assessment", desc: "Appear for a brief written test and interaction session appropriate to the grade applying for." },
  { num: "04", title: "Merit List & Offer", desc: "Results declared within 7 days. Shortlisted students receive an offer letter via email and post." },
  { num: "05", title: "Fee Payment", desc: "Confirm admission by paying the first-term fee within 10 days of receiving the offer letter." },
  { num: "06", title: "Orientation Day", desc: "Attend the Welcome Orientation with parents — collect the school kit, ID, timetable and handbook." },
];

const grades = [
  { grade: "Nursery – KG", age: "3–5 years", seats: 60, date: "Mar 15, 2025" },
  { grade: "Grade 1 – 5", age: "6–10 years", seats: 40, date: "Mar 20, 2025" },
  { grade: "Grade 6 – 8", age: "11–13 years", seats: 30, date: "Apr 1, 2025" },
  { grade: "Grade 9 – 10", age: "14–15 years", seats: 25, date: "Apr 10, 2025" },
  { grade: "Grade 11 – 12", age: "16–17 years", seats: 20, date: "Apr 20, 2025" },
];

const faqs = [
  { q: "Is there an entrance exam for all grades?", a: "A brief age-appropriate assessment is conducted for Grades 3 and above. Nursery to Grade 2 admissions are based on interaction and age criteria." },
  { q: "What is the medium of instruction?", a: "The primary medium of instruction is English, with Hindi and regional languages offered as core subjects." },
  { q: "Are scholarships available?", a: "Yes. We offer merit scholarships covering up to 50% of tuition for top-ranking students in the entrance assessment." },
  { q: "Can NRI or foreign students apply?", a: "Absolutely. We welcome students from all backgrounds. Additional documents like passport and visa copies will be required." },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", message: "" });

  return (
    <div className="font-sans bg-white">

      {/* PAGE HERO */}
      <section
        className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/80" />
        <div className="relative z-10 text-center">
          <p className="text-red-400 uppercase tracking-[0.25em] text-xs font-semibold mb-2">Join Our Family</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Admissions</h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <span>/</span>
            <span className="text-red-400">Admissions</span>
          </div>
        </div>
      </section>

      {/* NOTICE BANNER */}
      <div className="bg-red-600 text-white text-center py-3 px-6 text-sm font-medium tracking-wide">
        🎓 Applications for the 2025–26 Academic Session are now OPEN — Apply before April 30, 2025
      </div>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2252] leading-tight mb-5">
            Begin a Journey of Excellence at Gautam Valley
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe every child deserves an environment that challenges, nurtures and inspires. Our admissions process is
            designed to be transparent, fair and welcoming — so the right students find their perfect home here.
          </p>
          <ul className="space-y-3 text-gray-600 text-sm">
            {["CBSE-affiliated curriculum with modern pedagogy","World-class sports, arts & STEM facilities","Dedicated counselling & mental-wellness program","Strong alumni network across India and abroad"].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex-shrink-0 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80"
          alt="Students"
          className="rounded shadow-lg w-full object-cover h-80"
        />
      </section>

      {/* SEATS TABLE */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">2025–26 Session</p>
            <h2 className="text-3xl font-bold text-[#1a2252]">Available Seats</h2>
          </div>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full bg-white text-sm">
              <thead className="bg-[#1a2252] text-white">
                <tr>
                  {["Grade / Class","Age Group","Available Seats","Last Date to Apply","Action"].map(h => (
                    <th key={h} className="px-6 py-4 text-left font-semibold tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {grades.map((g, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-red-50 transition ${i % 2 === 0 ? "" : "bg-gray-50"}`}>
                    <td className="px-6 py-4 font-semibold text-[#1a2252]">{g.grade}</td>
                    <td className="px-6 py-4 text-gray-600">{g.age}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">{g.seats} Seats</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{g.date}</td>
                    <td className="px-6 py-4">
                      <Link href="/admissionPage" className="text-red-600 font-semibold hover:underline text-xs">Apply Now →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">How to Apply</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Admission Process</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative border border-gray-100 rounded-lg p-7 shadow-sm hover:shadow-md transition group">
              <span className="text-6xl font-bold text-gray-100 absolute top-4 right-5 select-none group-hover:text-red-100 transition">{s.num}</span>
              <p className="text-red-600 font-bold text-lg mb-2 relative z-10">{s.num}</p>
              <h3 className="font-bold text-[#1a2252] mb-2 relative z-10">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

    

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Got Questions?</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#1a2252] font-semibold text-sm hover:bg-gray-50 transition"
              >
                {faq.q}
                <span className={`text-red-600 text-lg transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
