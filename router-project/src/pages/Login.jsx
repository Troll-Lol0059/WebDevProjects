import loginImg from "../assets/login.png"
import Template from "../components/Template";

const Login = () => {

  const loginData = {
    heading:"Welcome Back",
    description1:"Build skills for today, tomorrow, and beyond",
    description2:"Education to future-proof your career.",
    image: loginImg, 
    formType: "login",
  }

  return <div>
    <Template 
    data={loginData} />
  </div>
}

export default Login;