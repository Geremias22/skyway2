export default function HowItWorksSection() {
  const steps = [
    {
      n: "01",
      title: "Elige cómo quieres buscar",
      text: "Destino directo, inspiración, vibes o búsqueda visual según el modo disponible.",
    },
    {
      n: "02",
      title: "Skyway organiza opciones",
      text: "La plataforma toma la búsqueda como base y la convierte en una propuesta más clara y navegable.",
    },
    {
      n: "03",
      title: "Se genera un itinerario",
      text: "El viaje deja de ser una lista de resultados y pasa a tener estructura: días, bloques y recomendaciones.",
    },
    {
      n: "04",
      title: "Guarda y reutiliza tu guía",
      text: "Puedes conservar la propuesta como referencia para revisarla, compartirla o completarla más adelante.",
    },
  ];

  return (
    <section className="sky-panel p-6 md:p-10 space-y-6">
      <div className="space-y-3">
        <h2 className="sky-heading text-2xl md:text-3xl">Cómo funciona</h2>
        <p className="sky-muted max-w-4xl">
          La idea de Skyway es que el usuario no tenga que construir el viaje desde cero abriendo
          diez pestañas distintas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.n} className="sky-card p-5 md:p-6">
            <div className="sky-heading text-xl opacity-80">{step.n}</div>
            <h3 className="sky-heading mt-3 text-lg">{step.title}</h3>
            <p className="mt-2 sky-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}