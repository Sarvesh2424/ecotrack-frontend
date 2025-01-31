import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

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
    <div className="flex absolute left-0 top-0 min-h-screen w-full">
      <div className="w-1/2 bg-gradient-to-br from-green-400 to-green-600 p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 mt-40">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-6xl font-bold text-white">
              Welcome to EcoTrack!
            </h1>
          </div>
          <p className="text-3xl font-bold text-green-100 mb-8">
            Your personal carbon footprint tracker.
          </p>
          <div className="space-y-4 text-green-100 text-xl">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-6 h-6" />
              <p>Track your daily carbon emissions</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-6 h-6" />
              <p>Get personalized eco-friendly tips</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-6 h-6" />
              <p>Join a community of eco-conscious individuals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50">
        <div className="w-96 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-8 text-center">
            Login to Your Account
          </h1>

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
            className="glass-container p-8 rounded-2xl space-y-6 transition-all duration-300 transform hover:shadow-2xl"
          >
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={loginFormDetails.email}
                    onChange={(e) =>
                      setLoginFormDetails({
                        ...loginFormDetails,
                        email: e.target.value,
                      })
                    }
                    className="pl-10 w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={loginFormDetails.password}
                    onChange={(e) =>
                      setLoginFormDetails({
                        ...loginFormDetails,
                        password: e.target.value,
                      })
                    }
                    className="pl-10 w-full p-3 text-gray-700 bg-white/50 rounded-xl border-2 border-green-100 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            {invalid && (
              <div className="text-red-500 text-sm flex items-center gap-2 animate-shake">
                Invalid email or password
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CheckCircleIcon className="w-6 h-6" />
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            New to EcoTrack?{" "}
            <Link
              to="/register"
              className="font-semibold text-green-600 hover:text-green-500 transition-colors duration-300"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
