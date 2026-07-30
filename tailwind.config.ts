import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0d1a2b",
        line: "#22364f",
        electric: "#7c5cff",
        cyanline: "#38d5ff"
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 92, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
