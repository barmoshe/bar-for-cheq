const STEPS = [
  {
    n: "01",
    title: "Ship something real",
    body: "A working thing beats a description. You're clicking a console, not reading a promise.",
  },
  {
    n: "02",
    title: "Business value first",
    body: "I build what removes manual work and creates a measurable win, not tech for its own sake.",
  },
  {
    n: "03",
    title: "Days, not weeks",
    body: "This went from the job post to deployed in a day.",
  },
];

export default function HowIBuild() {
  return (
    <section id="how" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-pink">How I build</p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
            Three things this page already shows.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="glass rounded-3xl p-7">
              <span className="gradient-text text-3xl font-black">{s.n}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-fg-dim">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
