import { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    transportation: "",
    electricity: "",
    diet: "mixed",
    waste: "",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple calculation example (in reality, would be more complex)
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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Carbon Footprint Calculator
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Transportation (km/week)
            <input
              type="number"
              name="transportation"
              value={formData.transportation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Electricity Usage (kWh/month)
            <input
              type="number"
              name="electricity"
              value={formData.electricity}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Diet Type
            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="mixed">Mixed Diet</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Waste Production (kg/week)
            <input
              type="number"
              name="waste"
              value={formData.waste}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Carbon Footprint
          </h2>
          <p className="text-3xl text-green-600">{result} kg CO2e/week</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
