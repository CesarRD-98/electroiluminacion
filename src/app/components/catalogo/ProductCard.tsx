"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { products } from "@/app/data/products";

type Product = (typeof products)[number];

type ProductCardProps = {
    product: Product;
    onAddToQuote: (productId: string) => void;
};

function formatCurrency(value: number) {
    return `L ${value.toLocaleString("es-HN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export default function ProductCard({ product, onAddToQuote }: ProductCardProps) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-emerald-300 hover:shadow-sm">
            <div className="relative h-40 w-full bg-slate-50">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <h2 className="line-clamp-2 text-sm font-semibold text-slate-900">
                    {product.name}
                </h2>

                <p className="line-clamp-2 text-xs text-slate-600">
                    {product.description}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    Unidad:{" "}
                    <span className="font-medium text-slate-800">
                        {product.unit}
                    </span>
                </p>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">
                        {formatCurrency(product.price)}
                    </span>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                    <a
                        href={`/producto/${product.id}`}
                        className="text-xs font-medium text-emerald-700 underline-offset-4 hover:underline"
                    >
                        Ver detalles
                    </a>

                    <button
                        type="button"
                        onClick={() => onAddToQuote(product.id)}
                        className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Agregar a cotización
                    </button>
                </div>
            </div>
        </article>
    );
}
