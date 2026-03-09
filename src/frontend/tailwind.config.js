/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        gold: {
          50: "oklch(var(--gold-50))",
          100: "oklch(var(--gold-100))",
          400: "oklch(var(--gold-400))",
          500: "oklch(var(--gold-500))",
          600: "oklch(var(--gold-600))",
        },
        teal: {
          50: "oklch(var(--teal-50))",
          100: "oklch(var(--teal-100))",
          500: "oklch(var(--teal-500))",
          600: "oklch(var(--teal-600))",
          700: "oklch(var(--teal-700))",
          800: "oklch(var(--teal-800))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 2px 8px oklch(0.3 0.04 200 / 0.1), 0 1px 2px oklch(0.3 0.04 200 / 0.08)",
        hero: "0 20px 60px oklch(0.3 0.04 200 / 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
