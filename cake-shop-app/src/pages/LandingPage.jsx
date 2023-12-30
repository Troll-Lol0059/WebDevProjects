import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';


const LandingPage = () => {
    const { register,handleSubmit } = useForm();

    return(
        <div className="flex flex-col">
            <div>
                Hello World
            </div>

            <button>
                <NavLink to={"/shop"}>
                    Click to Shop
                </NavLink>
            </button>

            

        </div>
    )
}

export default LandingPage;