export default function InfoSection() {
  return (
    <section className="sky-panel p-6 md:p-10 space-y-10">
      <div className="space-y-3">
        <h2 className="sky-heading text-2xl">¿Qué puede hacer skyway?</h2>
        <p className="sky-muted max-w-3xl">
          Genera itinerarios y te propone opciones (vuelos, hoteles, actividades y coches)
          a partir de lo que indiques en la búsqueda.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="sky-heading text-xl">Tipos de búsquedas</h3>
        <ul className="space-y-3 sky-muted">
          <li>• ¿Sabes dónde vas a ir? (búsqueda directa)</li>
          <li>• ¿No sabes dónde ir? (inspiración según fechas y preferencias)</li>
          <li>• Búsqueda por foto (idea visual / destino)</li>
        </ul>
      </div>
    </section>
  );
}