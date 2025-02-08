import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link to="/" className="text-white text-4xl font-medium">
        Journim
      </Link>

      {/* Right Navigation Items */}
      <div className="flex items-center gap-8">
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
    </nav>
  )
}

export default Navbar