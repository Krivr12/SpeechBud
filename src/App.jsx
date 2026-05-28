// ==========================================
// APP - Root component: defines all routes
// ==========================================
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Pricing from './pages/Pricing/Pricing'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    // ==========================================
    // LAYOUT WRAPPER - Flex column so footer sticks to bottom
    // ==========================================
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">

      {/* Sticky Navbar rendered on every page */}
      <Navbar />

      {/* ==========================================
          MAIN CONTENT - Route outlet
          ========================================== */}
      <main className="flex-grow">
        <Routes>
          {/* Home / Landing page */}
          <Route path="/" element={<Home />} />

          {/* Pricing page */}
          <Route path="/pricing" element={<Pricing />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer rendered on every page */}
      <Footer />
    </div>
  )
}

export default App
