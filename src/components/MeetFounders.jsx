import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const MeetFounders = () => {
  const founders = [
    {
      name: "Aman",
      role: "CEO",
      subtitle: "Co-Founder",
      phone: "+91 8744899900",
      image: "/images/meetFounders/aman_pic.svg"
    },
    {
      name: "Sahil",
      role: "COO",
      subtitle: "Co-Founder",
      phone: "+91 99883 96729",
      image: "/images/meetFounders/sahil_pic.svg"
    }
  ];

  return (
    <div className="relative bg-transparent overflow-hidden my-10">
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-center text-[#00FFD1] text-7xl sm:text-7xl mb-20 font-medium">
            Meet the Founders
          </h1>

          {/* Founders Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
            {founders.map((founder, index) => (
              <div key={founder.name} className="flex flex-col items-center">
                
                {/* Image and Role Container */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image */}
                  <div className="relative">
                    <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#00FFD1]/30">
                      <img 
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-3xl sm:text-5xl mt-4 font-medium text-white text-center">
                  {founder.name}
                </h2>
                  </div>

                  {/* Role and Subtitle */}
                  <div className="text-left">
                    <p className="text-2xl sm:text-3xl text-[#00FFD1] font-light">{founder.role}</p>
                    <p className="text-xl sm:text-2xl text-gray-400 font-light">{founder.subtitle}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetFounders; 