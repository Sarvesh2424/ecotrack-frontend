import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [loginFormDetails, setLoginFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-18 mb-6">Register</h1>
      <form className="bg-white w-96 p-6 rounded-2xl shadow-2xl space-y-4">
        <label className="block text-sm font-medium text-black">
          Name:
          <input
            type="text"
            value={loginFormDetails.name}
            onChange={(e) =>
              setLoginFormDetails({
                ...loginFormDetails,
                name: e.target.value,
              })
            }
            className="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-lg focus:border-green-500 focus:ring-green-500"
          />
        </label>
        <label className="block text-sm font-medium text-black">
          Email:
          <input
            type="email"
            value={loginFormDetails.email}
            onChange={(e) =>
              setLoginFormDetails({
                ...loginFormDetails,
                email: e.target.value,
              })
            }
            className="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-lg focus:border-green-500 focus:ring-green-500"
          />
        </label>
        <label className="block text-sm font-medium text-black">
          Password:
          <input
            type="password"
            value={loginFormDetails.password}
            onChange={(e) =>
              setLoginFormDetails({
                ...loginFormDetails,
                password: e.target.value,
              })
            }
            className="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-lg"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 hover:cursor-pointer transition-colors"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Have an EcoTrack account? Click here to{" "}
        <Link
          to="/login"
          className="text-green-600 hover:text-green-500 hover:cursor-pointer"
        >
          login!
        </Link>
      </p>
    </div>
  );
};

export default Register;
