function Leaderboard() {
    const leaderboardData = [
      { rank: 1, name: "Sarah Johnson", points: 2500, reduction: "45%" },
      { rank: 2, name: "Mike Chen", points: 2350, reduction: "42%" },
      { rank: 3, name: "Emma Davis", points: 2200, reduction: "40%" },
      { rank: 4, name: "Alex Kim", points: 2100, reduction: "38%" },
      { rank: 5, name: "Lisa Garcia", points: 2000, reduction: "35%" }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Community Leaderboard</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eco Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Reduction</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((user) => (
                <tr key={user.rank} className={user.rank <= 3 ? 'bg-green-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                      user.rank === 1 ? 'bg-yellow-400' :
                      user.rank === 2 ? 'bg-gray-300' :
                      user.rank === 3 ? 'bg-yellow-700' : 'bg-gray-100'
                    } text-sm font-semibold`}>
                      {user.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.points}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{user.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Leaderboard;