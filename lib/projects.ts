export type Project = {
  name: string;
  blurb: string;
  tag: string;
  href: string;
  /** which brand token tints the tile */
  accent: "pink" | "purple" | "cyan" | "human";
  /** feature tiles span two columns on desktop */
  span?: 2;
};

/**
 * Shipped proofs, ordered for an AI-engineering audience: AI / agent / systems
 * work first, then the product and craft demos. Blurbs in Bar's plain "I" voice.
 */
export const PROJECTS: Project[] = [
  {
    name: "MDP",
    blurb:
      "An open-source compiler that turns one Markdown source into design-locked decks, pages, and docs, built for AI agents to write into. Zero-dependency Node engine with an MCP server for Claude, on npm.",
    tag: "Open source · AI tooling",
    href: "https://barmoshe.github.io/mdp/",
    accent: "pink",
    span: 2,
  },
  {
    name: "Catalogue Orchestrator",
    blurb:
      "A local-first AI video orchestrator: point it at a catalogue of clips and an intent, it indexes everything, retrieves the right moments with RAG, and plans an edit that a deterministic ffmpeg compiler renders into a finished cut. The AI only emits a validated edit list, never raw ffmpeg, so the output stays reproducible. Open source.",
    tag: "Open source · AI video",
    href: "https://github.com/barmoshe/catalogue-orchestrator",
    accent: "pink",
  },
  {
    name: "Temporal Data Service",
    blurb:
      "A cross-language data-processing service on Temporal: durable, fault-tolerant workflows with Go, Python and TypeScript workers under one orchestration. Featured on Temporal's official Code Exchange.",
    tag: "Data · Durable workflows",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
    accent: "cyan",
  },
  {
    name: "Creative Harness",
    blurb:
      "An open AI agent harness for Claude Code: skills, hooks and tooling that let one builder ship like a small team.",
    tag: "Open source · AI agents",
    href: "https://github.com/barmoshe/claude-creative-stack",
    accent: "purple",
  },
  {
    name: "Biome Synth",
    blurb:
      "A generative browser instrument with an AI DJ, built from a Claude interview skill through to a live app. An LLM-driven product, shipped.",
    tag: "Generative · LLM product",
    href: "https://biome-synth.lovable.app/",
    accent: "human",
  },
  {
    name: "Israelify",
    blurb:
      "A full-stack Spotify-style app: React front end with my own Node and MongoDB backend, REST API, auth and middleware.",
    tag: "Full stack · Web app",
    href: "https://github.com/barmoshe/Israelify-backend",
    accent: "purple",
  },
  {
    name: "Apartment Hunter",
    blurb:
      "A real-estate decision tool: side-by-side comparison, Israeli purchase-tax brackets, a full mortgage calculator. Product-grade UI, shipped solo.",
    tag: "Product · Web app",
    href: "https://apartment-hunter-one.vercel.app",
    accent: "cyan",
  },
];
