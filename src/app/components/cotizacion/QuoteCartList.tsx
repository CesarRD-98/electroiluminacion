"use client";

import React from "react";
import Image from "next/image";
import { Trash2, XCircle } from "lucide-react";
import { useQuoteCart } from "@/app/context/quote-cart-context";


function formatCurrency(value: number) {
    return `L ${value.toLocaleString("es-HN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export function QuoteCartList() {
    const { items, updateQuantity, removeItem, clearCart } = useQuoteCart();

    const handleQuantityChange = (productId: string, value: string) => {
        const parsed = parseInt(value, 10);
        if (Number.isNaN(parsed) || parsed <= 0) {
            // Forzamos al menos 1, el borrado se hace con el botón de eliminar
            updateQuantity(productId, 1);
            return;
        }
        updateQuantity(productId, parsed);
    };

    if (items.length === 0) {
        return null;
    }

    return (
        <section className="rounded-lg border border-neutral-200 bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                    Productos en cotización
                </h2>
                <button
                    type="button"
                    onClick={clearCart}
                    className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
                >
                    <XCircle className="h-4 w-4" />
                    Limpiar carrito
                </button>
            </div>

            <div className="space-y-4">
                {items.map(({ product, quantity }) => {
                    const lineSubtotal = product.price * quantity;

                    return (
                        <article
                            key={product.id}
                            className="flex flex-col gap-3 border-b border-neutral-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                        >
                            <div className="flex items-start gap-3 sm:flex-1">
                                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col gap-1">
                                    <h3 className="text-sm font-medium text-neutral-900">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-neutral-600 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Unidad:{" "}
                                        <span className="font-medium">{product.unit}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-stretch gap-3 sm:w-56 sm:items-end">
                                {/* Cantidad */}
                                <div className="flex items-center gap-2">
                                    <label
                                        htmlFor={`qty-${product.id}`}
                                        className="text-xs text-neutral-600"
                                    >
                                        Cantidad
                                    </label>
                                    <input
                                        id={`qty-${product.id}`}
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(product.id, e.target.value)
                                        }
                                        className="w-20 rounded-md border border-neutral-300 bg-white px-2 py-1 text-right text-sm text-neutral-900 outline-none ring-emerald-500 focus:ring-1"
                                    />
                                </div>

                                {/* Precios */}
                                <div className="flex flex-col items-end gap-0.5 text-xs">
                                    <p className="text-neutral-500">
                                        Precio unitario:{" "}
                                        <span className="font-medium text-neutral-800">
                                            {formatCurrency(product.price)}
                                        </span>
                                    </p>
                                    <p className="text-neutral-500">
                                        Subtotal:{" "}
                                        <span className="font-semibold text-neutral-900">
                                            {formatCurrency(lineSubtotal)}
                                        </span>
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => removeItem(product.id)}
                                    className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Eliminar
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
