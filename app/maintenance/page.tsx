const requests = [
  { id: 1, unit: "12A", tenant: "John Doe", issue: "Grifo con fuga en la cocina", priority: "Alta", status: "Abierta", date: "2026-05-14" },
  { id: 2, unit: "3B", tenant: "Maria Garcia", issue: "Pestillo de ventana roto", priority: "Media", status: "En progreso", date: "2026-05-12" },
  { id: 3, unit: "7A", tenant: "James Wilson", issue: "El aire acondicionado no enfría bien", priority: "Alta", status: "Abierta", date: "2026-05-13" },
  { id: 4, unit: "5D", tenant: "Tom Brown", issue: "Reemplazo de bombilla en el pasillo", priority: "Baja", status: "Resuelta", date: "2026-05-10" },
  { id: 5, unit: "9C", tenant: "—", issue: "Se necesita retoque de pintura", priority: "Baja", status: "Resuelta", date: "2026-05-08" },
];

const priorityColors: Record<string, string> = {
  Alta: "bg-red-100 text-red-700",
  Media: "bg-yellow-100 text-yellow-700",
  Baja: "bg-gray-100 text-gray-600",
};

const statusColors: Record<string, string> = {
  Abierta: "bg-red-50 text-red-600",
  "En progreso": "bg-blue-50 text-blue-600",
  Resuelta: "bg-green-50 text-green-600",
};

export default function MaintenancePage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Solicitudes de mantenimiento</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Nueva solicitud
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["#", "Unidad", "Inquilino", "Incidencia", "Prioridad", "Estado", "Fecha"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-400">{r.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{r.unit}</td>
                <td className="px-4 py-3 text-gray-600">{r.tenant}</td>
                <td className="px-4 py-3 text-gray-700">{r.issue}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[r.priority]}`}>
                    {r.priority}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
