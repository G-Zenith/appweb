"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileNavOpen]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_top_left,rgba(13,148,136,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(194,103,48,0.18),transparent_28%),linear-gradient(180deg,#f7f0e5_0%,#efe5d4_100%)]" />

      {isMobileNavOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar fondo de navegación"
            className="absolute inset-0 bg-stone-950/55 backdrop-blur-[2px]"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navegación principal"
            className="absolute inset-y-4 left-4 w-[min(88vw,360px)]"
          >
            <div className="absolute right-5 top-5 z-10">
              <button
                type="button"
                aria-label="Cerrar navegación"
                onClick={() => setIsMobileNavOpen(false)}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/35"
              >
                Cerrar
              </button>
            </div>
            <Sidebar className="h-full overflow-y-auto" onNavigate={() => setIsMobileNavOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] gap-4 p-4 lg:gap-5 lg:p-6">
        <div className="hidden shrink-0 lg:block">
          <Sidebar className="sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="lg:hidden rounded-[26px] border border-white/40 bg-white/70 p-4 shadow-[0_24px_80px_-36px_rgba(24,21,17,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">Panel operativo</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-stone-950">NexoHabitat</p>
              </div>
              <button
                type="button"
                aria-label="Abrir navegación"
                onClick={() => setIsMobileNavOpen(true)}
                className="rounded-full border border-stone-900/10 bg-stone-950 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
              >
                Menú
              </button>
            </div>
          </div>

          <header className="rounded-[32px] border border-stone-900/10 bg-white/70 p-5 shadow-[0_24px_80px_-36px_rgba(24,21,17,0.45)] backdrop-blur xl:p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
                  <span className="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-stone-50">
                    Señal en vivo
                  </span>
                  <span>Coordinación central</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-stone-500">Distrito Centro · Residencial Aurora</p>
                  <p className="max-w-3xl text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                    Operación editorial para equipos que necesitan ver antes de reaccionar.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:min-w-[360px]">
                <div className="rounded-[24px] border border-stone-900/10 bg-[color:var(--surface-strong)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Contratos activos</p>
                  <p className="mt-3 text-3xl font-semibold text-stone-950">36</p>
                  <p className="mt-2 text-sm text-stone-500">Ritmo estable durante la última semana.</p>
                </div>
                <div className="rounded-[24px] border border-stone-900/10 bg-[color:var(--surface-strong)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Intervenciones hoy</p>
                  <p className="mt-3 text-3xl font-semibold text-stone-950">07</p>
                  <p className="mt-2 text-sm text-stone-500">Mantenimiento, inspección y seguimiento de cobros.</p>
                </div>
              </div>
            </div>
          </header>

          <main className="min-w-0 flex-1 overflow-y-auto rounded-[34px] border border-white/55 bg-white/55 p-4 shadow-[0_36px_120px_-42px_rgba(24,21,17,0.4)] backdrop-blur sm:p-6 xl:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}