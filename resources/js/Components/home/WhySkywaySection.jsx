export default function WhySkywaySection() {
  const items = [
    {
      title: "No empieza donde terminan los comparadores",
      text: "Un comparador normal te muestra opciones. Skyway busca ayudarte a decidir y a construir una guía más completa a partir de esas opciones.",
    },
    {
      title: "Explora incluso cuando no tienes destino",
      text: "Puedes partir de presupuesto, fechas o estilo de viaje. Eso lo hace más útil en fases tempranas, cuando todavía no sabes exactamente a dónde ir.",
    },
    {
      title: "Recomendaciones con sentido",
      text: "La propuesta del proyecto apuesta por recomendaciones explicables, para que el usuario entienda por qué un destino o una actividad encajan con su búsqueda.",
    },
    {
      title: "Guías reproducibles",
      text: "Los viajes guardados están pensados como snapshots, de modo que una guía guardada no dependa de que una API cambie mañana sus resultados.",
    },
  ];

  return (
    <section className="sky-panel p-6 md:p-10 space-y-6">
      <div className="space-y-3">
        <h2 className="sky-heading text-2xl md:text-3xl">¿Qué diferencia a Skyway?</h2>
        <p className="sky-muted max-w-4xl">
          Skyway no quiere quedarse en la búsqueda. La propuesta del proyecto combina exploración,
          organización e inteligencia contextual para que el usuario pase antes de la duda al plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="sky-card p-5 md:p-6">
            <h3 className="sky-heading text-lg">{item.title}</h3>
            <p className="mt-2 sky-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}