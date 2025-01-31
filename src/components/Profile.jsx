import { useState } from "react";
import {
  PencilIcon,
  CheckIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
  EnvelopeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Profile = ({ userName, email, DailyGoal, updateDailyGoal, logout }) => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState(DailyGoal);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in py-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-12 mt-18 flex justify-center items-center gap-4">
        <UserCircleIcon className="w-12 h-12 text-black" />
        Your Profile
      </h1>

      <div className="flex flex-col items-center gap-8">
        <div className="glass-container w-full p-8 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <UserCircleIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-1">
                Name
              </h2>
              <p className="text-3xl font-bold text-gray-800">{userName}</p>
            </div>
          </div>
        </div>

        <div className="glass-container w-full p-8 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <EnvelopeIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-green-500 uppercase tracking-wider mb-1">
                Email
              </h2>
              <p className="text-3xl font-bold text-gray-800">{email}</p>
            </div>
          </div>
        </div>

        <div className="glass-container w-full p-8 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
              <ChartBarIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h2 className="text-sm font-medium text-indigo-500 uppercase tracking-wider">
                  Daily Carbon Goal
                </h2>
                {!isUpdating ? (
                  <button
                    onClick={() => setIsUpdating(true)}
                    className="p-2 rounded-full hover:bg-indigo-50 transition-all duration-300 group"
                    title="Edit goal"
                  >
                    <PencilIcon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsUpdating(false);
                      updateDailyGoal(goal);
                    }}
                    className="p-2 rounded-full hover:bg-green-50 transition-all duration-300 group"
                    title="Save goal"
                  >
                    <CheckIcon className="w-5 h-5 text-green-400 group-hover:text-green-600" />
                  </button>
                )}
              </div>
              {!isUpdating ? (
                <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  {DailyGoal}
                  <span className="text-xl text-indigo-500 font-semibold">kg CO2</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="text-3xl w-40 rounded-xl border-2 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 p-2"
                  />
                  <span className="text-xl text-indigo-500 font-semibold">kg CO2</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-102 bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold hover:from-red-700 hover:to-red-500 shadow-lg hover:shadow-xl"
        >
          <div className="flex justify-center items-center gap-2">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
            Logout
          </div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
