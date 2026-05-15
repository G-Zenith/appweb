const tenants = [
  { id: 1, name: "Maria Garcia", initials: "MG", unit: "3B", email: "maria@example.com", phone: "555-0101", lease: "Ene 2024 - Ene 2025", status: "Activo" },
  { id: 2, name: "James Wilson", initials: "JW", unit: "7A", email: "james@example.com", phone: "555-0102", lease: "Mar 2024 - Mar 2025", status: "Activo" },
  { id: 3, name: "Sara Kim", initials: "SK", unit: "12C", email: "sara@example.com", phone: "555-0103", lease: "Jun 2023 - Jun 2024", status: "Por vencer" },
  { id: 4, name: "Tom Brown", initials: "TB", unit: "5D", email: "tom@example.com", phone: "555-0104", lease: "Feb 2024 - Feb 2025", status: "Activo" },
];

const tenantOverview = [
  { label: "Activos", value: "36", detail: "Cartera estable", tone: "dark" },
  { label: "Por vencer", value: "04", detail: "Renovar esta semana", tone: "accent" },
  { label: "Nuevos ingresos", value: "02", detail: "Últimos 30 días", tone: "light" },
];

const statusColors: Record<string, string> = {
  Activo: "bg-emerald-500/10 text-emerald-700",
  "Por vencer": "bg-amber-400/15 text-amber-700",
};

export default function TenantsPage() {
  return (
    <div className="space-y-6 text-stone-900">
      <section className="rounded-[30px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.92),rgba(255,255,255,0.6))] p-6 shadow-[0_24px_90px_-46px_rgba(24,21,17,0.45)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">Relación con residentes</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">Inquilinos</h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Vista editorial para contratos activos, renovaciones próximas y seguimiento del vínculo con cada residente.
            </p>
          </div>
          <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            + Agregar inquilino
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tenantOverview.map((item) => (
            <article
              key={item.label}
              className={`rounded-[26px] border p-5 ${
                item.tone === "dark"
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : item.tone === "accent"
                    ? "border-amber-400/20 bg-amber-300/10 text-stone-900"
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
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">Cartera activa</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Seguimiento por residente</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
            4 perfiles destacados
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-stone-900/10 text-left text-[11px] uppercase tracking-[0.22em] text-stone-500">
                {["Residente", "Unidad", "Contacto", "Contrato", "Estado"].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-medium first:pl-0 last:pr-0">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10">
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="transition-colors hover:bg-white/55">
                  <td className="px-4 py-4 first:pl-0">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl bg-stone-950 text-sm font-medium text-white">
                        {tenant.initials}
                      </div>
                      <div>
                        <p className="font-medium text-stone-950">{tenant.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-400">Perfil activo</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-stone-700">{tenant.unit}</td>
                  <td className="px-4 py-4">
                    <p className="text-stone-700">{tenant.email}</p>
                    <p className="mt-1 text-xs text-stone-500">{tenant.phone}</p>
                  </td>
                  <td className="px-4 py-4 text-stone-600">{tenant.lease}</td>
                  <td className="px-4 py-4 pr-0">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[tenant.status]}`}>
                      {tenant.status}
                    </span>
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
