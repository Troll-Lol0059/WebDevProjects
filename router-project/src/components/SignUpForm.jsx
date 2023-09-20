import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast, { Toaster } from "react-hot-toast";


const SignUpForm = () => {
    const [signUpFormData, setSignUpFormData] = useState({
        firstName: "", lastName: "", email: "", createPassword: "",
        confirmPassword: "",
    });
    const[showCreatePassword,setShowCreatePassword] = useState(false);
    const[showConfirmPassword,setShowConfirmPassword] = useState(false);

    function changeHandler(event){
        const{name,value} = event.target;
        setSignUpFormData( (prev) => ({...prev, [name]:value}) );
    }

    function submitHandler(event){
        event.preventDefault();
        if( (signUpFormData.createPassword !== signUpFormData.confirmPassword) && 
        signUpFormData.createPassword !== "" &&  signUpFormData.confirmPassword !== "" ){
            toast.error("Passwords Don't Match");
            return;
        }
        console.log(signUpFormData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>STUDENT</div>
                <div>INSTRUCTOR</div>
            </div>

            <div>
                <div>
                    <label htmlFor="firstName">First Name <sup>*</sup> </label>
                    <input type="text" id="firstName" name="firstName" value={signUpFormData.firstName}
                        onChange={changeHandler} placeholder="Enter First Name" required
                     />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name <sup>*</sup> </label>
                    <input type="text" id="lastName" name="lastName" value={signUpFormData.lastName}
                        onChange={changeHandler} placeholder="Enter Last Name" required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email">Email <sup>*</sup> </label>
                <input type="email" id="email" name="email" value={signUpFormData.email}
                    onChange={changeHandler} placeholder="Enter Email Address" required
                />
            </div>

            <div>
                <div>
                    <label htmlFor="createPassword">Create Password<sup>*</sup> </label>

                    <input type= {showCreatePassword ? "text":"password"} id="createPassword" name="createPassword" 
                    value={signUpFormData.createPassword}
                    onChange={changeHandler} placeholder="Enter Password" required
                    />

                    <div onClick={() => setShowCreatePassword(showCreatePassword ? false : true)}>
                        {showCreatePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password <sup>*</sup> </label>

                    <input type={showConfirmPassword ? "text":"password"} id="confirmPassword" name="confirmPassword" 
                    value={signUpFormData.confirmPassword}
                    onChange={changeHandler} placeholder="Confirm Password" required
                    />

                    <div onClick={() => setShowConfirmPassword(showConfirmPassword ? false : true)}>
                        {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>

                </div>
            </div>

            <button>
                Create Account
            </button>
        </form>
    )
}

export default SignUpForm;