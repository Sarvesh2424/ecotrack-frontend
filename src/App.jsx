import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Calculator from "./components/Calculator";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import History from "./components/History";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [footprints, setFootprints] = useState([]);
  const [currectFootPrint, setCurrentFootPrint] = useState(0.0);
  const [monthlyGoal, setMonthlyGoal] = useState(100);
  const [change, setChange] = useState(0);
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
    const fetchData = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/footprint/6bd2cf47-6604-47f7-814b-53a0ce602484"
      );
      setFootprints(response.data);
      setCurrentFootPrint(response.data[response.data.length - 1].footPrint);
    };
    const fetchMonthlyGoal = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/goal/6bd2cf47-6604-47f7-814b-53a0ce602484"
      );
      setMonthlyGoal(response.data[response.data.length - 1].goal);
    };
    const fetchCarbonData = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/footprint/6bd2cf47-6604-47f7-814b-53a0ce602484"
      );
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
      const response = await axios.get(
        "http://127.0.0.1:3000/reduction/6bd2cf47-6604-47f7-814b-53a0ce602484"
      );
      setChange(response.data[response.data.length - 1].reduction);
    };
    fetchData();
    fetchMonthlyGoal();
    fetchCarbonData();
    fetchReduction();
  }, []);

  function updateFootPrint(footPrint) {
    let newChange = 0;
    if (currectFootPrint !== 0) {
      newChange = ((footPrint - currectFootPrint) / currectFootPrint) * 100;
      axios.post("http://127.0.0.1:3000/reduction", {
        userId: "6bd2cf47-6604-47f7-814b-53a0ce602484",
        footprintId: footPrint.id,
        reduction: newChange.toFixed(2),
      });
      setChange(newChange.toFixed(2));
    }
    axios.post("http://127.0.0.1:3000/footprint", {
      userId: "6bd2cf47-6604-47f7-814b-53a0ce602484",
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

  function updateMonthlyGoal(goal) {
    axios.post("http://127.0.0.1:3000/goal", {
      userId: "6bd2cf47-6604-47f7-814b-53a0ce602484",
      goal,
    });
    setMonthlyGoal(goal);
  }

  function deleteFootprint(id) {
    axios.delete(`http://127.0.0.1:3000/footprint/${id}`);
    setFootprints(footprints.filter((footprint) => footprint.id !== id));
  }

  function login(email, password) {
    axios
      .post("http://127.0.0.1:3000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        setUser(token[0]);
        console.log(user);
      });
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  currectFootPrint={currectFootPrint}
                  monthlyGoal={monthlyGoal}
                  change={change}
                  updateMonthlyGoal={updateMonthlyGoal}
                  carbonData={carbonData}
                />
              }
            />
            <Route
              path="/calculator"
              element={<Calculator updateFootprint={updateFootPrint} />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Profile
                  monthlyGoal={monthlyGoal}
                  updateMonthlyGoal={updateMonthlyGoal}
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
