import { Button } from "@heroui/react";

export default function SearchPanel({
  mode,
  onModeChange,
  values,
  onChange,
  onSubmit,
}) {
  const tabs = [
    { key: "oneway", label: "Solo ida" },
    { key: "roundtrip", label: "Ida y vuelta" },
    { key: "inspire", label: "¿No sabes dónde ir?" },
    { key: "photo", label: "Búsqueda por foto" },
  ];

  return (
    <section className="sky-hero">
      <div className="sky-hero-inner">
        <div className="sky-panel p-6 md:p-10">
          <div className="text-center">
            <h1 className="sky-logo">skyway</h1>
            <p className="sky-subtitle">
              Itinerarios con vuelos, hoteles y actividades en un solo flujo.
            </p>
          </div>

          <div className="sky-chiprow">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={["sky-chip", mode === t.key ? "is-active" : ""].join(" ")}
                onClick={() => onModeChange(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6 sky-card p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-3">
                <label className="text-xs sky-muted">De dónde sales</label>
                <input
                  name="from"
                  value={values.from}
                  onChange={onChange}
                  className="mt-1 sky-input"
                  placeholder="Barcelona (BCN)"
                />
              </div>

              <div className="md:col-span-3">
                <label className="text-xs sky-muted">A dónde vas</label>
                <input
                  name="to"
                  value={values.to}
                  onChange={onChange}
                  className="mt-1 sky-input"
                  placeholder="Roma (FCO)"
                />
              </div>

              <div className={mode === "roundtrip" ? "md:col-span-2" : "md:col-span-3"}>
                <label className="text-xs sky-muted">Fecha ida</label>
                <input
                  name="dateOut"
                  value={values.dateOut}
                  onChange={onChange}
                  type="date"
                  className="mt-1 sky-input"
                />
              </div>

              {mode === "roundtrip" && (
                <div className="md:col-span-2">
                  <label className="text-xs sky-muted">Fecha vuelta</label>
                  <input
                    name="dateIn"
                    value={values.dateIn}
                    onChange={onChange}
                    type="date"
                    className="mt-1 sky-input"
                  />
                </div>
              )}

              <div className="md:col-span-1">
                <label className="text-xs sky-muted">Personas</label>
                <input
                  name="people"
                  value={values.people}
                  onChange={onChange}
                  type="number"
                  min={1}
                  className="mt-1 sky-input"
                />
              </div>

              <div className={mode === "roundtrip" ? "md:col-span-1 flex md:justify-end" : "md:col-span-2 flex md:justify-end"}>
                <Button onPress={onSubmit} className="w-full md:w-auto sky-btn">
                  Buscar
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="sky-heading text-lg md:text-xl hover:opacity-90 transition">
              Ver viajes más buscados
            </button>
            <div className="mt-4 sky-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}