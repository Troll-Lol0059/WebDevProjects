import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ShoppingItems } from './compnents/ShoppingItems';
import Navbar from './compnents/Navbar';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import data from './data';

function App() {

  return (
    <div className="App font-bold w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto">
      <Navbar />

      <Routes>
        <Route index element={ <Homepage data={data}/> } />
        <Route path='/' element={ <Homepage  data={data}/> } />
        <Route path='/cart' element= { <Cart /> }  />
        <Route path="*" element={ <NotFound /> } />

      </Routes>
      
    </div>
  );
}

export default App;
