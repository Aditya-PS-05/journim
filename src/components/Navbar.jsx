import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link to="/" className="text-white text-4xl font-light">
        Journim
      </Link>

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
  )
}

export default Navbar