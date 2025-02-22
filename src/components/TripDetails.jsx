import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const TripDetails = () => {
  const days = [
    {
      day: 1,
      description: "Your Trip Starts with a charming visit to Temple, Temple and then",
      places: [
        { id: 1, name: "Shiv Mandir" },
        { id: 2, name: "Jakhu Temple" },
        { id: 3, name: "Shiv Mandir" },
        { id: 4, name: "Shiv Mandir" },
      ]
    },
    {
      day: 2,
      description: "Your Trip Starts with a charming visit to Temple, Temple and then",
      places: [
        { id: 1, name: "Jakhu Temple" },
        { id: 2, name: "Shiv Mandir" },
        { id: 3, name: "Shiv Mandir" },
      ]
    },
    {
      day: 3,
      description: "Your Trip Starts with a charming visit to Temple, Temple and then",
      places: [
        { id: 1, name: "Jakhu Temple" },
        { id: 2, name: "Shiv Mandir" },
        { id: 3, name: "Shiv Mandir" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar isLight={true} />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Trip Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl">←</Link>
            <h1 className="text-4xl font-normal">Your Trip to Shimla for 3 days</h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-xl">Save</button>
            <button className="text-xl">Itenary</button>
            <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-black px-8 py-3 rounded-full flex items-center gap-2">
              Let's Book
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-3 gap-8 p-6">
          {days.map((day) => (
            <div 
              key={day.day} 
              className="bg-gradient-to-b from-emerald-400 via-emerald-300 to-cyan-300 p-8 relative h-[600px] shadow-lg"
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Day Number */}
              <h2 className="text-[3.5rem] font-normal mb-6">Day {day.day}</h2>
              
              {/* Description */}
              <p className="text-xl font-serif mb-8 leading-relaxed">
                {day.description}
              </p>
              
              {/* Places List - Added Scrolling */}
              <div className="space-y-6 overflow-y-auto max-h-[350px] pr-4 scrollbar-thick scrollbar-thumb-black/20 scrollbar-track-transparent">
                {day.places.map((place) => (
                  <div key={place.id} className="flex items-center gap-4 border-b border-black/10 pb-4">
                    {/* Number Circle */}
                    <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
                      {place.id}
                    </span>
                    
                    {/* Temple Icon and Name */}
                    <div className="flex items-center gap-3 flex-1">
                      <img src="/images/common/place.svg" alt="Temple" className="w-7 h-7" />
                      <span className="text-2xl">{place.name}</span>
                    </div>
                    
                    {/* Dropdown Arrow */}
                    <button className="text-xl">
                      <img src="/images/common/listdown.svg" alt="View" className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>

              {/* View Button - Using Image Background */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative">
                  {/* Semi-circular background using image */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-24" 
                    style={{
                      backgroundImage: 'url(/images/common/view.svg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  {/* Button content */}
                  <div className="relative flex justify-center items-center pb-6">
                    <button className="text-2xl font-serif flex flex-col items-center gap-1">
                      <img src="/images/common/arrow-right.svg" alt="View" className="w-6 h-6 transform rotate-[-90deg]" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TripDetails;
