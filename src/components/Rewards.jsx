function Rewards() {
    const rewards = [
      {
        id: 1,
        title: "Tree Planting Certificate",
        points: 1000,
        description: "Get a certificate for planting a tree in your name",
        image: "🌳"
      },
      {
        id: 2,
        title: "Eco-friendly Product Discount",
        points: 500,
        description: "15% off on sustainable products from our partners",
        image: "🛍️"
      },
      {
        id: 3,
        title: "Public Transport Pass",
        points: 2000,
        description: "One month free public transport pass",
        image: "🚌"
      },
      {
        id: 4,
        title: "Solar Panel Consultation",
        points: 3000,
        description: "Free consultation with solar panel experts",
        image: "☀️"
      }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Eco Rewards</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{reward.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{reward.title}</h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{reward.points} points</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Earn Points</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">•</span>
              Reduce your carbon footprint below monthly target: 100 points
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">•</span>
              Complete eco-friendly challenges: 50-200 points
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">•</span>
              Share your progress on social media: 25 points
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">•</span>
              Refer a friend: 500 points
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Rewards;