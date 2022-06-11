import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";

function App() {
    const location = useLocation();
    return (
        <div>
            {!location.pathname.includes("/project/") &&
                !location.pathname.includes("/blogs") && <Navbar></Navbar>}
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/project/:id"
                    element={<ProjectDetails></ProjectDetails>}
                ></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            </Routes>
        </div>
    );
}

export default App;
