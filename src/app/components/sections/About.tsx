import { Building2, Home, ShieldCheck, Bolt } from "lucide-react";

export default function About() {
  return (
    <section id="quienes-somos" className="bg-white py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Quiénes somos
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-emerald-500" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 md:text-base">
            Una ferretería especializada en iluminación y soluciones eléctricas que acompaña
            proyectos desde la idea hasta la instalación.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Columna izquierda: identidad */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                Nuestra identidad
              </h3>
              <p className="mt-3 text-sm text-neutral-600 md:text-base">
                <span className="font-semibold text-neutral-900">ElectroIluminación</span> es una
                empresa hondureña dedicada a la comercialización de iluminación LED, energía
                fotovoltaica, materiales eléctricos y soluciones para construcción.
              </p>
              <p className="mt-3 text-sm text-neutral-600 md:text-base">
                Trabajamos con hogares, comercios y proyectos profesionales, brindando asesoría
                cercana y productos pensados para ser seguros, eficientes y duraderos.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 md:p-5">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <Bolt className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  En qué nos enfocamos
                </h4>
              </div>
              <p className="text-sm text-neutral-700">
                Distribuimos y asesoramos en soluciones eléctricas y lumínicas que aportan
                eficiencia energética, confort y seguridad a proyectos residenciales, comerciales
                e industriales.
              </p>
            </div>
          </div>

          {/* Columna derecha: highlights / métricas suaves */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                <Home className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Hogares y comercios
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Soluciones de iluminación y material eléctrico para espacios residenciales y locales
                comerciales.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                <Building2 className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Proyectos y empresas
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Acompañamos a contratistas, desarrolladores y empresas en la selección de
                productos para sus proyectos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Confianza y cumplimiento
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Operamos bajo normativas vigentes y buenas prácticas, priorizando la seguridad
                eléctrica en cada proyecto.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                <Bolt className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                Desde 2023
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Nacimos para aportar soluciones modernas de iluminación y energía a proyectos en
                Honduras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
