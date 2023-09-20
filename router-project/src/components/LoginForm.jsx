import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';

function LoginForm(){
    const[loginFormData,setLoginFormData] = useState({email:"",password:""});
    const[showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        const{name,value,type} = event.target;
        setLoginFormData( (prev) => ({...prev, [name]:value}) );
    }

    return (
        <form>
            <div className="flex flex-col">
                <label htmlFor="userName">Email Address <sup>*</sup></label>
                <input type="email" name="email" id="userName" placeholder="Enter Email Here" 
                onChange={changeHandler}
                value={loginFormData.email}
                className="text-black" />
            
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Password <sup>*</sup></label>
                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter Password" 
                onChange={changeHandler} 
                value={loginFormData.password}
                className="text-black"  /> 
            </div>

            <div onClick={ () => setShowPassword( showPassword ? false:true ) }>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
            </div>

            <div>
                <Link to="#">Forgot Password ?</Link>
            </div>

            <button>
                Sign In
            </button>
            
        </form>
    )
}

export default LoginForm;