import React, { useState } from "react";
import pinkcake from "../assets/PinkCake.jpeg";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { sendOtp } from "../services/operations/authAPI";
import { setSignupData } from "../slices/authSlice";


const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp,setOTP] = useState("");
    
    const {
        register,
        handleSubmit,
    } = useForm();

    const submitHandler = (data) =>{
        console.log(data);
        const {firstName,lastName,email,password,confirmpassword} = data;

        if (password !== confirmpassword) {
          toast.error("Passwords Do Not Match")
          return;
        }
        
        const signupData = {
            firstName,
            lastName,
            email,
            password,
            confirmpassword
        }
        console.log(signupData);
        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(signupData));
        // Send OTP to user for verification
        dispatch(sendOtp(data.email, navigate));      
    }

    return (
        <div className="w-[100vw] h-[100vh]">

            <div className="bg-pink-200 min-h-screen flex items-center justify-between">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    
                    <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
                        onSubmit={handleSubmit(submitHandler)}>
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="firstName"
                            placeholder="First Name"
                            {...register("firstName", { required: true })} />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="lastName"
                            placeholder="Last Name"
                            {...register("lastName", { required: true })} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            {...register("email", { required: true })} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            {...register("password", { required: true })} />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            {...register("confirmpassword", { required: true })} />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <div className="no-underline border-b border-grey-dark text-grey-dark">
                                Terms of Service
                            </div> and
                            <div className="no-underline border-b border-grey-dark text-grey-dark">
                                Privacy Policy
                            </div>
                        </div>
                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <div className="no-underline border-b border-blue text-blue" 
                        onClick={ () => {navigate("/login")} }>
                            Log in
                        </div>
                    </div>
                </div>

                <div className="mx-auto">
                    <img src={pinkcake} alt="" className="h-[400px] w-[600px] rounded-lg" />
                </div>

            </div>

        </div>
    )

}

export default Signup;