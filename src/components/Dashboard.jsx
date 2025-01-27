import { useState } from "react";
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
import { PencilIcon, CheckIcon } from "@heroicons/react/24/outline";

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
  monthlyGoal,
  change,
  updateMonthlyGoal,
  carbonData,
}) {
  const [goal, setGoal] = useState(monthlyGoal);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Current Footprint</h2>
          <p className="text-3xl text-green-600">{currectFootPrint} kg CO2</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-2">Monthly Goal</h2>
            {!isUpdating && (
              <button
                onClick={() => {
                  setIsUpdating(true);
                }}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-700 hover:cursor-pointer transition-colors"
              >
                <PencilIcon className="w-5 h-5 text-white" />
              </button>
            )}
            {isUpdating && (
              <button
                onClick={() => {
                  setIsUpdating(false);
                  updateMonthlyGoal(goal);
                }}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-700 hover:cursor-pointer transition-colors"
              >
                <CheckIcon className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
          {!isUpdating && (
            <p className="text-3xl text-blue-600">{monthlyGoal} kg CO2</p>
          )}
          {isUpdating && (
            <div>
              <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="text-3xl w-40"
              />
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Reduction</h2>
          <p
            className={
              change > 0 ? "text-3xl text-red-600" : "text-3xl text-green-600"
            }
          >
            {change > 0 && <>&uarr; {Math.abs(change)} %</>}
            {change < 0 && <>&darr; {Math.abs(change)} %</>}
            {change === 0 && <> {Math.abs(change)} %</>}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Carbon Footprint Trend</h2>
        <Line data={carbonData} />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
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
