import "./App.css";
import { useState } from "react";

function App() {

  const[count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }


  return (
    // Wrapper
    <div className="bg-[#344151] h-[100vh] w-[100vw] flex justify-center items-center">
      {/* Container */}
      <div className="flex flex-col items-center gap-5">
        {/* Heading Div */}
        <div className="text-[1.45rem] text-[#0398d9] font-[600]">Increment & Decrement</div>

        {/* Increment Decrement Button Div */}
        <div className="flex bg-slate-100 w-[90%] justify-evenly items-center py-2">
          <div className="text-[1.95rem] font-[700] w-4 border-r-2 border-slate-800 pr-8 cursor-pointer" onClick={decreaseHandler}>-</div>
          <div className="text-[1.95rem] font-[700] w-4">{count}</div>
          <div className="text-[1.95rem] font-[700] w-4 border-l-2 border-slate-800 px-4 cursor-pointer" onClick={increaseHandler}>+</div>
        </div>

        {/* Reset Button Div */}
        <div class="bg-[#0000B9] text-[1.25rem] py-1 px-4 rounded-md font-bold cursor-pointer" onClick={resetHandler}>Reset</div>
      </div>

    </div>
  );
}

export default App;
