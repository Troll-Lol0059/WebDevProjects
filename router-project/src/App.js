import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter,Link,NavLink,Routes,Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return <div className="bg-richblack-900 h-[100vh] w-[100vw] overflow-x-hidden text-white">

    <Navbar/>

    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
    </Routes>

    <Toaster/>
  </div>;
}

export default App;
