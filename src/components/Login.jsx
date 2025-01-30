import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Login = ({ login, isLoggedIn }) => {
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const [loginFormDetails, setLoginFormDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex absolute left-0 top-0 h-screen">
      <div className="bg-green-400 w-240 shadow-2xl h-auto">
        <h1 className="text-6xl font-bold text-white mt-60 mx-8 mb-6">
          Welcome to EcoTrack!
        </h1>
        <p className="text-3xl font-bold text-gray-200 mx-8 mb-6">
          Your personal carbon footprint tracker.
        </p>
      </div>
      <div className="w-1/2 ml-30 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mt-40 mb-6">Login</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await login(loginFormDetails.email, loginFormDetails.password);
              navigate("/");
            } catch (err) {
              setInvalid(true);
            }
          }}
          className="bg-white w-96 p-6 rounded-2xl shadow-2xl space-y-4"
        >
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
              className="mt-1 p-2 text-gray-700 block w-full rounded-md bg-gray-50 border-b-2 border-black"
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
              className="mt-1 p-2 text-gray-700 block w-full rounded-md bg-gray-50 border-b-2 border-black"
            />
          </label>
          {invalid && <p className="text-red-500">Invalid email or password</p>}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 hover:cursor-pointer transition-colors"
          >
            <CheckCircleIcon className="w-r h-5" />
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          New to EcoTrack? Click here to{" "}
          <Link
            to="/register"
            className="text-green-600 hover:text-green-500 hover:cursor-pointer"
          >
            register!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
