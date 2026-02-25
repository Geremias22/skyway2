import { route } from "@/utils/route";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <div className="text-sm font-semibold tracking-tight">SKYWAY</div>
            <p className="text-sm text-foreground/60 max-w-md">
              Planifica viajes con rutas, vuelos, hoteles, actividades y coches en un solo lugar.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-foreground/70 hover:text-foreground transition" href={route("home")}>
              Home
            </a>
            <a className="text-foreground/70 hover:text-foreground transition" href={route("flights.index")}>
              Vuelos
            </a>
            <a className="text-foreground/70 hover:text-foreground transition" href={route("hotels.index")}>
              Hoteles
            </a>
            <a className="text-foreground/70 hover:text-foreground transition" href={route("activities.index")}>
              Actividades
            </a>
            <a className="text-foreground/70 hover:text-foreground transition" href={route("cars.index")}>
              Coches
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Skyway. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <span className="hover:text-foreground/70 transition cursor-default">
              Privacidad
            </span>
            <span className="hover:text-foreground/70 transition cursor-default">
              Términos
            </span>
            <span className="hover:text-foreground/70 transition cursor-default">
              Soporte
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}