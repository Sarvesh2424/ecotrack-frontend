import { useState } from "react";
import {
  PencilIcon,
  CheckIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Profile = ({
  userName,
  email,
  DailyGoal,
  updateDailyGoal,
  logout,
}) => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState(DailyGoal);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-18 flex justify-center">
        Profile
      </h1>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white w-96 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          <p className="text-purple-600 text-3xl">{userName}</p>
        </div>
        <div className="bg-white w-96 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-purple-600 text-3xl">{email}</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-96 p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-2">Daily Goal</h2>
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
                    updateDailyGoal(goal);
                  }}
                  className="p-2 bg-black text-white rounded-full hover:bg-gray-700 hover:cursor-pointer transition-colors"
                >
                  <CheckIcon className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
            {!isUpdating && (
              <p className="text-3xl text-blue-600">{DailyGoal} kg CO2</p>
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
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-600 p-2 w-96 rounded-xl text-white hover:bg-red-500 hover:cursor-pointer"
        >
          <div className="flex justify-center items-center gap-2">
            <ArrowRightStartOnRectangleIcon className="w-5 h-5" /> Logout
          </div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
