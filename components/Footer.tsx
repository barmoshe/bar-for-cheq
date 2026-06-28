import { mailtoHref, whatsappHref, githubHref } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-2 text-fg-mute">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[13px] sm:flex-row">
        <span className="font-semibold text-fg-dim">Bar Moshe · AI-native builder</span>
        <span className="flex items-center gap-5">
          <a href={mailtoHref} className="transition hover:text-white">Email</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
          <a href={githubHref} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
        </span>
        <span>Made for CHEQ. Not affiliated.</span>
      </div>
    </footer>
  );
}
