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

  return (
    <div className="space-y-6 text-stone-900">
      <section className="rounded-[30px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.92),rgba(255,255,255,0.6))] p-6 shadow-[0_24px_90px_-46px_rgba(24,21,17,0.45)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">Pulso financiero</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">Pagos y facturas</h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Visión más clara de cobros, vencimientos y facturación extraordinaria para tomar decisiones sin cambiar de contexto.
            </p>
          </div>
          <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            + Nueva factura
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { label: "Total facturado", value: total, detail: "Corte mensual", tone: "dark" },
            { label: "Cobrado", value: collected, detail: "91% del objetivo", tone: "light" },
            { label: "Pendiente", value: outstanding, detail: "Revisión prioritaria", tone: "accent" },
          ].map((item) => (
            <article
              key={item.label}
              className={`rounded-[26px] border p-5 ${
                item.tone === "dark"
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : item.tone === "accent"
                    ? "border-amber-400/15 bg-amber-300/10 text-stone-900"
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
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">Movimiento reciente</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Facturación en seguimiento</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
            2 casos requieren atención
          </span>
        </div>

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
              {payments.map((payment) => (
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
