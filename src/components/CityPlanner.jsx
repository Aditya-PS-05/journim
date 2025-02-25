// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from './Navbar';
// import { citiesData } from '../../utils/cities';

// const CityPlanner = () => {
//   const { stateId, cityId } = useParams();
//   const [radius, setRadius] = useState(12);
//   const [selectedPlaces, setSelectedPlaces] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);
//   const [showTripModal, setShowTripModal] = useState(false);
//   const [tripDetails, setTripDetails] = useState({
//     name: '',
//     startDate: '',
//     endDate: '',
//     adults: '',
//     children: '',
//     travelWith: ''
//   });

//   const cityPlaces = citiesData[cityId.toLowerCase()]?.places || [];

//   const categories = [
//     { name: "Temple", active: true },
//     { name: "Historical Sites", active: false },
//     { name: "Temple", active: false },
//     { name: "Temple", active: false },
//     { name: "Temple", active: false },
//     { name: "Top 10 Places in Shimla", active: false },
//   ];

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query.trim()) {
//       const filtered = cityPlaces.filter(place => 
//         place.toLowerCase().includes(query.toLowerCase())
//       );
//       setSearchResults(filtered);
//       setShowResults(true);
//     } else {
//       setSearchResults([]);
//       setShowResults(false);
//     }
//   };

//   const handleAddPlace = (place) => {
//     if (!selectedPlaces.includes(place)) {
//       setSelectedPlaces([...selectedPlaces, place]);
//     }
//     setSearchQuery('');
//     setShowResults(false);
//   };

//   const handleRemovePlace = (place) => {
//     setSelectedPlaces(selectedPlaces.filter(p => p !== place));
//   };

//   const navigate = useNavigate();

//   const handlePlanClick = () => {
//     navigate('/trip-itinerary');
//   };

//   return (
//     <div className="min-h-screen relative" style={{
//       backgroundImage: "url('/images/planning/white_bg.svg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}>
//       <Navbar isLight={true} />
      
//       <div className="container mx-auto px-4 py-8">
//         {/* Back Button */}
//         <Link to={`/state/${stateId}`} className="inline-flex items-center">
//           <img src="/images/states/himachalpradesh/arrow_left.svg" alt="Back" className="w-8 h-8" />
//         </Link>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//           {/* Left Side - Map and Controls */}
//           <div className="space-y-6">
//             {/* <h2 className="text-2xl font-['CrimsonText']">Exploring Radius</h2>
//             <div className="flex items-center gap-4">
//               <button className="w-8 h-8 bg-[#00FFD1] rounded-full">+</button>
//               <span className="px-4 py-2 border border-black rounded-lg">{radius} Km</span>
//               <button className="w-8 h-8 bg-[#00FFD1] rounded-full">-</button>
//             </div> */}
            
//             <div className="relative">
//               <img 
//                 src={`/images/states/himachalpradesh/cities/${cityId}.svg`}
//                 alt={cityId}
//                 className="w-full"
//               />
//             </div>
//           </div>

//           {/* Right Side - Planning Interface */}
//           <div className="space-y-8">
//             <h1 className="text-4xl font-['CrimsonText'] text-center">
//               How do you want to spend your time?
//             </h1>
            
//             {/* Categories */}
//             <div className="grid grid-cols-3 gap-4 font-['CrimsonText'] text-2xl relative z-0">
//               <button className="bg-gradient-to-r from-[#149A9A] to-[#2ADB87] text-black px-6 py-3 rounded-2xl">
//                 Temple
//               </button>
//               <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
//                 <span className="relative z-[1]">Historical Sites</span>
//               </button>
//               <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
//                 <span className="relative z-10">Temple</span>
//               </button>
//               <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
//                 <span className="relative z-10">Temple</span>
//               </button>
//               <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
//                 <span className="relative z-10">Temple</span>
//               </button>
//             </div>

//             {/* Top 10 Places Button */}
//             <div className="flex justify-center">
//               <button className="bg-white text-black px-8 py-3 rounded-2xl border-2 border-[#00916E] w-full max-w-md">
//                 Top 10 Places in Shimla
//               </button>
//             </div>

//             {/* Search and Wishlist */}
//             <div className="flex items-center gap-4">
//               <div className="relative flex-1">
//                 <input
//                   type="text"
//                   placeholder="Search Places"
//                   value={searchQuery}
//                   onChange={(e) => handleSearch(e.target.value)}
//                   className="w-full px-12 py-3 rounded-lg bg-gray-100 border-2 border-[#00916E] focus:outline-none"
//                 />
//                 <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
//                   <img src="/images/states/search.svg" alt="search" className="w-5 h-5" />
//                 </span>
                
//                 {/* Search Results Dropdown */}
//                 {showResults && searchResults.length > 0 && (
//                   <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-10 border-2 border-[#00916E]">
//                     {searchResults.map((place, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleAddPlace(place)}
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                       >
//                         {place}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <span className="text-black text-lg">Add from your wishlist</span>
//             </div>

//             {/* Places Added Section */}
//             <div>
//               <h3 className="text-2xl font-['CrimsonText'] mb-4 text-center">Places added</h3>
//               <div className="flex flex-wrap gap-3">
//                 {selectedPlaces.map((place, index) => (
//                   <div 
//                     key={index}
//                     className="bg-[#8E8E8E] px-6 py-2 rounded-[10px] flex items-center gap-2"
//                   >
//                     {place}
//                     <button 
//                       onClick={() => handleRemovePlace(place)}
//                       className="ml-2"
//                     >
//                       <img src="/images/states/remove.svg" alt="remove" className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Plan Button */}
//             <div className="flex justify-center mt-8">
//               <button 
//                 onClick={() => setShowTripModal(true)}
//                 className="bg-[#1BC8FF] text-black px-12 py-4 rounded-full hover:bg-[#00916E] hover:text-white transition-colors flex items-center gap-2 font-medium text-2xl hover:cursor-pointer"
//               >
//                 Let's plan your itenary
//                 <img src="/images/common/arrow-right.svg" alt="arrow" className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Floating Trip Modal */}
//         {showTripModal && (
//           <>
//             <div className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-40"></div>
//             <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] z-50">
//               {/* Black curved background */}
//               <div className="absolute w-[300px] h-[300px] bg-black border-none -z-10"></div>
//               {/* White modal */}
//               <div className="bg-white rounded-tl-[300px] p-16 border-2">
//                 {/* Close Button */}
//                 <button 
//                   onClick={() => setShowTripModal(false)}
//                   className="absolute top-8 right-8"
//                 >
//                   <img src="/images/common/close.svg" alt="close" className="w-8 h-8 hover:cursor-pointer" />
//                 </button>

//                 <h2 className="text-5xl font-['CrimsonText'] text-center mb-12 italic">Create a Trip</h2>

//                 {/* Trip Form */}
//                 <div className="space-y-8">
//                   {/* Trip Name */}
//                   <div>
//                     <h3 className="text-2xl font-['CrimsonText'] mb-2">Trip Name</h3>
//                     <input 
//                       type="text"
//                       placeholder="Eg. Chilly vac in Shimla"
//                       className="w-full border border-black rounded-md px-4 py-2 focus:outline text-gray-500"
//                     />
//                   </div>

//                   {/* Dates and Duration */}
//                   <div className="flex items-end gap-4">
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-['CrimsonText'] mb-2">Dates</h3>
//                       <div className="flex items-center gap-2">
//                         <div className="relative flex-1">
//                           <input type="date" className="w-full border border-black rounded-md px-4 py-2 appearance-none focus:outline-none" />
//                         </div>
//                         <span className="text-xl">to</span>
//                         <div className="relative flex-1">
//                           <input type="date" className="w-full border border-black rounded-md px-4 py-2 appearance-none focus:outline-none" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-1/4">
//                       <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Days</h3>
//                       <input type="number" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none text-black" readOnly />
//                     </div>
//                   </div>

//                   {/* People Count */}
//                   <div className="grid grid-cols-2 gap-8">
//                     <div>
//                       <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Adults</h3>
//                       <input 
//                         type="number"
//                         min="1"
//                         placeholder="Enter number"
//                         className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Children</h3>
//                       <input 
//                         type="number"
//                         min="0"
//                         placeholder="Enter number"
//                         className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                       />
//                     </div>
//                   </div>

//                   {/* Who's Coming */}
//                   <div>
//                     <h3 className="text-2xl font-['CrimsonText'] mb-4">Who's Coming with you?</h3>
//                     <div className="grid grid-cols-3 gap-4">
//                       {[
//                         { id: 'solo', label: 'Solo', icon: '/images/common/solo.svg' },
//                         { id: 'friends', label: 'Friends/\nPartners', icon: '/images/common/group_people.svg' },
//                         { id: 'family', label: 'Family', icon: '/images/common/family.svg' }
//                       ].map(option => (
//                         <button
//                           key={option.id}
//                           className="p-4 border border-gray-300 rounded-lg flex flex-col items-center gap-2"
//                         >
//                           <img src={option.icon} alt={option.icon} className="text-3xl" />
//                           <span className="text-center whitespace-pre-line">{option.label}</span>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Let's Plan Button */}
//                   <div className="flex justify-center mt-8">
//                     <button 
//                       onClick={handlePlanClick}
//                       className="flex items-center gap-2 text-3xl"
//                     >
//                       Let's Plan
//                       <span className="transform rotate-[-45deg]">➜</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CityPlanner;

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import { citiesData } from '../../utils/cities';

const CityPlanner = () => {
  const { stateId, cityId } = useParams();
  const [radius, setRadius] = useState(12);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showTripModal, setShowTripModal] = useState(false);
  const [tripDetails, setTripDetails] = useState({
    name: '',
    startDate: '',
    endDate: '',
    adults: '',
    children: '',
    travelWith: ''
  });
  const svgRef = useRef(null);
  const highlightColor = "#FF4C4C";

  const cityPlaces = citiesData[cityId.toLowerCase()]?.places || [];

  const categories = [
    { name: "Temple", active: true },
    { name: "Historical Sites", active: false },
    { name: "Temple", active: false },
    { name: "Temple", active: false },
    { name: "Temple", active: false },
    { name: "Top 10 Places in Shimla", active: false },
  ];

  useEffect(() => {
    const svgObject = svgRef.current;
    if (!svgObject) return;

    const handlePlaceClick = (event) => {
      const placeName = event.target.id;
      if (cityPlaces.includes(placeName)) {
        setSelectedPlaces((prevSelectedPlaces) => {
          if (prevSelectedPlaces.includes(placeName)) {
            return prevSelectedPlaces.filter((place) => place !== placeName);
          } else {
            return [...prevSelectedPlaces, placeName];
          }
        });
        updateMapColors(placeName);
      }
    };

    const onSvgLoad = () => {
      const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
      if (svgDoc) {
        svgDoc.querySelectorAll("path").forEach((path) => {
          path.style.cursor = "pointer";
          path.addEventListener("click", handlePlaceClick);
        });
      }
    };

    svgObject.addEventListener("load", onSvgLoad);

    return () => {
      if (svgObject) {
        svgObject.removeEventListener("load", onSvgLoad);
      }
    };
  }, [cityPlaces]);

  const updateMapColors = (placeName) => {
    const svgObject = svgRef.current;
    if (!svgObject) return;
    const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
    if (!svgDoc) return;
  
    const selectedPath = svgDoc.getElementById(placeName);
    if (selectedPath) {
      if (selectedPlaces.includes(placeName)) {
        selectedPath.style.fill = "#D3D3D3"; // Color selected place red
      }
      else {
        selectedPath.style.fill = "#FF4C4C"; // Color unselected place light gray
      }
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = cityPlaces.filter(place => 
        place.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleAddPlace = (place) => {
    if (!selectedPlaces.includes(place)) {
      setSelectedPlaces([...selectedPlaces, place]);
    }
    setSearchQuery('');
    setShowResults(false);
  };

  const handleRemovePlace = (place) => {
    setSelectedPlaces(selectedPlaces.filter(p => p !== place));
  };

  const navigate = useNavigate();

  const handlePlanClick = () => {
    navigate('/trip-itinerary');
  };

  return (
    <div className="min-h-screen relative" style={{
      backgroundImage: "url('/images/planning/white_bg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Navbar isLight={true} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to={`/state/${stateId}`} className="inline-flex items-center">
          <img src="/images/states/himachalpradesh/arrow_left.svg" alt="Back" className="w-8 h-8" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Side - Map and Controls */}
          <div className="space-y-6">
            <div className="relative">
              <object ref={svgRef} type="image/svg+xml" data={`/images/states/himachalpradesh/cities/${cityId}.svg`} className="w-full h-full cursor-pointer" />
            </div>
          </div>

          {/* Right Side - Planning Interface */}
          <div className="space-y-8">
              <h1 className="text-4xl font-['CrimsonText'] text-center">How do you want to spend your time?</h1>
              
              <div className="grid grid-cols-3 gap-4 font-['CrimsonText'] text-2xl relative z-0">
                <button className="bg-gradient-to-r from-[#149A9A] to-[#2ADB87] text-black px-6 py-3 rounded-2xl">
                  Temple
                </button>
                <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
                  <span className="relative z-[1]">Historical Sites</span>
                </button>
                <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
                  <span className="relative z-10">Temple</span>
                </button>
                <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
                  <span className="relative z-10">Temple</span>
                </button>
                <button className="relative bg-white text-black px-6 py-3 rounded-2xl before:absolute before:inset-[-1px] before:rounded-2xl before:bg-gradient-to-r before:from-[#006B78] before:via-[#006B78] before:via-37% before:to-[#2ADB87] after:absolute after:inset-[1px] after:bg-white after:rounded-2xl">
                  <span className="relative z-10">Temple</span>
                </button>
              </div>

             {/* Top 10 Places Button */}
             <div className="flex justify-center">
               <button className="bg-white text-black px-8 py-3 rounded-2xl border-2 border-[#00916E] w-full max-w-md">
                 Top 10 Places in Shimla
               </button>
             </div>

             {/* Search and Wishlist */}
             <div className="flex items-center gap-4">
               <div className="relative flex-1">
                 <input
                  type="text"
                  placeholder="Search Places"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-12 py-3 rounded-lg bg-gray-100 border-2 border-[#00916E] focus:outline-none"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <img src="/images/states/search.svg" alt="search" className="w-5 h-5" />
                </span>
                
                {/* Search Results Dropdown */}
                {showResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-10 border-2 border-[#00916E]">
                    {searchResults.map((place, index) => (
                      <button
                        key={index}
                        onClick={() => handleAddPlace(place)}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {place}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-black text-lg">Add from your wishlist</span>
             </div>

             {/* Places Added Section */}
             <div>
               <h3 className="text-2xl font-['CrimsonText'] mb-4 text-center">Places added</h3>
               <div className="flex flex-wrap gap-3">
                 {selectedPlaces.map((place, index) => (
                  <div 
                    key={index}
                    className="bg-[#8E8E8E] px-6 py-2 rounded-[10px] flex items-center gap-2"
                  >
                    {place}
                    <button 
                      onClick={() => handleRemovePlace(place)}
                      className="ml-2"
                    >
                      <img src="/images/states/remove.svg" alt="remove" className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

             {/* Plan Button */}
             <div className="flex justify-center mt-8">
               <button 
                onClick={() => setShowTripModal(true)}
                className="bg-[#1BC8FF] text-black px-12 py-4 rounded-full hover:bg-[#00916E] hover:text-white transition-colors flex items-center gap-2 font-medium text-2xl hover:cursor-pointer"
              >
                Let's plan your itenary
                <img src="/images/common/arrow-right.svg" alt="arrow" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Trip Modal */}
        {showTripModal && (
          <>
            <div className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-40"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] z-50">
              {/* Black curved background */}
              <div className="absolute w-[300px] h-[300px] bg-black border-none -z-10"></div>
              {/* White modal */}
              <div className="bg-white rounded-tl-[300px] p-16 border-2">
                 {/* Close Button */}
                 <button 
                  onClick={() => setShowTripModal(false)}
                  className="absolute top-8 right-8"
                >
                  <img src="/images/common/close.svg" alt="close" className="w-8 h-8 hover:cursor-pointer" />
                </button>

                <h2 className="text-5xl font-['CrimsonText'] text-center mb-12 italic">Create a Trip</h2>

                {/* Trip Form */}
                <div className="space-y-8">
                  {/* Trip Name */}
                   <div>
                     <h3 className="text-2xl font-['CrimsonText'] mb-2">Trip Name</h3>
                     <input 
                      type="text"
                      placeholder="Eg. Chilly vac in Shimla"
                      className="w-full border border-black rounded-md px-4 py-2 focus:outline text-gray-500"
                    />
                  </div>

                  {/* Dates and Duration */}
                  <div className="flex items-end gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-['CrimsonText'] mb-2">Dates</h3>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <input type="date" className="w-full border border-black rounded-md px-4 py-2 appearance-none focus:outline-none" />
                        </div>
                        <span className="text-xl">to</span>
                        <div className="relative flex-1">
                          <input type="date" className="w-full border border-black rounded-md px-4 py-2 appearance-none focus:outline-none" />
                        </div>
                      </div>
                    </div>
                     <div className="w-1/4">
                       <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Days</h3>
                       <input type="number" className="w-full border border-black rounded-md px-4 py-2 focus:outline-none text-black" readOnly />
                     </div>
                   </div>

                   {/* People Count */}
                   <div className="grid grid-cols-2 gap-8">
                     <div>
                       <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Adults</h3>
                       <input 
                        type="number"
                        min="1"
                        placeholder="Enter number"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-['CrimsonText'] mb-2">No. of Children</h3>
                      <input 
                        type="number"
                        min="0"
                        placeholder="Enter number"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Who's Coming */}
                   <div>
                     <h3 className="text-2xl font-['CrimsonText'] mb-4">Who's Coming with you?</h3>
                     <div className="grid grid-cols-3 gap-4">
                       {[
                        { id: 'solo', label: 'Solo', icon: '/images/common/solo.svg' },
                        { id: 'friends', label: 'Friends/\nPartners', icon: '/images/common/group_people.svg' },
                        { id: 'family', label: 'Family', icon: '/images/common/family.svg' }
                      ].map(option => (
                        <button
                          key={option.id}
                          className="p-4 border border-gray-300 rounded-lg flex flex-col items-center gap-2"
                        >
                          <img src={option.icon} alt={option.icon} className="text-3xl" />
                          <span className="text-center whitespace-pre-line">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                   {/* Let's Plan Button */}
                   <div className="flex justify-center mt-8">
                     <button 
                      onClick={handlePlanClick}
                      className="flex items-center gap-2 text-3xl"
                    >
                      Let's Plan
                      <span className="transform rotate-[-45deg]">➜</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

 export default CityPlanner;