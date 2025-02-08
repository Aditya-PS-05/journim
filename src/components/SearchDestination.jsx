// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from './Navbar';
// const SearchDestination = () => {
//   const [selectedOption, setSelectedOption] = useState('Flight')
//   const [tripType, setTripType] = useState('One-Way')


//   const travelOptions = [
//     { icon: '/flight.svg', label: 'Flight' },
//     { icon: '/hotel.svg', label: 'Hotel' },
//     { icon: '/cab.svg', label: 'Cab' },
//     { icon: '/train.svg', label: 'Train' }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-[#001233] px-4">
//       <Navbar />

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto mt-8">
//         {/* Travel Options Container */}
//         <div className="w-[70%] mx-auto relative rounded-[22px] p-6 mb-8 bg-[#1A1A1A]/40 backdrop-blur-md"
//           style={{
//             background: `url(/backItems.svg)`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//           }}
//         >

//           {/* Content */}
//           <div className="relative z-10">
//             <div className="flex justify-around items-center">
//               {travelOptions.map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative flex flex-col items-center cursor-pointer group"
//                   onClick={() => setSelectedOption(item.label)}
//                 >
//                   {/* Icon Container */}
//                   <div className={`
//                                   w-20 h-20 flex items-center justify-center mb-2
//                                   transition-all duration-300
                                 
//                                 `}>
//                     <img
//                       src={item.icon}
//                       alt={item.label}
//                       className="w-20 h-20"
//                     />
//                   </div>

//                   {/* Label */}
//                   <span className={`
//                                   text-white text-lg font-medium
//                                   ${selectedOption === item.label ? 'opacity-100' : 'opacity-80'}
//                                 `}>
//                     {item.label}
//                   </span>

//                   {/* Selection Indicator */}
//                   <div className={`
//                                   absolute -bottom-6 h-2 w-32 rounded-t-xl transition-all duration-300
//                                   ${selectedOption === item.label
//                       ? 'bg-white/80 scale-100'
//                       : 'bg-transparent scale-0'
//                     }
//                                 `} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Trip Type Selection */}
//         <div className="flex gap-6 mb-8">
//           {['One-Way', 'Round Trip', 'Multi City'].map((type) => (
//             <button
//               key={type}
//               onClick={() => setTripType(type)}
//               className="flex items-center gap-2 text-white"
//             >
//               <div className={`
//               w-6 h-6 rounded-full border-2 flex items-center justify-center
//               ${tripType === type
//                   ? 'border-[#00FF85]'
//                   : 'border-white/50'
//                 }
//             `}>
//                 {tripType === type && (
//                   <div className="w-4 h-4 rounded-full bg-[#00FF85]" />
//                 )}
//               </div>
//               <span className={`
//               ${tripType === type ? 'text-white' : 'text-white/70'}
//             `}>
//                 {type}
//               </span>
//             </button>
//           ))}
//         </div>

//         <div className='w-full flex justify-between gap-4 p-10'>
//           <div className='w-[70%]'>
//             {/* From-To Section */}
//             <div className="flex backdrop-blur-md rounded-2xl p-6 mb-8 border-[1px] border-white/50">
//               <div className="flex justify-between w-full">
//                 {/* From */}
//                 <div>
//                   <label className="text-white/60 block">From</label>
//                   <div className="text-white ">
//                     <div className="text-6xl">DEL</div>
//                     <div className="text-white/60">New Delhi, India</div>
//                   </div>
//                 </div>

//                 {/* Exchange Icon */}
//                 <div className="hidden md:flex items-center justify-center">
//                   <img src="/exchange.svg" alt="Exchange" className="w-12 h-12" />
//                 </div>

//                 {/* To */}
//                 <div>
//                   <label className="text-white/60 block">To</label>
//                   <div className="text-white">
//                     <div className="text-6xl">BOM</div>
//                     <div className="text-white/60">Mumbai, India</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Date & Travelers Section */}
//             <div className=" backdrop-blur-md rounded-2xl p-6 mb-8 border-[1px] border-white/50">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Departure */}
//                 <div className="cursor-pointer">
//                   <div className='flex items-center gap-2'>
//                     <label className="text-white/60 mb-2 block">Departure</label>
//                     <img src="/arrow-up.svg" alt="arrow-up" className='w-4 h-4 mt-[-10px]' />
//                   </div>
//                   <div className="text-white">
//                     <div className="text-4xl">24</div>
//                     <div className="text-white/60">July 2024, Monday</div>
//                   </div>
//                 </div>

//                 {/* Travelers & Class */}
//                 <div className="cursor-pointer">
//                   <div className='flex items-center gap-2'>
//                     <label className="text-white/60 mb-2 block">Travellers & Class</label>
//                     <img src="/arrow-up.svg" alt="arrow-up" className='w-4 h-4 mt-[-10px]' />
//                   </div>
//                   <div className="text-white">
//                     <span className="text-4xl">1</span>
//                     <span className="ml-2">Traveller</span>
//                     <div className="text-white/60">Economy/Premium Economy</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Filters Section */}
//           <div className="w-[20%]">
//             <h3 className="text-white text-xl mb-4">Filters</h3>
//             <div className="space-y-3">
//               {['Non-Stop', '1 Stop', 'Morning Departures', 'Late Departures'].map((filter, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <div className="relative flex items-center">
//                     <input
//                       type="checkbox"
//                       id={`filter-${index}`}
//                       className="peer appearance-none w-5 h-5 border border-white/50 rounded-sm bg-transparent 
//                              checked:border-none checked:bg-gradient-to-r checked:from-[#1BC8FF] checked:to-[#2ADB87]
//                              cursor-pointer transition-all duration-200"
//                       defaultChecked={index === 0}
//                     />
//                     {/* Checkmark Icon */}
//                     <svg
//                       className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 hidden peer-checked:block pointer-events-none"
//                       viewBox="0 0 17 13"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M1 6L6 11L16 1"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </div>
//                   <label
//                     htmlFor={`filter-${index}`}
//                     className="text-white cursor-pointer"
//                   >
//                     {filter}
//                   </label>
//                 </div>
//               ))}
//               <button className="text-[#00FF85] mt-2 flex items-center gap-1">
//                 Show More <span>▼</span>
//               </button>
//             </div>

