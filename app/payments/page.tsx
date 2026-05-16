"use client";

import { useState } from "react";

import ActionToolbar from "@/components/management/ActionToolbar";
import PageHero from "@/components/management/PageHero";
import SectionHeader from "@/components/management/SectionHeader";

const payments = [
  { id: "INV-001", unit: "3B", tenant: "Maria Garcia", amount: "$1,200", type: "Alquiler", status: "Pagado", date: "2026-05-01" },
  { id: "INV-002", unit: "7A", tenant: "James Wilson", amount: "$950", type: "Alquiler", status: "Pagado", date: "2026-05-01" },
  { id: "INV-003", unit: "12C", tenant: "Sara Kim", amount: "$1,500", type: "Alquiler", status: "Vencido", date: "2026-05-01" },
  { id: "INV-004", unit: "5D", tenant: "Tom Brown", amount: "$1,350", type: "Alquiler", status: "Pendiente", date: "2026-05-15" },
  { id: "INV-005", unit: "2B", tenant: "Carlos Reyes", amount: "$200", type: "Mantenimiento", status: "Pagado", date: "2026-04-28" },
  { id: "INV-006", unit: "9C", tenant: "—", amount: "$450", type: "Reparación", status: "Pagado", date: "2026-04-20" },
];

const statusColors: Record<string, string> = {
  Pagado: "bg-emerald-500/10 text-emerald-700",
  Pendiente: "bg-amber-400/15 text-amber-700",
  Vencido: "bg-rose-500/10 text-rose-700",
};

export default function PaymentsPage() {
  const total = "$5,650";
  const collected = "$3,900";
  const outstanding = "$1,750";
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filteredPayments = payments.filter((payment) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      payment.id.toLowerCase().includes(normalizedQuery) ||
      payment.unit.toLowerCase().includes(normalizedQuery) ||
      payment.tenant.toLowerCase().includes(normalizedQuery) ||
      payment.type.toLowerCase().includes(normalizedQuery);
    const matchesStatus = statusFilter === "Todos" || payment.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  return (
    <div className="space-y-6 text-stone-900">
      <PageHero
        eyebrow="Pulso financiero"
        title="Pagos y facturas"
        description="Visión más clara de cobros, vencimientos y facturación extraordinaria para tomar decisiones sin cambiar de contexto."
        actionLabel="+ Nueva factura"
        metrics={[
          { label: "Total facturado", value: total, detail: "Corte mensual", tone: "dark" },
          { label: "Cobrado", value: collected, detail: "91% del objetivo", tone: "light" },
          { label: "Pendiente", value: outstanding, detail: "Revisión prioritaria", tone: "accent" },
        ]}
      />

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-4 backdrop-blur sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Movimiento reciente" title="Facturación en seguimiento" />
        </div>
        <ActionToolbar
          resultSummary={`Mostrando ${filteredPayments.length} de ${payments.length} movimientos`}
          search={{
            id: "payment-search",
            label: "Buscar factura",
            placeholder: "Factura, unidad, inquilino o tipo",
            value: searchQuery,
            onChange: setSearchQuery,
          }}
          filter={{
            id: "payment-status-filter",
            label: "Filtrar estado de facturas",
            value: statusFilter,
            options: ["Todos", "Pagado", "Pendiente", "Vencido"],
            onChange: setStatusFilter,
          }}
          actions={["Exportar", "Cobro masivo"]}
        />

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-stone-900/10 text-left text-[11px] uppercase tracking-[0.22em] text-stone-500">
                {["Factura", "Unidad", "Inquilino", "Importe", "Tipo", "Estado", "Fecha"].map((heading) => (
                  <th key={heading} className="px-4 py-4 font-medium first:pl-0 last:pr-0">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="transition-colors hover:bg-white/55">
                  <td className="px-4 py-4 font-mono text-stone-500 first:pl-0">{payment.id}</td>
                  <td className="px-4 py-4 font-medium text-stone-950">{payment.unit}</td>
                  <td className="px-4 py-4 text-stone-600">{payment.tenant}</td>
                  <td className="px-4 py-4 font-medium text-stone-900">{payment.amount}</td>
                  <td className="px-4 py-4 text-stone-600">{payment.type}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[payment.status]}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 pr-0 text-stone-500">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
