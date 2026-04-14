"use client";

import { SlidersHorizontal } from "lucide-react";
import { categories } from "@/app/data/categories";

type CategoryId = (typeof categories)[number]["id"] | "all";

type CategoryFilterProps = {
    selectedCategory: CategoryId;
    searchTerm: string;
    onCategoryChange: (categoryId: CategoryId) => void;
    onSearchChange: (value: string) => void;
};

export default function CategoryFilter({
    selectedCategory,
    searchTerm,
    onCategoryChange,
    onSearchChange,
}: CategoryFilterProps) {
    return (
        <section className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filtrar por categoría</span>
            </div>

            <div className="flex flex-wrap gap-2">
                <FilterChip
                    label="Todas"
                    active={selectedCategory === "all"}
                    onClick={() => onCategoryChange("all")}
                />
                {categories.map((category) => (
                    <FilterChip
                        key={category.id}
                        label={category.name}
                        active={selectedCategory === category.id}
                        onClick={() =>
                            onCategoryChange(category.id as CategoryId)
                        }
                    />
                ))}
            </div>

            <div className="mt-2">
                <label className="block text-xs font-medium text-slate-600">
                    Buscar producto
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        placeholder="Ej: bombillo LED, panel solar, breaker..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500 placeholder:text-slate-400 focus:ring-1"
                    />
                </div>
            </div>
        </section>
    );
}

type FilterChipProps = {
    label: string;
    active?: boolean;
    onClick?: () => void;
};

function FilterChip({ label, active, onClick }: FilterChipProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
                active
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300 hover:text-emerald-800",
            ].join(" ")}
        >
            {label}
        </button>
    );
}
