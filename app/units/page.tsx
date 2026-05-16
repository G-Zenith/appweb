"use client";

import { useState } from "react";

import ActionToolbar from "@/components/management/ActionToolbar";
import PageHero from "@/components/management/PageHero";
import SectionHeader from "@/components/management/SectionHeader";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todas");

  const filteredUnits = units.filter((unit) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      unit.id.toLowerCase().includes(normalizedQuery) ||
      unit.type.toLowerCase().includes(normalizedQuery) ||
      unit.tenant.toLowerCase().includes(normalizedQuery);
    const matchesStatus = statusFilter === "Todas" || unit.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  return (
    <div className="space-y-6 text-stone-900">
      <PageHero
        eyebrow="Inventario espacial"
        title="Unidades y habitaciones"
        description="Lectura rápida del inventario, ocupación por nivel y composición del portafolio residencial."
        actionLabel="+ Agregar unidad"
        metrics={inventoryOverview}
      />

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-4 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Mapa del portafolio" title="Inventario por unidad" />
        </div>
        <ActionToolbar
          resultSummary={`Mostrando ${filteredUnits.length} de ${units.length} unidades`}
          search={{
            id: "unit-search",
            label: "Buscar unidad",
            placeholder: "Código, tipología o inquilino",
            value: searchQuery,
            onChange: setSearchQuery,
          }}
          filter={{
            id: "unit-status-filter",
            label: "Filtrar estado de unidades",
            value: statusFilter,
            options: ["Todas", "Ocupada", "Disponible"],
            onChange: setStatusFilter,
          }}
          actions={[
            { label: "Mapa", tone: "light" },
            { label: "Exportar", tone: "dark" },
          ]}
        />

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
              {filteredUnits.map((unit) => (
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
