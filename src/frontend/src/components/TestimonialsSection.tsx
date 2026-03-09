import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Surfers Paradise",
    rating: 5,
    text: "Tru Best did an amazing job on our unit in Surfers Paradise. The oven was sparkling and the property manager was completely happy. We got 100% of our bond back. Highly recommend!",
  },
  {
    name: "James T.",
    suburb: "Robina",
    rating: 5,
    text: "We were nervous about our bond inspection but these guys put us at ease straight away. They cleaned our 4-bedroom house top to bottom in a single day. Every room was perfect.",
  },
  {
    name: "Priya K.",
    suburb: "Broadbeach",
    rating: 5,
    text: "The carpet steam cleaning was incredible. Stains I thought were permanent just disappeared. The whole team was professional, punctual, and polite. Will definitely use again.",
  },
  {
    name: "Michael W.",
    suburb: "Southport",
    rating: 5,
    text: "Booked on WhatsApp and they confirmed within minutes. The cleaners arrived on time, worked hard all day, and the place was immaculate. Got my full bond back no questions asked.",
  },
  {
    name: "Emma L.",
    suburb: "Coomera",
    rating: 5,
    text: "The bathroom and window cleaning was exceptional. I have never seen my shower screen so clean. The property manager actually complimented the cleanliness. 10 out of 10!",
  },
  {
    name: "Daniel R.",
    suburb: "Nerang",
    rating: 5,
    text: "Fantastic service at a fair price. The team is knowledgeable about what real estate agents look for and they tick every box. This is exactly what you need for a bond clean.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="section-padding bg-gradient-to-br from-teal-800 to-teal-700">
      <div className="container-lg">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">
            Customer Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            What Gold Coast Renters Say About Us
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static stars
              <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <p className="text-white/80">
            500+ satisfied customers across the Gold Coast
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="bg-white/10 border-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-gold-400 mb-4" />
                <p className="text-white/90 mb-5 leading-relaxed">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-white/60 text-sm">
                      {t.suburb}, Gold Coast
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {"★★★★★"
                      .slice(0, t.rating)
                      .split("")
                      .map((_s, j) => (
                        <Star
                          key={`${t.name}-star-${j}`}
                          className="w-4 h-4 fill-gold-400 text-gold-400"
                        />
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
