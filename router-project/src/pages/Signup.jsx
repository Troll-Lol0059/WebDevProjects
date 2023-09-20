import signupImg from "../assets/signup.png";
import Template from "../components/Template";
import pattern from "../assets/frame.png"

const Signup = () => {

  const signupData = {
    heading:"Join the millions learning to code with StudyNotion for free",
    description1:"Build skills for today, tomorrow, and beyond.",
    description2:"Education to future-proof your career.",
    image: signupImg,
    pattern: pattern,
    formType: "signup",
  }

  return <div>
    <Template data={signupData} />
  </div>
}

export default Signup;