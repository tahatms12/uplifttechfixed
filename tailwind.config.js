/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rich-black': '#0D0D0F',
        'deep-purple': '#280059',
        'electric-violet': '#9B1DFF',
        'base': '#FFFFFF',
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        violet: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        fuchsia: {
          50: '#FDF2F8',
          100: '#FCE7F6',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#701A45',
        },
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter-var': ['Inter var', { fontFeatureSettings: '"cv11", "ss01"' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(155, 29, 255, 0.3)',
        'focus': '0 0 0 3px rgba(155, 29, 255, 0.5)',
      },
      
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
  }
};