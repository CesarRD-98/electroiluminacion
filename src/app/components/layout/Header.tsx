"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lightbulb, ShoppingCart, Menu, X, Mail } from "lucide-react";
import { useQuoteCart } from "@/app/context/quote-cart-context";

type HeaderProps = {
    /**
     * Logo opcional como imagen.
     * Ej: "/images/logo-electroiluminacion.png"
     */
    logoSrc?: string;
    contactEmail?: string;
};

const navLinks = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#quienes-somos", label: "Quiénes Somos" },
    { href: "/#destacados", label: "Destacados" },
    { href: "/#ubicacion", label: "Ubicación" },
    { href: "/#historia", label: "Historia" },
    { href: "/#contacto", label: "Contacto" },
    { href: "/catalogo", label: "Catálogo" },
];

export default function Header({
    logoSrc,
    contactEmail = "electroiluminacion100@gmail.com",
}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems } = useQuoteCart();

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
            {/* Fila superior: logo + correo + carrito + menú móvil */}
            <div className="border-b border-neutral-200">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
                    {/* Logo / Marca */}
                    <Link href="/#inicio" className="flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center">
                            {logoSrc ? (
                                <Image
                                    src={logoSrc}
                                    alt="Logo ElectroIluminación"
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <Lightbulb className="h-7 w-7 text-amber-400" />
                            )}
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-900">
                                Electro
                                <span className="text-emerald-600">Iluminación</span>
                            </span>
                            <span className="text-[11px] text-neutral-500">
                                Iluminación · Fotovoltaica · Material eléctrico
                            </span>
                        </div>
                    </Link>

                    {/* Centro: correo (oculto en pantallas muy pequeñas) */}
                    <div className="hidden items-center gap-2 text-xs text-neutral-600 sm:flex">
                        <Mail className="h-4 w-4 text-emerald-600" />
                        <a
                            href={`mailto:${contactEmail}`}
                            className="hover:text-emerald-700"
                        >
                            {contactEmail}
                        </a>
                    </div>

                    {/* Derecha: carrito + menú móvil */}
                    <div className="flex items-center gap-2">
                        {/* Carrito */}
                        <Link
                            href="/cotizacion"
                            className="relative inline-flex items-center justify-center text-neutral-800 hover:text-emerald-700"
                            aria-label="Ver cotización"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-amber-400 px-0.5 text-[10px] font-semibold text-neutral-900">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {/* Menú móvil (solo en md-) */}
                        <button
                            className="inline-flex items-center justify-center text-neutral-800 hover:text-emerald-700 md:hidden"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label="Abrir menú de navegación"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Fila inferior: navegación desktop */}
            <div className="hidden bg-neutral-900 md:block">
                <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="border-b-2 border-transparent pb-1 text-sm font-medium text-neutral-100 transition-colors hover:border-emerald-400 hover:text-emerald-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Navegación móvil (fila inferior colapsada) */}
            {isMenuOpen && (
                <nav className="bg-neutral-900 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="border-b border-neutral-800 py-2 text-sm font-medium text-neutral-100 last:border-b-0 hover:text-emerald-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
