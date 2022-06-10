import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
    return (
        <div className="h-[500vh]">
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
        </div>
    );
}

export default App;
