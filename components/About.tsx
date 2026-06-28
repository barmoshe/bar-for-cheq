const SKILLS = [
  "Claude Code",
  "AI agents · RAG",
  "Python · SQL · TypeScript",
  "Temporal · data pipelines",
  "Idea → production",
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="reveal text-sm font-bold uppercase tracking-[0.1em] text-pink">About</p>
          <h2 className="reveal mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
            I build AI products, end to end, fast.
          </h2>
          <p className="reveal mt-5 max-w-xl leading-relaxed text-fg-dim">
            I run my own agent-operated workshop on Claude Code, which gives one
            builder the throughput of a small team. I take a business need and turn
            it into a deployed product, the data plumbing, the LLM and agent work,
            and the last 10% of polish. I track the frontier and verify against live
            docs, not stale memory. I&apos;d rather hand you a running thing than a deck.
          </p>
          <ul className="reveal mt-6 flex flex-wrap gap-2" aria-label="What I bring">
            {SKILLS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-semibold text-fg-dim"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal glass mx-auto w-full max-w-xs rounded-3xl p-5 text-center">
          <div
            className="mx-auto h-44 w-44 rounded-2xl bg-cover bg-center ring-1 ring-white/10"
            role="img"
            aria-label="Portrait of Bar Moshe"
            style={{ backgroundImage: "url(/bar.png)" }}
          />
          <div className="mt-4 text-lg font-extrabold text-white">Bar Moshe</div>
          <div className="text-[13px] text-pink">AI-native builder</div>
          <div className="mt-4 flex flex-col gap-1 text-[12px] text-fg-mute">
            <span>Idea → deployed</span>
            <span>Ships solo, fast</span>
            <span>Current by default</span>
          </div>
        </div>
      </div>
    </section>
  );
}
