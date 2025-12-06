/** @type {import('tailwindcss').Config} */
// @ts-nocheck

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#E1C16E",
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
        },
        charcoal: "#2E2E2E",
        offwhite: "#F2F2F2",
        textDark: "#333333",
        textMuted: "#666666",
    
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
    
      backgroundImage: function({ theme }) {
        return {
          'gold-gradient': `linear-gradient(to right, ${theme('colors.gold.DEFAULT')}, ${theme('colors.gold.dark')})`,
          'gold-gradient-light': `linear-gradient(to right, ${theme('colors.gold.light')}, ${theme('colors.gold.DEFAULT')})`,
          'bg-img-1': "url('/img-1.png')",
          'bg-img-2': "url('/img-2.png')",
          'feature-bg': "url('/feature-bg.png')",
          pattern: "url('/pattern.png')",
          'pattern-2': "url('/pattern-bg.png')",
        };
      },  // ✅ Add this comma!
      
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      
    
      maxWidth: {
        '10xl': '1512px',
      },
    
      borderRadius: {
        '5xl': '40px',
      },
    
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
        cairo: ["var(--font-cairo)"],
      },
    },
    
  },
  plugins: [],
};
