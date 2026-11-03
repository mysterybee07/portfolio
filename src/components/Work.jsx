import React from "react";
import Section from "./Section.jsx";
import { featured } from "../data";
import { ArrowUpRight } from "./Icons.jsx";

function Flow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]" aria-label="Request flow">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span className="rounded-md border border-gopher/40 bg-gopher/10 px-2 py-1 text-gopher-300">{s}</span>
          {i < steps.length - 1 && <span className="text-slate-600">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Card({ p, large }) {
  return (
    <article
      className={`card flex flex-col p-5 transition hover:border-gopher/50 sm:p-8 ${large ? "lg:col-span-2" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-500">
          {p.org} · <span className="text-signal">{p.kind}</span>
        </p>
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-gopher hover:text-gopher-300"
        >
          {p.linkLabel} <ArrowUpRight width={14} height={14} />
        </a>
      </div>
      <h3 className={`mt-3 font-semibold text-white ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>{p.name}</h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">{p.summary}</p>

      {p.flow && (
        <div className="mt-5">
          <Flow steps={p.flow} />
        </div>
      )}

      <ul className={`mt-6 grid gap-x-8 gap-y-2.5 text-sm leading-relaxed text-slate-300 ${large ? "md:grid-cols-2" : ""}`}>
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="font-mono text-gopher" aria-hidden>
              ›
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="03 · Selected work"
      title="Systems running in production"
      intro="Real products with real users and real money moving through them. Below is what I built and the engineering decisions behind it."
    >
      <div className="reveal grid gap-5 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Card key={p.name} p={p} large={i === 0} />
        ))}
      </div>
    </Section>
  );
}
