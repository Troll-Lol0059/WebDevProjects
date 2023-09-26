import { useContext } from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import toast from "react-hot-toast";

const Navbar = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(AppContext);

    return (
        <div className="flex justify-between items-center mx-auto py-[1rem] px-[6.5rem]">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" height={32} width={160} loading="lazy" />
                </Link>
            </div>

            <nav>
                <ul className="flex text-richblack-100 gap-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="#">About</Link>
                    </li>

                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex text-richblack-100 gap-4">

                {
                    isLoggedIn ?

                        <div className="flex gap-4">
                            <button className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700"
                            onClick={ () => {
                                toast.success("Logged Out Successfully !")
                                setIsLoggedIn(false)
                                } }>

                                <Link to="/">LogOut</Link>

                            </button>

                            <button className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700">
                                <Link to="/dashboard">Dashboard</Link>
                            </button>

                        </div> :

                        <div className="flex gap-4">
                            <button className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700">
                                <Link to="/login">Login</Link>
                            </button>

                            <button className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700">
                                <Link to="/signup">Sign Up</Link>
                            </button>
                        </div>


                }





            </div>

        </div>
    )
}

export default Navbar;