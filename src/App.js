import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="h-[500vh]">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
}

export default App;
