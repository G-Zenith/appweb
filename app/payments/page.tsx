const payments = [
  { id: "INV-001", unit: "3B", tenant: "Maria Garcia", amount: "$1,200", type: "Alquiler", status: "Pagado", date: "2026-05-01" },
  { id: "INV-002", unit: "7A", tenant: "James Wilson", amount: "$950", type: "Alquiler", status: "Pagado", date: "2026-05-01" },
  { id: "INV-003", unit: "12C", tenant: "Sara Kim", amount: "$1,500", type: "Alquiler", status: "Vencido", date: "2026-05-01" },
  { id: "INV-004", unit: "5D", tenant: "Tom Brown", amount: "$1,350", type: "Alquiler", status: "Pendiente", date: "2026-05-15" },
  { id: "INV-005", unit: "2B", tenant: "Carlos Reyes", amount: "$200", type: "Mantenimiento", status: "Pagado", date: "2026-04-28" },
  { id: "INV-006", unit: "9C", tenant: "—", amount: "$450", type: "Reparación", status: "Pagado", date: "2026-04-20" },
];

const statusColors: Record<string, string> = {
  Pagado: "bg-green-100 text-green-700",
  Pendiente: "bg-yellow-100 text-yellow-700",
  Vencido: "bg-red-100 text-red-700",
};

export default function PaymentsPage() {
  const total = "$5,650";
  const collected = "$3,900";
  const outstanding = "$1,750";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Pagos y facturas</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Nueva factura
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total facturado", value: total, color: "text-gray-900" },
          { label: "Cobrado", value: collected, color: "text-green-600" },
          { label: "Pendiente", value: outstanding, color: "text-red-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Factura", "Unidad", "Inquilino", "Importe", "Tipo", "Estado", "Fecha"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-mono text-gray-500">{p.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{p.unit}</td>
                <td className="px-4 py-3 text-gray-600">{p.tenant}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{p.amount}</td>
                <td className="px-4 py-3 text-gray-600">{p.type}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
