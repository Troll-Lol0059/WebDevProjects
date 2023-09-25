import { useContext } from "react";
import Dashboard from "../pages/Dashboard";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { FcGoogle } from 'react-icons/fc';


const Template = (props) => {
    const {heading,description1,description2,formType,image,pattern} = props.data;

    return (
        <div className="text-white flex justify-between relative px-[6.5rem] py-[2rem]">
            <div className="w-[50%] pr-[7rem]">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">{heading}</h1>
                <div className="text-[1.125rem] text-richblack-100 leading-[1.625rem] mt-4">{description1}</div>
                <div className="text-[1.125rem] text-blue-100 italic leading-[1.625rem] mb-4">{description2}</div>

                <div>
                    {
                        formType === "login" ? <LoginForm /> : <SignUpForm />
                    }
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-richblack-100 h-[0.08rem] w-[20rem] mt-6 mb-4"></div> 
                    <div className="mt-6 mb-4">OR</div>
                    <div className="bg-richblack-100 h-[0.08rem] w-[20rem] mt-6 mb-4"></div> 
                </div>

                <div className="bg-transparent border border-richblack-700 text-richblack-100
                w-full flex justify-center items-center p-2 font-[500] rounded-md cursor-pointer
                gap-4">
                    <FcGoogle size={22}/> 
                    <p>Sign Up with Google</p>
                </div>

            </div>

            <div div className="w-[450px] h-[400px] relative flex justify-center ">
                <img src={image} alt="login img" height={350} width={550} loading="lazy" 
                className="z-10 rounded-md " />

                <img src={pattern} alt="pattern" height={300} width={550} loading="lazy"
                className="absolute rounded-md left-[4%] top-[3%]" />
            </div>
        </div>
    )
}

export default Template;
