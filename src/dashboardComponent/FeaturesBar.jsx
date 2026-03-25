"use client";
import Link from "next/link";

const data = [
  {
    title: "School Life",
    img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200",
    img2:"https://demo.goodlayers.com/kingster/highschool/wp-content/uploads/2018/08/hp2-col-1-icon.png "
  },
  {
    title: "Academics",
    img: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNhZGVtaWNzfGVufDB8fDB8fHww",
    img2:"https://demo.goodlayers.com/kingster/highschool/wp-content/uploads/2019/06/book.png"
  },
  {
    title: "Athletics",
    img: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXRobGV0aWNzfGVufDB8fDB8fHww",
    img2:"https://demo.goodlayers.com/kingster/highschool/wp-content/uploads/2019/06/book.png"
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-3">
          {data.map((item, i) => (
            <div key={i} className="bg-white">
              
              {/* TOP RED BAR */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-6 flex items-center gap-4">
                
                {/* Icon */}
                <div className="w-10 h-10  border-white/40 flex items-center justify-center">
                  <img
                  src={item.img2}
                  
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm">Learn More</p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="h-[240px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="px-8 py-8 text-gray-600 text-[15px] leading-7">
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot.
                </p>

                {/* LEARN MORE */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 text-red-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}