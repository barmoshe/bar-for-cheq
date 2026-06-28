"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md transition-all duration-300 ${
        shown ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      aria-hidden={!shown}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <span className="flex items-center gap-2 font-extrabold tracking-tight text-white">
          <span className="grid h-6 w-6 place-items-center rounded-md btn-gradient text-xs">B</span>
          Bar Moshe
        </span>
        <nav className="flex items-center gap-5 text-sm font-semibold text-fg-dim" aria-label="Sections">
          <a href="#about" className="hidden transition hover:text-white sm:block" tabIndex={shown ? 0 : -1}>
            About
          </a>
          <a href="#work" className="hidden transition hover:text-white sm:block" tabIndex={shown ? 0 : -1}>
            Work
          </a>
          <a
            href="#contact"
            className="rounded-full btn-gradient px-4 py-1.5 text-white transition hover:opacity-95"
            tabIndex={shown ? 0 : -1}
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </div>
  );
}
