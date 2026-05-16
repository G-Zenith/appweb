"use client";

import { useState } from "react";

const requests = [
  { id: 1, unit: "12A", tenant: "John Doe", issue: "Grifo con fuga en la cocina", priority: "Alta", status: "Abierta", date: "2026-05-14" },
  { id: 2, unit: "3B", tenant: "Maria Garcia", issue: "Pestillo de ventana roto", priority: "Media", status: "En progreso", date: "2026-05-12" },
  { id: 3, unit: "7A", tenant: "James Wilson", issue: "El aire acondicionado no enfría bien", priority: "Alta", status: "Abierta", date: "2026-05-13" },
  { id: 4, unit: "5D", tenant: "Tom Brown", issue: "Reemplazo de bombilla en el pasillo", priority: "Baja", status: "Resuelta", date: "2026-05-10" },
  { id: 5, unit: "9C", tenant: "—", issue: "Se necesita retoque de pintura", priority: "Baja", status: "Resuelta", date: "2026-05-08" },
];

const maintenanceOverview = [
  { label: "Abiertas", value: "02", detail: "Requieren asignación inmediata", tone: "accent" },
  { label: "En progreso", value: "01", detail: "Visita técnica confirmada", tone: "light" },
  { label: "Resueltas", value: "02", detail: "Cierre con seguimiento", tone: "dark" },
];

const priorityColors: Record<string, string> = {
  Alta: "bg-rose-500/10 text-rose-700",
  Media: "bg-amber-400/15 text-amber-700",
  Baja: "bg-stone-900/10 text-stone-700",
};

const statusColors: Record<string, string> = {
  Abierta: "bg-rose-500/10 text-rose-700",
  "En progreso": "bg-sky-500/10 text-sky-700",
  Resuelta: "bg-emerald-500/10 text-emerald-700",
};

export default function MaintenancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("Todas");

  const filteredRequests = requests.filter((request) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      request.unit.toLowerCase().includes(normalizedQuery) ||
      request.tenant.toLowerCase().includes(normalizedQuery) ||
      request.issue.toLowerCase().includes(normalizedQuery);
    const matchesPriority = priorityFilter === "Todas" || request.priority === priorityFilter;

    return matchesQuery && matchesPriority;
  });

  return (
    <div className="space-y-6 text-stone-900">
      <section className="rounded-[30px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.92),rgba(255,255,255,0.6))] p-6 shadow-[0_24px_90px_-46px_rgba(24,21,17,0.45)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">Respuesta operativa</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">Solicitudes de mantenimiento</h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Panel de incidencias priorizadas para asignar técnicos, controlar SLA y no perder de vista ningún cierre.
            </p>
          </div>
          <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            + Nueva solicitud
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {maintenanceOverview.map((item) => (
            <article
              key={item.label}
              className={`rounded-[26px] border p-5 ${
                item.tone === "dark"
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : item.tone === "accent"
                    ? "border-rose-500/15 bg-rose-500/10 text-stone-900"
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
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">Cola priorizada</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Incidencias activas</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
            {filteredRequests.length} casos visibles · SLA medio: 28 min
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-[26px] border border-stone-900/10 bg-white/70 p-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(220px,0.7fr)]">
            <div className="space-y-2">
              <label htmlFor="maintenance-search" className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Buscar incidencia
              </label>
              <input
                id="maintenance-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Unidad, inquilino o incidencia"
                className="w-full rounded-2xl border border-stone-900/10 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-950/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="maintenance-priority-filter" className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                Filtrar prioridad
              </label>
              <select
                id="maintenance-priority-filter"
                value={priorityFilter}
                onChange={(event) => setPriorityFilter(event.target.value)}
                className="w-full rounded-2xl border border-stone-900/10 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-950/30"
              >
                {["Todas", "Alta", "Media", "Baja"].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-stone-900/10 bg-white px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-stone-600 transition hover:-translate-y-0.5 hover:text-stone-950">
              Exportar
            </button>
            <button className="rounded-full bg-stone-950 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5">
              Asignar técnico
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-stone-900/10 text-left text-[11px] uppercase tracking-[0.22em] text-stone-500">
                {["Caso", "Unidad", "Incidencia", "Prioridad", "Estado", "Fecha"].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-medium first:pl-0 last:pr-0">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="transition-colors hover:bg-white/55">
                  <td className="px-4 py-4 text-stone-400 first:pl-0">#{request.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-stone-950">{request.unit}</p>
                    <p className="mt-1 text-xs text-stone-500">{request.tenant}</p>
                  </td>
                  <td className="px-4 py-4 text-stone-700">{request.issue}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${priorityColors[request.priority]}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[request.status]}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 pr-0 text-stone-500">{request.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
