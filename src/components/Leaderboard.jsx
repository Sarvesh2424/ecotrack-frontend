function Leaderboard({ leaderboard }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-18">
        Community Leaderboard
      </h1>
      {leaderboard && leaderboard.length > 0 && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overall Carbon Reduction
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboard.map((user, index) => (
                <tr
                  key={index + 1}
                  className={index + 1 <= 3 ? "bg-green-50" : ""}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                        index + 1 === 1
                          ? "bg-yellow-400"
                          : index + 1 === 2
                          ? "bg-gray-300"
                          : index + 1 === 3
                          ? "bg-yellow-600"
                          : "bg-gray-100"
                      } text-sm font-semibold`}
                    >
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td
                    className={
                      user.totalReduction.toFixed(2) > 0
                        ? "px-6 py-4 whitespace-nowrap text-sm text-red-600"
                        : "px-6 py-4 whitespace-nowrap text-sm text-green-600"
                    }
                  >
                    {user.totalReduction.toFixed(2) > 0 && (
                      <>&uarr; {Math.abs(user.totalReduction.toFixed(2))} %</>
                    )}
                    {user.totalReduction.toFixed(2) < 0 && (
                      <>&darr; {Math.abs(user.totalReduction.toFixed(2))} %</>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
