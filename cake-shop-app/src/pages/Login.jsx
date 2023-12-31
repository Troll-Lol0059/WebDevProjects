import React from "react";
import cake from "../assets/Cake.jpeg";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
    } = useForm();

    const submitHandler = (data) =>{
        console.log(data);
        const {email,password} = data;

        const response = dispatch(login(email,password,navigate));

    }

    return (
        <div className="flex flex-row items-center justify-center bg-pink-200 w-[100vw] h-[100vh] gap-[5rem]">
            <div>
                <div>
                    <p className="font-medium text-[20px] text-[#0398d4] p-5">Customer LogIn Form</p>
                </div>

                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="email" type="email" placeholder="Username" name="email"
                                    {...register("email",{required:true})} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" type="password" placeholder="**********" name="password" 
                        {...register("password",{required:true})} />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                            Sign In
                        </button>
                        <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                            Forgot Password?
                        </div>
                    </div>
                    <div></div>
                </form>

            </div>

            <div>
                <img src={cake} alt="cake pic" className="rounded-lg" />
            </div>
            
        </div>
    )

}

export default Login;