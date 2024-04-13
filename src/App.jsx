import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Signup from "./components/Signup";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/signup" element={<Signup />}></Route> 
            </Routes>
        </div>
    )
}

export default App;