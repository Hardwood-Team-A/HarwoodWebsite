import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
