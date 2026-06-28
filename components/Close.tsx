import { mailtoHref, whatsappHref, cvHref, githubHref } from "@/lib/contact";

const LINKS = [
  { label: "WhatsApp", href: whatsappHref, primary: true },
  { label: "Email", href: mailtoHref, primary: false },
  { label: "Download CV", href: cvHref, primary: false, download: true },
  { label: "GitHub", href: githubHref, primary: false },
];

export default function Close() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(153,37,207,0.35),transparent)]" />
        <div className="absolute right-[12%] top-[18%] h-64 w-64 rounded-full bg-pink/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="reveal text-sm font-bold uppercase tracking-[0.1em] text-pink">The ask</p>
        <h2 className="reveal mt-3 font-display text-[clamp(2rem,1.4rem+2.6vw,3rem)] font-extrabold leading-[1.08] tracking-[-1px] text-white">
          I&apos;d love to build here. <span className="gradient-text italic">Let&apos;s talk.</span>
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-fg-dim">
          Tel Aviv is home, so hybrid works well. If there&apos;s a place for a
          builder who ships AI products this fast, I want to be in the room.
        </p>

        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noopener"}
              download={l.download ? "" : undefined}
              className={
                l.primary
                  ? "rounded-full btn-gradient px-7 py-3.5 text-[15px] font-bold text-white transition hover:opacity-95"
                  : "rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-white/10"
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
