
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/HomePage'
import Tech from './components/Tech'
import About from './components/About'
import Art from './components/Art'
import Gallery from './components/Gallery'
import Writing from './components/Writing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/art" element={<Art />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
