"use client";

export default function ContactForm() {
  return (
    <section id="contacto" className="bg-neutral-50 py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Solicita tu cotización
          </h2>
          <p className="mt-4 text-sm text-neutral-600 md:text-base max-w-xl mx-auto">
            Completa la información y nos pondremos en contacto contigo lo antes posible.
          </p>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Formulario */}
        <div className="mx-auto max-w-2xl">
          <form className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            {/* Nombre */}
            <div className="mb-6">
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Teléfono + Email */}
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="telefono"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="Número de contacto"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Producto */}
            <div className="mb-6">
              <label
                htmlFor="producto"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Producto de interés
              </label>
              <input
                id="producto"
                name="producto"
                type="text"
                placeholder="Ej: Panel LED 60x60"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Mensaje o requerimientos
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Describa sus necesidades..."
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Botón */}
            <button
              type="button"
              onClick={() =>
                alert(
                  "Formulario enviado (simulación). En producción se enviará al servidor o WhatsApp."
                )
              }
              className="w-full rounded-lg bg-emerald-600 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              Enviar solicitud
            </button>

            <p className="mt-4 text-center text-xs text-neutral-500">
              * Respondemos en un máximo de 24 horas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
