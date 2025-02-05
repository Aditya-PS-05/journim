import './App.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="relative w-screen m-0 p-0 overflow-hidden box-content bg-black">
      {/* Background Image */}
      <img 
        src="/home-bg.svg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover m-0 p-0"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full m-0 p-0">
        <HomePage />
      </div>
    </div>
  )
}

export default App