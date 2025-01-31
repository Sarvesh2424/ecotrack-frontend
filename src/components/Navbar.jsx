import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Navbar({ isLoggedIn, setIsLoggingIn }) {
  return (
    <nav className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 w-full text-black shadow-xl fixed backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <Link 
            to="/" 
            className="text-3xl ml-4 font-bold text-white hover:text-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            EcoTrack
          </Link>
          <div className="flex items-center text mr-4 gap-6 space-x-4">
            <Link 
              to="/" 
              className="text-white hover:text-gray-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Dashboard
            </Link>
            <Link 
              to="/calculator" 
              className="text-white hover:text-gray-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Calculator
            </Link>
            <Link 
              to="/leaderboard" 
              className="text-white hover:text-gray-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Leaderboard
            </Link>
            <Link 
              to="/history" 
              className="text-white hover:text-gray-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              History
            </Link>
            <Link 
              to="/community" 
              className="text-white hover:text-gray-100 transition-all duration-300 hover:transform hover:translate-y-[-2px] relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
            >
              Community
            </Link>
            {isLoggedIn === true && (
              <Link to="/profile">
                <button className="w-10 h-10 py-2 bg-black text-white rounded-full hover:bg-gray-800 hover:cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-3 flex items-center justify-center shadow-lg hover:shadow-xl">
                  <UserCircleIcon className="w-6 h-6" />
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/login" className="hover:text-green-100">
                <button
                  onClick={() => setIsLoggingIn(true)}
                  className="w-24 py-2 bg-black text-white rounded-2xl hover:bg-gray-800 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex justify-center items-center font-medium"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
