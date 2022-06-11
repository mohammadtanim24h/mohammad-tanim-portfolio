import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";

function App() {
    const location = useLocation();
    return (
        <div>
            {!location.pathname.includes("/project/") && <Navbar></Navbar>}
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/project/:id"
                    element={<ProjectDetails></ProjectDetails>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
