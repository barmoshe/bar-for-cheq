type Row = { entity: string; status: string; tone: "human" | "bot" | "agent" | "bad" };

const ROWS: Row[] = [
  { entity: "Trusted Human", status: "Enhanced experience", tone: "human" },
  { entity: "Validated Machine Customer", status: "Approved for purchasing", tone: "human" },
  { entity: "Perplexity Crawler", status: "Approved", tone: "agent" },
  { entity: "Undeclared AI Agent", status: "Browse only · signup blocked", tone: "bot" },
  { entity: "Rogue OpenAI Operator", status: "Access blocked", tone: "bad" },
];

const DOT: Record<Row["tone"], string> = {
  human: "bg-human",
  agent: "bg-agent",
  bot: "bg-bot",
  bad: "bg-bad",
};

export default function IntelGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(closest-side,rgba(153,37,207,0.35),transparent)]" />

      <div className="float glass relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-fg-mute">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
            </span>
            traffic &amp; identity intelligence
          </span>
        </div>

        {/* rows */}
        <div className="flex flex-col gap-2.5 p-4">
          {ROWS.map((r) => (
            <div
              key={r.entity}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
            >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${DOT[r.tone]}`} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-bold text-white">{r.entity}</span>
                <span className="block truncate text-[11px] text-fg-mute">{r.status}</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-fg-mute">
                {r.tone === "bad" ? "block" : r.tone === "bot" ? "limit" : "allow"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
