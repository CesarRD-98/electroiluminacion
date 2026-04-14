"use client";

import React from "react";
import Link from "next/link";
import { useQuoteCart } from "@/app/context/quote-cart-context";
import { QuoteCartList } from "@/app/components/cotizacion/QuoteCartList";
import { QuoteSummary } from "@/app/components/cotizacion/QuoteSummary";
import { CustomerForm } from "@/app/components/cotizacion/CustomerForm";

export default function QuotePage() {
    const { items } = useQuoteCart();
    const hasItems = items.length > 0;

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 lg:px-0 scroll-mt-26">
            <header className="flex flex-col gap-2 border-b border-neutral-200 pb-4">
                <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    Carrito de cotización
                </h1>
                <p className="max-w-2xl text-sm text-neutral-600">
                    Revisa los productos que has agregado para cotizar. Puedes ajustar las
                    cantidades o eliminar productos antes de enviar tu solicitud.
                </p>
            </header>

            {!hasItems ? (
                <section className="rounded-lg border border-dashed border-neutral-300 bg-white px-6 py-10 text-center">
                    <p className="text-lg font-medium text-neutral-800">
                        Tu carrito de cotización está vacío
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">
                        Explora nuestro catálogo de iluminación, energía fotovoltaica y
                        materiales eléctricos para agregar productos a tu cotización.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/catalogo"
                            className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                        >
                            Ver catálogo
                        </Link>
                    </div>
                </section>
            ) : (
                <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
                    {/* Columna izquierda: lista */}
                    <QuoteCartList />

                    {/* Columna derecha: resumen + formulario */}
                    <div className="space-y-4">
                        <QuoteSummary />
                        <CustomerForm />
                    </div>
                </div>
            )}
        </div>
    );
}
