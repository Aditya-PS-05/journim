import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchDestination from './components/SearchDestination'
import './App.css'
import MeetFounders from './components/MeetFounders'
import Services from './components/Services'
import Planning from './components/Planning'
import StateDetails from './components/StateDetails'
import CityPlanner from './components/CityPlanner'

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
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/searchdestination" element={<SearchDestination />} />
            <Route path="/founders" element={<MeetFounders />} />
            <Route path="/services" element={<Services />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/state/:stateId" element={<StateDetails />} />
            <Route path="/city-planner/:stateId/:cityId" element={<CityPlanner />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App