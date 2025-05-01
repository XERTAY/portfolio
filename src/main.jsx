import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // ✅ important pour appliquer le style global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
