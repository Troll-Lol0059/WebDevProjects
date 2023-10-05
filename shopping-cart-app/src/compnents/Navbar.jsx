import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link,NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {cart} = useSelector( (state) => state );

    return (
        <div className='bg-slate-900 min-h-[13%] flex justify-between items-center px-[7.5rem] py-[0.75rem]'>
            <Link to={"/"} >
                <div>
                    <img src={logo} alt='website logo' className='h-[3.5rem]' />
                </div>
            </Link>

            <div className='flex justify-center items-center gap-6 px-4 relative'>

                <div className='text-white font-[500]'>
                    <NavLink to={"/"} >
                        Home
                    </NavLink>
                </div>

                <IconContext.Provider value={{ color: "white", size: "1.75rem" }}>
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
                </IconContext.Provider>

            </div>

        </div>
    )
};

export default Navbar;