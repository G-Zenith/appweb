const stats = [
  { label: "Unidades totales", value: "48", bg: "bg-blue-50", text: "text-blue-700" },
  { label: "Ocupadas", value: "41", bg: "bg-green-50", text: "text-green-700" },
  { label: "Disponibles", value: "7", bg: "bg-yellow-50", text: "text-yellow-700" },
  { label: "Solicitudes abiertas", value: "5", bg: "bg-red-50", text: "text-red-700" },
];

const recentActivity = [
  { text: "Unidad 3B - Pago de alquiler recibido", time: "Hace 2 horas" },
  { text: "Unidad 12A - Solicitud de mantenimiento abierta", time: "Hace 5 horas" },
  { text: "Unidad 7C - Nuevo contrato de inquilino firmado", time: "Ayer" },
  { text: "Unidad 5D - Inspección completada", time: "Hace 2 días" },
];

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Panel principal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg ${stat.bg}`}></div>
            <div>
              <p className={`text-sm ${stat.text}`}>{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad reciente</h3>
        <ul className="divide-y divide-gray-100">
          {recentActivity.map((item, i) => (
            <li key={i} className="py-3 flex justify-between text-sm">
              <span className="text-gray-700">{item.text}</span>
              <span className="text-gray-400 ml-4 shrink-0">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
