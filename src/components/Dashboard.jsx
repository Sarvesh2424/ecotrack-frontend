import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [carbonData,setCarbonData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [250, 230, 220, 205, 190, 180],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Current Footprint</h2>
          <p className="text-3xl text-green-600">180 kg CO2</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Monthly Goal</h2>
          <p className="text-3xl text-blue-600">150 kg CO2</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Reduction</h2>
          <p className="text-3xl text-purple-600">-28%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Carbon Footprint Trend</h2>
        <Line data={carbonData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Eco Tips</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">•</span>
            Use public transportation or bike to reduce emissions
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">•</span>
            Switch to LED bulbs to save energy
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">•</span>
            Reduce meat consumption and try plant-based alternatives
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;