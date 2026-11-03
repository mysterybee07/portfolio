import React from "react";

const base = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true };

export const GitHub = (p) => (
  <svg {...base} {...p} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const LinkedIn = (p) => (
  <svg {...base} {...p} fill="currentColor">
    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.07 20.45H3.45V9.05h3.62v11.4zM5.26 7.63a2.1 2.1 0 1 1 0-4.21 2.1 2.1 0 0 1 0 4.2zm15.19 12.82h-3.61v-5.67c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.98v5.78H9.18V9.05h3.47v1.56h.05c.48-.92 1.66-1.88 3.43-1.88 3.67 0 4.34 2.42 4.34 5.55v6.17z" />
  </svg>
);

const stroke = { ...base, fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const Mail = (p) => (
  <svg {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Download = (p) => (
  <svg {...stroke} {...p}>
    <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg {...stroke} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const MapPin = (p) => (
  <svg {...stroke} {...p}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Menu = (p) => (
  <svg {...stroke} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p) => (
  <svg {...stroke} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
