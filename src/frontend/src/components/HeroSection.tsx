import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Star } from "lucide-react";

const badges = [
  "100% Bond Back Guarantee",
  "Fully Insured",
  "Eco-Friendly Products",
  "Same Day Available",
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Spotlessly clean Gold Coast home after professional bond cleaning by Tru Best Bond Cleaning"
          className="w-full h-full object-cover"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/90 via-teal-700/75 to-teal-600/50" />
      </div>

      <div className="relative z-10 container-lg w-full py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Star rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static array
              <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
            ))}
            <span className="text-white/90 text-sm font-semibold ml-2">
              500+ Happy Customers
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Gold Coast&apos;s Most Trusted Bond Cleaners
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-3">
            Get Your Full Bond Back — 100% Guaranteed
          </p>

          <p className="text-white/80 text-lg mb-8 max-w-xl">
            We clean every corner of your rental home so you walk away with your
            full bond in your pocket. Professional, fast, and stress-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact">
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 text-lg h-auto shadow-hero w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </a>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-white text-white hover:bg-white/20 hover:text-white font-bold px-8 py-4 text-lg h-auto gap-2 bg-white/10 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Call WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-white text-sm font-semibold">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
