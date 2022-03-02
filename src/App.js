import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import "antd/dist/antd.css";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<MainComponent />}></Route>
                    <Route
                        exact
                        path="/register"
                        element={<RegisterComponent />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<LoginComponent />}
                    ></Route>
                    <Route
                        exact
                        path="/dashboard"
                        element={<Dashboard />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
