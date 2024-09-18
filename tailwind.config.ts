import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0566F8",
        "primary-blue-lighter": "#09B5F8",
        "primary-blue-darker": "#022C6B",
        "primary-gray-th1": "#D9D9D9",
      },
      boxShadow: {
        register: "6px 6px 0 0px rgba(255, 255, 255, 0.2)",
        "register-blue": "6px 6px 0 0px rgba(9, 181, 248, 0.2)",
        "register-blue-dark": "6px 6px 0 0px rgba(9, 181, 248, 1)",
      },
      backgroundImage: {
        "course-card": "url('/bgCourseCard.svg')",
        "course-card-hover": "url('/bgCourseCardHover.svg')",
      },
      rotate: {
        "20": "20deg",
      },
      transitionDuration: {
        '800': '800ms',
      }
    },
  },
  plugins: [],
};
export default config;
