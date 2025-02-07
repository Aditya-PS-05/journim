import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const SearchDestination = () => {
    const travelOptions = [
      { icon: '/flight.svg', label: 'Flight' },
      { icon: '/hotel.svg', label: 'Hotel' },
      { icon: '/cab.svg', label: 'Cab' },
      { icon: '/train.svg', label: 'Train' }
    ]
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-[#001233] px-4">
        <Navbar />
        {/* Back Button */}
        <Link to="/" className="text-white p-4 inline-block">
          <img src="/back-arrow.svg" alt="Back" className="w-6 h-6" />
        </Link>
  
        {/* Main Content */}
        <div className="max-w-6xl mx-auto mt-8">
          {/* Travel Options */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <div className="flex justify-around">
              {travelOptions.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-white">
                  <div className="p-0 border-none">
                    <img src={item.icon} alt={item.label} className="w-20 h-20" />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Trip Type Selection */}
          <div className="flex gap-4 mb-8">
            {['One-Way', 'Round Trip', 'Multi City'].map((type, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-white ${
                  index === 0 ? 'bg-[#00FF85] text-black' : 'bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
  
          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            {/* From-To Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-white/60 mb-2 block">From</label>
                <input
                  type="text"
                  defaultValue="Delhi"
                  className="w-full bg-transparent text-white text-3xl font-light focus:outline-none"
                />
                <span className="text-white/60 text-sm">DEL, Delhi Airport India</span>
              </div>
              <div className="relative">
                <label className="text-white/60 mb-2 block">To</label>
                <input
                  type="text"
                  defaultValue="Mumbai"
                  className="w-full bg-transparent text-white text-3xl font-light focus:outline-none"
                />
                <span className="text-white/60 text-sm">BOM, Chhatrapati Shivaji Inter...</span>
                {/* Exchange Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img src="/exchange.svg" alt="Exchange" className="w-8 h-8" />
                </div>
              </div>
            </div>
  
            {/* Date and Travelers Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="cursor-pointer">
                <label className="text-white/60 mb-2 block">Departure</label>
                <div className="text-white">
                  <span className="text-4xl">25</span>
                  <span className="ml-2">Jun'24</span>
                  <div className="text-white/60">Tuesday</div>
                </div>
              </div>
              <div className="cursor-pointer">
                <label className="text-white/60 mb-2 block">Travellers & Class</label>
                <div className="text-white">
                  <span className="text-4xl">1</span>
                  <span className="ml-2">Traveller</span>
                  <div className="text-white/60">Economy/Premium Economy</div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Filters Section */}
          <div className="mt-8">
            <h3 className="text-white text-xl mb-4">Filters</h3>
            <div className="space-y-2">
              {['Non-Stop', '1 Stop', 'Morning Departures', 'Late Departures'].map((filter, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-[#00FF85] rounded-sm border-white/20"
                    defaultChecked={index === 0}
                  />
                  <span className="text-white">{filter}</span>
                </div>
              ))}
              <button className="text-[#00FF85] mt-2">Show More</button>
            </div>
          </div>
  
          {/* Search Button */}
          <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:150%_100%] rounded-xl text-black text-xl font-['Neight'] mt-8 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Search
            <img src="/arrow-right.svg" alt="Search" className="w-6 h-6" />
          </button>
        </div>
      </div>
    )
  }
  
  export default SearchDestination