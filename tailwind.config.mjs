/**
 * Brand tokens for ogisetiawan.github.io
 *
 * Fonts: Astro Fonts API → CSS vars (--font-fraunces, --font-body, --font-mono)
 * wired in src/styles/global.css via @theme inline.
 * Colors: also defined in global.css @theme.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: "#26262d",
        surface: "#31313a",
        border: "#3e4148",
        page: "#f4f5ef",
        elevated: "#fafbf6",
        accent: {
          DEFAULT: "#a7d129",
          50: "#f4fbe6",
          100: "#e8f7c4",
          200: "#d4ef8f",
          300: "#c0e55c",
          400: "#b5dc3f",
          500: "#a7d129",
          600: "#8fb322",
          700: "#76961c",
          800: "#5c7516",
          900: "#455712",
          950: "#2a360a",
        },
      },
    },
  },
};
