/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff00c8", // Magenta
        secondary: "#00e5ff", // Aqua
        neon: "#39ff14", // Neon green
        dark: "#0a0a0a",
        "dark-gray": "#161616",
        "light-gray": "#e0e0e0",
      },
      fontFamily: {
        primary: ["Syne", "sans-serif"],
        secondary: ["Syncopate", "sans-serif"],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'glitch-2': 'glitch2 2s infinite reverse',
        'rotate': 'rotate 20s infinite linear',
        'pulse': 'pulse 1.5s infinite alternate',
        'bounce-logo': 'bounceLogo 3s ease-in-out infinite',
        'shine': 'shine 6s infinite',
        'star-fall': 'star-fall 5s linear forwards',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-parallax': 'float-parallax 8s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        'star-fall': {
          '0%': { transform: 'translateY(0)', opacity: 'var(--star-opacity)' },
          '100%': { transform: 'translateY(calc(100vh + 5px))', opacity: '0' },
        },
        'orbit': {
          'from': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(255, 165, 0, 0.5), 0 0 30px rgba(255, 69, 0, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 165, 0, 0.7), 0 0 60px rgba(255, 69, 0, 0.5)',
            transform: 'scale(1.05)'
          },
        },
        'float-parallax': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(10px)' },
          '75%': { transform: 'translateY(-15px) translateX(-5px)' },
        },
        'star-fall': {
          '0%': { transform: 'translateY(0)', opacity: 'var(--star-opacity)' },
          '100%': { transform: 'translateY(calc(100vh + 5px))', opacity: '0' },
        },
        'orbit': {
          'from': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(255, 165, 0, 0.5), 0 0 30px rgba(255, 69, 0, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 165, 0, 0.7), 0 0 60px rgba(255, 69, 0, 0.5)',
            transform: 'scale(1.05)'
          },
        },
        'float-parallax': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(10px)' },
          '75%': { transform: 'translateY(-15px) translateX(-5px)' },
        },
        glitch2: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(5px, -5px)' },
          '40%': { transform: 'translate(5px, 5px)' },
          '60%': { transform: 'translate(-5px, -5px)' },
          '80%': { transform: 'translate(-5px, 5px)' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        pulse: {
          'from': { 
            transform: 'scale(0.9)',
            boxShadow: '0 0 0 rgba(255, 43, 81, 0.7)' 
          },
          'to': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(255, 43, 81, 0.7)' 
          },
        },
        bounceLogo: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-15px) rotate(-3deg)' },
          '60%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        shine: {
          '0%': { left: '-100%', top: '-100%' },
          '50%': { left: '100%', top: '100%' },
          '100%': { left: '-100%', top: '-100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
