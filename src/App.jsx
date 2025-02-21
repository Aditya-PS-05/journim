import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchDestination from './components/SearchDestination'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MeetFounders from './components/MeetFounders'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <img 
        src="/home-bg.svg" 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/searchdestination" element={<SearchDestination />} />
            <Route path="/founders" element={<MeetFounders />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App