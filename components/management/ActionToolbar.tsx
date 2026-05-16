type ToolbarAction =
  | string
  | {
      label: string;
      tone?: "light" | "dark";
    };

type SearchConfig = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

type FilterConfig = {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

type ActionToolbarProps = {
  resultSummary: string;
  search: SearchConfig;
  filter: FilterConfig;
  actions: ToolbarAction[];
};

export default function ActionToolbar({ resultSummary, search, filter, actions }: ActionToolbarProps) {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
          {resultSummary}
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-[26px] border border-stone-900/10 bg-white/70 p-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(220px,0.7fr)]">
          <div className="space-y-2">
            <label htmlFor={search.id} className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
              {search.label}
            </label>
            <input
              id={search.id}
              type="search"
              value={search.value}
              onChange={(event) => search.onChange(event.target.value)}
              placeholder={search.placeholder}
              className="w-full rounded-2xl border border-stone-900/10 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-950/30"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor={filter.id} className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
              {filter.label}
            </label>
            <select
              id={filter.id}
              value={filter.value}
              onChange={(event) => filter.onChange(event.target.value)}
              className="w-full rounded-2xl border border-stone-900/10 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-950/30"
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {actions.map((action, index) => {
            const normalizedAction = typeof action === "string" ? { label: action, tone: index === actions.length - 1 ? "dark" : "light" } : { tone: "light", ...action };

            return (
              <button
                key={normalizedAction.label}
                className={`rounded-full px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] transition hover:-translate-y-0.5 ${
                  normalizedAction.tone === "dark"
                    ? "bg-stone-950 text-white"
                    : "border border-stone-900/10 bg-white text-stone-600 hover:text-stone-950"
                }`}
              >
                {normalizedAction.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}