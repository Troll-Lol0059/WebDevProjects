import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import logo from "../assets/bakery-shop.jpg"

const LandingPage = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="flex flex-col">
            <div>
                <div class="w-full h-[100px] bg-yellow-900">
                    <h1 class="text-pink-300 font-bold text-5xl text-center py-5">Mío Gusto</h1>
                </div>
                <div>
                    <img src={logo} alt="" class="w-full relative" />
                </div>
            </div>

        </div>
    )
}

export default LandingPage;