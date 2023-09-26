import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { AppContext } from "../AppContext";
import toast from "react-hot-toast";

function LoginForm(){
    const[loginFormData,setLoginFormData] = useState({email:"",password:""});
    const[showPassword,setShowPassword] = useState(false);
    const{setIsLoggedIn} = useContext(AppContext);

    function changeHandler(event){
        const{name,value,type} = event.target;
        setLoginFormData( (prev) => ({...prev, [name]:value}) );
    }

    function loginHandler(event){
        event.preventDefault();

        if(loginFormData.email === "" || loginFormData.password===""){
            return;
        }
        console.log(loginFormData);
        setIsLoggedIn(true);
        toast.success("Logged In Successfully !")
    }

    return (
        <form onSubmit={loginHandler}>
            <div className="flex flex-col">
                <label htmlFor="userName">Email Address <sup>*</sup></label>
                <input type="email" name="email" id="userName" placeholder="Enter Email Here" 
                onChange={changeHandler}
                value={loginFormData.email}
                required />
            
            </div>

            <div className="flex flex-col relative mb-8">

                <label htmlFor="password">Password <sup className="text-[#f70d1a]">*</sup></label>

                <input type={showPassword ? "text" : "password"} name="password" id="password" 
                placeholder="Enter Password" onChange={changeHandler} 
                value={loginFormData.password} className="mb-0"
                required /> 

                <div onClick={ () => setShowPassword( showPassword ? false:true ) }
                    className="absolute right-6 top-[40%]" >
                        {showPassword ? <AiOutlineEyeInvisible size={25}/> : <AiOutlineEye size={25}/> }
                </div>

                <div className="flex justify-end text-blue-100">
                    <Link to="#">Forgot Password ?</Link>
                </div>

            </div>


            <button className="bg-yellow-50 p-[0.60rem] w-full rounded-md text-black font-bold
             hover:text-richblack-800">
                Sign In
            </button>
            
        </form>
    )
}

export default LoginForm;