import { MessageCircle } from "lucide-react";

export default function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/610488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-sticky md:hidden flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
