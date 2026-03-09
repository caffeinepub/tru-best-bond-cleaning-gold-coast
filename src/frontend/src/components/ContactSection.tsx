import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const DEST = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    size: "",
    service: "",
    date: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const subject = `Bond Cleaning Quote Request - ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Property Address: ${form.address}`,
      `Property Size: ${form.size}`,
      `Service Type: ${form.service}`,
      `Preferred Date: ${form.date}`,
      `Message: ${form.message}`,
      "",
      "Sent via Tru Best Bond Cleaning Gold Coast website",
    ].join("\n");

    const mailtoLink = `mailto:${DEST}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_self");

    // Also log to backend (fire-and-forget)
    if (actor) {
      try {
        const serviceMap: Record<
          string,
          { __kind__: string; [key: string]: null | string }
        > = {
          "Bond/End of Lease Cleaning": {
            __kind__: "bondCleaning",
            bondCleaning: null,
          },
          "Carpet Steam Cleaning": {
            __kind__: "carpetCleaning",
            carpetCleaning: null,
          },
          "Window Cleaning": {
            __kind__: "windowCleaning",
            windowCleaning: null,
          },
          "Bathroom Cleaning": {
            __kind__: "other",
            other: "Bathroom Cleaning",
          },
          "Full Package": { __kind__: "bondCleaning", bondCleaning: null },
        };
        const serviceType = serviceMap[form.service] ?? {
          __kind__: "other",
          other: form.service,
        };
        await actor.submitEnquiry(
          form.name,
          form.phone,
          form.email,
          form.address,
          serviceType as never,
          form.message,
        );
      } catch {
        // ignore backend errors
      }
    }

    toast.success(
      "Your email client is opening. Please send the email to complete your booking!",
    );
  };

  return (
    <div className="section-padding bg-white">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">
              Contact Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Get Your Free Bond Cleaning Quote
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fill in your details below and we will get back to you fast. Or
              chat with us directly on WhatsApp for an instant response.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground">WhatsApp / Phone</p>
                  <a
                    href="https://wa.me/610488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline font-semibold"
                  >
                    0488 841 883
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Service Area</p>
                  <p className="text-muted-foreground">
                    All Gold Coast suburbs
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/610488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.button"
            >
              <button
                type="button"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors w-full justify-center shadow-md"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp: 0488 841 883
              </button>
            </a>

            {/* Guarantee */}
            <div className="mt-8 bg-teal-50 rounded-xl p-5 border border-teal-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">
                    100% Bond Back Guarantee
                  </p>
                  <p className="text-muted-foreground text-sm">
                    If your property manager is not happy with our clean, we
                    come back within 72 hours and re-clean for free. No
                    questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-teal-50 rounded-2xl p-6 md:p-8 border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="font-semibold mb-1.5 block"
                  >
                    Name *
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="font-semibold mb-1.5 block"
                  >
                    Phone *
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    data-ocid="contact.input"
                    placeholder="0400 000 000"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="contact-email"
                  className="font-semibold mb-1.5 block"
                >
                  Email *
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  data-ocid="contact.input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-address"
                  className="font-semibold mb-1.5 block"
                >
                  Property Address *
                </Label>
                <Input
                  id="contact-address"
                  data-ocid="contact.input"
                  placeholder="123 Example Street, Surfers Paradise QLD 4217"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  required
                  className="bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-semibold mb-1.5 block">
                    Property Size
                  </Label>
                  <Select onValueChange={(v) => update("size", v)}>
                    <SelectTrigger
                      data-ocid="contact.select"
                      className="bg-white"
                    >
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Studio">Studio</SelectItem>
                      <SelectItem value="1 Bed">1 Bed</SelectItem>
                      <SelectItem value="2 Bed">2 Bed</SelectItem>
                      <SelectItem value="3 Bed">3 Bed</SelectItem>
                      <SelectItem value="4 Bed">4 Bed</SelectItem>
                      <SelectItem value="5+ Bed">5+ Bed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-semibold mb-1.5 block">
                    Service Type
                  </Label>
                  <Select onValueChange={(v) => update("service", v)}>
                    <SelectTrigger
                      data-ocid="contact.select"
                      className="bg-white"
                    >
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bond/End of Lease Cleaning">
                        Bond / End of Lease Cleaning
                      </SelectItem>
                      <SelectItem value="Carpet Steam Cleaning">
                        Carpet Steam Cleaning
                      </SelectItem>
                      <SelectItem value="Window Cleaning">
                        Window Cleaning
                      </SelectItem>
                      <SelectItem value="Bathroom Cleaning">
                        Bathroom Cleaning
                      </SelectItem>
                      <SelectItem value="Full Package">Full Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="contact-date"
                  className="font-semibold mb-1.5 block"
                >
                  Preferred Date
                </Label>
                <Input
                  id="contact-date"
                  type="date"
                  data-ocid="contact.input"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="bg-white"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-message"
                  className="font-semibold mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  placeholder="Tell us anything special about your property or cleaning requirements..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="bg-white resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                data-ocid="contact.submit_button"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 h-auto text-lg"
              >
                Send My Quote Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, your email client will open with your
                details pre-filled. Simply click Send to complete your booking
                request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
