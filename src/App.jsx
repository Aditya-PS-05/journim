import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchDestination from './components/SearchDestination'
import './App.css'
import MeetFounders from './components/MeetFounders'
import Services from './components/Services'
import Planning from './components/Planning'
import StateDetails from './components/StateDetails'
import CityPlanner from './components/CityPlanner'
import TripItinerary from './components/TripItinerary'
import TripDetails from './components/TripDetails'
import HotelBooking from './components/HotelBooking'
import RideBooking from './components/RideBooking'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <img 
        src="/home-bg.svg" 
        alt="" 
        className="fixed inset-0 w-full h-full object-cover"
        aria-hidden="true"
        loading='lazy'
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/searchdestination" element={<SearchDestination />} />
            <Route path="/founders" element={<MeetFounders />} />
            <Route path="/services" element={<Services />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/state/:stateId" element={<StateDetails />} />
            <Route path="/city-planner/:stateId/:cityId" element={<CityPlanner />} />
            <Route path="/trip-itinerary" element={<TripItinerary />} />
            <Route path="/trip-details" element={<TripDetails />} />
            <Route path="/hotel_booking" element={<HotelBooking />} />
            <Route path="/ride_booking" element={<RideBooking />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App