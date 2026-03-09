import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Home, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { suburbs } from "../data/suburbs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppSticky from "./WhatsAppSticky";

const cleaningChecklist = [
  "Kitchen — oven, stovetop, rangehood & cupboards",
  "Bathrooms — tiles, shower screens & toilets",
  "Carpets — vacuum and/or steam clean",
  "Hard floors — sweep and mop",
  "Windows & fly screens inside and out",
  "Walls, skirting boards & light switches",
  "Laundry & linen cupboards",
  "Outdoor areas — balconies & patios",
];

export default function SuburbPage() {
  const { slug } = useParams<{ slug: string }>();
  const suburb = suburbs.find((s) => s.slug === slug);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!suburb) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar scrolled={scrolled} />
        <main className="pt-24 container-lg py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Suburb Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            Sorry, we couldn&apos;t find that suburb page.
          </p>
          <Link to="/" className="text-teal-600 underline">
            Return to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://trubondcleaninggoldcoast.com.au/bond-cleaning-${suburb.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{suburb.metaTitle}</title>
        <meta name="description" content={suburb.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={suburb.metaTitle} />
        <meta property="og:description" content={suburb.metaDescription} />
        <meta
          property="og:image"
          content={`https://trubondcleaninggoldcoast.com.au${suburb.image}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={suburb.metaTitle} />
        <meta name="twitter:description" content={suburb.metaDescription} />
        <meta
          name="twitter:image"
          content={`https://trubondcleaninggoldcoast.com.au${suburb.image}`}
        />
      </Helmet>

      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img
          src={suburb.image}
          alt={suburb.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-end container-lg pb-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1 text-white/80 text-sm">
              <li>
                <Link
                  to="/"
                  data-ocid="suburb.breadcrumb.link"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-white font-medium">
                Bond Cleaning {suburb.name}
              </li>
            </ol>
          </nav>
          <h1 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight">
            {suburb.h1}
          </h1>
        </div>
      </div>

      <main className="container-lg py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {suburb.content.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mb-4 text-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/#contact">
                <Button
                  data-ocid="suburb.primary_button"
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8"
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
                  data-ocid="suburb.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-700 hover:bg-green-50 font-bold px-8 gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </article>

          {/* Sidebar checklist */}
          <aside>
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-display font-bold text-teal-800 mb-4">
                What We Clean
              </h2>
              <ul className="space-y-3">
                {cleaningChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-teal-900 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-teal-200">
                <p className="text-sm text-teal-700 font-semibold mb-3">
                  100% Bond Back Guarantee
                </p>
                <a
                  href="https://wa.me/610488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold gap-2">
                    <MessageCircle className="w-4 h-4" />
                    0488 841 883
                  </Button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <WhatsAppSticky />
    </div>
  );
}
