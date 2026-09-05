/**
 * Brand color palette for ogisetiawan.github.io
 * (legacy dark theme: #26262d + lime accent #a7d129)
 *
 * Tailwind v4 applies these via @theme in src/styles/global.css.
 * Keep both files in sync when changing tokens.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "sans-serif"],
        heading: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        // Dark canvas (legacy dark.css)
        background: "#26262d",
        surface: "#31313a",
        border: "#3e4148",
        // Light canvas — soft sage undertone for accent #a7d129
        page: "#f4f5ef",
        elevated: "#fafbf6",
        // Brand lime (legacy green.css)
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
      // gray-50/100/800/900 remapped in src/styles/global.css @theme
    },
  },
};
