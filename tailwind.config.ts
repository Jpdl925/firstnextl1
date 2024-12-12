import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  // vvv Required for adding daisyUI library vvv
  plugins: [require('daisyui'),],
  // vvv Adding theme for page vvv
  daisyui: {
    themes: ["winter"],
  },
} satisfies Config;
