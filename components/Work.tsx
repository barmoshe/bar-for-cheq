import { PROJECTS, type Project } from "@/lib/projects";

const ACCENT: Record<Project["accent"], string> = {
  pink: "hover:border-pink/50",
  purple: "hover:border-purple/50",
  cyan: "hover:border-cyan/50",
  human: "hover:border-human/50",
};
const TAG_TONE: Record<Project["accent"], string> = {
  pink: "text-pink",
  purple: "text-agent",
  cyan: "text-cyan",
  human: "text-human",
};

export default function Work() {
  return (
    <section id="work" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-bold uppercase tracking-[0.1em] text-pink">
          Proof I can build
        </p>
        <h2 className="reveal mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
          Shipped, mostly solo.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal glass group flex flex-col rounded-3xl border border-white/10 p-6 transition ${ACCENT[p.accent]} ${
                p.span === 2 ? "md:col-span-2" : ""
              }`}
            >
              <span className={`text-[12px] font-bold uppercase tracking-wide ${TAG_TONE[p.accent]}`}>
                {p.tag}
              </span>
              <span className="mt-2 text-xl font-extrabold tracking-tight text-white">{p.name}</span>
              <span className="mt-2 flex-1 text-[13.5px] leading-relaxed text-fg-dim">{p.blurb}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-white/70 transition group-hover:text-white">
                View
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
