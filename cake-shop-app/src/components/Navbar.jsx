import cakeShopLogo from '../assets/cakeShopLogo.png';
import { FaShoppingCart, FaSearchLocation } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const navigate = useNavigate();
    const { cart } = useSelector((state) => state);

    return (
        <div className='bg-red-400 min-h-[13%] flex justify-between items-center px-[4rem] py-[0.75rem] text-black text-base font-[400]'>
            <Link to={"/"} >
                <div className='flex justify-center items-center gap-2'>
                    <img src={cakeShopLogo} alt='website logo' className='h-[4rem]' />
                    <div>
                        <div className='text-[1.25rem] w-full font-bold text-blue-600'>Mío Gusto </div>
                        <div className='text-[0.85rem] italic'>(A place for "My Taste")</div>
                    </div>
                </div>
            </Link>

            <div className='font-[500] gap-4 flex'>
                    <NavLink to={"/"} style={({ isActive }) => {
                                        return isActive ? { color: "yellow" } : {};
                                        }}>
                        Home
                    </NavLink>

                    <NavLink to={"/shop"} className={"active"} style={({ isActive }) => {
                                        return isActive ? { color: "yellow" } : {};
                                        }}>
                        Catalog
                    </NavLink>

                    <NavLink to={"/aboutUs"} className={"active"} style={({ isActive }) => {
                                        return isActive ? { color: "yellow" } : {};
                                        }}>
                        About Us
                    </NavLink>

                    <NavLink to={"/contactUs"} className={"active"} style={({ isActive }) => {
                                        return isActive ? { color: "yellow" } : {};
                                        }}>
                        Contact Us
                    </NavLink>
            </div>

            <div className='flex gap-4'>
                    <div className='bg-[#161D29] border border-[#2C333F] rounded-md py-1 px-4 text-[#AFB2BF] cursor-pointer'
                                onClick={ () => {navigate("/login")}} >
                        Login 
                    </div>

                    <div className='bg-[#161D29] border border-[#2C333F] rounded-md py-1 px-4 text-[#AFB2BF] cursor-pointer'
                                    onClick={ () => {navigate("/signup")}} >
                        Signup
                    </div>
            </div>

                {/* <IconContext.Provider value={{color: "white", size: "1.75rem"}}>
                    <NavLink to={"/trackOrder"}>
                        <div>
                            <FaSearchLocation />
                        </div>

                    </NavLink>
                </IconContext.Provider> */}


                {/* <IconContext.Provider value={{ color: "white", size: "1.75rem" }}>
                    <NavLink to={"/cart"}>
                        <div>
                            <FaShoppingCart />
                        </div>

                        {
                            cart.length === 0 ? <div> </div> : 
                       
                            <div className='h-[20px] w-[20px] bg-[#006400] rounded-full absolute text-white font-[500]
                                text-[0.75rem] flex justify-center items-center -top-3 right-1 cartIconAnimation'>
                                {cart.length}
                            </div>
                         }

                    </NavLink>
                </IconContext.Provider> */}

            </div>

    )
};

export default Navbar;