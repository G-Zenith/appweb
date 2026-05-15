import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono-ui",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Administración de Edificios",
  description: "Aplicación web para la administración de edificios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${monoFont.variable} antialiased`}>
      <body className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(circle_at_top_left,rgba(13,148,136,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(194,103,48,0.18),transparent_28%),linear-gradient(180deg,#f7f0e5_0%,#efe5d4_100%)]" />
          <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col gap-4 p-4 lg:flex-row lg:gap-5 lg:p-6">
          <Sidebar />
            <div className="flex min-w-0 flex-1 flex-col gap-4">
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
      </body>
    </html>
  );
}
