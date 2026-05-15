const units = [
  { id: "1A", floor: 1, type: "Estudio", area: "45 m²", tenant: "—", status: "Disponible" },
  { id: "2B", floor: 2, type: "1 dormitorio", area: "60 m²", tenant: "Carlos Reyes", status: "Ocupada" },
  { id: "3B", floor: 3, type: "1 dormitorio", area: "60 m²", tenant: "Maria Garcia", status: "Ocupada" },
  { id: "5D", floor: 5, type: "2 dormitorios", area: "85 m²", tenant: "Tom Brown", status: "Ocupada" },
  { id: "7A", floor: 7, type: "Estudio", area: "45 m²", tenant: "James Wilson", status: "Ocupada" },
  { id: "9C", floor: 9, type: "2 dormitorios", area: "85 m²", tenant: "—", status: "Disponible" },
  { id: "12C", floor: 12, type: "3 dormitorios", area: "110 m²", tenant: "Sara Kim", status: "Ocupada" },
];

export default function UnitsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Unidades / Habitaciones</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          + Agregar unidad
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Unidad", "Piso", "Tipo", "Área", "Inquilino", "Estado"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {units.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{u.id}</td>
                <td className="px-4 py-3 text-gray-600">{u.floor}</td>
                <td className="px-4 py-3 text-gray-600">{u.type}</td>
                <td className="px-4 py-3 text-gray-600">{u.area}</td>
                <td className="px-4 py-3 text-gray-600">{u.tenant}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    u.status === "Ocupada" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                  }`}>
                    {u.status}
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
