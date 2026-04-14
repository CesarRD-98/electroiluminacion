"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    // Número de teléfono en formato internacional sin "+"
    const phoneNumber = "50433552233";

    const message =
        "Hola, me gustaría solicitar información sobre sus productos y servicios.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Chatea con nosotros por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-emerald-700">
            <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
        </a>
    );
}
