import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Hotel from './components/Hotel'
import Tour from './components/Tour'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/tours' element={<Tour />} />
          <Route path='/blogs' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