//             {/* Search Button */}
//             <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:150%_100%] rounded-xl text-black text-xl mt-8 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium">
//               Search
//               <img src="/arrow-right.svg" alt="Search" className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchDestination

import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchDestination = () => {
  const [selectedOption, setSelectedOption] = useState('Flight')
  const [tripType, setTripType] = useState('One-Way')

  const travelOptions = [
    { icon: '/flight.svg', label: 'Flight' },
    { icon: '/hotel.svg', label: 'Hotel' },
    { icon: '/cab.svg', label: 'Cab' },
    { icon: '/train.svg', label: 'Train' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001233]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-white text-3xl font-light">Journim</div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <img src="/luggage.svg" alt="My Trips" className="w-6 h-6" />
            <span>My Trips</span>
          </div>
          <button className="bg-white rounded-full px-6 py-2">
            Log In / Sign Up
          </button>
        </div>
      </nav>

      {/* Back Button */}
      <Link to="/" className="text-white p-6 inline-block">
        <img src="/back-arrow.svg" alt="Back" className="w-6 h-6" />
      </Link>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Travel Options Container */}
        <div className="w-[70%] mx-auto relative rounded-[22px] p-6 mb-8 bg-[#1A1A1A]/40 backdrop-blur-md"
          style={{
            background: `url(/backItems.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10">
            <div className="flex justify-around items-center">
              {travelOptions.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center cursor-pointer"
                  onClick={() => setSelectedOption(item.label)}
                >
                  <div className="w-20 h-20 flex items-center justify-center mb-2">
                    <img src={item.icon} alt={item.label} className="w-16 h-16" />
                  </div>
                  <span className={`text-white text-lg ${selectedOption === item.label ? 'opacity-100' : 'opacity-70'}`}>
                    {item.label}
                  </span>
                  <div className={`
                    absolute -bottom-6 h-2 w-32 rounded-t-xl transition-all duration-300
                    ${selectedOption === item.label 
                      ? 'bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] scale-100' 
                      : 'bg-transparent scale-0'
                    }
                  `} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content with Gradient Border Background */}
        <div className="relative w-full"
          style={{
            background: `url(/bg-gradient.svg)`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '2rem'
          }}
        >
          {/* Trip Type Selection */}
          <div className="flex gap-6 mb-8">
            {['One-Way', 'Round Trip', 'Multi City'].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className="flex items-center gap-2 text-white"
              >
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${tripType === type ? 'border-[#00FF85]' : 'border-white/50'}
                `}>
                  {tripType === type && (
                    <div className="w-4 h-4 rounded-full bg-[#00FF85]" />
                  )}
                </div>
                <span className={tripType === type ? 'text-white' : 'text-white/70'}>
                  {type}
                </span>
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className='w-full flex justify-between gap-4'>
            {/* Left Section - 70% */}
            <div className='w-[70%]'>
              {/* From-To Section */}
              <div className="flex bg-black/20 backdrop-blur-md rounded-2xl p-6 mb-8">
                <div className="flex justify-between w-full">
                  {/* From */}
                  <div>
                    <label className="text-white/60 block">From</label>
                    <div className="text-white">
                      <div className="text-6xl font-light">Delhi</div>
                      <div className="text-white/60">DEL, Delhi Airport India</div>
                    </div>
                  </div>

                  {/* Exchange Icon */}
                  <div className="flex items-center justify-center">
                    <img src="/exchange.svg" alt="Exchange" className="w-12 h-12" />
                  </div>

                  {/* To */}
                  <div>
                    <label className="text-white/60 block">To</label>
                    <div className="text-white">
                      <div className="text-6xl font-light">Mumbai</div>
                      <div className="text-white/60">BOM, Chhatrapati Shivaji Inter...</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Travelers Section */}
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-8">
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
                    <label className="text-white/60 flex items-center gap-2">
                      Travellers & Class
                      <span className="text-[#00FF85]">▼</span>
                    </label>
                    <div className="text-white">
                      <div>
                        <span className="text-6xl font-light">1</span>
                        <span className="text-2xl ml-2">Traveller</span>
                      </div>
                      <div className="text-white/60">Economy/Premium Economy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Filters - 30% */}
            <div className="w-[30%]">
              <h3 className="text-white text-xl mb-4">Filters</h3>
              <div className="space-y-3">
                {['Non-Stop', '1 Stop', 'Morning Departures', 'Late Departures'].map((filter, index) => (
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
                        <path
                          d="M1 6L6 11L16 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
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
              <button className="w-full px-12 py-4 bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] rounded-xl text-black text-xl mt-8 flex items-center justify-center gap-2 font-medium">
                Search
                <img src="/arrow-right.svg" alt="Search" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDestination