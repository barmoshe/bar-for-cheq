import ThreatConsole from "./ThreatConsole";

export default function DemoSection() {
  return (
    <section id="demo" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-pink">
            The live console
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-black leading-[1.1] tracking-[-1px] text-white">
            Every session, classified in{" "}
            <span className="gradient-text">real time.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-fg-dim">
            Sessions stream in and get a verdict: human, bot, AI agent or bad
            actor, with a risk score, the signals behind it, and a one-line read
            from an AI analyst. Pick any session, then apply the recommended action.
          </p>
        </div>

        <ThreatConsole />

        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] text-fg-mute">
          Built for this application in a day. The real thing would run CHEQ&apos;s
          detection behind a Snowflake-fed pipeline. The product thinking is the same.
        </p>
      </div>
    </section>
  );
}
