type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
};

export default function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="mt-6 rounded-[28px] border border-dashed border-stone-900/15 bg-white/70 p-6 text-left shadow-[0_20px_60px_-40px_rgba(24,21,17,0.35)]">
      <div className="max-w-xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">Estado vacío</p>
        <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{title}</h3>
        <p className="text-sm leading-6 text-stone-600">{description}</p>
        <button
          type="button"
          onClick={onAction}
          className="mt-2 rounded-full bg-stone-950 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}