"use client";

import { useState } from "react";

import ActionToolbar from "@/components/management/ActionToolbar";
import EmptyState from "@/components/management/EmptyState";
import PageHero from "@/components/management/PageHero";
import SectionHeader from "@/components/management/SectionHeader";
import useDebouncedValue from "@/components/management/useDebouncedValue";

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
  const debouncedSearchQuery = useDebouncedValue(searchQuery);
  const debouncedPriorityFilter = useDebouncedValue(priorityFilter);
  const isUpdating = searchQuery !== debouncedSearchQuery || priorityFilter !== debouncedPriorityFilter;

  const filteredRequests = requests.filter((request) => {
    const normalizedQuery = debouncedSearchQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      request.unit.toLowerCase().includes(normalizedQuery) ||
      request.tenant.toLowerCase().includes(normalizedQuery) ||
      request.issue.toLowerCase().includes(normalizedQuery);
    const matchesPriority = debouncedPriorityFilter === "Todas" || request.priority === debouncedPriorityFilter;

    return matchesQuery && matchesPriority;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setPriorityFilter("Todas");
  };

  return (
    <div className="space-y-6 text-stone-900">
      <PageHero
        eyebrow="Respuesta operativa"
        title="Solicitudes de mantenimiento"
        description="Panel de incidencias priorizadas para asignar técnicos, controlar SLA y no perder de vista ningún cierre."
        actionLabel="+ Nueva solicitud"
        metrics={maintenanceOverview}
      />

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-4 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Cola priorizada" title="Incidencias activas" />
        </div>
        <ActionToolbar
          resultSummary={`${filteredRequests.length} casos visibles · SLA medio: 28 min`}
          search={{
            id: "maintenance-search",
            label: "Buscar incidencia",
            placeholder: "Unidad, inquilino o incidencia",
            value: searchQuery,
            onChange: setSearchQuery,
          }}
          filter={{
            id: "maintenance-priority-filter",
            label: "Filtrar prioridad",
            value: priorityFilter,
            options: ["Todas", "Alta", "Media", "Baja"],
            onChange: setPriorityFilter,
          }}
          actions={["Exportar", "Asignar técnico"]}
          isUpdating={isUpdating}
        />

        {filteredRequests.length === 0 ? (
          <EmptyState
            title="Sin resultados para esta vista"
            description="Amplía el rango de prioridad o modifica la búsqueda para volver a mostrar solicitudes activas."
            actionLabel="Limpiar filtros"
            onAction={resetFilters}
          />
        ) : (
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
        )}
      </section>
    </div>
  );
}
