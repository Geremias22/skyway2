import { route } from "@/utils/route";
import { Link, usePage } from "@inertiajs/react";

function NavItem({ href, active, children }) {
  return (
    <Link
      href={href}
      className={[
        "sky-navitem",
        active ? "sky-navitem-active" : "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function AppNavbar({ variant = "guest" }) {
  const { url, props } = usePage();
  const isAuth = !!props.auth?.user;

  return (
    <header className="sky-navbar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={route("home")} className="sky-brand">
          SKYWAY
        </Link>

        <nav className="flex items-center gap-1">
          <NavItem href={route("home")} active={url === "/"}>Home</NavItem>
          <NavItem href={route("flights.index")} active={url.startsWith("/flights")}>Vuelos</NavItem>
          <NavItem href={route("hotels.index")} active={url.startsWith("/hotels")}>Hoteles</NavItem>
          <NavItem href={route("activities.index")} active={url.startsWith("/activities")}>Actividades</NavItem>
          <NavItem href={route("cars.index")} active={url.startsWith("/cars")}>Coches</NavItem>

          {isAuth && (
            <>
              <NavItem href={route("dashboard")} active={url.startsWith("/dashboard")}>Dashboard</NavItem>
              <NavItem href={route("saved.index")} active={url.startsWith("/saved")}>Guardadas</NavItem>
              <NavItem href={route("settings.index")} active={url.startsWith("/settings")}>Ajustes</NavItem>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}