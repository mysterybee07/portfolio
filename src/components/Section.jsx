import React from "react";

export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`py-14 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {intro && <p className="mt-4 text-slate-400 leading-relaxed">{intro}</p>}
        </div>
        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
