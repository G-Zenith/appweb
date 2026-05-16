"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

const navGroups = [
  {
    title: "Explorar",
    items: [
      { href: "/", label: "Panel", code: "01", description: "Centro de control" },
      { href: "/tenants", label: "Inquilinos", code: "IQ", description: "Contratos y relaciones" },
      { href: "/units", label: "Unidades", code: "UN", description: "Mapa de inventario" },
    ],
  },
  {
    title: "Gestión",
    items: [
      { href: "/maintenance", label: "Mantenimiento", code: "MT", description: "Incidencias y visitas" },
      { href: "/payments", label: "Pagos", code: "PG", description: "Cobranza y facturación" },
    ],
  },
];

const sidebarSignals = [
  { label: "Cobranza", value: "91%" },
  { label: "Alertas", value: "05" },
];

export default function Sidebar({ className = "", onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`w-full shrink-0 rounded-[30px] border border-white/10 bg-stone-950 px-4 py-4 text-stone-50 shadow-[0_28px_90px_-40px_rgba(15,23,42,0.85)] lg:w-[320px] lg:px-5 lg:py-5 ${className}`.trim()}
    >
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 via-orange-300 to-orange-500 font-mono text-base font-semibold text-stone-950">
            NH
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">Panel operativo</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">NexoHabitat</h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-stone-300">
          Supervisión central de ocupación, mantenimiento y cobros con una lectura clara de lo urgente.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {sidebarSignals.map((signal) => (
            <div key={signal.label} className="rounded-[20px] border border-white/10 bg-black/20 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">{signal.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{signal.value}</p>
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Navegación principal" className="mt-6 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
              {group.title}
            </p>
            <div className="space-y-2">
              {group.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={onNavigate}
                    className={`group flex items-center gap-4 rounded-[22px] border px-3 py-3 transition-all ${
                      isActive
                        ? "border-white/5 bg-[color:var(--surface-strong)] text-stone-950 shadow-[0_20px_45px_-30px_rgba(249,115,22,0.75)]"
                        : "border-transparent bg-white/5 text-stone-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span
                      className={`grid size-11 place-items-center rounded-2xl font-mono text-xs font-medium ${
                        isActive
                          ? "bg-stone-950 text-white"
                          : "bg-white/10 text-stone-300 group-hover:bg-white/15 group-hover:text-white"
                      }`}
                    >
                      {item.code}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{item.label}</span>
                      <span
                        className={`mt-1 block text-xs ${
                          isActive ? "text-stone-500" : "text-stone-400 group-hover:text-stone-300"
                        }`}
                      >
                        {item.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="mt-6 rounded-[26px] border border-white/10 bg-gradient-to-br from-teal-400/20 via-cyan-300/5 to-transparent p-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">Lectura rápida</p>
        <p className="mt-3 text-lg font-semibold text-white">Semana estable, pero con presión en mantenimientos urgentes.</p>
        <p className="mt-3 text-sm leading-6 text-stone-300">
          Prioriza las solicitudes abiertas de la Torre Norte y revisa facturación extraordinaria antes del cierre semanal.
        </p>
      </div>
    </aside>
  );
}
