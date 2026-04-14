"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageUrl: string;
};

const slides: HeroSlide[] = [
  {
    id: "iluminacion-led",
    title: "Iluminación LED para hogar, comercio e industria",
    subtitle:
      "Optimiza el consumo energético con luminarias LED de alto rendimiento, diseñadas para espacios modernos y seguros.",
    badge: "Iluminación LED",
    primaryCta: {
      label: "Ver catálogo de iluminación",
      href: "/catalogo",
    },
    secondaryCta: {
      label: "Solicitar cotización",
      href: "/#contacto",
    },
    imageUrl: "/images/hero/hero-iluminacion-led.webp",
  },
  {
    id: "energia-solar",
    title: "Soluciones fotovoltaicas a la medida de tu proyecto",
    subtitle:
      "Paneles solares, inversores y sistemas completos para reducir costos y aprovechar la energía del sol.",
    badge: "Energía fotovoltaica",
    primaryCta: {
      label: "Explorar soluciones solares",
      href: "/catalogo",
    },
    secondaryCta: {
      label: "Hablar con un asesor",
      href: "/#contacto",
    },
    imageUrl: "/images/hero/hero-fotovoltaica.webp",
  },
  {
    id: "material-electrico",
    title: "Material eléctrico y ferretería para instalaciones seguras",
    subtitle:
      "Cables, breakers, tubería, canaletas y más, con respaldo técnico y productos confiables.",
    badge: "Material eléctrico · Ferretería",
    primaryCta: {
      label: "Ver productos eléctricos",
      href: "/catalogo",
    },
    secondaryCta: {
      label: "Ir al carrito de cotización",
      href: "/cotizacion",
    },
    imageUrl: "/images/hero/hero-material-electrico.webp",
  },
];

const AUTO_PLAY_INTERVAL = 7000; // ms

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-neutral-50 scroll-mt-26"
    >
      {/* Altura tipo banner, no full-screen */}
      <div className="relative h-[420px] sm:h-[460px] md:h-[520px] lg:h-[560px]">
        {/* Slides de fondo */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            aria-hidden={index !== currentIndex}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            {/* Overlay para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/70 to-neutral-900/30" />
          </div>
        ))}

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 lg:px-0">
          <div className="max-w-2xl">
            {currentSlide.badge && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-neutral-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300 backdrop-blur">
                <Sparkles className="h-3 w-3" />
                <span>{currentSlide.badge}</span>
              </div>
            )}

            <h1 className="text-balance text-3xl font-semibold leading-tight text-neutral-50 sm:text-4xl md:text-5xl">
              {currentSlide.title}
            </h1>

            <p className="mt-4 text-sm text-neutral-200 sm:text-base">
              {currentSlide.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={currentSlide.primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-2.5 text-sm font-medium text-neutral-50 shadow-sm transition hover:bg-emerald-700"
              >
                {currentSlide.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {currentSlide.secondaryCta && (
                <Link
                  href={currentSlide.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-neutral-500/60 bg-neutral-900/40 px-6 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-emerald-400/60 hover:text-emerald-200"
                >
                  {currentSlide.secondaryCta.label}
                </Link>
              )}
            </div>

            <p className="mt-4 text-xs text-neutral-400">
              Proyectos residenciales, comerciales e industriales con respaldo
              técnico y productos de calidad.
            </p>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-neutral-950/60 px-3 py-1.5 text-[10px] shadow-sm backdrop-blur">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full border transition ${index === currentIndex
                    ? "border-emerald-300 bg-emerald-300"
                    : "border-neutral-500 bg-neutral-700 hover:border-emerald-300"
                  }`}
                aria-label={`Ver banner: ${slide.badge ?? slide.title}`}
                aria-pressed={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
