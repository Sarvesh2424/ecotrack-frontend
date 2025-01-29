import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Calculator from "./components/Calculator";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import History from "./components/History";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { jwtDecode } from "jwt-decode";

function App() {
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [footprints, setFootprints] = useState([]);
  const [currectFootPrint, setCurrentFootPrint] = useState(0.0);
  const [DailyGoal, setDailyGoal] = useState(100);
  const [change, setChange] = useState(0);
  const [leaderboard, setLeaderboard] = useState(null);
  const [carbonData, setCarbonData] = useState({
    labels: [],
    datasets: [
      {
        label: "Carbon Footprint (kg CO2)",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      setToken(token);
      setUserName(user.name);
      setEmail(user.email);
      setId(user.id);
      setIsLoggedIn(true);
    }

    const fetchData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:3000/footprint/${id}`
          );
          if (response.data && response.data.length > 0) {
            setFootprints(response.data);
            setCurrentFootPrint(
              response.data[response.data.length - 1].footPrint
            );
          } else {
            console.error("No data found for footprints.");
          }
        } catch (error) {
          console.error("Error fetching footprint data:", error);
        }
      }
    };

    const fetchDailyGoal = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://127.0.0.1:3000/goal/${id}`);
          if (response.data && response.data.length > 0) {
            setDailyGoal(response.data[response.data.length - 1].goal);
          } else {
            console.error("No data found for Daily goal.");
          }
        } catch (error) {
          console.error("Error fetching Daily goal:", error);
        }
      }
    };

    const fetchCarbonData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:3000/footprint/${id}`
          );
          if (response.data && response.data.length > 0) {
            const data = response.data.map((item) => item.footPrint);
            const time = response.data.map((item) =>
              new Date(item.date).toDateString()
            );
            setCarbonData({
              labels: time,
              datasets: [
                {
                  label: "Carbon Footprint (kg CO2)",
                  data: data,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            });
          } else {
            console.error("No data found for carbon data.");
          }
        } catch (error) {
          console.error("Error fetching carbon data:", error);
        }
      }
    };

    const fetchReduction = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:3000/reduction/user/${id}`
          );
          if (response.data && response.data.length > 0) {
            setChange(response.data[response.data.length - 1].reduction);
          } else {
            console.error("No data found for reduction.");
          }
        } catch (error) {
          console.error("Error fetching reduction data:", error);
        }
      }
    };
    const fetchLeaderBoard = async () => {
      if (id) {
        try {
          const response = await axios.get("http://127.0.0.1:3000/leaderboard");
          if (response.data && response.data.length > 0) {
            setLeaderboard(response.data);
          } else {
            console.error("No data found for leaderboard.");
          }
        } catch (error) {
          console.error("Error fetching leaderboard data:", error);
        }
      }
    };

    fetchData();
    fetchDailyGoal();
    fetchCarbonData();
    fetchReduction();
    fetchLeaderBoard();
  }, [id]);

  function updateFootPrint(footPrint) {
    const fid = uuidv4();
    let newChange = 0;
    if (currectFootPrint !== 0) {
      newChange = ((footPrint - currectFootPrint) / currectFootPrint) * 100;
      axios.post("http://127.0.0.1:3000/reduction", {
        userId: id,
        footprintId: fid,
        reduction: newChange.toFixed(2),
      });
      setChange(newChange.toFixed(2));
    }
    axios.post("http://127.0.0.1:3000/footprint", {
      id: fid,
      userId: id,
      date: Date.now(),
      footPrint,
    });
    setCarbonData({
      labels: [...carbonData.labels, new Date().toDateString()],
      datasets: [
        {
          label: "Carbon Footprint (kg CO2)",
          data: [...carbonData.datasets[0].data, footPrint],
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    });
    setCurrentFootPrint(footPrint);
  }

  function updateDailyGoal(goal) {
    axios.post("http://127.0.0.1:3000/goal", {
      userId: id,
      goal,
    });
    setDailyGoal(goal);
  }

  function deleteFootprint(id) {
    axios.delete(`http://127.0.0.1:3000/footprint/${id}`);
    axios.delete(`http://127.0.0.1:3000/reduction/${id}`);
    const fetchData = async () => {
      const response = await axios
        .get(`http://127.0.0.1:3000/footprint/${id}`)
        .catch(() => {
          console.log("Error fetching data");
        });
      setFootprints(response.data);
      setCurrentFootPrint(response.data[response.data.length - 1].footPrint);
    };
    const fetchDailyGoal = async () => {
      const response = await axios
        .get(`http://127.0.0.1:3000/goal/${id}`)
        .catch(() => {
          console.log("Error fetching data");
        });
      setDailyGoal(response.data[response.data.length - 1].goal);
    };
    const fetchCarbonData = async () => {
      const response = await axios
        .get(`http://127.0.0.1:3000/footprint/${id}`)
        .catch(() => {
          console.log("Error fetching data");
        });
      const data = response.data.map((item) => item.footPrint);
      const time = response.data.map((item) =>
        new Date(item.date).toDateString()
      );
      setCarbonData({
        labels: time,
        datasets: [
          {
            label: "Carbon Footprint (kg CO2)",
            data: data,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });
    };
    const fetchReduction = async () => {
      const response = await axios
        .get(`http://127.0.0.1:3000/reduction/user/${id}`)
        .catch(() => {
          console.log("Error fetching data");
        });
      setChange(response.data[response.data.length - 1].reduction);
    };
    fetchData();
    fetchDailyGoal();
    fetchCarbonData();
    fetchReduction();
  }

  async function login(email, password) {
    try {
      const response = await axios.post("http://127.0.0.1:3000/login", {
        email,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid login");
      }
    } catch (error) {
      throw new Error("Invalid email or password");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(null);
    setUserName("");
    setEmail("");
    setId(null);
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {window.location.pathname !== "/login" &&
          window.location.pathname !== "/register" && (
            <Navbar isLoggedIn={isLoggedIn} />
          )}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  currectFootPrint={currectFootPrint}
                  DailyGoal={DailyGoal}
                  change={change}
                  updateDailyGoal={updateDailyGoal}
                  carbonData={carbonData}
                />
              }
            />
            <Route
              path="/calculator"
              element={<Calculator updateFootprint={updateFootPrint} />}
            />
            <Route
              path="/leaderboard"
              element={<Leaderboard leaderboard={leaderboard} />}
            />
            <Route
              path="/login"
              element={<Login login={login} isLoggedIn={isLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Profile
                  userName={userName}
                  email={email}
                  DailyGoal={DailyGoal}
                  updateDailyGoal={updateDailyGoal}
                  logout={logout}
                />
              }
            />
            <Route
              path="/history"
              element={
                <History
                  footprints={footprints}
                  deleteFootprint={deleteFootprint}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
