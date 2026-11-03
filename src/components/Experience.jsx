import React from "react";
import Section from "./Section.jsx";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I've shipped">
      <ol className="relative ml-2 border-l border-ink-700">
        {experience.map((job) => (
          <li key={job.company} className="reveal relative pb-12 pl-8 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${
                job.current ? "border-signal bg-signal/30" : "border-ink-600 bg-ink-900"
              }`}
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-white">
                {job.role} <span className="text-gopher">· {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-slate-500">
                {job.period} · {job.place}
              </p>
            </div>
            <ul className="mt-4 max-w-3xl space-y-2 text-[15px] leading-relaxed text-slate-400">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-slate-500" aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
