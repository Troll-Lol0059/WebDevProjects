import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { filterData, apiUrl } from "./data";
import {FcLikePlaceholder,FcLike} from "react-icons/fa";

const App = () => {
  const [coursesData, setData] = useState(null);

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let result = await response.json();
      setData(result.data);
    }
    catch (error) {
      toast("There is problem with Network !!");
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  
  return <div className="h-[100vh] w-[100%] overflow-x-hidden">
    <div className="font-bold w-[100%]">
      <Navbar />
    </div>

    <div className="w-[100vw]">
      <HeroSection filterData={filterData} coursesData={coursesData} />
    </div>

    <ToastContainer />
  </div>;
};

export default App;
