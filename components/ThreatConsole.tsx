"use client";

import { useEffect, useMemo, useState } from "react";
import {
  sessions,
  DECISION_META,
  GROUP_FILTERS,
  type Group,
  type Session,
} from "@/lib/demoData";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function ScoreBar({ score, dot }: { score: number; dot: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-1.5 w-14 overflow-hidden rounded-full bg-white/10">
        <span className={`block h-full rounded-full ${dot}`} style={{ width: `${score}%` }} />
      </span>
      <span className="font-mono text-[11px] text-fg-dim">{score}</span>
    </span>
  );
}

export default function ThreatConsole() {
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(0);
  const [selectedId, setSelectedId] = useState<string>(sessions[0].id);
  const [filter, setFilter] = useState<Group | "all">("all");
  const [applied, setApplied] = useState<Record<string, boolean>>({});

  // Stream the feed in. All setState lives in timer callbacks (lint gate).
  useEffect(() => {
    if (reduced) {
      const id = setTimeout(() => setRevealed(sessions.length), 0);
      return () => clearTimeout(id);
    }
    let n = 0;
    const t = setInterval(() => {
      n += 1;
      setRevealed(n);
      if (n >= sessions.length) clearInterval(t);
    }, 650);
    return () => clearInterval(t);
  }, [reduced]);

  const live = sessions.slice(0, revealed);
  const selected = sessions.find((s) => s.id === selectedId) as Session;
  const meta = DECISION_META[selected.decision];

  const stats = useMemo(() => {
    const approved = live.filter((s) => s.decision === "approved").length;
    const agents = live.filter((s) => s.group === "agent").length;
    const blocked = live.filter((s) => s.decision === "blocked").length;
    const approvedPct = live.length ? Math.round((approved / live.length) * 100) : 0;
    return { analyzed: live.length, approvedPct, agents, blocked };
  }, [live]);

  const visible = live.filter((s) => filter === "all" || s.group === filter);

  return (
    <div className="glass overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
      {/* Header + live stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
          </span>
          <span className="text-sm font-bold tracking-tight">
            Traffic &amp; Identity Intelligence
          </span>
          <span className="hidden font-mono text-[11px] text-fg-mute sm:inline">live</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <Stat label="analyzed" value={stats.analyzed} />
          <Stat label="approved" value={`${stats.approvedPct}%`} tone="text-human" />
          <Stat label="agents" value={stats.agents} tone="text-agent" />
          <Stat label="blocked" value={stats.blocked} tone="text-bad" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_350px]">
        {/* Feed */}
        <div className="border-b border-white/10 md:border-b-0 md:border-r">
          <div className="flex flex-wrap gap-1.5 px-4 pb-2 pt-3">
            {GROUP_FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                  filter === f.key ? "bg-white/15 text-white" : "text-fg-mute hover:text-fg-dim"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <ul className="max-h-[430px] overflow-y-auto px-2 pb-3" aria-label="Live sessions">
            {visible.map((s, i) => {
              const active = s.id === selectedId;
              const dm = DECISION_META[s.decision];
              return (
                <li
                  key={s.id}
                  className="animate-rise"
                  style={{ animationDelay: reduced ? undefined : `${Math.min(i, 6) * 40}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(s.id)}
                    aria-current={active ? "true" : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                      active ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${dm.dot}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[12.5px] font-bold text-white">
                        {s.entity}
                      </span>
                      <span className="mt-0.5 block truncate font-mono text-[11px] text-fg-mute">
                        {s.flag} {s.ip} · {s.client}
                      </span>
                    </span>
                    <ScoreBar score={s.score} dot={dm.dot} />
                  </button>
                </li>
              );
            })}
            {!visible.length && (
              <li className="px-3 py-6 text-center text-[12px] text-fg-mute">
                No sessions in this group yet.
              </li>
            )}
          </ul>
        </div>

        {/* Detail */}
        <div className="flex flex-col gap-4 p-5">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[15px] font-extrabold leading-tight text-white">
                {selected.entity}
              </span>
              <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${meta.bg} ${meta.color}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                {meta.label}
              </span>
            </div>
            <span className="mt-1 block font-mono text-[11px] text-fg-mute">
              {selected.flag} {selected.ip} · {selected.location}
            </span>
          </div>

          {/* Risk score */}
          <div>
            <div className="mb-1 flex items-end justify-between">
              <span className="text-[11px] uppercase tracking-[0.08em] text-fg-mute">Risk score</span>
              <span className="font-mono text-2xl font-bold">{selected.score}</span>
            </div>
            <span className="block h-2 overflow-hidden rounded-full bg-white/10">
              <span className={`block h-full rounded-full ${meta.dot}`} style={{ width: `${selected.score}%` }} />
            </span>
          </div>

          {/* Granular access decisions */}
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.08em] text-fg-mute">Access</p>
            <div className="flex flex-wrap gap-1.5">
              {selected.grants.map((g) => (
                <span
                  key={g.action}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    g.allow ? "bg-human/15 text-human" : "bg-bad/15 text-bad"
                  }`}
                >
                  {g.allow ? "✓" : "✗"} {g.action}
                </span>
              ))}
            </div>
          </div>

          {/* Signals */}
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.08em] text-fg-mute">Signals</p>
            <ul className="flex flex-col gap-1.5">
              {selected.signals.map((sig) => (
                <li key={sig.label} className="flex items-center gap-2 text-[12px]">
                  <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] ${sig.good ? "bg-human/20 text-human" : "bg-bad/20 text-bad"}`}>
                    {sig.good ? "✓" : "!"}
                  </span>
                  <span className="text-fg-dim">{sig.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI analyst */}
          <div className="glass rounded-2xl p-3.5">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-fg-mute">
              <span className="gradient-text text-[13px]">✦</span> AI analyst
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white">{selected.analyst}</p>
          </div>

          {/* Apply */}
          <div className="mt-auto">
            {applied[selected.id] ? (
              <p className="rounded-full bg-white/5 px-4 py-2.5 text-center text-[12px] font-semibold text-fg-dim">
                ✓ Policy applied
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setApplied((a) => ({ ...a, [selected.id]: true }))}
                className="w-full rounded-full btn-gradient px-4 py-2.5 text-[13px] font-bold text-white transition hover:opacity-95"
              >
                Apply this decision
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone = "text-white",
}: {
  label: string;
  value: string | number;
  tone?: string;
}) {
  return (
    <span className="flex items-baseline gap-1">
      <span className={`font-bold ${tone}`}>{value}</span>
      <span className="text-fg-mute">{label}</span>
    </span>
  );
}
