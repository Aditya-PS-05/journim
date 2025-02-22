// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import Services from './Services';
// import MeetFounders from './MeetFounders';
// import Footer from './Footer';

// const HomePage = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const scrollToTrip = () => {
//     document.getElementById('trip-section').scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const triggerPosition = window.innerHeight / 2;
//       setIsScrolled(scrollPosition > triggerPosition);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="relative min-h-screen">
//         <Navbar isLight={false} />
//         <div className="min-h-screen relative px-4">
//           <div className="absolute inset-0" />
//           <div
//             className={`absolute bottom-[-50px] sm:bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] flex items-center justify-center transition-transform duration-500 ${
//               isScrolled ? 'translate-x-[-90%] translate-y-[calc(100vh-100px)] sm:translate-y-[calc(100vh-200px)]' : ''
//             }`}
//           >
//             <div className="relative">
//               <img
//                 src="/earth.svg"
//                 alt=""
//                 className="object-contain w-full h-full"
//                 aria-hidden="true"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-20">
//             {/* Main Content */}
//             <main
//               className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-20 text-center cursor-pointer"
//               onClick={scrollToTrip}
//             >
//               <h1 className="text-white text-3xl sm:text-6xl md:text-8xl font-light tracking-wide leading-tight font-['Neight']">
//                 Crafting your Perfectly<br className="hidden sm:block" />
//                 Travel Adventure
//               </h1>

//               {/* Down Arrow - Add hover effect */}
//               <div
//                 className="mt-16 cursor-pointer hover:opacity-80 transition-opacity animate-bounce"
//                 onClick={scrollToTrip}
//               >
//                 <img
//                   src="/arrow.svg"
//                   alt="Scroll down"
//                   className="w-20 h-20 text-white mx-auto"
//                 />
//               </div>
//             </main>
//           </div>
//         </div>

//         <div id="trip-section" className="min-h-screen relative flex items-center z-10 px-4">
//           {/* Content Container - Adjusted padding and width */}
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row justify-center ml-[500px] mt-[150px] items-center gap-8 md:gap-0">

//               {/* Buttons - Mobile responsive */}
//               <div className="flex flex-col gap-4 sm:gap-8 z-20 w-full md:w-auto">
//                 <Link
//                   to="/searchdestination"
//                   className="group bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:100%_100%] bg-position-x-75 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl text-black text-2xl sm:text-4xl font-['Neight'] flex items-center justify-center md:justify-start gap-4 hover:opacity-90 transition-opacity cursor-pointer"
//                 >
//                   Let&apos;s Trip
//                   <svg
//                     className="w-8 h-8 transform group-hover:translate-x-1 transition-transform"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </Link>

//                 <button className="group bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:100%_100%] bg-position-x-75 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl text-black text-2xl sm:text-4xl font-['Neight'] flex items-center justify-center md:justify-start gap-4 hover:opacity-90 transition-opacity cursor-pointer">
//                   Let&apos;s Book
//                   <svg
//                     className="w-8 h-8 transform group-hover:translate-x-1 transition-transform"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Services />
//         <MeetFounders />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './Services';
import MeetFounders from './MeetFounders';
import Footer from './Footer';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTrip = () => {
    document.getElementById('trip-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2;
      setIsScrolled(scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <Navbar isLight={false} />
        <div className="min-h-screen relative px-4">
          <div className="absolute inset-0" />
          <div
            className={`absolute bottom-[-50px] sm:bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] flex items-center justify-center transition-transform duration-500 ${
              isScrolled ? 'translate-x-[-100%] translate-y-[calc(100vh-100px)] sm:translate-y-[calc(100vh-200px)] scale-150' : ''
            }`}
          >
            <div className="relative">
              <img
                src="/earth.svg"
                alt=""
                className="object-contain w-full h-full transition-transform duration-500"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 border-2 border-transparent mt-24">
            {/* Main Content */}
            <main
              className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-20 text-center cursor-pointer"
              onClick={scrollToTrip}
            >
              <h1 className="text-white text-3xl sm:text-6xl md:text-8xl font-light tracking-wide leading-tight font-['Neight']">
                Crafting your Perfectly<br className="hidden sm:block" />
                Travel Adventure
              </h1>

              {/* Down Arrow - Add hover effect */}
              <div
                className="mt-26 cursor-pointer hover:opacity-80 transition-opacity animate-bounce"
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

        <div id="trip-section" className="min-h-screen relative flex items-center z-10 px-4">
          {/* Content Container - Adjusted padding and width */}
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center ml-[500px] mt-[150px] items-center gap-8 md:gap-0">

              {/* Buttons - Mobile responsive */}
              <div className="flex flex-col gap-4 sm:gap-8 z-20 w-full md:w-auto">
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

                <Link to="/planning" className="group bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] bg-[length:100%_100%] bg-position-x-75 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl text-black text-2xl sm:text-4xl font-['Neight'] flex items-center justify-center md:justify-start gap-4 hover:opacity-90 transition-opacity cursor-pointer">
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
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Services />
        <MeetFounders />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;