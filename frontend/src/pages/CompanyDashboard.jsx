function CompanyDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Company Dashboard
        </h1>
        <p className="text-gray-600">
          Track your territory expansion and performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Total Territory
            </h3>
            <span className="text-3xl">🗺️</span>
          </div>
          <p className="text-4xl font-bold text-blue-600 mb-1">0 km²</p>
          <p className="text-sm text-gray-500">+0% from last week</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Ranking
            </h3>
            <span className="text-3xl">🏆</span>
          </div>
          <p className="text-4xl font-bold text-green-600 mb-1">#--</p>
          <p className="text-sm text-gray-500">Out of 100 companies</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Points
            </h3>
            <span className="text-3xl">⭐</span>
          </div>
          <p className="text-4xl font-bold text-purple-600 mb-1">0</p>
          <p className="text-sm text-gray-500">+0 this week</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📋</span>
          <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
        </div>
        <div className="text-gray-500 text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg mb-2">No recent activity</p>
          <p className="text-sm">Your territory captures will appear here</p>
        </div>
      </div>

      {/* Territory Map Preview */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌍</span>
          <h2 className="text-2xl font-bold text-gray-800">
            Territory Overview
          </h2>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-64 rounded-lg flex items-center justify-center text-gray-600 border-2 border-dashed border-blue-300">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">
              🗺️ Map preview coming soon
            </p>
            <p className="text-sm">Your territory will be visualized here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
