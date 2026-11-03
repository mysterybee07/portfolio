import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">
          <a href="#top" className="hover:text-gopher">back to top ↑</a>
        </p>
      </div>
    </footer>
  );
}
