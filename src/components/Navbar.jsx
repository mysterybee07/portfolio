import React, { useEffect, useRef, useState } from "react";
import { profile } from "../data";
import { Close, Download, Menu } from "./Icons.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const lockUntil = useRef(0); // while a clicked link is scrolling into place, keep it highlighted
  const target = useRef("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the link for the section under a line 35% down the screen.
    // Worked out from the scroll position on every scroll event, so fast smooth scrolls can't leave it stale.
    const pickActive = () => {
      if (Date.now() < lockUntil.current) return;
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.offsetTop <= line) current = l.href;
      }
      // At the very bottom, the last section wins even if it's short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = links[links.length - 1].href;
      setActive(current);
    };
    const onScrollActive = pickActive; // five offsetTop reads per scroll event: cheap enough to run directly
    pickActive();
    window.addEventListener("scroll", onScrollActive, { passive: true });
    window.addEventListener("resize", onScrollActive);
    // Release the hold only once the clicked section has actually arrived
    // (an interrupted scroll also fires "scrollend", and that one must not count).
    const onScrollEnd = () => {
      if (Date.now() >= lockUntil.current) return pickActive(); // no click in progress: just re-check
      const el = target.current && document.querySelector(target.current);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (el && Math.abs(el.getBoundingClientRect().top - 80) > 24 && !atBottom) return;
      lockUntil.current = 0;
      pickActive();
    };
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollActive);
      window.removeEventListener("resize", onScrollActive);
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open ? "border-b border-ink-700 bg-ink-950/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm text-white" onClick={() => setOpen(false)}>
          <span className="text-gopher">~/</span>biraj<span className="text-slate-500">.go</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                lockUntil.current = Date.now() + 4000; // released early by "scrollend" once the section arrives
                target.current = l.href;
                setActive(l.href);
              }}
              aria-current={active === l.href ? "location" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition hover:text-white ${
                active === l.href ? "bg-ink-800 text-white" : "text-slate-400"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost ml-3 !py-1.5">
            Résumé <Download width={16} height={16} />
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="container-x flex flex-col gap-1 pb-5 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-slate-200 hover:bg-ink-800">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 justify-center">
            Download résumé <Download width={16} height={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
