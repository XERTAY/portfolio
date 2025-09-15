// vite.config.cjs
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Chemin de base pour GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
