const TAB_CONTENT = {
  Vuelos: {
    title: "Vuelos",
    text: "El itinerario puede partir de opciones de ida o ida y vuelta y usarlas como base del viaje. La idea no es mostrar solo un precio, sino integrarlo dentro del plan general para que el transporte tenga sentido con las fechas, la duración y el ritmo del viaje.",
    bullets: [
      "Opciones de salida y regreso organizadas dentro del itinerario.",
      "Relación entre fechas de vuelo y agenda diaria del viaje.",
      "Base para construir el resto del plan con coherencia.",
      "Preparado para trabajar con resultados reales conectados a proveedor.",
    ],
  },
  Hoteles: {
    title: "Hoteles",
    text: "El bloque de alojamiento está pensado para complementar el itinerario con opciones alineadas con la zona, la duración de la estancia y el estilo del viaje. No se trata solo de dormir, sino de encajar el hotel con la experiencia global.",
    bullets: [
      "Opciones según duración del viaje y lógica de la ruta.",
      "Alojamientos vinculados al contexto del destino.",
      "Pensado para combinar ubicación, comodidad y planificación.",
      "Escalable a integración real con proveedores externos.",
    ],
  },
  Actividades: {
    title: "Actividades",
    text: "Skyway busca convertir una búsqueda en un viaje con contenido. Por eso el itinerario puede incluir actividades, puntos de interés y sugerencias ajustadas a intereses como gastronomía, naturaleza, cultura o escapadas urbanas.",
    bullets: [
      "Recomendaciones ligadas a preferencias o vibes.",
      "Puntos de interés y experiencias por día.",
      "Mejor lectura del destino, no solo logística.",
      "Espacio para justificaciones generadas por IA.",
    ],
  },
  Coches: {
    title: "Coches",
    text: "En determinados viajes, un coche puede ser parte importante del plan, especialmente en rutas abiertas o destinos con desplazamientos entre zonas. El itinerario contempla esta pieza como una opción más dentro del conjunto.",
    bullets: [
      "Útil para viajes con movilidad flexible.",
      "Encaje con rutas de varios puntos o escapadas largas.",
      "Complemento del transporte principal del viaje.",
      "Integrable como bloque adicional del itinerario.",
    ],
  },
};

export default function ItineraryTabs({ active, onChange }) {
  const items = ["Vuelos", "Hoteles", "Actividades", "Coches"];
  const current = TAB_CONTENT[active] ?? TAB_CONTENT["Vuelos"];

  return (
    <section className="sky-panel p-6 md:p-10 space-y-5">
      <div className="space-y-3">
        <h3 className="sky-heading text-xl md:text-2xl">¿Qué contiene un itinerario?</h3>
        <p className="sky-muted max-w-4xl">
          Un itinerario en Skyway no está pensado como una simple lista de resultados, sino como una
          guía estructurada que te ayude a visualizar el viaje completo y a entender mejor cada parte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3 space-y-2">
          {items.map((x) => (
            <button
              key={x}
              type="button"
              onClick={() => onChange(x)}
              className={["w-full text-left sky-chip", active === x ? "is-active" : ""].join(" ")}
            >
              {x}
            </button>
          ))}
        </div>

        <div className="md:col-span-9 sky-card p-5 md:p-6 space-y-4">
          <div>
            <h4 className="sky-heading text-lg md:text-xl">{current.title}</h4>
            <p className="mt-2 sky-muted">{current.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.bullets.map((item) => (
              <div key={item} className="rounded-2xl border border-foreground/10 p-4">
                <p className="sky-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}