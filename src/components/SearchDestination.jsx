import { useState } from "react"
import Navbar from "./Navbar"

const SearchDestination = () => {
  const [selectedOption, setSelectedOption] = useState("Flight")
  const [tripType, setTripType] = useState("One-Way")

  const travelOptions = [
    { icon: "/flight.svg", label: "Flight" },
    { icon: "/hotel.svg", label: "Hotel" },
    { icon: "/cab.svg", label: "Cab" },
    { icon: "/train.svg", label: "Train" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001233]">
      {/* Navbar */}
      <Navbar isLight={false}/>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 m-4 sm:m-10">
        {/* Content with Gradient Border Background */}
        <div
          className="relative w-full flex flex-col items-center"
          style={{
            background: `url(/bg-gradient.svg)`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "2rem 2rem 10rem 2rem",
          }}
        >
          {/* w-full sm:w-[70%] mx-auto relative rounded-[22px] p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-md */}
          <div
            className="w-full sm:w-[70%] mx-auto relative rounded-[15px] p-6 mt-10 backdrop-blur-md"
            style={{
              background: `url(/backItems.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10">
              <div className="grid grid-cols-2 sm:flex sm:justify-around items-center gap-4">
                {travelOptions.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer  mt-4 md:mt-0"
                    onClick={() => setSelectedOption(item.label)}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                      <img src={item.icon || "/placeholder.svg"} alt={item.label} className="w-12 h-12 sm:w-16 sm:h-16" />
                    </div>
                    <span
                      className={`text-white text-base sm:text-lg ${selectedOption === item.label ? "opacity-100" : "opacity-70"}`}
                    >
                      {item.label}
                    </span>
                    <div
                      className={`
                        absolute -bottom-6 h-2 w-24 sm:w-32 rounded-t-xl transition-all duration-300
                      ${selectedOption === item.label ? 'bg-white scale-100' : 'bg-transparent scale-0'}
                  `}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trip Type Selection */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 mt-4">
            {["One-Way", "Round Trip", "Multi City"].map((type) => (
              <button key={type} onClick={() => setTripType(type)} className="flex items-center gap-2 text-white text-sm sm:text-base">
                <div
                  className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${tripType === type ? "border-[#00FF85]" : "border-white/50"}
                `}
                >
                  {tripType === type && <div className="w-4 h-4 rounded-full bg-[#00FF85]" />}
                </div>
                <span className={tripType === type ? "text-white" : "text-white/70"}>{type}</span>
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-4">
            {/* Left Section - 70% */}
            <div className="w-full lg:w-[70%]">
              {/* From-To Section */}
              {/* flex flex-col sm:flex-row bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 */}
              <div className="flex flex-col sm:flex-row bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-white/70">
                <div className="flex flex-col sm:flex-row justify-between w-full gap-6">
                  {/* From */}
                  <div>
                    <label className="text-white/60 block">From</label>
                    <div className="text-white">
                      <div className="text-4xl sm:text-6xl font-light">Delhi</div>
                      <div className="text-white/60 text-sm sm:text-base">DEL, Delhi Airport India</div>
                    </div>
                  </div>

                  {/* Exchange Icon */}
                  <div className="flex items-center justify-center">
                    <img src="/exchange.svg" alt="Exchange" className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>

                  {/* To */}
                  <div>
                    <label className="text-white/60 block">To</label>
                    <div className="text-white">
                      <div className="text-4xl sm:text-6xl font-light">Mumbai</div>
                      <div className="text-white/60 text-sm sm:text-base truncate">BOM, Chhatrapati Shivaji Inter...</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Travelers Section */}
              <div className="flex flex-col sm:flex-row bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-white/70">
                <div className="flex flex-col sm:flex-row justify-between w-full gap-6">
                  {/* Departure */}
                  <div className="cursor-pointer">
                    <label className="text-white/60 flex items-center gap-2">
                      Departure
                      <span className="text-[#00FF85]">▼</span>
                    </label>
                    <div className="text-white">
                      <div>
                        <span className="text-6xl font-light">25</span>
                        <span className="text-2xl ml-2">Jun'24</span>
                      </div>
                      <div className="text-white/60">Tuesday</div>
                    </div>
                  </div>

                  {/* Travelers & Class */}
                  <div className="cursor-pointer">
                    <label className="text-white/60 flex items-center gap-2 text-sm sm:text-base">
                      Travellers & Class
                      <span className="text-[#00FF85]">▼</span>
                    </label>
                    <div className="text-white">
                      <div>
                        <span className="text-4xl sm:text-6xl font-light">1</span>
                        <span className="text-xl sm:text-2xl ml-2">Traveller</span>
                      </div>
                      <div className="text-white/60 text-sm sm:text-base">Economy/Premium Economy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Filters - 30% */}
            <div className="w-full lg:w-[30%]">
              <h3 className="text-white text-lg sm:text-xl mb-4">Filters</h3>
              <div className="space-y-3">
                {["Non-Stop", "1 Stop", "Morning Departures", "Late Departures"].map((filter, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        id={`filter-${index}`}
                        className="peer appearance-none w-5 h-5 border border-white/50 rounded-sm bg-transparent 
                                 checked:border-none checked:bg-gradient-to-r checked:from-[#1BC8FF] checked:to-[#2ADB87]
                                 cursor-pointer transition-all duration-200"
                        defaultChecked={index === 0}
                      />
                      <svg
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 hidden peer-checked:block pointer-events-none"
                        viewBox="0 0 17 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 6L6 11L16 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <label htmlFor={`filter-${index}`} className="text-white cursor-pointer">
                      {filter}
                    </label>
                  </div>
                ))}
                <button className="text-[#00FF85] mt-2 flex items-center gap-1">
                  Show More <span>▼</span>
                </button>
              </div>

              {/* Search Button */}
              <button className="w-full px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] 
                               rounded-xl text-black text-lg sm:text-xl mt-6 sm:mt-8 
                               flex items-center justify-center gap-2 font-medium">
                Search
                <img src="/arrow-right.svg" alt="Search" className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDestination;
