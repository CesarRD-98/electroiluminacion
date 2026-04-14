import { MapPin, Clock, Phone, Truck, Globe2, ExternalLink } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-neutral-50 py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Nuestra ubicación
          </h2>
          <div className="mt-3 flex justify-center">
            {/* Aquí mantenemos emerald para coherencia con el resto */}
            <span className="h-1 w-20 rounded-full bg-emerald-500" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 md:text-base">
            Visítanos para asesoría en iluminación LED, soluciones fotovoltaicas y material eléctrico.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Columna izquierda: mapa + segmentación */}
          <div className="space-y-6">
            {/* Card del mapa principal */}
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
              <div className="h-72 bg-neutral-100 md:h-80">
                {/* Placeholder / aquí puedes reemplazar por iframe de Google Maps */}
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-white px-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-neutral-800">
                    Blvd. Los Próceres, Tegucigalpa
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Edificio Beetik · Contiguo a Denny&apos;s
                  </p>
                  <div className="mt-5">
                    <a
                      href="https://maps.app.goo.gl/GXEcE1o7FwgTcs2j7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-emerald-700"
                    >
                      Ver en Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Segmentación geográfica – aquí metemos AMBER para romper la monotonía */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <Globe2 className="h-4 w-4 text-amber-500" />
                </div>
                <h4 className="text-sm font-semibold text-amber-900">
                  Segmentación geográfica
                </h4>
              </div>
              <p className="text-sm text-neutral-800">
                Atendemos principalmente en zonas urbanas de Honduras, con enfoque en proyectos
                residenciales, comerciales e industriales. Coordinamos soluciones de iluminación y
                energía para obras nuevas, remodelaciones y mantenimientos.
              </p>
            </div>
          </div>

          {/* Columna derecha: información detallada */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 md:text-2xl">
                Punto físico de atención
              </h3>
              <p className="mt-2 text-sm text-neutral-600 md:text-base">
                Estamos ubicados en una zona estratégica de Tegucigalpa para atender proyectos
                residenciales, comerciales e industriales con soluciones integrales en iluminación
                y material eléctrico.
              </p>
            </div>

            <div className="space-y-5">
              {/* Dirección */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Dirección
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    Blvd. Los Próceres, contiguo a Denny&apos;s,
                    <br />
                    Edificio Beetik,
                    <br />
                    Tegucigalpa, Honduras.
                  </p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Horario de atención
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    Lunes a Viernes: 8:00 AM – 5:00 PM
                    <br />
                    Sábados: 8:00 AM – 12:00 PM
                    <br />
                    Domingos: Cerrado.
                  </p>
                </div>
              </div>

              {/* Contacto */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                  <Phone className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Contacto
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    Teléfono: información proporcionada al solicitar cotización.
                    <br />
                    WhatsApp Business: disponible para consultas y seguimiento de proyectos.
                  </p>
                </div>
              </div>
            </div>

            {/* Servicios logísticos – aquí lo dejamos neutro para balancear */}
            <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <Truck className="h-4 w-4 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-900">
                  Servicios logísticos
                </h4>
              </div>
              <ul className="mt-1 space-y-1.5 text-sm text-neutral-700">
                <li>• Servicio dentro del Distrito Central.</li>
                <li>• Envíos nacionales mediante operadores logísticos.</li>
                <li>• Coordinación directa para entregas y retiros.</li>
                <li>• Visitas técnicas programadas según el tipo de proyecto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
