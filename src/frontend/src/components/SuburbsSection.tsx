import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { suburbs } from "../data/suburbs";

export default function SuburbsSection() {
  return (
    <section
      className="py-16 md:py-24 bg-teal-50"
      aria-labelledby="suburbs-heading"
    >
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2
            id="suburbs-heading"
            className="text-3xl md:text-4xl font-display font-bold text-teal-800 mb-4"
          >
            Bond Cleaning Across Gold Coast Suburbs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide professional end of lease cleaning across the Gold Coast.
            Click your suburb below to learn more about our local service and
            get a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {suburbs.map((suburb, index) => (
            <Link
              key={suburb.slug}
              to={`/bond-cleaning-${suburb.slug}`}
              data-ocid={`suburbs.item.${index + 1}`}
              className="group block rounded-2xl overflow-hidden shadow-sm border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label={`Bond cleaning in ${suburb.name}, Gold Coast`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={suburb.image}
                  alt={suburb.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={250}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <span className="inline-flex items-center gap-1 bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    Gold Coast
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground text-base group-hover:text-teal-700 transition-colors">
                  {suburb.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Bond cleaning in {suburb.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
