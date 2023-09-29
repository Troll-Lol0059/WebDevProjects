import logo from './logo.svg';
import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import { increment,decrement,reset } from './Redux/slices/counterSlice';

function App() {

  // counter.value -> counter of store which is equal to counterSlice
  // useSelector hook is used to access state of slice
  const count = useSelector( (state)=> state.counter.value );

  // useDispatch is used to access reducers/functionalities of slice
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-[gray] gap-10'>
        <div className='flex justify-center items-center text-[4rem] gap-12 border border-white-200 rounded-lg
        px-8 py-1'>

          <button className='' onClick={ ()=> dispatch(increment()) }> + </button>
          <div> {count} </div>
          <button onClick={ ()=> dispatch(decrement()) }> - </button>

        </div>

        <button className='bg-[#00000080] text-white font-bold px-8 py-2 rounded-lg'
        onClick={ ()=> dispatch(reset()) }>
          Reset
        </button>

    </div>
  );
}

export default App;
