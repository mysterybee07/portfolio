import React from "react";
import Section from "./Section.jsx";
import { profile, projects } from "../data";
import { ArrowUpRight, GitHub } from "./Icons.jsx";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects & open source"
      title="Side projects and experiments"
      intro="Where I try out ideas: libraries, algorithms and patterns I wanted to understand properly."
    >
      <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col p-6 transition sm:last:odd:col-span-2 lg:last:odd:col-span-1 hover:-translate-y-0.5 hover:border-gopher/50"
          >
            <div className="flex items-center justify-between text-slate-500">
              <GitHub width={18} height={18} />
              <ArrowUpRight width={16} height={16} className="transition group-hover:text-gopher" />
            </div>
            <h3 className="mt-4 font-mono text-[15px] font-semibold text-white group-hover:text-gopher-300">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.summary}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="reveal mt-8 text-center">
        <a href={profile.github + "?tab=repositories"} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <GitHub width={16} height={16} /> More on GitHub
        </a>
      </div>
    </Section>
  );
}
