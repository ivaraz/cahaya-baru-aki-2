import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#fed7d7',
          500: '#e53e3e',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
        },
        accent: {
          orange: '#ea580c',
          amber: '#f59e0b',
        },
        charcoal: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
        whatsapp: {
          500: '#25D366',
          600: '#128C7E',
          700: '#075E54',
        }
      },
    },
  },
  plugins: [],
};
export default config;
