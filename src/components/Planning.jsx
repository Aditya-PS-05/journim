import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Planning = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const svgRef = useRef(null);

  const states = ["Goa", "Himachal Pradesh", "Kerala", "TamilNadu", "Uttarakhand"];
  const highlightColor = "#FF4C4C";

  const filters = [
    "Heritage and History",
    "Adventure and Wildlife",
    "Shopping and Markets",
    "Hill Station and Scenic Beauty",
    "Festivals and Culture",
    "Beaches and Relaxation"
  ];

  useEffect(() => {
    const svgObject = svgRef.current;
    if (!svgObject) return;

    const handleStateClick = (event) => {
      const stateName = event.target.id;
      if (states.includes(stateName)) {
        setSelectedState(stateName);
        updateMapColors(stateName);
      }
    };

    const onSvgLoad = () => {
      const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
      if (svgDoc) {
        svgDoc.querySelectorAll("path").forEach((path) => {
          path.style.cursor = "pointer";
          path.addEventListener("click", handleStateClick);
        });
      }
    };

    svgObject.addEventListener("load", onSvgLoad);

    return () => {
      if (svgObject) {
        svgObject.removeEventListener("load", onSvgLoad);
      }
    };
  }, []);

  const updateMapColors = (stateName) => {
    const svgObject = svgRef.current;
    if (!svgObject) return;
    const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
    if (!svgDoc) return;

    svgDoc.querySelectorAll("path").forEach((path) => {
      path.style.fill = path.id === stateName ? highlightColor : "#D3D3D3"; // Light gray for unselected states
    });
  };

  const handleDropdownSelect = (state) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
    updateMapColors(state);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: "url('/images/planning/white_bg.svg')",
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar isLight={true} className="bg-transparent" />
      </div>

      <div className="relative z-10 w-full pt-20">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] border-2 border-transparent">
              <object ref={svgRef} type="image/svg+xml" data="/images/states/india.svg" className="w-full h-full cursor-pointer" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-['CrimsonText'] font-medium text-black text-center">
                Choose a state to start your <span className="text-[#00916E]">planning</span>
              </h1>
              <img src="/images/planning/separator.svg" alt="" className="w-full" aria-hidden="true" loading="lazy" />
              <div className="space-y-4">
              <h2 className="text-3xl font-['CrimsonText'] text-center">Want some suggestions?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filters.map((filter) => (
                  <button key={filter} onClick={() =>
                    setSelectedFilters(prev => prev.includes(filter) ? prev.filter(item => item !== filter) : [...prev, filter])
                  }
                    className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${selectedFilters.includes(filter) ? 'bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] text-black border-none ' : 'border-2 border-[#00916E] text-black hover:bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87]'}`}
                  >
                    {selectedFilters.includes(filter) && '+ '}{filter}
                  </button>
                ))}
               </div>
                <p className="text-lg font-medium font-['CrimsonText'] text-center underline">Select a State</p>
                <div className="relative w-full sm:w-64 mx-auto">
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between border border-[#00916E] rounded-lg px-4 py-2 bg-white">
                    {selectedState || 'Select a state'}
                    <img src="/images/planning/arrow_down.svg" alt="arrow" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} loading="lazy" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#00916E] rounded-lg shadow-lg z-30">
                      {states.map((state) => (
                        <button key={state} onClick={() => handleDropdownSelect(state)}
                          className="w-full text-left px-4 py-2 hover:bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] transition-colors">
                          {state}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => {
                  console.log(`/state/${selectedState.toLowerCase().replace(/\s+/g, '_')}`)
                  selectedState && navigate(`/state/${selectedState.toLowerCase().replace(' ', '_')}`);
                }}
                  className="bg-[#1BC8FF] text-black px-10 py-2 rounded-full hover:bg-[#00916E] hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  Explore
                  <img src="/images/planning/arrow_left.svg" alt="arrow" className="w-4 h-4 transition-transform" loading="lazy" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
