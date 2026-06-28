import { Fragment } from "react";
import HeroGraphic from "./HeroGraphic";
import { cvHref } from "@/lib/contact";

const LEAD = ["I", "want", "to", "build", "CHEQ’s"];
const ACCENT = ["next", "AI", "product."];

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* CHEQ's exact hero radial: deep purple core fading to dark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 60% 42%, rgba(61,41,104,0.95) 0%, #15172c 70%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[4%] top-[26%] h-72 w-72 rounded-full bg-pink/20 blur-3xl" />
        <div className="absolute left-[2%] top-[44%] h-72 w-72 rounded-full bg-purple/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-6 text-sm">
          <span className="font-extrabold tracking-tight text-white">Bar Moshe</span>
          <span className="text-fg-mute">For the CHEQ team</span>
        </div>

        <div className="grid items-center gap-10 pb-16 pt-8 sm:pt-12 md:grid-cols-[1.02fr_0.98fr] md:pb-24">
          <div>
            <p className="reveal text-sm font-bold uppercase tracking-[0.12em] text-pink">
              An AI engineer who wants in
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,1.3rem+4.4vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-1.5px] text-white">
              {LEAD.map((w, i) => (
                <Fragment key={w + i}>
                  <span className="word" style={{ "--i": i } as React.CSSProperties}>
                    {w}
                  </span>{" "}
                </Fragment>
              ))}
              <span className="italic">
                {ACCENT.map((w, i) => (
                  <Fragment key={w + i}>
                    <span
                      className="word gradient-text"
                      style={{ "--i": LEAD.length + i } as React.CSSProperties}
                    >
                      {w}
                    </span>{" "}
                  </Fragment>
                ))}
              </span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-[clamp(1rem,0.9rem+0.5vw,1.2rem)] leading-relaxed text-fg-dim">
              I ship AI products that turn a business need into something you can
              click. In days, not quarters. I want to do that on your Data &amp; AI
              team.
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

          <div>
            <HeroGraphic />
          </div>
        </div>
      </div>
    </header>
  );
}
