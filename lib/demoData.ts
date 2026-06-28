/**
 * Scripted data for the traffic-intelligence console. No network and no model:
 * verdicts and the "AI analyst" lines are canned. The point is to mirror CHEQ's
 * own framing, "Agents. Humans. Bots." and the granular per-action decisions from
 * their hero (a Rogue OpenAI Operator is blocked, an Undeclared AI Agent is
 * allowed to browse but blocked from signup, a Validated Machine Customer is
 * approved for purchasing), as a live, branded console.
 */

/** Decision severity drives the dot color. */
export type Decision = "approved" | "conditional" | "blocked";
/** Coarse group for the filter pills. */
export type Group = "human" | "agent" | "machine" | "threat";

export type Grant = { action: string; allow: boolean };

export type Session = {
  id: string;
  /** Headline classification, CHEQ-style (e.g. "Rogue OpenAI Operator"). */
  entity: string;
  group: Group;
  decision: Decision;
  ip: string;
  location: string;
  flag: string;
  client: string;
  /** 0-100 risk; trusted low, fraud high. */
  score: number;
  /** Per-action access decisions, the heart of CHEQ's granular framing. */
  grants: Grant[];
  signals: { label: string; good: boolean }[];
  /** One-line natural-language read, as if written by an AI analyst. */
  analyst: string;
};

export const DECISION_META: Record<
  Decision,
  { label: string; color: string; dot: string; bg: string }
> = {
  approved: { label: "Approved", color: "text-human", dot: "bg-human", bg: "bg-human/15" },
  conditional: { label: "Conditional", color: "text-bot", dot: "bg-bot", bg: "bg-bot/15" },
  blocked: { label: "Blocked", color: "text-bad", dot: "bg-bad", bg: "bg-bad/15" },
};

export const GROUP_FILTERS: { key: Group | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "human", label: "Humans" },
  { key: "agent", label: "AI agents" },
  { key: "machine", label: "Machines" },
  { key: "threat", label: "Threats" },
];

/** Newest first; the console streams these in from the top. */
export const sessions: Session[] = [
  {
    id: "s1",
    entity: "Trusted Human",
    group: "human",
    decision: "approved",
    ip: "84.110.x.x",
    location: "Tel Aviv, IL",
    flag: "🇮🇱",
    client: "Chrome 138 · iPhone",
    score: 4,
    grants: [
      { action: "Browse", allow: true },
      { action: "Sign up", allow: true },
      { action: "Checkout", allow: true },
    ],
    signals: [
      { label: "Residential IP (Bezeq)", good: true },
      { label: "Human pointer entropy", good: true },
      { label: "Cookie history: 8 visits", good: true },
    ],
    analyst:
      "Consistent real device with an 8-visit history and natural interaction. A trusted human: give them the full experience.",
  },
  {
    id: "s2",
    entity: "Rogue OpenAI Operator",
    group: "threat",
    decision: "blocked",
    ip: "45.137.x.x",
    location: "unknown (proxy)",
    flag: "🏴",
    client: "Operator · spoofed UA",
    score: 96,
    grants: [
      { action: "Browse", allow: false },
      { action: "Log in", allow: false },
      { action: "Checkout", allow: false },
    ],
    signals: [
      { label: "Agent posing as a human browser", good: false },
      { label: "Account-takeover attempt", good: false },
      { label: "Known fraud ASN", good: false },
    ],
    analyst:
      "An AI operator masking its identity to attempt an account takeover from a flagged network. Access blocked.",
  },
  {
    id: "s3",
    entity: "Undeclared AI Agent",
    group: "agent",
    decision: "conditional",
    ip: "188.43.x.x",
    location: "Berlin, DE",
    flag: "🇩🇪",
    client: "Playwright · residential proxy",
    score: 57,
    grants: [
      { action: "Browse", allow: true },
      { action: "Sign up", allow: false },
      { action: "Log in", allow: false },
    ],
    signals: [
      { label: "Undeclared automation (Playwright)", good: false },
      { label: "Posing as a normal browser", good: false },
      { label: "Reads content like a real visitor", good: true },
    ],
    analyst:
      "An undeclared agent behind a residential proxy. Let it browse content, but block it from signup and login.",
  },
  {
    id: "s4",
    entity: "Perplexity Crawler",
    group: "agent",
    decision: "approved",
    ip: "20.171.x.x",
    location: "Virginia, US",
    flag: "🇺🇸",
    client: "PerplexityBot",
    score: 16,
    grants: [
      { action: "Browse", allow: true },
      { action: "Index", allow: true },
    ],
    signals: [
      { label: "Declared crawler, verified range", good: true },
      { label: "Respects robots.txt", good: true },
      { label: "Polite crawl rate", good: true },
    ],
    analyst:
      "A declared AI crawler from a verified range that respects robots. A good agent: approve it.",
  },
  {
    id: "s5",
    entity: "Validated Machine Customer",
    group: "machine",
    decision: "approved",
    ip: "35.190.x.x",
    location: "Dublin, IE",
    flag: "🇮🇪",
    client: "Shopping agent · OAuth-linked",
    score: 19,
    grants: [
      { action: "Browse", allow: true },
      { action: "Checkout", allow: true },
    ],
    signals: [
      { label: "Acting for a verified customer", good: true },
      { label: "OAuth-linked to a real account", good: true },
      { label: "Spending within normal pattern", good: true },
    ],
    analyst:
      "A shopping agent transacting on behalf of a verified customer. Approve it for purchasing and optimize the agent flow.",
  },
  {
    id: "s6",
    entity: "Synthetic ID",
    group: "threat",
    decision: "conditional",
    ip: "102.89.x.x",
    location: "Lagos, NG",
    flag: "🇳🇬",
    client: "Safari 17 · iPhone",
    score: 78,
    grants: [
      { action: "Browse", allow: true },
      { action: "Sign up", allow: false },
    ],
    signals: [
      { label: "Liveness / deepfake check failed", good: false },
      { label: "Email minted 40 min ago", good: false },
      { label: "Device new to the network", good: false },
    ],
    analyst:
      "A failed liveness check on a 40-minute-old identity. Flag it and block signup until it clears review.",
  },
  {
    id: "s7",
    entity: "Delegated Google Project Mariner",
    group: "agent",
    decision: "approved",
    ip: "66.249.x.x",
    location: "Mountain View, US",
    flag: "🇺🇸",
    client: "Project Mariner · delegated",
    score: 22,
    grants: [
      { action: "Browse", allow: true },
      { action: "Checkout", allow: true },
    ],
    signals: [
      { label: "Delegated by a signed-in user", good: true },
      { label: "Verified Google agent range", good: true },
      { label: "Task scoped to the user's intent", good: true },
    ],
    analyst:
      "A Google agent acting under a signed-in user's delegation. Approve it and give it an optimized agent experience.",
  },
  {
    id: "s8",
    entity: "Credential-stuffing botnet",
    group: "threat",
    decision: "blocked",
    ip: "3.91.x.x",
    location: "Ashburn, US",
    flag: "🇺🇸",
    client: "Headless Chrome",
    score: 92,
    grants: [
      { action: "Browse", allow: false },
      { action: "Log in", allow: false },
    ],
    signals: [
      { label: "Datacenter IP (AWS us-east-1)", good: false },
      { label: "1,240 login attempts / min", good: false },
      { label: "No pointer events", good: false },
    ],
    analyst:
      "A headless botnet running 1,240 logins a minute from AWS. Automated credential stuffing: block it.",
  },
];
