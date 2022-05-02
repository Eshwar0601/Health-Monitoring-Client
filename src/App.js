import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import "antd/dist/antd.css";
import Dashboard from "./components/Dashboard";
import PeriodicalHealthTable from "./components/PeriodicalHealthTable";
import MainDashboardLayout from "./components/MainDashboardLayout";
import GraphicalData from "./components/GraphicalData";
import HeartPrediction from "./components/HeartPrediction";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<MainComponent />} />
                    <Route
                        exact
                        path="register"
                        element={<RegisterComponent />}
                    />
                    <Route exact path="login" element={<LoginComponent />} />
                    <Route
                        exact
                        path="dashboard"
                        element={<MainDashboardLayout />}
                    >
                        <Route
                            exact
                            path="tables"
                            element={<PeriodicalHealthTable />}
                        />
                        <Route
                            exact
                            path="visualization"
                            element={<GraphicalData />}
                        />
                        <Route exact path="chd" element={<HeartPrediction />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
