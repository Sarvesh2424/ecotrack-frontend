import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function Navbar({ isLoggedIn, setIsLoggingIn }) {
  return (
    <nav className="bg-gradient-to-br from-green-500 to-green-300 w-full text-black shadow-lg fixed">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="text-3xl ml-4 font-semibold text-white">
            EcoTrack
          </Link>
          <div className="flex items-center text mr-4 gap-4 space-x-4">
            <Link
              to="/"
              className="text-white hover:text-black transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/calculator"
              className="text-white hover:text-black transition-colors"
            >
              Calculator
            </Link>
            <Link
              to="/leaderboard"
              className="text-white hover:text-black transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              to="/history"
              className="text-white hover:text-black transition-colors"
            >
              History
            </Link>
            <Link
              to="/community"
              className="text-white hover:text-black transition-colors"
            >
              Community
            </Link>
            {isLoggedIn === true && (
              <Link to="/profile">
                <button className="w-10 h-10 py-2 bg-black text-white rounded-full hover:bg-gray-700 hover:cursor-pointer transition-colors flex items-center justify-center">
                  <UserCircleIcon />
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/login" className="hover:text-green-100">
                <button
                  onclick={() => setIsLoggingIn(true)}
                  className="w-24 py-2 bg-black text-white rounded-2xl hover:bg-gray-700 hover:cursor-pointer transition-colors flex justify-center items-center"
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
