import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0A0A0A", // Very dark background
          card: "#1A1A1A", // Slightly lighter for cards
          accent: "#A31B1B", // Deep red for emotional accents
          text: "#E0E0E0", // Light gray for main text
          "text-light": "#A0A0A0", // Lighter gray for secondary text
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair-display)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
