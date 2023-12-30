import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import products from './data/data.js'
import TrackOrder from './pages/TrackOrder.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';


function App() {

  return (
    <div className="App font-bold w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-red-300">
      <Navbar />

      <Routes>
        <Route index element={ <LandingPage/> } />
        <Route path='/shop' element={ <Homepage  data={products}/> } />
        <Route path='/cart' element= { <Cart /> }  />
        <Route path='/signup' element= { <Signup /> }  />
        <Route path='/login' element= { <Login /> }  />
        <Route path='/trackOrder' element= { <TrackOrder /> }  />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      
    </div>
  );
}

export default App;