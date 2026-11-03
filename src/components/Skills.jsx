import React from "react";
import Section from "./Section.jsx";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="05 · Toolbox" title="What I work with">
      <div className="reveal card divide-y divide-ink-700">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{s.group}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="rounded-md bg-ink-800 px-2.5 py-1 text-sm text-slate-200">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
