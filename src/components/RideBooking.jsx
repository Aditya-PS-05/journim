import { ArrowLeft, ArrowRight } from "lucide-react"
import {Link} from "react-router-dom";
import Navbar from "./Navbar"

const RideBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-emerald-100 to-gray-100"
    style={{
        backgroundImage: "url('/images/common/bg_white_rotate.svg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <Navbar isLight="true"/>

      {/* Navigation and Title */}
      <div className="flex items-center p-6">
      <Link to="/trip-details" className="inline-flex items-center justify-center text-black ml-34">
          <img src="/images/states/himachalpradesh/arrow_left.svg" alt="arrow" className="w-12 h-12 mx-6" loading="lazy" />
        </Link>
        <h1 className="text-4xl font-medium">Hotel Booking</h1>
      </div>

      {/* Booking Options Section */}
      <div className="flex flex-col items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-[70%] max-w-7xl p-4">
          {/* City or Location Card */}
          <div className="md:col-span-3 backdrop-blur-sm border border-black rounded-2xl p-6 max-h-[200px] flex flex-col justify-center">
            <div className="text-xl">City or Location</div>
            <div className="mt-2">
                <div className="text-4xl font-medium">Shimla</div>
                <div className="text-xl mt-1">Himachal Pradesh</div>
            </div>
            </div>

          {/* Cab Card */}
          <div className="md:col-span-4 backdrop-blur-sm border border-black rounded-2xl p-6 mt-[-100px]">
            <h2 className="text-3xl font-medium mb-4">Cab</h2>
            <l className="space-y-4 mb-8 p-6">
              <li>
                Cabs provide door-to-door service, eliminating the need to navigate unfamiliar public transportation
                systems
              </li>
              <li>
                Cab drivers often have extensive knowledge of the local area, which can be helpful for finding the best
                routes and avoiding traffic.
              </li>
              <li>
                Having a cab allows you to relax and enjoy your trip without the stress of driving, navigating, or
                parking.
              </li>
            </l>
            <button className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-xl font-medium px-6 py-3 rounded-full flex items-center gap-2">
              Book a Cab
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Self Drive Card */}
          <div className="md:col-span-4 backdrop-blur-sm border border-black rounded-2xl p-6 mt-[-100px]">
            <h2 className="text-3xl font-medium mb-4">Self drive</h2>
            <l className="space-y-4 mb-8 p-6">
              <li>
                You can travel directly to your destinations, reducing travel time and eliminating the need for multiple
                transfers on public transportation.
              </li>
              <li>
                Rental agencies offer a range of vehicles to suit different needs, from compact cars for solo travelers
                to larger vehicles for families or groups.
              </li>
              <li>
                Renting a car can be more economical for groups or families compared to buying multiple public
                transportation tickets.
              </li>
            </l>
            <button className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-xl font-medium px-6 py-3 rounded-full flex items-center gap-2">
              Book a Car
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RideBooking

