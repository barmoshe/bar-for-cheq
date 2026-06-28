const GITHUB = "https://github.com/barmoshe/bar-for-cheq";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Radial purple glow, CHEQ's hero treatment. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#3d2968,transparent)] opacity-80" />
        <div className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute left-[6%] top-[35%] h-72 w-72 rounded-full bg-purple/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-20 text-center sm:pt-28">
        <span className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-fg-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          AI Engineer · application for CHEQ
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.4rem,1.4rem+4vw,4.6rem)] font-black leading-[1.02] tracking-[-1.5px]">
          <span className="text-white">Agents. Humans. Bots.</span>
          <br />
          <span className="gradient-text">I built the console that tells them apart.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,0.9rem+0.5vw,1.2rem)] leading-relaxed text-fg-dim">
          I&apos;m Bar Moshe, an AI engineer in Tel Aviv. You&apos;re hiring someone
          to ship internal AI products fast, so instead of a CV I built one in your
          world: a live traffic-intelligence console. Try it below.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="rounded-full btn-gradient px-7 py-3.5 text-[15px] font-bold text-white transition hover:opacity-95"
          >
            See it run
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-white/10"
          >
            Read the code
          </a>
        </div>

        <p className="mt-5 text-[13px] text-fg-mute">
          Scripted and client-side. No real detection running, just the build, in
          your brand.
        </p>
      </div>
    </section>
  );
}
