import Link from "next/link";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
    href: "#",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={card.image}
                  alt="School"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
              <Link
                href={card.href}
                className="text-red-700 text-sm font-semibold hover:text-red-900 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
