import {
  CalendarClock,
  Target,
  Eye,
  TrendingUp,
  Scale,
  GraduationCap,
  ClipboardList,
  MessageCircle,
  Leaf,
} from "lucide-react";

export default function History() {
  return (
    <section id="historia" className="bg-neutral-50 py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Historia, misión y valores
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-amber-400" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 md:text-base">
            Un proyecto que nace en Honduras para aportar soluciones de iluminación y energía más
            eficientes y confiables.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-12">
          {/* Historia */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                <CalendarClock className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                  Nuestra historia
                </h3>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Desde 2023
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
              <p className="text-sm text-neutral-700 md:text-base">
                <span className="font-semibold text-neutral-900">
                  ElectroIluminación inició formalmente sus operaciones el 16 de junio de 2023
                </span>
                , consolidándose como una empresa enfocada en soluciones de iluminación LED, energía
                fotovoltaica y material eléctrico para el mercado hondureño.
              </p>
              <p className="mt-3 text-sm text-neutral-700 md:text-base">
                Desde el inicio, la empresa ha apostado por productos confiables, asesoría técnica y
                un servicio cercano, con el objetivo de acompañar proyectos que buscan eficiencia
                energética, seguridad y mejores experiencias de iluminación.
              </p>
            </div>
          </div>

          {/* Misión y visión */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Misión */}
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                  <Target className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Misión</h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                Mejorar la calidad de vida y el entorno de nuestros clientes mediante soluciones de
                iluminación y energía confiables, eficientes y accesibles, respaldadas por una
                asesoría profesional y un servicio responsable.
              </p>
            </div>

            {/* Visión */}
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                  <Eye className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Visión</h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                Ser reconocidos como un aliado de confianza en soluciones lumínicas y eléctricas en
                Honduras, promoviendo la eficiencia energética, la sostenibilidad y la innovación
                constante en cada proyecto que acompañamos.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div>
            <h3 className="mb-6 text-center text-2xl font-semibold text-neutral-900">
              Nuestros valores
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mejora Continua */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Mejora continua
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Buscamos optimizar procesos, servicio y portafolio de productos de forma
                  permanente.
                </p>
              </div>

              {/* Ética Empresarial */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <Scale className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Ética empresarial
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Actuamos con integridad y transparencia en nuestras relaciones comerciales y
                  técnicas.
                </p>
              </div>

              {/* Capacitación y Desarrollo */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Capacitación y desarrollo
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Impulsamos el aprendizaje continuo del equipo para brindar una asesoría más
                  completa.
                </p>
              </div>

              {/* Cumplimiento Regulatorio */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <ClipboardList className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Cumplimiento regulatorio
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Respetamos normas y estándares para garantizar instalaciones seguras y confiables.
                </p>
              </div>

              {/* Comunicación Abierta */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Comunicación abierta
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Fomentamos el diálogo claro con clientes, proveedores y aliados.
                </p>
              </div>

              {/* Sostenibilidad */}
              <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Sostenibilidad
                </h4>
                <p className="mt-1 text-[13px] text-neutral-600">
                  Promovemos la eficiencia energética y el uso responsable de los recursos en cada
                  solución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
