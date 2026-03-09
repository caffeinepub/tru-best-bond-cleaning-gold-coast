import { Award, Clock, Leaf, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "We carry full public liability insurance on every job. Your home and possessions are protected.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "We use biodegradable, non-toxic cleaning products that are safe for kids, pets, and the planet.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "We work 7 days a week, including weekends and same-day bookings. We fit around your moving schedule.",
  },
  {
    icon: Award,
    title: "100% Guarantee",
    desc: "If your property manager is not happy, we come back and re-clean for free. No arguments.",
  },
];

export default function AboutSection() {
  return (
    <div className="section-padding bg-white">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Gold Coast Locals Who Care About Your Bond
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Tru Best Bond Cleaning Gold Coast is a locally owned and
                operated cleaning company. We started because we saw too many
                Gold Coast renters losing their bond money because of poor
                quality cleaning.
              </p>
              <p>
                We know how hard you work for your money. We know how stressful
                moving house is. We built Tru Best to take that stress away. Our
                team is local, friendly, experienced, and passionate about
                cleaning.
              </p>
              <p>
                We use eco-friendly products that are safe for kids and pets. We
                are fully insured and offer a 100% bond back guarantee on every
                job we do. We love Gold Coast and we love helping our community.
              </p>
              <p>
                Whether you are moving from a small unit in Surfers Paradise or
                a large family home in Robina, we treat every home the same —
                with care, respect, and a commitment to excellence.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Get a Free Quote
              </a>
              <a
                href="https://wa.me/610488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-teal-50 rounded-xl p-6 border border-teal-100"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <val.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
