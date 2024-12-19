/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peachypeach: "#FF6F61",
        peachybeige: "#FFF4E6",
        peachyblue: '#2A2D43',
        peachymint: '#A6D6B8',
        peachygray: '#595959',
      },
    },
  },
  plugins: [],
};
