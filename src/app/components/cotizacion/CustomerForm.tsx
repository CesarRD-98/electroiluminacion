"use client";

import { useQuoteCart } from "@/app/context/quote-cart-context";
import React, { useState } from "react";


type LocalCustomerData = {
    name: string;
    phone: string;
    email?: string;
    comments?: string;
};

export function CustomerForm() {
    const { customerData, setCustomerData } = useQuoteCart();

    const [form, setForm] = useState<LocalCustomerData>(() => ({
        name: customerData?.name ?? "",
        phone: customerData?.phone ?? "",
        email: customerData?.email ?? "",
        comments: customerData?.comments ?? "",
    }));

    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [saved, setSaved] = useState(false);

    const handleChange = (
        field: keyof LocalCustomerData,
        value: string,
    ) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setSaved(false);
    };

    const validate = () => {
        const newErrors: { name?: string; phone?: string } = {};
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!form.phone.trim()) newErrors.phone = "El teléfono es obligatorio.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!validate()) return;
        setCustomerData({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email?.trim() || undefined,
            comments: form.comments?.trim() || undefined,
        });
        setSaved(true);
    };

    return (
        <section className="mt-4 rounded-lg border border-neutral-200 bg-white p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                Datos de contacto
            </h2>
            <p className="mt-1 text-xs text-neutral-500">
                Completa tus datos para que podamos comunicarnos contigo y confirmar la
                cotización.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-sm">
                {/* Nombre */}
                <div className="space-y-1">
                    <label
                        htmlFor="customer-name"
                        className="block text-xs font-medium text-neutral-700"
                    >
                        Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="customer-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-emerald-500 placeholder:text-neutral-400 focus:ring-1"
                        placeholder="Ej: Juan Pérez"
                    />
                    {errors.name && (
                        <p className="text-xs text-red-600">{errors.name}</p>
                    )}
                </div>

                {/* Teléfono */}
                <div className="space-y-1">
                    <label
                        htmlFor="customer-phone"
                        className="block text-xs font-medium text-neutral-700"
                    >
                        Teléfono de contacto <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="customer-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-emerald-500 placeholder:text-neutral-400 focus:ring-1"
                        placeholder="Ej: 9876-5432"
                    />
                    {errors.phone && (
                        <p className="text-xs text-red-600">{errors.phone}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <label
                        htmlFor="customer-email"
                        className="block text-xs font-medium text-neutral-700"
                    >
                        Correo electrónico (opcional)
                    </label>
                    <input
                        id="customer-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-emerald-500 placeholder:text-neutral-400 focus:ring-1"
                        placeholder="Ej: contacto@ejemplo.com"
                    />
                </div>

                {/* Comentarios */}
                <div className="space-y-1">
                    <label
                        htmlFor="customer-comments"
                        className="block text-xs font-medium text-neutral-700"
                    >
                        Comentarios adicionales
                    </label>
                    <textarea
                        id="customer-comments"
                        value={form.comments}
                        onChange={(e) => handleChange("comments", e.target.value)}
                        rows={3}
                        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-emerald-500 placeholder:text-neutral-400 focus:ring-1"
                        placeholder="Ej: Horario preferido, tipo de proyecto, ubicación, etc."
                    />
                </div>

                <div className="flex flex-col pt-2">
                    <button
                        type="submit"
                        className="rounded-md bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
                    >
                        Guardar datos
                    </button>

                    {saved && (
                        <p className="mt-1 text-xs text-emerald-700">
                            Datos guardados en la cotización.
                        </p>
                    )}
                </div>

                {/* Aquí más adelante podemos agregar el botón de WhatsApp */}
            </form>
        </section>
    );
}
