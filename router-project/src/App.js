import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter,Link,NavLink,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return <div className="bg-richblack-900 h-[100vh] w-[100vw] overflow-x-hidden text-white">

    <Navbar/>

    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/dashboard" element= {
          // if Private Route component returns children then Dashboard will render else login will render
            <PrivateRoute > 
                <Dashboard/> 
            </PrivateRoute> 
        } />
    </Routes>

    <Toaster/>
  </div>;
}

export default App;
