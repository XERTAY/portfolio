// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: { cyan: '#00FFFF', pink: '#FF007F' },
      },
      dropShadow: {
        'neon-cyan': ['0 0 8px rgb(0,255,255)', '0 0 16px rgb(0,255,255)'],
        'neon-pink': ['0 0 8px rgb(255,0,127)', '0 0 16px rgb(255,0,127)'],
      },
    },
  },
  plugins: [],
}
