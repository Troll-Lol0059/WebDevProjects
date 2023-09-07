import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import reviews from "./data";


const App = () => {
  const wholeData = reviews;
  const [data,setData] = useState(reviews[0]);

  return <div className="wrapper flex flex-col items-center pb-4">
        <Header />
        <HeroSection data={data} setData={setData} wholeData={wholeData} />
    </div>;
};

export default App;
