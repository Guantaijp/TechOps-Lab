import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tech from './components/Tech'
import About from './components/About'
import Art from './components/Art'
import Gallery from './components/Gallery'
import Writing from './components/Writing'
import Footer from './components/Footer'
import HomePage from './components/HomePage'

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
