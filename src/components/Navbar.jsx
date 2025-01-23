import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            EcoTrack
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-green-200">
              Dashboard
            </Link>
            <Link to="/calculator" className="hover:text-green-200">
              Calculator
            </Link>
            <Link to="/leaderboard" className="hover:text-green-200">
              Leaderboard
            </Link>
            <Link to="/rewards" className="hover:text-green-200">
              Rewards
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
