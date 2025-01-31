import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PencilIcon, CheckIcon, TrophyIcon } from "@heroicons/react/24/outline";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard({
  currectFootPrint,
  DailyGoal,
  change,
  updateDailyGoal,
  carbonData,
}) {
  const [goal, setGoal] = useState(DailyGoal);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 transform hover:scale-105 transition-transform duration-300">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-container p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4 bg-black bg-clip-text text-transparent">
              Current Footprint
            </h2>
            {currectFootPrint < DailyGoal && (
              <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative"
              >
                <TrophyIcon className="w-6 h-6 text-yellow-500 hover:text-yellow-600 transition-colors hover:cursor-pointer" />
                {showTooltip && (
                  <div className="absolute bg-green-600 text-white text-sm rounded-xl p-2 bottom-8 -left-12 shadow-lg transform -translate-x-1/2 transition-all duration-300">
                    Goal achieved! 🎉
                  </div>
                )}
              </div>
            )}
            {currectFootPrint > DailyGoal && (
              <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="relative"
              >
                <div className="flex gap-1 items-center">
                  <TrophyIcon className="w-6 h-6 text-red-500 hover:text-red-600 transition-colorshover:cursor-pointer" />
                </div>
                {showTooltip && (
                  <div className="absolute bg-red-600 text-white text-sm rounded-xl p-2 bottom-8 -left-12 shadow-lg transform -translate-x-1/2 transition-all duration-300">
                    Keep going! 💪
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="text-4xl font-bold text-green-600">{currectFootPrint} kg CO2</p>
        </div>

        <div className="glass-container p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4 bg-black bg-clip-text text-transparent">
              Daily Goal
            </h2>
            {!isUpdating && (
              <button
                onClick={() => setIsUpdating(true)}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <PencilIcon className="w-5 h-5 text-white" />
              </button>
            )}
            {isUpdating && (
              <button
                onClick={() => {
                  setIsUpdating(false);
                  updateDailyGoal(goal);
                }}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <CheckIcon className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
          {!isUpdating && (
            <p className="text-4xl font-bold text-blue-600">{DailyGoal} kg CO2</p>
          )}
          {isUpdating && (
            <div>
              <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="text-3xl w-40 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
          )}
        </div>

        <div className="glass-container p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 bg-black bg-clip-text text-transparent">
            Reduction
          </h2>
          <p className={`text-4xl font-bold ${change > 0 ? 'text-red-600' : 'text-green-600'}`}>
            {change > 0 && <span className="inline-flex items-center">⬆ {Math.abs(change)}%</span>}
            {change < 0 && <span className="inline-flex items-center">⬇ {Math.abs(change)}%</span>}
            {change === 0 && <span>{Math.abs(change)}%</span>}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        <div className="glass-container w-full md:w-3/5 p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 bg-black bg-clip-text text-transparent">
            Carbon Footprint Trend
          </h2>
          <Line className="h-36" data={carbonData} options={{
            plugins: {
              legend: {
                labels: {
                  font: {
                    family: "'Inter', sans-serif",
                    weight: 500
                  }
                }
              }
            },
            scales: {
              y: {
                grid: {
                  color: 'rgba(0,0,0,0.05)'
                }
              },
              x: {
                grid: {
                  color: 'rgba(0,0,0,0.05)'
                }
              }
            }
          }} />
        </div>

        <div className="glass-container w-full md:w-2/5 p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6 bg-black bg-clip-text text-transparent">
            Eco Tips
          </h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Use public transportation or bike to reduce emissions</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300 ">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Switch to LED bulbs to save energy</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Reduce meat consumption and try plant-based alternatives</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Use solar panels or purchase renewable energy credits</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Use reusable bags, bottles, and containers</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Plant trees and support reforestation efforts</span>
            </li>
            <li className="flex items-center space-x-2 transition-all duration-300">
              <span className="text-green-500 text-xl">•</span>
              <span className="text-gray-700">Use energy-efficient devices and enable power-saving settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
