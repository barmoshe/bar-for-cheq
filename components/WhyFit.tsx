const FITS = [
  {
    n: "01",
    t: "AI products, not demos",
    d: "I turn a business need into a deployed product that removes manual work. The agents and LLMs are means; a measurable win is the point.",
  },
  {
    n: "02",
    t: "Comfortable in the data",
    d: "Pipelines, APIs and orchestration are home turf, from Temporal workflows to app databases. I ramp fast on a warehouse like Snowflake.",
  },
  {
    n: "03",
    t: "Owns idea to production",
    d: "I scope with stakeholders, build the thing, and ship it. This page went from your job post to deployed in a day.",
  },
];

export default function WhyFit() {
  return (
    <section className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-bold uppercase tracking-[0.1em] text-pink">
          Why I&apos;d fit at CHEQ
        </p>
        <h2 className="reveal mt-3 max-w-2xl text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
          The way your team builds is how I already work.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FITS.map((f) => (
            <div key={f.n} className="reveal glass rounded-3xl p-7">
              <span className="gradient-text text-3xl font-black">{f.n}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white">{f.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-dim">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
