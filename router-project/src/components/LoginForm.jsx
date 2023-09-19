import { Link } from "react-router-dom";

function LoginForm(){
    return (
        <div>
            <div className="flex flex-col">
                <label htmlFor="userName">Email Address <sup>*</sup></label>
                <input type="email" name="email" id="userName" placeholder="Enter Email Here" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password">Password <sup>*</sup></label>
                <input type="password" name="password" id="password" placeholder="Enter Password" />
            </div>

            <div>
                <Link to="#">Forgot Password ?</Link>
            </div>

            <button>
                Sign In
            </button>
            
        </div>
    )
}

export default LoginForm;