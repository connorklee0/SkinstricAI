import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // project uses app/, components/, hooks/, library/ at root instead of src/
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./library/**/*.{js,ts,jsx,tsx,mdx}",
    // include any other folders that contain Tailwind classes
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "ellipsis-bounce": {
          "0%, 60%, 100%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-8px)",
          },
        },
      },
      animation: {
        "ellipsis-bounce": "ellipsis-bounce 1.4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
