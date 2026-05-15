const tenants = [
  { id: 1, name: "Maria Garcia", unit: "3B", email: "maria@example.com", phone: "555-0101", lease: "Ene 2024 - Ene 2025", status: "Activo" },
  { id: 2, name: "James Wilson", unit: "7A", email: "james@example.com", phone: "555-0102", lease: "Mar 2024 - Mar 2025", status: "Activo" },
  { id: 3, name: "Sara Kim", unit: "12C", email: "sara@example.com", phone: "555-0103", lease: "Jun 2023 - Jun 2024", status: "Por vencer" },
  { id: 4, name: "Tom Brown", unit: "5D", email: "tom@example.com", phone: "555-0104", lease: "Feb 2024 - Feb 2025", status: "Activo" },
];

export default function TenantsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Inquilinos</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Agregar inquilino
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Nombre", "Unidad", "Correo", "Teléfono", "Período de contrato", "Estado"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tenants.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                <td className="px-4 py-3 text-gray-600">{t.unit}</td>
                <td className="px-4 py-3 text-gray-600">{t.email}</td>
                <td className="px-4 py-3 text-gray-600">{t.phone}</td>
                <td className="px-4 py-3 text-gray-600">{t.lease}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    t.status === "Activo" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
