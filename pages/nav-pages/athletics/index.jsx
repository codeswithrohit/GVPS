"use client";
import Link from "next/link";

const sports = [
  { icon: "⚽", name: "Football", level: "Inter-School · State Level", desc: "Our football team has won 6 district trophies in the last decade. Training 5 days a week on our FIFA-standard turf.", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80" },
  { icon: "🏀", name: "Basketball", level: "Inter-School · State Level", desc: "Boys and girls teams compete at state level with a dedicated full-size indoor court and professional coaching staff.", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80" },
  { icon: "🏊", name: "Swimming", level: "National Level", desc: "Our Olympic-size pool produces national-level swimmers. Multiple medals at CBSE Nationals over the past 5 years.", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=80" },
  { icon: "🎾", name: "Tennis", level: "Inter-School", desc: "4 well-maintained courts, certified coaching, and regular inter-school tournaments for all age groups.", img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&q=80" },
  { icon: "🏏", name: "Cricket", level: "District · State Level", desc: "A 400m cricket ground with practice nets, bowling machines and expert coaches for batsmen and bowlers alike.", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80" },
  { icon: "🏃", name: "Track & Field", level: "State · National Level", desc: "400m synthetic track, long jump, shot put, and relay training. Multiple state champions produced every year.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80" },
];

const achievements = [
  { year: "2024", event: "CBSE National Swimming Championship", result: "Gold – 200m Freestyle", athlete: "Aryan Mehta" },
  { year: "2024", event: "State Basketball Championship", result: "1st Place – Girls Team", athlete: "Team Gautam Valley" },
  { year: "2023", event: "District Football Trophy", result: "Champions", athlete: "Boys U-17 Team" },
  { year: "2023", event: "State Athletics Meet", result: "Silver – 4×100m Relay", athlete: "Boys Relay Team" },
  { year: "2022", event: "CBSE Zone Cricket Tournament", result: "Semi-Finals", athlete: "School XI" },
  { year: "2022", event: "Inter-School Tennis Championship", result: "Gold – Singles", athlete: "Neha Kapoor" },
];

const coaches = [
  { name: "Coach Rahul Singh", sport: "Football & Athletics", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&q=80", exp: "14 yrs" },
  { name: "Coach Deepa Menon", sport: "Swimming", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", exp: "10 yrs" },
  { name: "Coach Amandeep Kaur", sport: "Basketball", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80", exp: "8 yrs" },
  { name: "Coach Sanjay Patel", sport: "Cricket & Tennis", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80", exp: "12 yrs" },
];

const stats = [
  { num: "18+", label: "Sports Offered" },
  { num: "320+", label: "Athlete Students" },
  { num: "85+", label: "Trophies Won" },
  { num: "6", label: "National Champions" },
];

export default function AthleticsPage() {
  return (
    <div className="font-sans bg-white">

      {/* PAGE HERO */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&q=80)" }}
      >
        <div className="absolute inset-0 bg-[#1a2252]/75" />
        <div className="relative z-10 text-center">
          <p className="text-red-400 uppercase tracking-[0.25em] text-xs font-semibold mb-2">Champions in the Making</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Athletics</h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-gray-300 text-sm">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <span>/</span>
            <span className="text-red-400">Athletics</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-red-600 py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {stats.map((s, i) => (
            <div key={i} className="py-3 border-r border-red-500 last:border-0">
              <p className="text-4xl font-bold">{s.num}</p>
              <p className="text-red-200 text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=700&q=80"
          alt="Athletics"
          className="rounded shadow-lg w-full object-cover h-80"
        />
        <div>
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-3">Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2252] leading-tight mb-5">
            Sports That Build Character, Discipline & Teamwork
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Gautam Valley, we believe sports are not extracurricular — they are co-curricular. Every student is encouraged
            to participate in at least one sport, building resilience, leadership, and teamwork that academics alone cannot teach.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With professional coaches, world-class facilities, and a packed inter-school tournament calendar, our athletes
            consistently represent the school at district, state, and national levels.
          </p>
          <Link href="/admissions" className="inline-block bg-red-600 hover:bg-red-700 text-white px-7 py-3 text-sm font-semibold tracking-wide transition">
            Join Our Teams →
          </Link>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">What We Offer</p>
            <h2 className="text-3xl font-bold text-[#1a2252]">Sports Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((s, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative overflow-hidden h-44">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2252]/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="text-white font-bold text-lg">{s.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-red-600 text-xs font-semibold uppercase tracking-widest">{s.level}</span>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">Hall of Fame</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Recent Achievements</h2>
        </div>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full bg-white text-sm">
            <thead className="bg-[#1a2252] text-white">
              <tr>
                {["Year", "Event", "Result", "Athlete / Team"].map(h => (
                  <th key={h} className="px-6 py-4 text-left font-semibold tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {achievements.map((a, i) => (
                <tr key={i} className={`border-b border-gray-100 hover:bg-red-50 transition ${i % 2 === 0 ? "" : "bg-gray-50"}`}>
                  <td className="px-6 py-4 font-bold text-red-600">{a.year}</td>
                  <td className="px-6 py-4 font-semibold text-[#1a2252]">{a.event}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${a.result.includes("Gold") || a.result.includes("Champions") || a.result.includes("1st") ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-600"}`}>
                      🏆 {a.result}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{a.athlete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COACHES */}
      <section className="bg-[#1a2252] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-red-400 uppercase tracking-widest text-xs font-semibold mb-2">Expert Guidance</p>
            <h2 className="text-3xl font-bold text-white">Our Coaches</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coaches.map((c, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-red-600">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <h4 className="font-bold text-white">{c.name}</h4>
                <p className="text-red-400 text-xs uppercase tracking-wide mt-1">{c.sport}</p>
                <p className="text-gray-400 text-xs mt-1">{c.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES STRIP */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-red-600 uppercase tracking-widest text-xs font-semibold mb-2">World-Class Infrastructure</p>
          <h2 className="text-3xl font-bold text-[#1a2252]">Our Sports Facilities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🏟️", label: "FIFA-Standard Football Turf" },
            { icon: "🏊", label: "Olympic-Size Swimming Pool" },
            { icon: "🏀", label: "Indoor Basketball Court" },
            { icon: "🏏", label: "400m Cricket Ground" },
            { icon: "🎾", label: "4 Tennis Courts" },
            { icon: "🏃", label: "Synthetic Running Track" },
            { icon: "🏋️", label: "Modern Gym & Fitness Centre" },
            { icon: "🤼", label: "Wrestling & Martial Arts Hall" },
          ].map((f, i) => (
            <div key={i} className="border border-gray-100 rounded p-5 text-center shadow-sm hover:shadow-md hover:border-red-200 transition">
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="text-xs font-semibold text-[#1a2252]">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
