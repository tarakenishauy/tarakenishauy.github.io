import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/navbar'

import home from '../src/components/home'
import projects from '../src/components/portfolio'
import contact from '../src/components/contact'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/projects" element={<portfolio />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
