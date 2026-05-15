const pulseMetrics = [
  {
    label: "Ocupación actual",
    value: "85%",
    note: "+4 pts sobre abril",
    accent: "from-amber-400/30 to-orange-400/5",
    dot: "bg-amber-500",
  },
  {
    label: "Cobranza neta",
    value: "$124k",
    note: "91% del objetivo mensual",
    accent: "from-teal-400/30 to-emerald-400/5",
    dot: "bg-teal-500",
  },
  {
    label: "Solicitudes urgentes",
    value: "03",
    note: "Tiempo medio de respuesta: 28 min",
    accent: "from-rose-400/30 to-orange-300/5",
    dot: "bg-rose-500",
  },
];

const radarItems = [
  { label: "Torre Norte", value: "97%", width: "w-[97%]", tone: "bg-teal-500" },
  { label: "Torre Jardín", value: "88%", width: "w-[88%]", tone: "bg-amber-500" },
  { label: "Residencias Loft", value: "76%", width: "w-[76%]", tone: "bg-orange-500" },
];

const quickActions = [
  {
    title: "Comunicado express",
    detail: "Enviar una actualización clara a residentes y personal operativo.",
    tone: "dark",
  },
  {
    title: "Programar recorrido",
    detail: "Coordinar inspecciones o visitas técnicas sin salir del panel.",
    tone: "light",
  },
  {
    title: "Emitir factura",
    detail: "Generar cobros extraordinarios, reparaciones o ajustes de mes.",
    tone: "light",
  },
];

const criticalQueue = [
  { title: "Fuga en ascensor de servicio", meta: "Torre Norte · hace 18 min", status: "Urgente" },
  { title: "Contrato por renovar en Unidad 12C", meta: "Bloque Central · vence en 4 días", status: "Seguimiento" },
  { title: "Factura extraordinaria pendiente", meta: "Unidad 5D · revisión contable", status: "Finanzas" },
];

const recentActivity = [
  { text: "Cobro confirmado para Unidad 3B", time: "Hace 12 min" },
  { text: "Se asignó técnico a solicitud de Unidad 7A", time: "Hace 35 min" },
  { text: "Nuevo contrato revisado por administración", time: "Hace 2 horas" },
  { text: "Inventario actualizado tras inspección mensual", time: "Ayer" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 text-stone-900">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="rounded-[34px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.94),rgba(255,255,255,0.64))] p-6 shadow-[0_28px_100px_-42px_rgba(24,21,17,0.45)] sm:p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">Panorama en vivo</p>
                <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                  Centro de operaciones
                </h1>
                <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                  Un tablero diseñado para leer la presión del edificio en segundos: ocupación, mantenimientos, contratos y cobranza en una sola vista.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:max-w-sm">
                <div className="rounded-[24px] border border-stone-900/10 bg-stone-950 p-4 text-stone-50">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">Señal del día</p>
                  <p className="mt-3 text-3xl font-semibold">Estable</p>
                  <p className="mt-2 text-sm text-stone-300">Sin incidencias masivas ni caídas de cobranza.</p>
                </div>
                <div className="rounded-[24px] border border-stone-900/10 bg-[color:var(--surface-strong)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">Ventana crítica</p>
                  <p className="mt-3 text-3xl font-semibold text-stone-950">18:00</p>
                  <p className="mt-2 text-sm text-stone-500">Cierre operativo de seguimiento y facturación.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
                Crear comunicado
              </button>
              <button className="rounded-full border border-stone-900/10 bg-white/75 px-5 py-3 text-sm font-medium text-stone-700 transition-transform hover:-translate-y-0.5">
                Programar recorrido
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pulseMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className={`rounded-[28px] border border-stone-900/10 bg-gradient-to-br ${metric.accent} p-5`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-stone-700">{metric.label}</p>
                    <span className={`size-3 rounded-full ${metric.dot}`} />
                  </div>
                  <p className="mt-6 text-4xl font-semibold tracking-tight text-stone-950">{metric.value}</p>
                  <p className="mt-3 text-sm text-stone-600">{metric.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-6 shadow-[0_24px_70px_-42px_rgba(24,21,17,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Señal territorial</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Radar operativo</h2>
              </div>
              <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700">Actualizado</span>
            </div>
            <div className="mt-6 space-y-5">
              {radarItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-stone-600">
                    <span>{item.label}</span>
                    <span className="font-medium text-stone-900">{item.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-stone-900/10">
                    <div className={`h-full rounded-full ${item.width} ${item.tone}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_70px_-42px_rgba(24,21,17,0.7)]">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Pulso financiero</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Cobranza del mes</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div>
                <p className="text-sm text-stone-400">Monto cobrado</p>
                <p className="mt-2 text-3xl font-semibold">$3,900</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Pendiente crítico</p>
                <p className="mt-2 text-3xl font-semibold text-amber-300">$1,750</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Tendencia</p>
                <p className="mt-2 text-lg font-medium text-stone-200">Ritmo positivo con 2 facturas por revisar.</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-6 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Acciones rápidas</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Acciones rápidas</h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">3 flujos sugeridos</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <button
                key={action.title}
                className={`rounded-[26px] border p-5 text-left transition-transform hover:-translate-y-1 ${
                  action.tone === "dark"
                    ? "border-stone-950 bg-stone-950 text-stone-50"
                    : "border-stone-900/10 bg-white/80 text-stone-900"
                }`}
              >
                <p className="text-lg font-medium">{action.title}</p>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    action.tone === "dark" ? "text-stone-300" : "text-stone-600"
                  }`}
                >
                  {action.detail}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Agenda crítica</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Qué necesita atención hoy</h2>
          <div className="mt-6 space-y-4">
            {criticalQueue.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-stone-900/10 bg-white/80 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-base font-medium text-stone-950">{item.title}</h3>
                  <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-medium text-stone-50">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-stone-500">{item.meta}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="rounded-[30px] border border-stone-900/10 bg-[color:var(--surface)] p-6 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Actividad reciente</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">Actividad reciente</h2>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">Últimos eventos</span>
        </div>
        <div className="mt-6 grid gap-3">
          {recentActivity.map((item) => (
            <div
              key={item.text}
              className="flex flex-col gap-2 rounded-[24px] border border-stone-900/10 bg-white/75 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm text-stone-700 sm:text-base">{item.text}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-400">{item.time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
