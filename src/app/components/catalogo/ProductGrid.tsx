"use client";

import { products } from "@/app/data/products";
import ProductCard from "./ProductCard";

type ProductGridProps = {
    products: typeof products;
    onAddToQuote: (productId: string) => void;
};

export default function ProductGrid({
    products,
    onAddToQuote,
}: ProductGridProps) {
    if (products.length === 0) {
        return (
            <section className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                <p className="text-sm font-medium text-slate-800">
                    No se encontraron productos con los filtros actuales
                </p>
                <p className="mt-2 text-xs text-slate-600">
                    Prueba cambiando de categoría o ajustando el texto de búsqueda.
                </p>
            </section>
        );
    }

    return (
        <section>
            <p className="mb-3 text-xs text-slate-500">
                Mostrando{" "}
                <span className="font-semibold text-slate-800">
                    {products.length}
                </span>{" "}
                producto(s)
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToQuote={onAddToQuote}
                    />
                ))}
            </div>
        </section>
    );
}
