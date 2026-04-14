"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { products } from "@/app/data/products";
import { useQuoteCart } from "@/app/context/quote-cart-context";
import { categories } from "@/app/data/categories";


type Product = (typeof products)[number];

function formatCurrency(value: number) {
    return `L ${value.toLocaleString("es-HN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export default function ProductDetailPage() {
    const params = useParams();
    const idParam = params?.id;
    const productId =
        typeof idParam === "string" ? idParam : Array.isArray(idParam) ? idParam[0] : "";

    const product: Product | undefined = products.find(
        (item) => item.id === productId,
    );

    const { addItem } = useQuoteCart();
    const [quantity, setQuantity] = useState<number>(1);

    if (!product) {
        return (
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-8 lg:px-0">
                <header className="flex items-center gap-3">
                    <Link
                        href="/catalogo"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al catálogo
                    </Link>
                </header>

                <section className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                    <p className="text-lg font-semibold text-slate-900">
                        Producto no encontrado
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                        Es posible que este producto ya no esté disponible o que el enlace
                        sea incorrecto.
                    </p>
                </section>
            </div>
        );
    }

    const category = categories.find(
        (cat) => cat.id === product.categoryId,
    );

    const handleQuantityChange = (value: string) => {
        const parsed = parseInt(value, 10);
        if (Number.isNaN(parsed) || parsed <= 0) {
            setQuantity(1);
            return;
        }
        setQuantity(parsed);
    };

    const handleAddToQuote = () => {
        if (!product) return;
        addItem(product, quantity);
    };

    return (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8 lg:px-0">
            {/* Breadcrumb / volver */}
            <header className="flex flex-col gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center justify-between gap-3">
                    <Link
                        href="/catalogo"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al catálogo
                    </Link>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {product.name}
                    </h1>
                    {category && (
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
                            {category.name}
                        </p>
                    )}
                </div>
            </header>

            {/* Layout principal */}
            <section className="grid gap-6 rounded-lg border border-slate-200 bg-white p-4 sm:p-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                {/* Imagen */}
                <div className="flex flex-col gap-4">
                    <div className="relative h-64 w-full overflow-hidden rounded-md bg-slate-50 sm:h-80">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain"
                        />
                    </div>

                    <div className="rounded-md border border-slate-100 bg-slate-50 p-3">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Descripción
                        </h2>
                        <p className="mt-1 text-sm text-slate-700">
                            {product.description}
                        </p>
                    </div>
                </div>

                {/* Detalles y acción */}
                <div className="flex flex-col gap-4">
                    {/* Datos principales */}
                    <div className="space-y-2">
                        <p className="text-sm text-slate-600">
                            Unidad de venta:{" "}
                            <span className="font-medium text-slate-900">
                                {product.unit}
                            </span>
                        </p>

                        <div className="mt-3 flex flex-col gap-1">
                            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Precio de referencia
                            </span>
                            <span className="text-2xl font-semibold text-slate-900">
                                {formatCurrency(product.price)}
                            </span>
                            <p className="text-xs text-slate-500">
                                Precio en Lempiras (L). Monto de referencia sujeto a
                                disponibilidad y condiciones comerciales.
                            </p>
                        </div>
                    </div>

                    {/* Cantidad y acciones */}
                    <div className="mt-2 rounded-md border border-slate-100 bg-slate-50 p-3">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap items-center gap-3">
                                <label
                                    htmlFor="quantity"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Cantidad
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min={1}
                                    value={quantity}
                                    onChange={(e) => handleQuantityChange(e.target.value)}
                                    className="w-24 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none ring-emerald-500 focus:ring-1"
                                />
                            </div>

                            <div className="flex items-center justify-between text-xs text-slate-600">
                                <span>Subtotal de referencia:</span>
                                <span className="font-semibold text-slate-900">
                                    {formatCurrency(product.price * quantity)}
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToQuote}
                                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Agregar a cotización
                            </button>
                        </div>
                    </div>

                    {/* Info extra / navegación */}
                    <div className="mt-2 space-y-2 text-xs text-slate-600">
                        <p>
                            Una vez agregues tus productos, puedes revisar el resumen en el{" "}
                            <Link
                                href="/cotizacion"
                                className="font-medium text-emerald-700 hover:text-emerald-800"
                            >
                                carrito de cotización
                            </Link>{" "}
                            y, próximamente, enviar tu solicitud de cotización por WhatsApp o
                            correo.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
