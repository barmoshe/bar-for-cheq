export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-2 text-fg-mute">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[13px] sm:flex-row">
        <p className="font-semibold text-fg-dim">Bar Moshe</p>
        <p>
          Built for CHEQ with Next.js, React and TypeScript. Not affiliated with
          CHEQ.
        </p>
      </div>
    </footer>
  );
}
