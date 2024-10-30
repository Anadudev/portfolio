import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile-sm": "320px",
      mobile: "360px",
      "mobile-lg": "375px",
      "mobile-xlg": "414px",
      "tablet-sm": "768px",
      tablet: "834px",
      "tablet-lg": "1024px",
      "pc-sm": "1280px",
      pc: "1366px",
      "pc-lg": "1440px",
      "pc-xlg": "1920px",
    },
    extend: {
      keyframes: {
        "shake-r": {
          "0%": {
            transform: "translateX(15px)",
          },
          "25%": {
            transform: "translateX(-15px)",
          },
          "50%": {
            transform: "translateX(6px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        "shake-l": {
          "0%": {
            transform: "translateX(-15px)",
          },
          "25%": {
            transform: "translateX(15px)",
          },
          "50%": {
            transform: "translateX(-6px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        "drop-in": {
          "0%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -20px, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%, 100%": {
            opacity: "0",
            transform: "translate3d(0, -20px, 0)",
          },
        },
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "blur-to-clear": {
          "0%": {
            filter: "blur(20px)",
          },
          "100%": {
            filter: "blur(0px)",
          },
        },
        "grow-to-right": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "shake-r": "shake-r .5s ease-out",
        "shake-l": "shake-l .5s ease-out",
        "drop-in": "drop-in .2s ease-out",
        "fade-in": "fade-in .7s ease-out",
        "blur-to-clear": "blur-to-clear .7s ease-out",
        "grow-to-right": "grow-to-right .7s",
        "infinite-scroll-left": "infinite-scroll-left 25s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 25s linear infinite",
        "fade-in-down": "fade-in-down .5s ease-out",
        "fade-out-up": "fade-out-up .5s ease-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8ed520",
        "primary-shadow": "#3f6212",
        "text-white": "#fafafa",
        white: "#ffffff",
      },
      boxShadow: {
        lg: " 0 10px 20px -3px rgba(142, 213, 32, 0.15)",
        "3xl": " 35px 60px -20px rgba(142, 213, 32, 0.15)",
      },
      dropShadow: {
        lg: [
          "0 0 2px rgba(0, 0, 0,  0.2)",
          "0 5px 3px rgba(142, 213, 32, 0.7)",
          "0 4px 2px rgba(142, 213, 32, 0.25)",
        ],
        xl: [
          "0 0 2px rgba(0, 0, 0,  0.2)",
          "0 10px 7px rgba(142, 213, 32, 0.7)",
          "0 5px 3px rgba(142, 213, 32, 0.25)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
