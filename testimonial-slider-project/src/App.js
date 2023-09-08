import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import reviews from "./data";

const App = () => {
  // to count number of element in data array
  function getMax(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count++;
    }
    return count;
  }

  const wholeData = reviews;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(reviews[index]);
  const maxElement = getMax(reviews);


  return <div className="wrapper flex flex-col items-center pb-4">
    <Header />
    <HeroSection data={data} setData={setData} wholeData={wholeData} index={index} setIndex={setIndex} maxElement={maxElement} />
  </div>;
};

export default App;
