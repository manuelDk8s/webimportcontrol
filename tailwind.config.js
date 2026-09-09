/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#107C10',
        success: '#107C10',
        warning: '#B45E00',
        danger: '#C93434',
        info: '#0078D4',
        surface: '#FFFFFF',
        border: '#E8E6E4',
        page: '#F3F6F2',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        card: '10px',
        feature: '14px',
        mock: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,26,26,0.05), 0 8px 24px rgba(26,26,26,0.04)',
        'card-hover': '0 4px 16px rgba(26,26,26,0.07), 0 12px 32px rgba(26,26,26,0.05)',
        'mock': '0 2px 8px rgba(26,26,26,0.06), 0 16px 40px rgba(26,26,26,0.08)',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-slide': 'fadeSlide 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
};
