import React from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
