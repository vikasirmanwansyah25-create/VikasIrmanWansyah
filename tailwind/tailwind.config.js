/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          light: '#A78BFA',
          lighter: '#EDE9FE',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 10s ease-in-out infinite reverse',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'fade-in-down': 'fadeInDown 0.6s ease',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, 30px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
