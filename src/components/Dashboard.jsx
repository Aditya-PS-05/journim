import Navbar from "./Navbar";

const Dashboard = () => {
    return (
      <div className="p-6 min-h-screen"
      style={{
        backgroundImage: "url('/images/planning/white_bg.svg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
      >
        <Navbar isLight={true} />
        <div className="max-w-4xl mx-auto">

        <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] border-2 border-transparent">
            <img src="/images/states/india.svg" alt="India Map" className="w-full h-full object-cover" />
            </div>

          <div>
            {/* Create Trip Button */}
          <div className="flex justify-center mb-6">
            <button className="border-2 border-green-600 px-6 py-3 rounded-lg flex items-center gap-2 text-lg font-semibold shadow-md hover:bg-green-100">
              ➕ Create your trip
            </button>
          </div>
  
          {/* My Trips Section */}
          <div className="rounded-lg shadow-md p-4 border relative">
            <div className="absolute -top-6 left-4 bg-green-500 text-white px-4 py-2 rounded-t-lg font-bold text-lg">
              My Trips
            </div>
            
            <div className="mt-6">
              {[1, 2].map((trip, index) => (
                <div
                  key={index}
                  className="flex items-center border rounded-lg shadow-md p-4 mb-4"
                >
                  <img
                    src="https://via.placeholder.com/100" // Replace with actual trip image
                    alt="Trip Thumbnail"
                    className="w-24 h-16 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">Vac Shimla</h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      📍 Shimla
                    </p>
                  </div>
                  <button className="text-blue-500 hover:underline">Add Dates</button>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
