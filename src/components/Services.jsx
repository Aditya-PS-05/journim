import Navbar from './Navbar';

const Services = () => {
  return (
    <div className="min-h-screen relative bg-transparent overflow-hidden flex items-center">
      {/* Content */}
      <div className="relative z-10 w-full">        
        {/* Main Content */}
        <div className="container mx-auto px-4">
          {/* Title with gradient background */}
          <div className="relative w-full mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-[#001233] via-[#00916E] to-[#00FFD1] opacity-80"></div>
            <h1 className="relative text-center text-black text-6xl sm:text-8xl py-12 font-['Neight']">
              The Trip you deserve
            </h1>
          </div>

          {/* Services Section */}
          <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 max-w-8xl mx-auto">
            {/* Left Side - Our Services */}
            <div className="md:w-1/3">
              <h2 className="text-[#00FFD1] text-6xl sm:text-7xl font-medium text-center md:text-center mt-8">
                Our<br />Services
              </h2>
            </div>

            {/* Vertical Line Separator */}
            <div className="hidden md:block w-[2px] h-80 bg-white/20 mx-4"></div>

            {/* Right Side - Description */}
            <div className="md:w-2/3">
              <p className="text-white text-2xl sm:text-3xl leading-relaxed font-light">
                Discover a seamless travel planning experience with our 
                comprehensive itinerary generation service. Simply choose 
                your desired destinations, and we will create a personalized 
                itinerary tailored to your preferences. Our service includes 
                expert recommendations, hotel bookings, and cab 
                arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 