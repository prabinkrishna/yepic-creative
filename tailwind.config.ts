import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        elev: "0 1px 1px rgba(255,255,255,0.04) inset, 0 8px 24px rgba(0,0,0,0.35)",
      },
      keyframes: {
        marquee: { 
          "0%": { transform: "translateX(0%)" }, 
          "100%": { transform: "translateX(-50%)" } 
        },
        "marquee-continuous": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" }
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        "marquee-continuous": "marquee-continuous 20s linear infinite",
      },
      // Override container to remove centering and max-width constraints
      container: {
        center: false,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem", 
          lg: "2rem"
        },
        screens: {
          sm: "100%",
          md: "100%", 
          lg: "100%",
          xl: "100%",
          "2xl": "100%"
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;