import signupImg from "../assets/signup.png";
import Template from "../components/Template";
import pattern from "../assets/frame.png"
import Dashboard from "./Dashboard";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Signup = () => {

  const {isLoggedIn} = useContext(AppContext);

  const signupData = {
    heading:"Join the millions learning to code with StudyNotion for free",
    description1:"Build skills for today, tomorrow, and beyond.",
    description2:"Education to future-proof your career.",
    image: signupImg,
    pattern: pattern,
    formType: "signup",
  }

  return <div>
    {
      isLoggedIn ? <Dashboard /> : <Template data={signupData} />
    }
  </div>
}

export default Signup;