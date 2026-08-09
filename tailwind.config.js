/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F5F2",
        card: "#FFFFFF",
        terra: "#C66A4E",
        "terra-light": "#D4846A",
        "terra-dark": "#A8543A",
        sage: "#7C9A74",
        "sage-light": "#96B18E",
        "sage-dark": "#608060",
        charcoal: "#2E2E2E",
        muted: "#777777",
        border: "#E8E4DD",
        cream: "#F0EBE3",
        warm: "#FAF8F5",
      },
      fontFamily: {
        editorial: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },
      boxShadow: {
        paper: "0 2px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.04)",
        card: "0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
        lift: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
        terra: "0 8px 24px rgba(198,106,78,0.25)",
        inset: "inset 0 2px 8px rgba(0,0,0,0.05)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        grain: {
          "0%, 100%": { backgroundPosition: "0 0" },
          "10%": { backgroundPosition: "-5% -10%" },
          "20%": { backgroundPosition: "-15% 5%" },
          "30%": { backgroundPosition: "7% -25%" },
          "40%": { backgroundPosition: "-5% 25%" },
          "50%": { backgroundPosition: "-15% 10%" },
          "60%": { backgroundPosition: "15% 0%" },
          "70%": { backgroundPosition: "0 15%" },
          "80%": { backgroundPosition: "3% 35%" },
          "90%": { backgroundPosition: "-10% 10%" },
        },
      },
      backgroundImage: {
        "grain-texture": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
