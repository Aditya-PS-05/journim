import {Link} from "react-router-dom"
import Navbar from "./Navbar";

const HotelBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-emerald-100 to-gray-100"
    style={{
        backgroundImage: "url('/images/planning/white_bg.svg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <Navbar isLight={true} />

      {/* Navigation and Title */}
      <div className="flex items-center p-6">
      <Link to="/trip-details" className="inline-flex items-center justify-center text-black ml-30">
          <img src="/images/states/himachalpradesh/arrow_left.svg" alt="arrow" className="w-12 h-12 mx-6" loading="lazy" />
        </Link>
        <h1 className="text-4xl font-medium">Hotel Booking</h1>
      </div>

      {/* Booking Form Section */}
      <div className="flex flex-col items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl">
          {/* City or Location Card */}
          <div className="md:col-span-3 backdrop-blur-sm border border-black rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <span className="text-xl">City or Location</span>
              {/* <ChevronDown className="h-6 w-6 text-emerald-600" /> */}
            </div>
            <div className="mt-2">
              <div className="text-4xl font-medium">Shimla</div>
              <div className="text-xl mt-1">Himachal Pradesh</div>
            </div>
          </div>

          {/* Check In/Out Card */}
          <div className="md:col-span-6 backdrop-blur-sm border border-black rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-xl">Check In</span>
                  <img
                    src="/arrow-up.svg"
                    alt="Scroll down"
                    className="w-6 h-6 text-white mx-auto"
                    loading="lazy"
                />
                </div>
                <div className="mt-2">
                  <div className="text-5xl font-medium">25</div>
                  <div className="text-xl">Jun'24</div>
                  <div className="text-lg text-gray-600">Tuesday</div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <span className="text-xl">Check out</span>
                  <img
                    src="/arrow-up.svg"
                    alt="Scroll down"
                    className="w-6 h-6 text-white mx-auto"
                    loading="lazy"
                    />
                </div>
                <div className="mt-2">
                  <div className="text-5xl font-medium">29</div>
                  <div className="text-xl">Jun'24</div>
                  <div className="text-lg text-gray-600">Saturday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guests Card */}
          <div className="md:col-span-3 backdrop-blur-sm border border-black rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <span className="text-xl">Guests</span>
              <img
                    src="/arrow-up.svg"
                    alt="Scroll down"
                    className="w-6 h-6 text-white mx-auto"
                    loading="lazy"
                    />
            </div>
            <div className="mt-2">
              <div className="text-4xl font-medium">
                2 <span className="text-2xl">Adults</span> 1 <span className="text-2xl">Child</span>
              </div>
            </div>
          </div>

        {/* Rooms Card */}
                  <div className="md:col-span-3 backdrop-blur-sm border border-black rounded-2xl p-6 mt-10">
                    <div className="flex justify-between items-center">
                      <span className="text-xl">Rooms</span>
                      <img
                        src="/arrow-up.svg"
                        alt="Scroll down"
                        className="w-6 h-6 text-white mx-auto"
                        loading="lazy"
                        />
                    </div>
                    <div className="mt-2">
                      <div className="text-4xl font-medium">
                        2 <span className="text-2xl">Rooms</span>
                      </div>
                    </div>
                  </div>

                  {/* Star Category */}
                  <div className="md:col-span-9 space-y-6">
                    <h2 className="text-2xl font-medium">Star Category</h2>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 text-xl">
                        <input type="checkbox" defaultChecked className="w-6 h-6 rounded border-gray-300 text-emerald-600 bg-emerald-600" />
                        <span>3 Star (Rs. 100 to Rs 500)</span>
                      </label>
                      <label className="flex items-center gap-3 text-xl">
                        <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-emerald-600 bg-emerald-600" />
                        <span>4 Star (Rs. 14,000 to Rs 15,000)</span>
                      </label>
                      <label className="flex items-center gap-3 text-xl">
                        <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-emerald-600 bg-emerald-600" />
                        <span>5 Star (Rs. 16,000 to Rs 17,500)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
        <div className="flex flex-col items-end w-full max-w-6xl mt-[-100px] gap-4">
          <Link to="/ride_booking" className="bg-gradient-to-r from-[#1BC8FF] via-[#1BC8FF] to-[#2ADB87] text-black text-xl font-medium px-8 py-4 rounded-full flex items-center gap-2">
            Let's get a ride
            <img src="/images/states/himachalpradesh/arrow_left.svg" alt="arrow" className="w-6 h-6 mx-6 rotate-180" loading="lazy" />
          </Link>
          <Link to="#" className="text-xl underline underline-offset-4">
            More Filter
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HotelBooking;

