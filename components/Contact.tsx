const LINKS = [
  { label: "Email me", href: "mailto:1barmoshe1@gmail.com", primary: true },
  { label: "Download CV", href: "/cv/Bar_Moshe_CV.pdf", primary: false },
  { label: "GitHub", href: "https://github.com/barmoshe", primary: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/barmoshe/", primary: false },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(153,37,207,0.35),transparent)]" />
        <div className="absolute right-[12%] top-[20%] h-64 w-64 rounded-full bg-pink/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,1.4rem+2.6vw,3rem)] font-black leading-[1.08] tracking-[-1px] text-white">
          Let&apos;s automate CHEQ&apos;s next manual process.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-fg-dim">
          Tel Aviv is home, so hybrid works well. I&apos;d rather show you something
          real than talk about it, which is the whole point of this page. If it
          landed, I&apos;m a reply or a coffee away.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
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
