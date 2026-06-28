type Link = { label: string; href: string };
type Card = { badge: string; title: string; body: string; links: Link[] };

const CARDS: Card[] = [
  {
    badge: "AI products",
    title: "Idea to production, fast",
    body: "The role is about turning business needs into shipped AI products. That's my studio: bar_builds takes a brief to working software in days, with the agent orchestration and the prompts done by me. Biome Synth is one result, an AI app that began as a Claude interview skill.",
    links: [
      { label: "How I work, shipped", href: "https://bar-builds.vercel.app/portfolio/" },
      { label: "Biome Synth (live)", href: "https://biome-synth.lovable.app/" },
    ],
  },
  {
    badge: "Agents + pipelines",
    title: "The plumbing under the AI",
    body: "Agentic workflows need real data plumbing, not just prompts. I built a pipeline on Temporal coordinating Go, Python and TypeScript workers across their own queues, end to end. It's featured on Temporal's own Code Exchange.",
    links: [
      { label: "Temporal Code Exchange", href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal" },
      { label: "The repo", href: "https://github.com/barmoshe/data-processing-service" },
    ],
  },
  {
    badge: "Open + hands-on",
    title: "I ship in the open",
    body: "This console went from the job post to deployed in a day, in your brand. I also ship open source: MDP is an AI-native document compiler with an MCP server for Claude, published on npm and Apache-2.0 licensed.",
    links: [
      { label: "MDP (open source)", href: "https://github.com/barmoshe/mdp" },
      { label: "This site's code", href: "https://github.com/barmoshe/bar-for-cheq" },
    ],
  },
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="transition group-hover:translate-x-0.5">
      <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProofCards() {
  return (
    <section id="why" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-pink">Why me</p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
            The console is the pitch. Here&apos;s the track record behind it.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c) => (
            <article key={c.title} className="glass flex flex-col rounded-3xl p-7">
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/5 px-3 py-1 text-[12px] font-bold text-pink">
                {c.badge}
              </span>
              <h3 className="text-xl font-extrabold tracking-tight text-white">{c.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-fg-dim">{c.body}</p>
              <div className="mt-5 flex flex-col gap-2">
                {c.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-pink transition hover:text-purple"
                  >
                    {l.label}
                    <Arrow />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
