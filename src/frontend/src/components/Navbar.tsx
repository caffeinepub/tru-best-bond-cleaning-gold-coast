import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90"
      }`}
    >
      <div className="container-lg">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            data-ocid="nav.link"
            aria-label="Tru Best Bond Cleaning Gold Coast - Go to homepage"
          >
            <img
              src="/assets/generated/logo-transparent.dim_300x100.png"
              alt="Tru Best Bond Cleaning Gold Coast logo"
              className="h-10 md:h-12 w-auto object-contain"
              width={300}
              height={100}
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  className="px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:text-teal-600 hover:bg-teal-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.button"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2 font-semibold">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-teal-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="container-lg py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-3 rounded-md text-sm font-semibold text-foreground hover:text-teal-600 hover:bg-teal-50 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white gap-2 font-semibold">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp: 0488841883
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
