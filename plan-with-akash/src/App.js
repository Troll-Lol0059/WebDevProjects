import { useState } from "react";
import "./App.css";
import Tour from "./components/Tour.js";
import datas from "./Data.js";


function App() {
  const [data, setData] = useState(datas);

  function removeTour(id) {
    let newData = data.filter((data) => data.id !== id);
    setData(newData);
  }

  function refreshPageHandler(){
    setData(datas);
  }

  if (data.length === 0) {
    return (
      <div className="noTourContainer">
            <div className="noToursLefHeading">No Tours Left &#128533; </div>
            <div className="refreshBtn" onClick={refreshPageHandler}>Refresh Page</div>
      </div>
    )
  }


  return (
    <div className="wrapper">
      <Tour tours={data} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
