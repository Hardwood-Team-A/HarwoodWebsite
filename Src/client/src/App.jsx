import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Artists from './pages/Artists.jsx'
import Description from './pages/Description.jsx'

function App() {
  const location = useLocation()

  return (
    <div>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/Description" element={<Description />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
