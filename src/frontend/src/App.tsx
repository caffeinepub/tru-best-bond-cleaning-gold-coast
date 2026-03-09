import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceDetails from "./components/ServiceDetails";
import ServicesSection from "./components/ServicesSection";
import SuburbPage from "./components/SuburbPage";
import SuburbsSection from "./components/SuburbsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppSticky from "./components/WhatsAppSticky";

function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={navScrolled} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
          <ServiceDetails />
        </section>
        <SuburbsSection />
        <section id="about">
          <AboutSection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <WhatsAppSticky />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bond-cleaning-:slug" element={<SuburbPage />} />
    </Routes>
  );
}
