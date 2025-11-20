import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Artists from './pages/Artists.jsx'
import Description from './pages/Description.jsx'

function App() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem' }} id="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/artists">Artists</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/Description" element={<Description />} />
      </Routes>
    </div>
  )
}

export default App
