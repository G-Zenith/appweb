type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">{title}</h2>
    </div>
  );
}