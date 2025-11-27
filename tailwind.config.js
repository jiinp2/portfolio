/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          dark: '#4ade80',
          'dark-hover': '#86efac',
        },
        kobo: '#a13d00',
        skiin: '#9dd1e8',
        rabbu: {
          DEFAULT: '#c9bae6',
          dark: '#623d92',
        },
        maison: '#1d293d',
        text: {
          DEFAULT: '#1a1a1a',
          light: '#6b7280',
          muted: '#4b5563',
          // Dark mode text colors
          'dark': '#ffffff',
          'dark-light': '#b3b3b3',
          'dark-muted': '#999999',
        },
        bg: {
          DEFAULT: '#ffffff',
          light: '#fcfcfc',
          gray: '#f9fafb',
          // Dark mode backgrounds
          dark: '#0a0a0a',
          'dark-elevated': '#171717',
          'dark-card': '#0f0f0f',
        },
        border: {
          DEFAULT: '#e9ecef',
          light: '#e5e7eb',
          dark: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.8125rem',    // 13px
        base: '0.875rem',   // 14px - Base body text size
        lg: '1rem',         // 16px
        xl: '1.125rem',     // 18px
        '2xl': '1.25rem',   // 20px
        '3xl': '1.5rem',    // 24px
        '4xl': '1.75rem',   // 28px
        '5xl': '2rem',      // 32px
        '6xl': '2.5rem',    // 40px
        label: '0.875rem',  // 14px - For section labels
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.4',
        relaxed: '1.5',
        loose: '1.75',
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '-0.01em',
        wide: '0.02em',
      },
      boxShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)',
        hover: '0 8px 25px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
