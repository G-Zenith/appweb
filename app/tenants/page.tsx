"use client";

import { useState } from "react";

import ActionToolbar from "@/components/management/ActionToolbar";
import EmptyState from "@/components/management/EmptyState";
import PageHero from "@/components/management/PageHero";
import SectionHeader from "@/components/management/SectionHeader";
import useDebouncedValue from "@/components/management/useDebouncedValue";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const debouncedSearchQuery = useDebouncedValue(searchQuery);
  const debouncedStatusFilter = useDebouncedValue(statusFilter);
  const isUpdating = searchQuery !== debouncedSearchQuery || statusFilter !== debouncedStatusFilter;

  const filteredTenants = tenants.filter((tenant) => {
    const normalizedQuery = debouncedSearchQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      tenant.name.toLowerCase().includes(normalizedQuery) ||
      tenant.unit.toLowerCase().includes(normalizedQuery) ||
      tenant.email.toLowerCase().includes(normalizedQuery);
    const matchesStatus = debouncedStatusFilter === "Todos" || tenant.status === debouncedStatusFilter;

    return matchesQuery && matchesStatus;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("Todos");
  };

  return (
    <div className="space-y-6 text-stone-900">
      <PageHero
        eyebrow="Relación con residentes"
        title="Inquilinos"
        description="Vista editorial para contratos activos, renovaciones próximas y seguimiento del vínculo con cada residente."
        actionLabel="+ Agregar inquilino"
        metrics={tenantOverview}
      />

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-4 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Cartera activa" title="Seguimiento por residente" />
        </div>
        <ActionToolbar
          resultSummary={`Mostrando ${filteredTenants.length} de ${tenants.length} perfiles`}
          search={{
            id: "tenant-search",
            label: "Buscar inquilino",
            placeholder: "Nombre, unidad o correo",
            value: searchQuery,
            onChange: setSearchQuery,
          }}
          filter={{
            id: "tenant-status-filter",
            label: "Filtrar estado",
            value: statusFilter,
            options: ["Todos", "Activo", "Por vencer"],
            onChange: setStatusFilter,
          }}
          actions={["Exportar", "Resumen"]}
          isUpdating={isUpdating}
        />

        {filteredTenants.length === 0 ? (
          <EmptyState
            title="Sin resultados para esta vista"
            description="Prueba con otro término de búsqueda o restablece los filtros para volver a ver la cartera completa."
            actionLabel="Limpiar filtros"
            onAction={resetFilters}
          />
        ) : (
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
                {filteredTenants.map((tenant) => (
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
        )}
      </section>
    </div>
  );
}
