"use client";
import Link from "next/link";

const clubs = [
  { icon: "🎭", name: "Drama & Theatre", members: 60, desc: "Annual school play, inter-school debates, monologue competitions and improv workshops." },
  { icon: "📸", name: "Photography Club", members: 45, desc: "Learn composition, lighting and editing. Publish in the school magazine and annual exhibition." },
  { icon: "🤖", name: "Robotics Club", members: 80, desc: "Build and code robots for national STEM competitions. Mentor-led projects every weekend." },
  { icon: "🌱", name: "Eco Warriors", members: 95, desc: "Campus sustainability drives, tree planting, waste segregation, and environmental awareness campaigns." },
  { icon: "🎶", name: "Music & Band", members: 70, desc: "Vocal, keyboard, guitar, tabla and western percussion — perform at school events and inter-school fests." },
  { icon: "📰", name: "School Magazine", members: 40, desc: "Write, design and publish the quarterly Gautam Gazette. Open to writers, artists and photographers." },
  { icon: "🧘", name: "Wellness & Yoga", members: 55, desc: "Daily yoga sessions, mindfulness workshops and mental-health awareness activities for all students." },
  { icon: "💡", name: "Student Council", members: 30, desc: "Elected representatives who plan events, resolve student concerns and lead school initiatives." },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80", caption: "Annual Cultural Fest 2024" },
  { src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=500&q=80", caption: "Science Fair Exhibition" },
  { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80", caption: "Sports Day 2024" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80", caption: "Classroom Innovation Hour" },
  { src: "https://images.unsplash.com/photo-1544531586-fede749d1980?w=500&q=80", caption: "Music Performance Night" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80", caption: "Green Campus Drive" },
];

const events = [
  { month: "JAN", day: "26", title: "Republic Day Parade & Cultural Show", type: "National Event" },
  { month: "FEB", day: "14", title: "Inter-School Debate Championship", type: "Academic" },
  { month: "MAR", day: "22", title: "Annual Science Fair", type: "Academic" },
  { month: "APR", day: "05", title: "Sports Day", type: "Athletics" },
  { month: "AUG", day: "15", title: "Independence Day Celebration", type: "National Event" },
  { month: "NOV", day: "14", title: "Children's Day Cultural Fest", type: "Cultural" },
];

const testimonials = [
  { name: "Aisha Kapoor", grade: "Grade 12", text: "The Drama Club changed my life. I found my voice, built confidence and made lifelong friends. Gautam Valley is truly a second home.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
  { name: "Rohan Desai", grade: "Grade 11", text: "The Robotics Club and incredible STEM teachers here pushed me to win at the National Science Olympiad. I couldn't ask for more.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" },
  { name: "Meera Joshi", grade: "Grade 10", text: "From music rehearsals to Green Campus drives, every day here feels meaningful. The school truly cares about us as whole persons.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" },
];

export default function SchoolLifePage() {
  return (
    <div className="font-sans bg-white">

      {/* PAGE HERO */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/78" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <p className="text-red-400 uppercase tracking-[0.25em] text-xs font-semibold mb-2">Beyond the Classroom</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">School Life</h1>
          <p className="text-gray-300 mt-4 text-base">Where friendships are forged, passions are discovered, and memories are made for a lifetime.</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <span>/</span>
            <span className="text-red-400">School Life</span>
          </div>
        </div>
      </section>

      {/* INTRO FEATURES */}
      <section className="bg-red-600 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { icon: "🏛️", label: "World-Class Campus" },
            { icon: "🎭", label: "20+ Clubs & Societies" },
            { icon: "🍽️", label: "Nutritious Cafeteria" },
            { icon: "📚", label: "Vast Library & Labs" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2 py-3">
              <span className="text-3xl">{f.icon}</span>
              <span className="text-sm font-semibold tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUS LIFE INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-3">Life at Gautam Valley</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2252] leading-tight mb-5">
            A Vibrant Community Where Every Student Belongs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            School life at Gautam Valley is rich, inclusive and full of energy. From morning assembly and inter-house competitions
            to science fairs and cultural festivals — every day brings new opportunities to grow, connect and shine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our spacious campus, modern facilities and caring staff create an environment where students feel safe to explore
            their identities, take creative risks, and build lifelong friendships.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "20+", label: "Clubs & Societies" },
              { num: "15+", label: "Annual Events" },
              { num: "3", label: "Cafeteria Outlets" },
              { num: "1 Lakh+", label: "Library Books" },
            ].map((s, i) => (
              <div key={i} className="border-l-4 border-red-600 pl-4">
                <p className="text-2xl font-bold text-[#1a2252]">{s.num}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80" alt="" className="rounded shadow h-44 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="" className="rounded shadow h-44 w-full object-cover mt-6" />
          <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80" alt="" className="rounded shadow h-44 w-full object-cover" />
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80" alt="" className="rounded shadow h-44 w-full object-cover mt-6" />
        </div>
      </section>

      {/* CLUBS & SOCIETIES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Find Your Passion</p>
            <h2 className="text-3xl font-bold text-[#1a2252]">Clubs & Societies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((c, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-[#1a2252] mb-1 group-hover:text-red-600 transition">{c.name}</h3>
                <p className="text-red-600 text-xs font-semibold mb-2">{c.members} Members</p>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS CALENDAR */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Mark Your Calendar</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Annual Events</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((e, i) => (
            <div key={i} className="flex gap-5 items-start border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition group">
              <div className="flex-shrink-0 bg-[#1a2252] text-white text-center px-4 py-3 rounded group-hover:bg-red-600 transition">
                <p className="text-xs font-semibold tracking-widest">{e.month}</p>
                <p className="text-2xl font-bold leading-tight">{e.day}</p>
              </div>
              <div>
                <span className="text-xs text-red-600 font-semibold uppercase tracking-widest">{e.type}</span>
                <h3 className="font-bold text-[#1a2252] mt-1 text-sm leading-snug">{e.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-[#1a2252] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-400 uppercase tracking-widest text-xs font-semibold mb-2">Memories in the Making</p>
            <h2 className="text-3xl font-bold text-white">Campus Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <div key={i} className="relative overflow-hidden rounded group">
                <img src={g.src} alt={g.caption} className="w-full h-48 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-[#1a2252]/0 group-hover:bg-[#1a2252]/70 transition duration-300 flex items-end">
                  <p className="text-white text-xs font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition duration-300">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Student Voices</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">What Students Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-7 shadow-sm hover:shadow-md transition">
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-red-600" />
                <div>
                  <p className="font-bold text-[#1a2252] text-sm">{t.name}</p>
                  <p className="text-red-600 text-xs uppercase tracking-widest">{t.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544531586-fede749d1980?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/85" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Want to Be Part of This Story?</h2>
          <p className="text-gray-300 mb-8">Join thousands of students who call Gautam Valley their second home. Applications now open.</p>
          <Link href="/admissions" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-semibold tracking-wide transition">
            Apply for Admission
          </Link>
        </div>
      </section>

    </div>
  );
}
