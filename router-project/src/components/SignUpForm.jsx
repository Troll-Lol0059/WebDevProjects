import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../AppContext";


const SignUpForm = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const [signUpFormData, setSignUpFormData] = useState({
        firstName: "", lastName: "", email: "", createPassword: "",
        confirmPassword: "",
    });
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        const { name, value } = event.target;
        setSignUpFormData((prev) => ({ ...prev, [name]: value }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if ((signUpFormData.createPassword !== signUpFormData.confirmPassword) &&
            signUpFormData.createPassword !== "" && signUpFormData.confirmPassword !== "") {
            toast.error("Passwords Don't Match");
            return;
        }
        console.log(signUpFormData);
        toast.success("Accout Created Successfully !");
        setIsLoggedIn(true);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flex rounded-full py-2 w-[50%] gap-3 justify-center bg-richblack-800 mb-3">

                <div className={`${accountType === "student"
                    ?
                    "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 cursor-pointer`} 
                    onClick={ ()=> {setAccountType("student")} }>
                    Student
                </div>

                <div className= {`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 cursor-pointer` } 
                onClick={ ()=> {setAccountType("instructor")} }>
                    Instructor
                </div>

            </div>

            <div className="flex gap-4">
                <div className="w-[48%]">
                    <label htmlFor="firstName">First Name <sup>*</sup> </label>

                    <input type="text" id="firstName" name="firstName" value={signUpFormData.firstName}
                        onChange={changeHandler} placeholder="Enter First Name" required
                        className=""
                    />
                </div>

                <div className="w-[48%]">
                    <label htmlFor="lastName">Last Name <sup>*</sup> </label>

                    <input type="text" id="lastName" name="lastName" value={signUpFormData.lastName}
                        onChange={changeHandler} placeholder="Enter Last Name" required
                        className=""
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email">Email <sup>*</sup> </label>
                <input type="email" id="email" name="email" value={signUpFormData.email}
                    onChange={changeHandler} placeholder="Enter Email Address" required
                />
            </div>

            <div className="flex gap-4">
                <div className="relative">
                    <label htmlFor="createPassword">Create Password <sup>*</sup> </label>

                    <input type={showCreatePassword ? "text" : "password"} id="createPassword"
                        name="createPassword" value={signUpFormData.createPassword}
                        onChange={changeHandler} placeholder="Enter Password" required
                    />

                    <div onClick={() => setShowCreatePassword(showCreatePassword ? false : true)}
                        className="absolute top-[50%] right-5">
                        {showCreatePassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="confirmPassword">Confirm Password <sup>*</sup> </label>

                    <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword"
                        value={signUpFormData.confirmPassword}
                        onChange={changeHandler} placeholder="Confirm Password" required
                    />

                    <div onClick={() => setShowConfirmPassword(showConfirmPassword ? false : true)}
                        className="absolute top-[50%] right-5">
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </div>

                </div>
            </div>

            <button className="bg-yellow-50 p-[0.60rem] w-full rounded-md text-black font-bold
             hover:text-richblack-800 mt-4">
                Create Account
            </button>
        </form>
    )
}

export default SignUpForm;