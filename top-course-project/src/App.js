import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { filterData, apiUrl } from "./data";
import {FcLikePlaceholder,FcLike} from "react-icons/fa";
import Spinner from "./components/Spinner";
import Error404 from "./components/Error404";

const App = () => {
  // setting courseData initially to null
  const [coursesData, setData] = useState(null);

  // setting the default course category to All
  const [category,setCategory] = useState(filterData[0].title);

  // setting loading as false
  const [loading,setLoading] = useState(false);

  const [notFound,setFound] = useState(false);

  // function to fetch API Data
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let result = await response.json();
      setData(result.data);
    }
    catch (error) {
      toast("There is problem with Network !!");
      setFound(true);
    }
    setLoading(false);
  }

  // making API call to fetch data
  useEffect(() => {
    fetchData();
  }, [])

  
  return <div className="h-[100vh] w-[100%] overflow-x-hidden bg-bgDark2">
    <div className="font-bold w-[100%]">
      <Navbar />
    </div>

    <div className="w-[100vw]">
      <HeroSection filterData={filterData} coursesData={coursesData} 
      category={category} setCategory={setCategory} 
      loading={loading} notFound={notFound} />
    </div>

    <ToastContainer />
  </div>;
};

export default App;
