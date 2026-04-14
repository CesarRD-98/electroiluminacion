"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Realizan envíos a domicilio?",
    answer:
      "Sí. Ofrecemos entregas dentro del Distrito Central y envíos nacionales mediante operadores logísticos.",
  },
  {
    question: "¿Tienen garantía los productos?",
    answer:
      "Sí. La garantía depende del tipo de producto y puede variar entre 6 meses y 2 años.",
  },
  {
    question: "¿Puedo solicitar instalación?",
    answer:
      "Sí. Contamos con servicio de instalación profesional para iluminación y equipos eléctricos.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Puedes usar nuestro formulario web o escribirnos directamente por WhatsApp para detallar tu proyecto.",
  },
  {
    question: "¿Los precios incluyen impuestos?",
    answer: "Sí, todos los precios mostrados incluyen IVA.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-sm text-neutral-600 md:text-base">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Acordeón */}
        <div className="mx-auto max-w-3xl rounded-lg border border-neutral-200 bg-neutral-50">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b border-neutral-200 last:border-b-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left md:px-5 md:py-4"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-sm font-medium text-neutral-900 md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-neutral-600 md:px-5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
