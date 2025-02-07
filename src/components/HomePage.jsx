import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const HomePage = () => {
  const scrollToTrip = () => {
    document.getElementById('trip-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <div className="relative">
      <div className="min-h-screen relative">
        <div className="absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden">
          <div className="relative h-[50vh]">
            <img
              src="/lights.svg"
              alt=""
              className="w-full h-full object-cover opacity-30 mix-blend-screen"
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Earth overlay - positioned at bottom of first screen */}
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] flex items-center justify-center mb-[-100px]">
          <div className="relative">
            <img
              src="/earth.svg"
              alt=""
              className="object-cover"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <Navbar />

          {/* Main Content */}
          <main
            className="container mx-auto px-6 mt-10 sm:mt-20 text-center cursor-pointer"
            onClick={scrollToTrip}
          >
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-light tracking-wide leading-tight font-['Neight']">
              Crafting your Perfectly<br />
              Travel Adventure
            </h1>

            {/* Down Arrow - Add hover effect */}
            <div
              className="mt-16 cursor-pointer hover:opacity-80 transition-opacity animate-bounce"
              onClick={scrollToTrip}
            >
              <img
                src="/arrow.svg"
                alt="Scroll down"
                className="w-20 h-20 text-white mx-auto"
              />
            </div>
          </main>
        </div>
      </div>

      <div id="trip-section" className="min-h-screen relative flex items-center z-10">
        <img
          src="/home-bg.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover m-0 p-0"
          aria-hidden="true"
        />

        {/* Content Container - Adjusted padding and width */}
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            {/* Earth Image - Enlarged */}
            <div className="relative w-full md:w-[800px] h-[400px] md:h-[800px] -ml-20">
              <img
                src="/earth.svg"
                alt=""
                className="w-full h-full object-contain scale-125"
                aria-hidden="true"
              />
            </div>

            {/* Buttons - Adjusted positioning */}
            <div className="flex flex-col gap-4 sm:gap-8 z-20 w-full md:w-auto md:-ml-20">
            
            <Link 
              to="/searchdestination"
              className="group bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:100%_100%] bg-position-x-75 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl text-black text-2xl sm:text-4xl font-['Neight'] flex items-center justify-center md:justify-start gap-4 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Let&apos;s Trip
              <svg
                className="w-8 h-8 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              </Link>

            <button className="group bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:100%_100%] bg-position-x-75 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl text-black text-2xl sm:text-4xl font-['Neight'] flex items-center justify-center md:justify-start gap-4 hover:opacity-90 transition-opacity cursor-pointer">
              Let&apos;s Book
                <svg
                  className="w-8 h-8 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;