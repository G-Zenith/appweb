type MetricTone = "dark" | "accent" | "light";

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
  tone: MetricTone;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  metrics: HeroMetric[];
};

const metricToneClasses: Record<MetricTone, string> = {
  dark: "border-stone-950 bg-stone-950 text-stone-50",
  accent: "border-amber-400/20 bg-amber-300/10 text-stone-900",
  light: "border-stone-900/10 bg-white/80 text-stone-900",
};

const metricTextClasses: Record<MetricTone, string> = {
  dark: "text-stone-300",
  accent: "text-stone-500",
  light: "text-stone-500",
};

export default function PageHero({ eyebrow, title, description, actionLabel, metrics }: PageHeroProps) {
  return (
    <section className="rounded-[30px] border border-stone-900/10 bg-[linear-gradient(135deg,rgba(255,250,242,0.92),rgba(255,255,255,0.6))] p-6 shadow-[0_24px_90px_-46px_rgba(24,21,17,0.45)] sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">{description}</p>
        </div>
        <button className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
          {actionLabel}
        </button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className={`rounded-[26px] border p-5 ${metricToneClasses[metric.tone]}`}>
            <p className={`text-sm ${metricTextClasses[metric.tone]}`}>{metric.label}</p>
            <p className="mt-5 text-4xl font-semibold tracking-tight">{metric.value}</p>
            <p className={`mt-3 text-sm ${metricTextClasses[metric.tone]}`}>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}