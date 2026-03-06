export default function InfoSection() {
  const features = [
    {
      title: "Planifica aunque no tengas claro el destino",
      text: "Skyway no parte solo de un lugar fijo. También puede ayudarte a explorar opciones según fechas, presupuesto y estilo de viaje.",
    },
    {
      title: "Itinerarios explicados, no solo listados",
      text: "Cada propuesta está pensada para convertirse en una guía de viaje entendible: qué hacer, en qué orden y por qué encaja contigo.",
    },
    {
      title: "Todo el viaje en un mismo flujo",
      text: "Vuelos, hoteles, actividades, coches y recomendaciones organizadas dentro del mismo itinerario para evitar saltar entre distintas webs.",
    },
    {
      title: "Guías guardables y compartibles",
      text: "Los viajes generados pueden guardarse como guía para revisarlos más tarde, reutilizarlos o compartirlos con otras personas.",
    },
    {
      title: "Modo inspiración",
      text: "Si no sabes dónde ir, puedes descubrir destinos en función del presupuesto, las fechas disponibles o el tipo de experiencia que buscas.",
    },
    {
      title: "Evolución hacia búsqueda visual",
      text: "Skyway está pensado para crecer hacia búsquedas por imagen: partir de una foto o una idea visual y proponer destinos similares.",
    },
  ];

  const searchTypes = [
    {
      title: "¿Sabes dónde vas?",
      text: "Haz una búsqueda directa introduciendo origen, destino, fechas y número de personas para obtener una base clara desde la que construir tu viaje.",
    },
    {
      title: "¿No sabes dónde ir?",
      text: "Explora destinos recomendados según tus fechas, presupuesto y preferencias. Ideal para viajes improvisados o cuando buscas inspiración real.",
    },
    {
      title: "Por vibes o estilo",
      text: "Busca experiencias como city break, playa, aventura, gastronomía o escapadas culturales, en lugar de limitarte a un destino concreto.",
    },
    {
      title: "Búsqueda por foto",
      text: "Una línea futura del proyecto: usar una imagen para detectar un lugar o una atmósfera y sugerir destinos parecidos.",
    },
  ];

  return (
    <section className="sky-panel p-6 md:p-10 space-y-10">
      <div className="space-y-4">
        <h2 className="sky-heading text-2xl md:text-3xl">¿Qué puede hacer Skyway?</h2>
        <p className="sky-muted max-w-4xl">
          Skyway es un planificador de viajes inteligente pensado para algo más que buscar vuelos.
          Te ayuda a descubrir destinos, comparar posibilidades y convertir una búsqueda en un
          itinerario más claro, útil y explicable.
        </p>
        <p className="sky-muted max-w-4xl">
          La idea es que puedas empezar desde una intención muy concreta o desde una duda abierta:
          “quiero ir a Roma”, “quiero escaparme con poco presupuesto”, “quiero playa”, o incluso
          “quiero algo parecido a esta foto”. Desde ahí, la plataforma organiza propuestas y las
          transforma en una guía de viaje más completa.
        </p>
      </div>

      <div className="sky-feature-grid">
        {features.map((item) => (
          <div key={item.title} className="sky-card sky-feature">
            <div className="sky-feature-title">{item.title}</div>
            <div className="sky-feature-text">{item.text}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="sky-heading text-xl md:text-2xl">Tipos de búsqueda</h3>
        <p className="sky-muted max-w-4xl">
          La búsqueda en Skyway está pensada para distintos momentos del usuario: desde quien ya
          tiene destino decidido hasta quien solo sabe que quiere viajar y necesita una propuesta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {searchTypes.map((item) => (
            <div key={item.title} className="sky-card p-5">
              <h4 className="sky-heading text-base md:text-lg">{item.title}</h4>
              <p className="mt-2 sky-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="sky-heading text-xl md:text-2xl">¿Para quién sirve?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="sky-card p-5">
            <h4 className="sky-heading text-base md:text-lg">Viajeros indecisos</h4>
            <p className="mt-2 sky-muted">
              Para quien tiene ganas de viajar pero aún no tiene claro el destino, las fechas ideales
              o el tipo exacto de plan.
            </p>
          </div>

          <div className="sky-card p-5">
            <h4 className="sky-heading text-base md:text-lg">Usuarios que quieren ahorrar tiempo</h4>
            <p className="mt-2 sky-muted">
              En vez de mirar por separado vuelos, hoteles, actividades y notas, lo tienen reunido
              dentro de una misma propuesta.
            </p>
          </div>

          <div className="sky-card p-5">
            <h4 className="sky-heading text-base md:text-lg">Personas que quieren contexto</h4>
            <p className="mt-2 sky-muted">
              No solo ver opciones, sino entender por qué una recomendación puede encajar con su
              presupuesto, intereses o estilo de viaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}