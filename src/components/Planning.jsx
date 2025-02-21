import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Planning = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const filters = [
    "Heritage and History",
    "Adventure and Wildlife",
    "Shopping and Markets",
    "Hill Station and Scenic Beauty",
    "Festivals and Culture",
    "Beaches and Relaxation"
  ];

  const states = [
    "Goa",
    "Himachal Pradesh",
    "Kerala",
    "Tamil Nadu",
    "Uttarakhand"
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter)
        ? prev.filter(item => item !== filter)
        : [...prev, filter]
    );
  };

  const handleExplore = () => {
    if (selectedState) {
      const stateId = selectedState.toLowerCase().replace(' ', '_');
      navigate(`/state/${stateId}`);
    }
  };

  return (
    <>
      <div 
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/planning/white_bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Transparent Navbar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar isLight={true} className="bg-transparent" />
        </div>

        <div className="relative z-10 w-full pt-20">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Map */}
              <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] border-2 border-transparent">
                <img 
                  src={selectedState ? `/images/states/${selectedState.toLowerCase().replace(' ', '_')}.svg` : "/images/states/india.svg"}
                  alt={selectedState || "India Map"} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right side - Text content */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-['CrimsonText'] font-medium text-black text-center">
                  Choose a state to start your <span className="text-[#00916E]">planning</span>
                </h1>
                <img 
                    src="/images/planning/separator.svg" 
                    alt="" 
                    className="w-full"
                    aria-hidden="true"
                  />
                <div className="space-y-4">
                  <h2 className="text-3xl font-['CrimsonText'] text-center">Want some suggestions?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={`
                          px-4 py-2 rounded-lg transition-all duration-300
                          ${selectedFilters.includes(filter)
                            ? 'bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] text-black border-none '
                            : 'border-2 border-[#00916E] text-black hover:bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87]'
                          }
                        `}
                      >
                        {selectedFilters.includes(filter) && '+ '}
                        {filter}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4 mt-8">
                    <p className="text-lg font-medium font-['CrimsonText'] text-center underline">More Filters</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <div className="relative">
                        <button 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full sm:w-64 flex items-center justify-between border border-[#00916E] rounded-lg px-4 py-2 bg-white"
                        >
                          {selectedState || 'Select a state'}
                          <img 
                            src="/images/planning/arrow_down.svg" 
                            alt="arrow" 
                            className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#00916E] rounded-lg shadow-lg z-30">
                            {states.map((state) => (
                              <button
                                key={state}
                                onClick={() => {
                                  setSelectedState(state);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                              >
                                {state}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <button 
                        onClick={handleExplore}
                        className="bg-[#1BC8FF] text-black px-10 py-2 rounded-full hover:bg-[#00916E] hover:text-white transition-colors flex items-center gap-2"
                      >
                        Explore
                        <img 
                          src="/images/planning/arrow_left.svg" 
                          alt="arrow" 
                          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning; 