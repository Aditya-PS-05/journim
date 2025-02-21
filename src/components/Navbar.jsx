import { Link } from 'react-router-dom'

const Navbar = ({isLight}) => {
  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link to="/" className={`${isLight ? 'text-black' : 'text-white'} text-4xl font-medium`}>
        Journim
      </Link>

      {/* Right Navigation Items */}
      <div className="flex items-center gap-8">
        <div className={`flex items-center ${isLight ? 'text-black' : 'text-white'}`}>
          <img src={isLight ? '/images/navbar/black_mytrips.svg' : '/images/navbar/white_mytrips.svg'} alt="My Trips" className="w-6 h-6 mr-2" />
          My Trips
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <img src={isLight ? '/images/navbar/black_login.svg' : '/images/navbar/white_login.svg'} alt="login" className="w-6 h-6 mr-2" />
          </div>
          <button className={`${isLight ? 'bg-black text-white': 'bg-white text-black'} px-6 py-2 rounded-full`}>
            Log In / Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar