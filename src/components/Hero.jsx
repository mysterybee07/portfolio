import React, { useEffect, useState } from "react";
import { profile } from "../data";

// Types each word, pauses, deletes it, then moves to the next.
function Typewriter({ words }) {
  const reduce =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduce ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[i % words.length];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduce]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="type-caret bg-gradient-to-r from-gopher to-signal bg-clip-text text-transparent">
        {text || "​"}
      </span>
    </>
  );
}
import { ArrowUpRight, Download, GitHub, LinkedIn, Mail, MapPin } from "./Icons.jsx";

// A fake API response that introduces me: fitting for a backend engineer.
const response = [
  ["name", `"${profile.name}"`],
  ["role", `"${profile.role}"`],
  ["location", `"${profile.location}"`],
  ["languages", `["Go", "Python", "PHP", "SQL"]`],
  ["architecture", `["microservices", "clean architecture"]`],
  ["apis", `["REST", "WebSocket", "JWT + RBAC"]`],
  ["data", `["PostgreSQL", "MySQL", "transactions"]`],
  ["ships_with", `["Docker", "CI/CD", "Nginx", "Linux"]`],
];

function Terminal() {
  return (
    <div className="card overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-850 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-xs text-slate-500">zsh: ~/biraj</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[22px] sm:text-[13px]">
        <code>
          <span className="text-signal">$</span> <span className="text-slate-200">curl -s api.birajpudasaini.com.np/v1/me | jq</span>
          {"\n"}
          <span className="text-slate-400">{"{"}</span>
          {"\n"}
          {response.map(([k, v], i) => (
            <React.Fragment key={k}>
              {"  "}
              <span className="text-gopher-300">"{k}"</span>
              <span className="text-slate-500">: </span>
              <span className={v.startsWith("[") ? "text-amber-200" : "text-emerald-300"}>{v}</span>
              {i < response.length - 1 ? <span className="text-slate-500">,</span> : null}
              {"\n"}
            </React.Fragment>
          ))}
          <span className="text-slate-400">{"}"}</span>
          {"\n"}
          <span className="text-signal">$</span> <span className="caret" />
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <h1 className="hero-in text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl" style={{ animationDelay: "80ms" }}>
            I build backends
            <br />
            <span className="whitespace-nowrap">
              that are <Typewriter words={["scalable.", "dynamic.", "secure.", "modern.", "reliable."]} />
            </span>
          </h1>

          <p style={{ animationDelay: "200ms" }} className="hero-in mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            I'm Biraj, a backend engineer who designs{" "}
            <span className="text-slate-200">APIs, microservices and data models</span> that hold up in production.
            I write mostly Go, along with Python and PHP, and I care about clean architecture, correct transactions
            and code the next engineer can change safely.
          </p>

          <div style={{ animationDelay: "300ms" }} className="hero-in mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              See my work <ArrowUpRight width={16} height={16} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Download CV <Download width={16} height={16} />
            </a>
            <div className="flex flex-wrap items-center gap-5 pl-1 text-slate-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
              <GitHub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <LinkedIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
              <Mail />
            </a>
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin width={16} height={16} /> {profile.location}
            </span>
            </div>
          </div>
        </div>

        <div className="hero-in hidden min-w-0 lg:block" style={{ animationDelay: "250ms" }}>
          <Terminal />
        </div>
      </div>

    </section>
  );
}
