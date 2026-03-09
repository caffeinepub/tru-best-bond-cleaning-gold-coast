import { MessageCircle } from "lucide-react";

const serviceAreas = [
  "Surfers Paradise",
  "Broadbeach",
  "Robina",
  "Nerang",
  "Southport",
  "Coomera",
  "Helensvale",
  "Mudgeeraba",
  "Palm Beach",
  "Coolangatta",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-800 text-white">
      <div className="container-lg py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" aria-label="Tru Best Bond Cleaning Gold Coast">
              <img
                src="/assets/generated/logo-transparent.dim_300x100.png"
                alt="Tru Best Bond Cleaning Gold Coast logo"
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
                width={300}
                height={100}
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Gold Coast&apos;s most trusted bond cleaning company. We help
              renters get their full bond back with a 100% satisfaction
              guarantee.
            </p>
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.button"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: 0488 841 883
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Bond / End of Lease Cleaning</li>
              <li>Carpet Steam Cleaning</li>
              <li>Bathroom & Toilet Cleaning</li>
              <li>Window Cleaning</li>
              <li>Full Bond Clean Package</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>
            © {year} Tru Best Bond Cleaning Gold Coast. All rights reserved.
          </p>
          <p>ABN: Available on request | Fully Licensed & Insured</p>
          <p>
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
