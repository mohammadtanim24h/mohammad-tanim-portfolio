import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Projects></Projects>
        </div>
    );
}

export default App;
