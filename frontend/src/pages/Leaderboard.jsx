function Leaderboard() {
  // Placeholder data
  const placeholderCompanies = [
    { rank: 1, name: "Company A", territory: 1250, points: 5000 },
    { rank: 2, name: "Company B", territory: 980, points: 4200 },
    { rank: 3, name: "Company C", territory: 875, points: 3800 },
    { rank: 4, name: "Company D", territory: 650, points: 2900 },
    { rank: 5, name: "Company E", territory: 420, points: 1800 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <span className="text-5xl">🏆</span>
          Leaderboard
        </h1>
        <p className="text-gray-600">Top performing companies by territory</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Territory (km²)
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {placeholderCompanies.map((company) => (
              <tr
                key={company.rank}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center">
                    <span
                      className={`
                      text-2xl font-bold
                      ${company.rank === 1 ? "" : ""}
                      ${company.rank === 2 ? "" : ""}
                      ${company.rank === 3 ? "" : ""}
                      ${company.rank > 3 ? "text-gray-700 text-lg" : ""}
                    `}
                    >
                      {company.rank === 1
                        ? "🥇"
                        : company.rank === 2
                          ? "🥈"
                          : company.rank === 3
                            ? "🥉"
                            : `#${company.rank}`}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-base font-semibold text-gray-900">
                    {company.name}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-base font-medium text-gray-700">
                    {company.territory.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-base font-bold text-blue-600">
                    {company.points.toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center bg-blue-50 rounded-lg p-4 border border-blue-100">
        <p className="text-gray-600 text-sm font-medium">
          💡 This is placeholder data - real-time rankings will appear here
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
