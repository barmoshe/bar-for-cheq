import { ImageResponse } from "next/og";

export const alt = "Bar Moshe, for CHEQ: an AI Engineer application, with a live traffic-intelligence console.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#15172c";
const INK2 = "#1c1834";
const PINK = "#fd0173";
const PURPLE = "#9925cf";
const HUMAN = "#2ee6a8";
const BOT = "#f6c945";
const BAD = "#ff3d6e";
const FG_DIM = "#b1b9d1";
const FG_MUTE = "#8a8fa8";

async function loadOutfit(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Outfit:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((.+?)\)\s*format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

function Card({
  title,
  status,
  color,
}: {
  title: string;
  status: string;
  color: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 20px",
        borderRadius: 14,
        background: INK2,
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div style={{ display: "flex", width: 12, height: 12, borderRadius: 12, background: color }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 21, fontWeight: 800, color: "#fff" }}>{title}</span>
        <span style={{ fontSize: 16, fontWeight: 500, color: FG_MUTE }}>{status}</span>
      </div>
    </div>
  );
}

export default async function OgImage() {
  const [black, semi] = await Promise.all([loadOutfit(800), loadOutfit(500)]);
  const fonts = [
    black && { name: "Outfit", data: black, weight: 800 as const, style: "normal" as const },
    semi && { name: "Outfit", data: semi, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 800 | 500; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          background: INK,
          fontFamily: "Outfit, sans-serif",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -180, left: 260, width: 700, height: 560, borderRadius: 9999, background: "radial-gradient(circle, rgba(61,41,104,0.95), rgba(21,23,44,0) 70%)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -160, right: 80, width: 460, height: 460, borderRadius: 9999, background: "radial-gradient(circle, rgba(253,1,115,0.28), rgba(253,1,115,0) 70%)", display: "flex" }} />

        {/* Left: pitch */}
        <div style={{ display: "flex", flexDirection: "column", padding: "70px 0 70px 72px", width: 620 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 21,
              fontWeight: 500,
              color: FG_DIM,
            }}
          >
            <div style={{ display: "flex", width: 11, height: 11, borderRadius: 9999, background: PINK }} />
            AI Engineer · application for CHEQ
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 34, lineHeight: 1.0 }}>
            <span style={{ fontSize: 92, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>Agents.</span>
            <span style={{ fontSize: 92, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>Humans.</span>
            <span
              style={{
                fontSize: 92,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                backgroundImage: `linear-gradient(90deg, ${PURPLE}, ${PINK})`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bots.
            </span>
          </div>

          <span style={{ fontSize: 25, fontWeight: 500, color: FG_DIM, marginTop: 28, maxWidth: 520 }}>
            I built CHEQ a live console that tells them apart.
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "auto" }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 9999, background: `linear-gradient(135deg, ${PURPLE}, ${PINK})` }} />
            <span style={{ fontSize: 25, fontWeight: 500, color: "#fff" }}>Bar Moshe · AI engineer · Tel Aviv</span>
          </div>
        </div>

        {/* Right: verdict cards */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, paddingRight: 60 }}>
          <Card title="Trusted Human" status="Approved" color={HUMAN} />
          <Card title="Undeclared AI Agent" status="Browse only, signup blocked" color={BOT} />
          <Card title="Rogue OpenAI Operator" status="Access blocked" color={BAD} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
