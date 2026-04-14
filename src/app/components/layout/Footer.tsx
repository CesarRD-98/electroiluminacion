import Link from "next/link";
import {
    Lightbulb,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
            <div className="mx-auto w-full max-w-6xl px-4 py-10 lg:px-0">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Logo y eslogan */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-800">
                                <Lightbulb className="h-6 w-6 text-amber-400" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-100">
                                    Electro
                                    <span className="text-emerald-400">Iluminación</span>
                                </span>
                                <span className="text-[11px] text-neutral-400">
                                    Iluminación · Fotovoltaica · Material eléctrico
                                </span>
                            </div>
                        </div>
                        <p className="mb-2 text-sm italic text-neutral-200">
                            &quot;Iluminamos tus espacios, potenciamos tus ideas.&quot;
                        </p>
                        <p className="text-xs text-neutral-400">
                            Empresa hondureña especializada en soluciones de iluminación LED,
                            energía fotovoltaica y materiales eléctricos para proyectos
                            residenciales, comerciales e industriales.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-neutral-100">
                            Enlaces rápidos
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/#inicio"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#quienes-somos"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Quiénes Somos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#productos"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#ubicacion"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Ubicación
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#historia"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Historia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contacto"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/catalogo"
                                    className="text-neutral-400 transition-colors hover:text-emerald-300"
                                >
                                    Catálogo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-neutral-100">
                            Contacto
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2 text-neutral-400">
                                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                                <span>+504 3355-2233</span>
                            </li>
                            <li className="flex items-start gap-2 text-neutral-400">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                                <span>electroiluminacion100@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-neutral-400">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                                <span>San Pedro Sula, Honduras</span>
                            </li>
                            <li className="text-xs text-neutral-500">
                                Horario: Lun - Vie, 8:00 a.m. - 5:00 p.m.
                            </li>
                        </ul>
                    </div>

                    {/* Síguenos */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold tracking-wide text-neutral-100">
                            Síguenos
                        </h4>
                        <p className="mb-3 text-xs text-neutral-400">
                            Mantente al día con nuevos productos, proyectos y promociones.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <a
                                href="https://www.facebook.com/share/1JCGGiVMSw/"
                                aria-label="Facebook"
                                className="inline-flex items-center gap-1 text-neutral-400 transition-colors hover:text-emerald-300"
                            >
                                <Facebook className="h-4 w-4" />
                                <span>Facebook</span>
                            </a>
                            <a
                                href="https://www.instagram.com/electroiluminacionhn?igsh=dTFlZ3ZyYm9yN3k1"
                                aria-label="Instagram"
                                className="inline-flex items-center gap-1 text-neutral-400 transition-colors hover:text-emerald-300"
                            >
                                <Instagram className="h-4 w-4" />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="inline-flex items-center gap-1 text-neutral-400 transition-colors hover:text-emerald-300"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-neutral-800 pt-6 text-center">
                    <p className="text-xs text-neutral-500">
                        &copy; {currentYear} ElectroIluminación.
                    </p>
                </div>
            </div>
        </footer>
    );
}
