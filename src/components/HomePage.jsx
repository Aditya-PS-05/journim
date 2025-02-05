const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000B1E] via-[#001F4B] to-[#001F4B] from-0% via-60% to-100%" />
      
      {/* Stars overlay */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="absolute inset-0 w-screen h-full">
          <img
            src="/star.svg"
            alt=""
            className="w-full h-[85%] object-cover mix-blend-color-dodge opacity-75"
            aria-hidden="true"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>
      </div>

      {/* Northern Lights overlay */}
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

      {/* Earth overlay */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[600px] h-[300px] overflow-hidden">
          <img
            src="/earth.svg"
            alt=""
            className="absolute top-0 w-[600px] h-[600px] object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-4xl font-light">
            Journim
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-8">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              My Trips
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full">
                Log In / Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 mt-20 text-center">
          <h1 className="text-white text-8xl font-light tracking-wide leading-tight font-['Neight']">
            Crafting your Perfectly<br />
            Travel Adventure
          </h1>
          
          {/* Down Arrow */}
          <div className="mt-16">
            <img src="/arrow.svg" alt="" className="w-30 h-30 text-white mx-auto" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;