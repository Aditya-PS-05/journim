import { useParams, Link, useNavigate } from 'react-router-dom';
import { statesData } from '../../utils/states';
import Navbar from './Navbar';
import { useState } from 'react';

const StateDetails = () => {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const stateInfo = statesData[stateId];
  const [selectedCity, setSelectedCity] = useState('');

  if (!stateInfo) return <div>State not found</div>;

  const [isReadMore, setIsReadMore] = useState(false);

  const handleCitySelect = () => {
    if (selectedCity) {
      navigate(`/city-planner/${stateId}/${selectedCity.toLowerCase()}`);
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
          <img src="/images/states/himachalpradesh/arrow_left.svg" alt="arrow" className="w-12 h-12 mx-6" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Map */}
          <div className="relative">
            <img 
              src={stateInfo.leftImage}
              alt={`${stateInfo.name} map`}
              className="w-full"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={stateInfo.image}
                alt={stateInfo.name}
                className="w-full h-64 object-cover"
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
                  onChange={(e) => setSelectedCity(e.target.value)}
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
                  <img src="/images/planning/arrow_left.svg" alt="arrow" className="w-4 h-4" />
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