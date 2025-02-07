import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchDestination from './components/SearchDestination'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img 
        src="/home-bg.svg" 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchdestination" element={<SearchDestination />} />
        </Routes>
      </div>
    </div>
  )
}

export default App