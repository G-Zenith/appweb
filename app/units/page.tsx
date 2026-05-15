const units = [
  { id: "1A", floor: 1, type: "Estudio", area: "45 m²", tenant: "—", status: "Disponible" },
  { id: "2B", floor: 2, type: "1 dormitorio", area: "60 m²", tenant: "Carlos Reyes", status: "Ocupada" },
  { id: "3B", floor: 3, type: "1 dormitorio", area: "60 m²", tenant: "Maria Garcia", status: "Ocupada" },
  { id: "5D", floor: 5, type: "2 dormitorios", area: "85 m²", tenant: "Tom Brown", status: "Ocupada" },
  { id: "7A", floor: 7, type: "Estudio", area: "45 m²", tenant: "James Wilson", status: "Ocupada" },
  { id: "9C", floor: 9, type: "2 dormitorios", area: "85 m²", tenant: "—", status: "Disponible" },
  { id: "12C", floor: 12, type: "3 dormitorios", area: "110 m²", tenant: "Sara Kim", status: "Ocupada" },
];

const inventoryOverview = [
  { label: "Ocupadas", value: "41", detail: "85% del inventario", tone: "dark" },
  { label: "Disponibles", value: "07", detail: "Listas para comercialización", tone: "light" },
  { label: "Espacio medio", value: "68 m²", detail: "Mix equilibrado", tone: "accent" },
];

const statusColors: Record<string, string> = {
  Ocupada: "bg-emerald-500/10 text-emerald-700",
  Disponible: "bg-stone-900/10 text-stone-700",
};

export default function UnitsPage() {
  return (
    <div className="space-y-6 text-stone-900">
      <section className="rounded-[30px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.92),rgba(255,255,255,0.6))] p-6 shadow-[0_24px_90px_-46px_rgba(24,21,17,0.45)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">Inventario espacial</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">Unidades y habitaciones</h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Lectura rápida del inventario, ocupación por nivel y composición del portafolio residencial.
            </p>
          </div>
          <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            + Agregar unidad
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {inventoryOverview.map((item) => (
            <article
              key={item.label}
              className={`rounded-[26px] border p-5 ${
                item.tone === "dark"
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : item.tone === "accent"
                    ? "border-teal-500/15 bg-teal-500/10 text-stone-900"
                    : "border-stone-900/10 bg-white/80 text-stone-900"
              }`}
            >
              <p className={`text-sm ${item.tone === "dark" ? "text-stone-300" : "text-stone-500"}`}>{item.label}</p>
              <p className="mt-5 text-4xl font-semibold tracking-tight">{item.value}</p>
              <p className={`mt-3 text-sm ${item.tone === "dark" ? "text-stone-300" : "text-stone-600"}`}>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-4 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">Mapa del portafolio</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Inventario por unidad</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
            7 unidades visibles
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-stone-900/10 text-left text-[11px] uppercase tracking-[0.22em] text-stone-500">
                {["Unidad", "Piso", "Configuración", "Superficie", "Ocupación"].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-medium first:pl-0 last:pr-0">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10">
              {units.map((unit) => (
                <tr key={unit.id} className="transition-colors hover:bg-white/55">
                  <td className="px-4 py-4 font-medium text-stone-950 first:pl-0">{unit.id}</td>
                  <td className="px-4 py-4 text-stone-600">{unit.floor}</td>
                  <td className="px-4 py-4 text-stone-700">{unit.type}</td>
                  <td className="px-4 py-4 text-stone-600">{unit.area}</td>
                  <td className="px-4 py-4 pr-0">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statusColors[unit.status]}`}>
                        {unit.status}
                      </span>
                      <span className="text-sm text-stone-500">{unit.tenant}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
