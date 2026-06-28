const ITEMS = [
  "Claude Code",
  "AI agents",
  "RAG",
  "MCP",
  "Temporal",
  "Python",
  "SQL",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Data pipelines",
  "Vercel",
];

function Row() {
  return (
    <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center gap-10 whitespace-nowrap">
          <span className="text-[15px] font-bold text-fg-dim">{t}</span>
          <span className="h-1 w-1 rounded-full bg-pink/60" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-hidden="true" className="border-y border-white/10 py-5">
      <p className="sr-only">The stack I build AI products with.</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
