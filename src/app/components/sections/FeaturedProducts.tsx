"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useQuoteCart } from "@/app/context/quote-cart-context";
import { categories } from "@/app/data/categories";
import { products } from "@/app/data/products";


export default function FeaturedProducts() {
    const { addItem } = useQuoteCart();

    // Tomamos 3 o 4 productos destacados (por ahora, los primeros 4)
    const featuredProducts = products.slice(0, 4);

    const handleAddToQuote = (product: (typeof products)[number]) => {
        addItem(product, 1);
    };

    return (
        <section
            id="destacados"
            className="bg-white py-16 md:py-20 scroll-mt-20"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Encabezado */}
                <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                            Productos destacados
                        </h2>
                        <p className="mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
                            Una vista rápida de algunas soluciones en iluminación, fotovoltaica y material
                            eléctrico. Puedes explorar el catálogo completo cuando lo necesites.
                        </p>
                    </div>
                    <Link
                        href="/catalogo"
                        className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
                    >
                        Ver todo el catálogo
                        <span className="ml-1 text-base">↗</span>
                    </Link>
                </div>

                {/* Grid de productos */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredProducts.map((product) => {
                        const category = categories.find(cat => cat.id === product.categoryId)
                        const categoryName = category?.name ?? "Producto"

                        return (
                            <article
                                key={product.id}
                                className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
                            >
                                {/* Imagen */}
                                <div className="relative h-40 w-full overflow-hidden rounded-t-lg bg-neutral-100">
                                    {product.imageUrl ? (
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-xs text-neutral-500">
                                            Imagen no disponible
                                        </div>
                                    )}
                                </div>

                                {/* Contenido */}
                                <div className="flex flex-1 flex-col p-4">
                                    <div className="mb-2 flex items-center justify-between gap-2">
                                        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
                                            {categoryName}
                                        </span>
                                        <span className="text-xs text-neutral-500">
                                            {product.unit}
                                        </span>
                                    </div>

                                    <h3 className="line-clamp-2 text-sm font-semibold text-neutral-900 md:text-base">
                                        {product.name}
                                    </h3>

                                    <p className="mt-2 line-clamp-3 text-xs text-neutral-600 md:text-sm">
                                        {product.description}
                                    </p>

                                    <div className="mt-3 flex items-center justify-between gap-2">
                                        <div>
                                            <span className="block text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                                                Referencia
                                            </span>
                                            <span className="text-sm font-semibold text-neutral-900">
                                                L {product.price.toLocaleString("es-HN", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Acciones */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => handleAddToQuote(product)}
                                            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 md:text-sm"
                                        >
                                            <ShoppingCart className="h-4 w-4" />
                                            Agregar
                                        </button>
                                        <Link
                                            href={`/producto/${product.id}`}
                                            className="hidden rounded-lg border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-700 hover:border-emerald-500 hover:text-emerald-700 md:inline-block"
                                        >
                                            Ver detalle
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
