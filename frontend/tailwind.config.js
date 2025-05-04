module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'galaxy': '#0a0e17',
          'void': '#1a1f2c',
          'cyber': '#00ff88',
          'neon': '#00ffff',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }
      },
    },
    plugins: [],
  }