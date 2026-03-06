import { route } from "@/utils/route";

export default function Footer() {
  return (
    <footer className="sky-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <div className="sky-footer-brand">SKYWAY</div>
            <p className="sky-footer-text max-w-md">
              Planifica viajes con rutas, vuelos, hoteles, actividades y coches en un solo lugar.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="sky-footer-link" href={route("home")}>Home</a>
            <a className="sky-footer-link" href={route("flights.index")}>Vuelos</a>
            <a className="sky-footer-link" href={route("hotels.index")}>Hoteles</a>
            <a className="sky-footer-link" href={route("activities.index")}>Actividades</a>
            <a className="sky-footer-link" href={route("cars.index")}>Coches</a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="sky-footer-meta">
            © {new Date().getFullYear()} Skyway. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="sky-footer-meta-link">Privacidad</span>
            <span className="sky-footer-meta-link">Términos</span>
            <span className="sky-footer-meta-link">Soporte</span>
          </div>
        </div>
      </div>
    </footer>
  );
}