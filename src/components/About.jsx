import React from "react";
import Section from "./Section.jsx";
import { capabilities, education } from "../data";

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="What I can build for you">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* On desktop this column stretches to the cards' height: the photo fills whatever space education leaves. */}
        <div className="reveal flex flex-row items-stretch gap-3 lg:flex-col">
          <img
            src="/avatar.jpg"
            alt="Portrait of Biraj Pudasaini"
            width="460"
            height="460"
            loading="lazy"
            className="aspect-square w-28 flex-none rounded-2xl border border-ink-700 object-cover object-[50%_30%] sm:w-36 lg:aspect-auto lg:h-0 lg:w-full lg:flex-grow"
          />
          <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl border border-ink-700 bg-ink-900/60 p-4 text-sm lg:flex-none">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Education</p>
            <p className="mt-2 text-slate-200">{education.degree}</p>
            <p className="text-slate-500">
              {education.school} · {education.year}
            </p>
          </div>
        </div>

        <div className="reveal grid gap-3 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <article key={c.title} className="card flex gap-4 px-4 py-3.5 transition hover:border-gopher/50">
              <span className="pt-0.5 font-mono text-xs text-gopher">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[15px] font-semibold text-white">{c.title}</h3>
                <p className="mt-0.5 text-[13px] leading-snug text-slate-400">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
