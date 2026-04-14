"use client";

import React, { useMemo, useState } from "react";
import { categories } from "@/app/data/categories";
import { products } from "@/app/data/products";
import { useQuoteCart } from "@/app/context/quote-cart-context";
import CategoryFilter from "@/app/components/catalogo/CategoryFilter";
import ProductGrid from "@/app/components/catalogo/ProductGrid";


type CategoryId = (typeof categories)[number]["id"] | "all";

export default function CatalogPage() {
    const { addItem } = useQuoteCart();

    const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "all" ||
                product.categoryId === selectedCategory;

            const normalizedSearch = searchTerm.trim().toLowerCase();
            const matchesSearch =
                !normalizedSearch ||
                product.name.toLowerCase().includes(normalizedSearch) ||
                product.description.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    const handleAddToQuote = (productId: string) => {
        const product = products.find((p) => p.id === productId);
        if (!product) return;
        addItem(product, 1);
    };

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 lg:px-0 scroll-mt-26">
            {/* Encabezado */}
            <header className="flex flex-col gap-2 border-b border-slate-200 pb-4">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Catálogo de productos
                </h1>
                <p className="max-w-2xl text-sm text-slate-600">
                    Explora nuestra selección de iluminación LED, soluciones de energía
                    fotovoltaica, materiales eléctricos y ferretería para tus proyectos
                    residenciales, comerciales o industriales.
                </p>
            </header>

            {/* Barra de filtros y búsqueda */}
            <CategoryFilter
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                onCategoryChange={setSelectedCategory}
                onSearchChange={setSearchTerm}
            />

            {/* Grid de productos */}
            <ProductGrid
                products={filteredProducts}
                onAddToQuote={handleAddToQuote}
            />
        </div>
    );
}
