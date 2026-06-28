type Card = {
  x: number;
  y: number;
  entity: string;
  status: string;
  dot: string;
  i: number;
};

const W = 176;
const H = 48;
const CX = 300;
const CY = 238;

const CARDS: Card[] = [
  { x: 34, y: 60, entity: "Trusted Human", status: "Approved", dot: "#2ee6a8", i: 0 },
  { x: 388, y: 52, entity: "Validated Machine", status: "Approved · purchasing", dot: "#2ee6a8", i: 1 },
  { x: 404, y: 214, entity: "Perplexity Crawler", status: "Approved", dot: "#b06cff", i: 2 },
  { x: 372, y: 372, entity: "Undeclared AI Agent", status: "Browse only", dot: "#f6c945", i: 3 },
  { x: 24, y: 360, entity: "Rogue OpenAI Operator", status: "Access blocked", dot: "#ff3d6e", i: 4 },
];

const center = (c: Card) => ({ x: c.x + W / 2, y: c.y + H / 2 });

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <svg viewBox="0 0 600 480" className="font-sans w-full" role="img" aria-label="CHEQ-style intelligence engine classifying humans, bots and AI agents">
        <defs>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9925cf" />
            <stop offset="100%" stopColor="#fd0173" />
          </linearGradient>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#9925cf" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#9925cf" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="coreFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9925cf" />
            <stop offset="100%" stopColor="#fd0173" />
          </linearGradient>
        </defs>

        {/* connectors (behind everything) */}
        <g fill="none">
          {CARDS.map((c) => {
            const p = center(c);
            return (
              <g key={`wire-${c.i}`}>
                <line x1={p.x} y1={p.y} x2={CX} y2={CY} stroke="rgba(255,255,255,0.10)" strokeWidth="1.2" />
                <line
                  className="g-flow"
                  x1={p.x}
                  y1={p.y}
                  x2={CX}
                  y2={CY}
                  stroke="url(#wire)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ animationDelay: `${c.i * 0.3}s` }}
                />
              </g>
            );
          })}
        </g>

        {/* core glow + pulsing rings + disc */}
        <circle cx={CX} cy={CY} r="78" fill="url(#coreGlow)" />
        <circle className="g-ring" cx={CX} cy={CY} r="34" fill="none" stroke="#fd0173" strokeWidth="1.2" />
        <circle className="g-ring" cx={CX} cy={CY} r="34" fill="none" stroke="#9925cf" strokeWidth="1.2" style={{ animationDelay: "1.5s" }} />
        <circle cx={CX} cy={CY} r="30" fill="url(#coreFill)" />
        <circle cx={CX} cy={CY} r="30" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <text x={CX} y={CY + 7} textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">
          ✦
        </text>
        <text x={CX} y={CY + 62} textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="0.5" fill="#b1b9d1">
          Intelligence Engine
        </text>

        {/* entity cards */}
        {CARDS.map((c) => {
          const cy = c.y + H / 2;
          return (
            <g key={c.entity} className="g-card" style={{ "--i": c.i } as React.CSSProperties}>
              <rect x={c.x} y={c.y} width={W} height={H} rx="11" fill="rgba(20,18,40,0.85)" stroke="rgba(255,255,255,0.13)" />
              <circle className="g-dot" cx={c.x + 18} cy={cy} r="4.5" fill={c.dot} style={{ animationDelay: `${c.i * 0.4}s` }} />
              <text x={c.x + 34} y={cy - 3} fontSize="14" fontWeight="700" fill="#fff">
                {c.entity}
              </text>
              <text x={c.x + 34} y={cy + 14} fontSize="11" fill="#8a8fa8">
                {c.status}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
