import { useState } from "react";
import { CalculatorIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

function Calculator({ updateFootprint }) {
  const [formData, setFormData] = useState({
    transportation: "",
    electricity: "",
    diet: "mixed",
    waste: "",
  });

  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.transportation || !formData.electricity || !formData.waste) {
      return alert("Please fill all the fields");
    }
    setIsCalculating(true);
    
    setTimeout(() => {
      const total =
        (parseFloat(formData.transportation) || 0) * 0.14 +
        (parseFloat(formData.electricity) || 0) * 0.42 +
        (formData.diet === "vegan"
          ? 1.5
          : formData.diet === "vegetarian"
          ? 2.5
          : 3.3) +
        (parseFloat(formData.waste) || 0) * 0.09;

      setResult(total.toFixed(2));
      updateFootprint(total.toFixed(2));
      setIsCalculating(false);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text mb-8 mt-18 flex items-center justify-center gap-4">
        <CalculatorIcon className="w-12 h-12 text-black" />
        Carbon Footprint Calculator
      </h1>

      <form
        onSubmit={handleSubmit}
        className="glass-container p-8 rounded-2xl space-y-6 transition-all duration-300 transform hover:shadow-2xl"
      >
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-lg font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-2">
              Transportation (km/day)
            </label>
            <input
              type="number"
              name="transportation"
              value={formData.transportation}
              onChange={handleChange}
              className="w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder="Enter distance..."
            />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-2">
              Electricity Usage (kWh/day)
            </label>
            <input
              type="number"
              name="electricity"
              value={formData.electricity}
              onChange={handleChange}
              className="w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              placeholder="Enter usage..."
            />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-2">
              Diet Type
            </label>
            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              className="w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            >
              <option value="mixed">Mixed Diet</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-lg font-medium bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent mb-2">
              Waste Production (kg/day)
            </label>
            <input
              type="number"
              name="waste"
              value={formData.waste}
              onChange={handleChange}
              className="w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
              placeholder="Enter amount..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isCalculating}
          className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? (
            <>
              <ArrowPathIcon className="w-6 h-6 animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <CalculatorIcon className="w-6 h-6" />
              Calculate
            </>
          )}
        </button>
      </form>

      {result && (
        <div className="mt-8 glass-container p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-4">
            Your Carbon Footprint
          </h2>
          <p className="text-4xl font-bold text-gray-800">
            {result} <span className="text-green-500">kg CO2e/day</span>
          </p>
          <p className="mt-4 text-gray-600">
            This is your estimated daily carbon footprint based on your inputs.
            Consider ways to reduce your impact on the environment!
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
