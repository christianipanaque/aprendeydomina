/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}", // Include custom global styles (optional)
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cyber-black": "#0a0a0a",
        "cyber-gray": "#1a1a1a",
        "cyber-white": "#ffffff",
        "cyber-teal": {
          100: "#e6fcf5",
          200: "#b3f5e5",
          300: "#80edd6",
          400: "#4de6c6",
          500: "#1adeb7",
          600: "#13b497",
          700: "#0e8a77",
          800: "#095f57",
          900: "#053537",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
