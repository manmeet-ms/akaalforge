import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate"),],
};
