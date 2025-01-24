import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-green-500 to-green-300 w-full text-black shadow-xl fixed">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="text-3xl ml-4 font-semibold text-white">
            EcoTrack
          </Link>
          <div className="flex items-center text mr-4 gap-4 space-x-4">
            <Link to="/" className="hover:text-green-100">
              Dashboard
            </Link>
            <Link to="/calculator" className="hover:text-green-100">
              Calculator
            </Link>
            <Link to="/leaderboard" className="hover:text-green-100">
              Leaderboard
            </Link>
            <Link to="/ecoai" className="hover:text-green-100">
              EcoAI
            </Link>
            <Link to="/login" className="hover:text-green-100">
              <button className="w-24 py-2 bg-black text-white rounded-xl hover:bg-gray-700 hover:cursor-pointer transition-colors">
                Login
              </button>
            </Link>
            <Link to="/register" className="hover:text-green-100">
              <button className="w-24 py-2 bg-black text-white rounded-xl hover:bg-gray-700 hover:cursor-pointer transition-colors">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
