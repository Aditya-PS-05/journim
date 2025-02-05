const HomePage = () => {
  return (
    <div className="">
      <div className="min-h-screen relative">
        {/* Base background with gradient */}
        <div className="absolute inset-0" />

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

      {/* Second Section */}
      <div id="trip-section" className="min-h-screen relative flex items-center z-10">

        <img
          src="/home-bg.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover m-0 p-0"
          aria-hidden="true"
        />
        <div className="container mx-auto px-10 border-2 border-red-500">
          <div className="flex justify-between items-center">
            <div className="relative w-[600px] h-[600px]">
              <img
                src="/earth.svg"
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col gap-8 z-20 mr-30">
              <button className="group bg-gradient-to-r from-[#00D1FF] to-[#00FF85] px-12 py-6 rounded-2xl text-black text-4xl font-['Neight'] flex items-center gap-4 hover:opacity-90 transition-opacity">
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
              </button>

              <button className="group bg-gradient-to-r from-[#00D1FF] to-[#00FF85] px-12 py-6 rounded-2xl text-black text-3xl font-['Neight'] flex items-center gap-4 hover:opacity-90 transition-opacity">
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