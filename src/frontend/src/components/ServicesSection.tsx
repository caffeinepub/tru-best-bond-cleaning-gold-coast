import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Bond / End of Lease Cleaning",
    shortDesc:
      "Full property clean following the REIQ checklist. We guarantee your bond back.",
    image: "/assets/generated/service-bond-cleaning.dim_600x400.jpg",
    alt: "Professional bond cleaning Gold Coast - Tru Best Bond Cleaning team",
    href: "#service-bond",
    badge: "Most Popular",
  },
  {
    title: "Carpet Steam Cleaning",
    shortDesc:
      "Industrial hot water extraction for spotless, allergen-free carpets.",
    image: "/assets/generated/service-carpet-cleaning.dim_600x400.jpg",
    alt: "Expert carpet steam cleaning Gold Coast by Tru Best Bond Cleaning",
    href: "#service-carpet",
  },
  {
    title: "Bathroom & Toilet Cleaning",
    shortDesc:
      "Mould removal, descaling, and full sanitisation of all bathroom surfaces.",
    image: "/assets/generated/service-bathroom-cleaning.dim_600x400.jpg",
    alt: "Sparkling bathroom bond cleaning Gold Coast - Tru Best Bond Cleaning",
    href: "#service-bathroom",
  },
  {
    title: "Window Cleaning",
    shortDesc:
      "Crystal clear, streak-free windows inside and out. Frames, tracks, and sills included.",
    image: "/assets/generated/service-window-cleaning.dim_600x400.jpg",
    alt: "Crystal clear window cleaning Gold Coast by Tru Best Bond Cleaning",
    href: "#service-window",
  },
];

export default function ServicesSection() {
  return (
    <div className="section-padding bg-teal-50">
      <div className="container-lg">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Professional Cleaning Services in Gold Coast
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a full range of bond cleaning services to help you get
            every dollar of your bond back. Every service comes with our 100%
            satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.href}
              data-ocid={`services.item.${i + 1}`}
              className="group block"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-card">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  {service.badge && (
                    <span className="absolute top-3 left-3 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
