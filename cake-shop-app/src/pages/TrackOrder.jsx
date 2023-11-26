import { NavLink } from "react-router-dom";
import img1 from '../assets/Error404.png';


function TrackOrder(){

    return(
        <div className='h-[100%] w-[100%] relative'>
            <img src={img1} alt="cant Load" className='h-[100%] w-[73vw] rounded-md mx-auto'/>

            <div className='absolute top-[74%] right-[47%] cursor-pointer
            bg-[green] bg-opacity-80 px-4 py-3 rounded-md text-white font-[500] leading-2 hover:bg-black'
            >
                <NavLink to={"/"} >
                    Go To Homepage
                </NavLink>
            </div>
        </div>
    );

}

export default TrackOrder;