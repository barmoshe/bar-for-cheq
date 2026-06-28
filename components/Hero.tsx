import IntelGraphic from "./IntelGraphic";
import { cvHref } from "@/lib/contact";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* Radial purple glow + brand blobs, CHEQ's hero treatment. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#3d2968,transparent)] opacity-80" />
        <div className="absolute right-[6%] top-[24%] h-72 w-72 rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute left-[4%] top-[40%] h-72 w-72 rounded-full bg-purple/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-6 text-sm">
          <span className="font-extrabold tracking-tight text-white">Bar Moshe</span>
          <span className="text-fg-mute">For the CHEQ team</span>
        </div>

        <div className="grid items-center gap-10 pb-20 pt-8 sm:pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-28">
          <div>
            <p className="reveal text-sm font-bold uppercase tracking-[0.1em] text-pink">
              An AI engineer who wants in
            </p>
            <h1 className="reveal mt-4 text-[clamp(2.3rem,1.3rem+4vw,4.2rem)] font-black leading-[1.03] tracking-[-1.5px] text-white">
              I want to build CHEQ&apos;s{" "}
              <span className="gradient-text">next AI product.</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-[clamp(1rem,0.9rem+0.5vw,1.2rem)] leading-relaxed text-fg-dim">
              I&apos;m Bar, an AI-native builder. I ship deployed AI products in
              hours to days, and I want to do it on your Data &amp; AI team. This
              page is me showing you, not telling you.
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full btn-gradient px-7 py-3.5 text-[15px] font-bold text-white transition hover:opacity-95"
              >
                Let&apos;s talk
              </a>
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="reveal">
            <IntelGraphic />
          </div>
        </div>
      </div>
    </header>
  );
}
