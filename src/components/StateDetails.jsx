import { useParams, Link, useNavigate } from 'react-router-dom';
import { statesData } from '../../utils/states';
import Navbar from './Navbar';
import { useState, useRef, useEffect } from 'react';

const StateDetails = () => {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const stateInfo = statesData[stateId];
  const [selectedCity, setSelectedCity] = useState('');
  const svgRef = useRef(null);
  const highlightColor = "#FF4C4C";

  if (!stateInfo) return <div>State not found</div>;

  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    const svgObject = svgRef.current;
    if (!svgObject) return;

    const handleCityClick = (event) => {
      const cityName = event.target.id;
      if (stateInfo.districts.includes(cityName)) {
        setSelectedCity(cityName);
        updateMapColors(cityName);
      }
    };

    const onSvgLoad = () => {
      const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
      if (svgDoc) {
        svgDoc.querySelectorAll("path").forEach((path) => {
          path.style.cursor = "pointer";
          path.addEventListener("click", handleCityClick);
        });
      }
    };

    svgObject.addEventListener("load", onSvgLoad);

    return () => {
      if (svgObject) {
        svgObject.removeEventListener("load", onSvgLoad);
      }
    };
  }, [stateInfo.districts]);

  const updateMapColors = (cityName) => {
    const svgObject = svgRef.current;
    if (!svgObject) return;
    const svgDoc = svgObject.contentDocument || svgObject.getSVGDocument();
    if (!svgDoc) return;
  
    svgDoc.querySelectorAll("path").forEach((path) => {
      if (path.id === cityName) {
        path.style.fill = highlightColor;
        path.style.transition = "transform 0.3s ease, fill 0.3s ease";
        
        // Get bounding box to set correct transform origin
        const bbox = path.getBBox();
        const originX = bbox.x + bbox.width / 2;
        const originY = bbox.y + bbox.height / 2;
  
        path.style.transformOrigin = `${originX}px ${originY}px`;
        path.style.transform = "scale(1.2)";
      } else {
        path.style.fill = "#D3D3D3";
        path.style.transform = "scale(1)";
      }
    });
  
    // Delay navigation by 1.5s
    setTimeout(() => {
      navigate(`/city-planner/${stateId}/${cityName.toLowerCase()}`);
    }, 1500);
  };
  
  // const handleCityClick = (event) => {
  //   const cityName = event.target.id;
  //   if (stateInfo.districts.includes(cityName)) {
  //     setSelectedCity(cityName);
  //     updateMapColors(cityName);
  //   }
  // };
  
  const handleCitySelect = () => {
    if (selectedCity) {
      updateMapColors(selectedCity);
    }
  };
  

  return (
    <div className="min-h-screen" style={{
        backgroundImage: "url('/images/planning/white_bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Navbar isLight={true} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/planning" className="inline-flex items-center text-black mb-8">
          <img src="/images/states/himachalpradesh/arrow_left.svg" alt="arrow" className="w-12 h-12 mx-6" loading="lazy" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Map */}
          <div className="relative">
            <object ref={svgRef} type="image/svg+xml" data="/images/states/himachalpradesh/details.svg" className="w-[90%] h-[90%] cursor-pointer" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={stateInfo.image}
                alt={stateInfo.name}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>

            {/* State Name and Description */}
            <h1 className="text-4xl font-['CrimsonText']">{stateInfo.name}</h1>
            
            <p className="text-gray-700 font-['CrimsonText']">
              {isReadMore ? stateInfo.fullDescription : stateInfo.description}
              <button 
                onClick={() => setIsReadMore(!isReadMore)}
                className="text-black underline ml-2"
              >
                {isReadMore ? 'Read Less' : 'Read More ↓'}
              </button>
            </p>

            {/* Great For Section */}
            <div className="space-y-4">
              <h2 className="text-2xl text-center underline font-['CrimsonText']">Great for</h2>
              <div className="grid grid-cols-2 gap-4">
                {stateInfo.greatFor.map((item, index) => (
                  <div 
                    key={index}
                    className={`${item.color} text-black px-4 py-2 rounded-lg text-center`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* City Selection */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-['CrimsonText'] text-center">Select a City to Plan Your Trip</h2>
              <div className="flex justify-center gap-4">
                <select 
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    updateMapColors(e.target.value);
                  }}
                  className="border border-[#00916E] rounded-lg px-4 py-2 w-64"
                >
                  <option value="">Select a city</option>
                  {stateInfo.districts.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <button 
                  onClick={handleCitySelect}
                  className="bg-[#1BC8FF] text-black px-6 py-2 rounded-full hover:bg-[#00916E] hover:text-white transition-colors flex items-center gap-2"
                >
                  Plan Trip
                  <img src="/images/planning/arrow_left.svg" alt="arrow" className="w-4 h-4" loading="lazy" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetails;
