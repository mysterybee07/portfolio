import React, { useEffect, useRef, useState } from "react";

// Animated walk-through of one REST request: client → load balancer → router → auth → service → database, and back.

const ico = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const nodes = [
  {
    layer: "Client",
    title: "Web / Mobile",
    sub: "HTTPS request",
    icon: (
      <svg {...ico}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    layer: "Edge",
    title: "Load balancer",
    sub: "TLS · health checks",
    icon: (
      <svg {...ico}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="12" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v10M12 11l-7 6M12 11l7 6" />
      </svg>
    ),
  },
  {
    layer: "Gateway",
    title: "Router",
    sub: "routes · limits",
    icon: (
      <svg {...ico}>
        <path d="M4 12h6l4-6h6M14 18h6M10 12l4 6" />
      </svg>
    ),
  },
  {
    layer: "Middleware",
    title: "Auth + logs",
    sub: "tokens · logging",
    icon: (
      <svg {...ico}>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    layer: "Service",
    title: "Business logic",
    sub: "validate · load",
    icon: (
      <svg {...ico}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
      </svg>
    ),
  },
  {
    layer: "Storage",
    title: "Database",
    sub: "read query",
    icon: (
      <svg {...ico}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </svg>
    ),
  },
];

// Each step: which node is busy, which edge carries traffic (and which way), and the trace line it logs.
const steps = [
  { node: 0, edge: null, dir: "req", ms: 0, log: ["→", "client", "GET /v1/whatiknow · Authorization: Bearer …"] },
  { node: 1, edge: 0, dir: "req", ms: 1, log: ["→", "load balancer", "TLS terminated · routed to healthy instance #2"] },
  { node: 2, edge: 1, dir: "req", ms: 3, log: ["→", "router", "matched GET /v1/whatiknow · rate limit ok"] },
  { node: 3, edge: 2, dir: "req", ms: 5, log: ["→", "auth", "token verified · role allowed ✓"] },
  { node: 4, edge: 3, dir: "req", ms: 10, log: ["→", "service", "params validated · loading skills"] },
  { node: 5, edge: 4, dir: "req", ms: 32, log: ["→", "database", "SELECT skills, architecture, tools …"] },
  { node: 4, edge: 4, dir: "res", ms: 35, log: ["←", "service", "JSON serialized · Cache-Control: max-age=300"] },
  { node: 3, edge: 3, dir: "res", ms: 36, log: ["←", "middleware", "response logged · status 200"] },
  { node: 2, edge: 2, dir: "res", ms: 37, log: ["←", "gateway", "gzip compressed"] },
  { node: 1, edge: 1, dir: "res", ms: 38, log: ["←", "load balancer", "TLS encrypted · sent to client"] },
  { node: 0, edge: 0, dir: "res", ms: 39, log: ["←", "200 OK", '{ "apis": "REST", "arch": "microservices", "secure": true }'] },
];

const STEP_MS = 1000;
const PAUSE_STEPS = 3; // linger on the finished trace before replaying

export default function RequestFlow() {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [tick, setTick] = useState(reduce ? steps.length - 1 : 0);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const consoleRef = useRef(null);

  // After the console finishes opening, bring it fully into view.
  useEffect(() => {
    if (!consoleOpen) return;
    const t = setTimeout(() => consoleRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" }), 320);
    return () => clearTimeout(t);
  }, [consoleOpen, reduce]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setTick((t) => (t + 1) % (steps.length + PAUSE_STEPS)), STEP_MS);
    return () => clearInterval(id);
  }, [reduce]);

  const i = Math.min(tick, steps.length - 1);
  const step = steps[i];
  const done = i === steps.length - 1;

  const total = steps[steps.length - 1].ms;

  return (
    <figure className="reveal card overflow-hidden" aria-label="Diagram of a REST API request travelling from the client to the database and back">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-700 bg-ink-850 px-4 py-2 sm:px-5">
        <p className="font-mono text-xs text-slate-400">
          <span className="text-gopher">GET</span> /v1/whatiknow
        </p>
        <p className="font-mono text-xs">
          <span className={step.dir === "req" ? "text-gopher" : "text-signal"}>
            {step.dir === "req" ? "● request" : "● response"}
          </span>
          <span className="ml-3 text-slate-500">{step.ms}ms</span>
        </p>
      </div>

      {/* Nodes and edges: always one row. Phones get icon-only circles plus a caption for the active hop. */}
      <div className="flex items-center px-4 pb-3 pt-5 sm:px-8 lg:px-6 lg:py-4">
        {nodes.map((n, k) => {
          const active = step.node === k;
          const tone = active
            ? step.dir === "req"
              ? "border-gopher bg-gopher/10 text-gopher shadow-[0_0_24px_-6px_rgba(0,173,216,.6)]"
              : "border-signal bg-signal/10 text-signal shadow-[0_0_24px_-6px_rgba(126,231,135,.6)]"
            : "border-ink-600 bg-ink-900 text-slate-400";
          return (
            <React.Fragment key={n.layer}>
              <div
                title={`${n.title}: ${n.sub}`}
                className={`flow-node flex h-11 w-11 flex-none items-center justify-center rounded-full border sm:h-12 sm:w-12 lg:h-auto lg:w-[140px] lg:flex-col lg:gap-1 lg:rounded-xl lg:px-1.5 lg:py-2.5 lg:text-center ${tone}`}
              >
                {n.icon}
                <div className="hidden lg:block">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{n.layer}</p>
                  <p className="text-sm font-semibold text-white">{n.title}</p>
                </div>
              </div>
              {k < nodes.length - 1 && (
                <div className={`flow-edge ${step.edge === k ? `active ${step.dir}` : ""}`} aria-hidden>
                  {step.edge === k && <span key={tick} className="flow-packet" />}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Which hop is working right now (phones only; desktop shows the names in the boxes) */}
      <p className="px-4 pb-4 text-center text-sm lg:hidden" aria-live="off">
        <span className={step.dir === "req" ? "text-gopher" : "text-signal"}>{nodes[step.node].layer}</span>
        <span className="text-slate-500"> · </span>
        <span className="font-semibold text-white">{nodes[step.node].title}</span>
        <span className="text-slate-500"> · {nodes[step.node].sub}</span>
      </p>

      {/* Console toggle with a teaser question */}
      <div className="flex flex-col items-center gap-2.5 border-t border-ink-700 px-4 py-3 text-center sm:flex-row sm:justify-between sm:gap-3 sm:px-5 sm:py-2 sm:text-left">
        <p className="text-sm text-slate-400">
          {consoleOpen ? (
            <>
              Answer: <span className="font-semibold text-signal">no, {total} ms</span>, well under 200 ms.
            </>
          ) : (
            <>Does the response time cross <span className="font-mono text-white">200 ms</span>?</>
          )}
        </p>
        <button
          type="button"
          onClick={() => setConsoleOpen((o) => !o)}
          aria-expanded={consoleOpen}
          aria-controls="flow-console"
          className="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-3 py-1.5 font-mono text-xs text-slate-200 transition hover:border-gopher hover:text-white"
        >
          <span className="text-gopher">&gt;_</span> {consoleOpen ? "Hide console" : "View console"}
          <span className={`transition-transform ${consoleOpen ? "rotate-180" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
      </div>

      {/* Trace log: collapsed until opened; every line is reserved so it never jumps */}
      <div className={`grid transition-[grid-template-rows] duration-300 ${consoleOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <figcaption id="flow-console" ref={consoleRef} className="overflow-hidden" style={{ scrollMarginBottom: 16 }}>
          <div className="overflow-x-auto border-t border-ink-700 bg-ink-950/60 px-3 py-3 font-mono text-[11px] leading-6 sm:px-5 sm:text-[12px]">
            {steps.map((s, k) => (
              <div
                key={k}
                className={`flex flex-wrap gap-x-3 rounded py-0.5 transition-colors duration-300 sm:flex-nowrap sm:whitespace-nowrap sm:py-0 ${
                  k === i ? "bg-ink-800/70 text-slate-100" : k < i ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <span className="w-9 flex-none text-right text-slate-600">{String(s.ms).padStart(2, "0")}ms</span>
                <span className={s.dir === "req" ? "text-gopher" : "text-signal"}>{s.log[0]}</span>
                <span className={`w-28 flex-none ${k === steps.length - 1 && done ? "font-semibold text-signal" : ""}`}>{s.log[1]}</span>
                {/* phones: message drops to its own line, aligned under the label */}
                <span className="w-full pl-[3.75rem] leading-5 opacity-80 sm:w-auto sm:pl-0 sm:leading-6 sm:opacity-100">{s.log[2]}</span>
              </div>
            ))}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
