import { TrophyIcon, ChartBarIcon } from "@heroicons/react/24/outline";

function Leaderboard({ leaderboard }) {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-8 mt-18 flex items-center justify-center gap-4">
        <TrophyIcon className="w-12 h-12 text-black" />
        Community Leaderboard
      </h1>

      {leaderboard && leaderboard.length > 0 && (
        <div className="glass-container rounded-2xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-100/50 to-yellow-50/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-yellow-800 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-yellow-800 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-yellow-800 uppercase tracking-wider">
                    Carbon Reduction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {leaderboard.map((user, index) => (
                  <tr
                    key={index + 1}
                    className={`transition-all duration-300 hover:bg-yellow-50/30 ${
                      index + 1 <= 3 ? "bg-yellow-50/20" : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {index + 1 <= 3 ? (
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                              index + 1 === 1
                                ? "bg-gradient-to-br from-yellow-400 to-yellow-300"
                                : index + 1 === 2
                                ? "bg-gradient-to-br from-gray-300 to-gray-200"
                                : "bg-gradient-to-br from-yellow-700 to-yellow-600"
                            } text-white font-bold shadow-lg transform transition-transform duration-300 hover:scale-110`}
                          >
                            {index + 1}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-semibold">
                            {index + 1}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center gap-2 text-sm font-medium ${
                          user.totalReduction > 0
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        <ChartBarIcon className="w-5 h-5" />
                        {user.totalReduction > 0 ? (
                          <span className="flex items-center">
                            ⬆ {Math.abs(user.totalReduction.toFixed(2))}%
                          </span>
                        ) : (
                          <span className="flex items-center">
                            ⬇ {Math.abs(user.totalReduction.toFixed(2))}%
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(!leaderboard || leaderboard.length === 0) && (
        <div className="glass-container p-8 rounded-2xl text-center">
          <TrophyIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600">
            No leaderboard data available yet. Start reducing your carbon footprint to appear here!
          </p>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
