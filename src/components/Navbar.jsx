import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="flex justify-between items-center bg-transparent">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl sm:text-4xl font-medium">
          Journim
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center text-white">
            <img src="/myTrips.svg" alt="My Trips" className="w-6 h-6 mr-2" />
            My Trips
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/login-signup.svg" alt="My Trips" className="w-6 h-6 mr-2" />
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Log In / Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg p-4 z-50">
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-white">
              <img src="/myTrips.svg" alt="My Trips" className="w-6 h-6 mr-2" />
              My Trips
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full w-full">
              Log In / Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;