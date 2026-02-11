import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-b border-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-xl font-bold hover:text-blue-100 transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">🏢</span>
              Corporate Territory
            </Link>
            <div className="flex space-x-2">
              <Link
                to="/"
                className="hover:bg-blue-700 hover:bg-opacity-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium hover:shadow-md"
              >
                🗺️ Map
              </Link>
              <Link
                to="/dashboard"
                className="hover:bg-blue-700 hover:bg-opacity-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium hover:shadow-md"
              >
                📊 Dashboard
              </Link>
              <Link
                to="/leaderboard"
                className="hover:bg-blue-700 hover:bg-opacity-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium hover:shadow-md"
              >
                🏆 Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
