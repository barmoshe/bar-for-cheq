const GITHUB = "https://github.com/barmoshe/bar-for-cheq";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg btn-gradient text-sm text-white">
            B
          </span>
          Bar Moshe
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-fg-dim sm:flex">
          <a href="#demo" className="transition hover:text-white">The console</a>
          <a href="#why" className="transition hover:text-white">Why me</a>
          <a href="#how" className="transition hover:text-white">How I build</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/cv/Bar_Moshe_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-fg-dim transition hover:text-white sm:block"
          >
            CV
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-semibold text-fg-dim transition hover:text-white sm:block"
          >
            Code
          </a>
          <a
            href="#contact"
            className="rounded-full btn-gradient px-4 py-2 text-sm font-bold text-white transition hover:opacity-95"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
