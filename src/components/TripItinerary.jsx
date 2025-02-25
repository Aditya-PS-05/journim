import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const TripItinerary = () => {
  const navigate = useNavigate();

  const places = [
    { id: 1, name: "Jakhu Temple" },
    { id: 2, name: "Hatu Mata temple" },
    { id: 3, name: "Jakhu Temple" },
    { id: 4, name: "Kali bari temple" },
    { id: 5, name: "Shiv mandir" },
    { id: 6, name: "Jakhu Temple" }
  ];

  const handlePlanClick = () => {
    navigate('/trip-details'); // Navigate to the trip planner route
  };

  return (
    <div className="min-h-screen" style={{
        backgroundImage: "url('/images/planning/white_bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Navbar isLight={true} />
      
      <div className="container mx-auto px-4 py-8 w-[90%]">
        {/* Back Button */}
        <Link to="/city-planner" className="inline-flex items-center mb-8">
          <img src="/images/common/arrow-right.svg" alt="Back" className="w-16 h-16 rotate-180" loading="lazy" />
        </Link>

        <div className="flex w-full">
          {/* Map Section - 8 columns */}
          <div className="col-span-8 relative w-[50%]">
            <div className="relative">
              <img 
                src="/images/states/iternarary.svg" 
                alt="Shimla Map"
                className="w-[100%]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side Content - 4 columns */}
          <div className="col-span-4 p-8 w-[50%] mt-10">
            <h2 className="text-4xl font-['CrimsonText'] mb-6 text-center">Places added</h2>
            
            {/* Places Tags - 3 columns grid with consistent sizing */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mb-8">
              {places.map(place => (
                <div 
                  key={place.id}
                  className="bg-gray-400/80 px-4 py-3 rounded-[20px] text-black text-sm text-center w-full min-w-[140px] font-medium"
                >
                  {place.name}
                </div>
              ))}
            </div>

            {/* Description - Centered */}
            <div className="font-['CrimsonText'] text-lg max-w-md mx-auto">
              <p className="leading-relaxed">
                Your trip starts from Your trip starts from Your trip starts from Your trip starts from Your trip starts from Scenic mountaintop Hindu temple with a massive sculpture of Lord Hanumaan & many wild monkeys......
                <button className="text-black ml-2 font-normal">
                  Read More ▼
                </button>
              </p>
            </div>

            {/* Action Button - Centered */}
            <div className="mt-8 flex justify-center" onClick={handlePlanClick}>
              <button className="bg-gradient-to-r from-[#1BC8FF] to-[#2ADB87] text-xl px-8 py-3 rounded-full flex items-center gap-2">
                Let's see your itenary
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItinerary;