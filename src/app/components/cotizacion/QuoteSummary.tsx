"use client";

import { useQuoteCart } from "@/app/context/quote-cart-context";
import React from "react";

function formatCurrency(value: number) {
    return `L ${value.toLocaleString("es-HN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export function QuoteSummary() {
    const { items, totalReference } = useQuoteCart();

    if (items.length === 0) {
        return null;
    }

    return (
        <aside className="h-fit rounded-lg border border-neutral-200 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Resumen de referencia
            </h2>

            <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Total de productos</span>
                    <span className="font-medium text-neutral-900">{items.length}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Total de referencia</span>
                    <span className="text-base font-semibold text-neutral-900">
                        {formatCurrency(totalReference)}
                    </span>
                </div>

                <p className="mt-3 text-xs text-neutral-500">
                    Este total es un monto de referencia en Lempiras. La cotización final
                    puede variar según disponibilidad, tiempos de entrega y condiciones
                    comerciales.
                </p>
            </div>
        </aside>
    );
}
