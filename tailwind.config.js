/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#07090d", 900: "#0b0f15", 850: "#10151d", 800: "#151b25", 700: "#1f2733", 600: "#2b3544" },
        gopher: { DEFAULT: "#00ADD8", 300: "#5fd4f0", 400: "#2cc3e8", 600: "#0089ab" },
        signal: "#7ee787",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
