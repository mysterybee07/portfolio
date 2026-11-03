import React, { useEffect, useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "./Icons.jsx";

// The site is static (GitHub Pages), so messages go through Web3Forms, which emails them to me.
// Get a free access key at https://web3forms.com and put it in .env as VITE_WEB3FORMS_KEY.
// Without a key, the form opens the visitor's email app with the message filled in.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const input =
  "w-full rounded-lg border border-ink-600 bg-ink-850 px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 outline-none transition focus:border-gopher focus:ring-2 focus:ring-gopher/20";

const empty = { name: "", email: "", message: "", botcheck: "" };

// One of these is shown at random after a message is sent.
const thankYous = [
  { emoji: "👀", title: "Finally, {name}!", body: "I've been staring at my inbox like it's a loading spinner. Your message landed safely, and I'll reply soon." },
  { emoji: "📬", title: "200 OK, {name}!", body: "Delivered on the first try, no retries needed. I was refreshing my inbox like a deploy log, so expect a reply soon." },
  { emoji: "☕", title: "Thank you, {name}!", body: "I was sitting here with my chai, curiously waiting for exactly this message. I'll get back to you soon." },
  { emoji: "🎉", title: "Message committed, {name}!", body: "No rollbacks, no merge conflicts. I've been waiting for this one, and I'll write back soon." },
];

// Live ratings from chess.com's public API (CORS-enabled). If it fails, the card just hides the numbers.
function ChessCard() {
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.chess.com/pub/player/${profile.chess.handle}/stats`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        if (cancelled) return;
        const pick = (k, label) => (d[k]?.last?.rating ? { label, value: d[k].last.rating } : null);
        setRatings([pick("chess_blitz", "Blitz"), pick("chess_rapid", "Rapid"), pick("chess_bullet", "Bullet")].filter(Boolean));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href={profile.chess.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-8 block max-w-md rounded-2xl border border-ink-700 bg-ink-900/80 p-5 transition hover:border-gopher/50"
    >
      <div className="flex items-center gap-4">
        <span className="chess-knight flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#81b64c]/15 text-3xl text-[#81b64c]" aria-hidden>
          ♞
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-white">Wanna challenge me on chess.com?</p>
          <p className="font-mono text-sm text-slate-400">@{profile.chess.handle}</p>
        </div>
      </div>
      {ratings?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {ratings.map((r) => (
            <span key={r.label} className="rounded-md bg-ink-800 px-2.5 py-1 text-xs text-slate-300">
              {r.label} <span className="font-mono font-semibold text-white">{r.value}</span>
            </span>
          ))}
        </div>
      )}
      <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#81b64c] group-hover:underline">
        Challenge me ♟ <ArrowUpRight width={14} height={14} />
      </p>
    </a>
  );
}

function mailtoLink({ name, email, message }) {
  const subject = `Portfolio enquiry from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error
  const [copied, setCopied] = useState(false);
  const [thanks, setThanks] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the address is visible on the page anyway */
    }
  }

  async function submit(e) {
    e.preventDefault();
    if (form.botcheck) return; // honeypot filled: a bot

    if (!WEB3FORMS_KEY) {
      window.location.href = mailtoLink(form);
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: "birajpudasaini.com.np",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || res.statusText);
      const pick = thankYous[Math.floor(Math.random() * thankYous.length)];
      const first = form.name.trim().split(/\s+/)[0] || "friend";
      setThanks({ ...pick, title: pick.title.replace("{name}", first) });
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" eyebrow="06 · Contact" title="Let's build something reliable">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="reveal">
          <p className="max-w-md leading-relaxed text-slate-400">
            Hiring for a backend or Go role, or need an API, payment integration or real-time feature built?
            Send me a message.
          </p>
          <div className="mt-6 flex items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 break-all font-mono text-sm text-gopher hover:text-gopher-300 sm:text-lg"
            >
              <Mail /> {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className="rounded-md border border-ink-600 px-2 py-1 font-mono text-xs text-slate-300 hover:border-gopher hover:text-white">
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GitHub width={16} height={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <LinkedIn width={16} height={16} /> LinkedIn
            </a>
          </div>
          <ChessCard />
        </div>

        <div className="reveal">
        {status === "sent" && thanks ? (
          <div role="status" aria-live="polite" className="card thanks-pop flex flex-col items-center justify-center p-8 text-center sm:p-12">
            <span className="thanks-emoji text-6xl" aria-hidden>
              {thanks.emoji}
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-white">{thanks.title}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-slate-400">{thanks.body}</p>
            <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-8">
              Send another message
            </button>
          </div>
        ) : (
        <form onSubmit={submit} className="card space-y-4 p-6 sm:p-8">
          <input
            type="checkbox"
            name="botcheck"
            checked={!!form.botcheck}
            onChange={(e) => setForm({ ...form, botcheck: e.target.checked ? "1" : "" })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-slate-400">Name</span>
              <input required name="name" value={form.name} onChange={update} className={input} autoComplete="name" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-slate-400">Email</span>
              <input required type="email" name="email" value={form.email} onChange={update} className={input} autoComplete="email" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block text-slate-400">Message</span>
            <textarea required name="message" rows={5} value={form.message} onChange={update} className={`${input} resize-none`} />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "mailto" && <span className="text-slate-300">Your email app should open with the message ready to send.</span>}
              {status === "error" && (
                <span className="text-rose-400">
                  Couldn't send. Please email me at {profile.email}.
                </span>
              )}
            </p>
          </div>
        </form>
        )}
        </div>
      </div>
    </Section>
  );
}
