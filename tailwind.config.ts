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
        // your “semantic” roots
        foreground: "var(--foreground)",
        background: "var(--background)",

        // friendly token names
        primary: "var(--token-99c2a2fb-c572-4a21-9b3a-79ca65ab414d)",
        secondary: "var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5)",
        muted: "var(--token-d7b88326-9838-4802-9e55-50d3b1d9ab1d)",
        accent: "var(--token-c9e7eeec-7da0-48c8-bfa7-17b18f22efa9)",
        base: "var(--token-1a2fc921-6bcf-4d82-a9d0-51735ebaf544)",
        black: "var(--token-44d5c8f7-feff-4b06-8988-2ddeb757558d)",
        link: "var(--token-c8f43398-7fa9-473b-9530-f3acd8077657)",
        borderC: "var(--border-color)",
        listC: "var(--list-color)",
        // any others you need…
      },
      fontFamily: {
        koulen: ["Koulen", "sans-serif"],
        pinyonscript: ["PinyonScript", "serif"],
        robotomono: ["RobotoMono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
export default config;
