export default function ItineraryTabs({ active, onChange }) {
  const items = ["Vuelos", "Hoteles", "Actividades", "Coches"];

  return (
    <section className="sky-panel p-6 md:p-10 space-y-4">
      <h3 className="sky-heading text-xl">¿Qué contiene los itinerarios?</h3>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3 space-y-2">
          {items.map((x) => (
            <button
              key={x}
              type="button"
              onClick={() => onChange(x)}
              className={[
                "w-full md:w-auto sky-btn",
                active === x ? "sky-tab-active" : "",
              ].join(" ")}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="md:col-span-9 sky-card p-5">
          <h4 className="sky-heading">{active}</h4>
          <p className="mt-2 sky-muted">
            Aquí irá el resumen del bloque seleccionado. Luego lo conectamos a datos reales
            (props de Inertia o API).
          </p>
        </div>
      </div>
    </section>
  );
}