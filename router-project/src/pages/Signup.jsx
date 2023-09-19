import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = () => {

  const signupData = {
    heading:"Join the millions learning to code with StudyNotion for free",
    description1:"Build skills for today, tomorrow, and beyond.",
    description2:"Education to future-proof your career.",
    image: signupImg, 
    formType: "signup",
  }

  return <div>
    <Template data={signupData} />
  </div>
}

export default Signup;