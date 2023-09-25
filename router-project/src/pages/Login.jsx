import loginImg from "../assets/login.png";
import Template from "../components/Template";
import pattern from "../assets/frame.png";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Dashboard from "./Dashboard";

const Login = () => {

  const {isLoggedIn} = useContext(AppContext);

  const loginData = {
    heading:"Welcome Back",
    description1:"Build skills for today, tomorrow, and beyond",
    description2:"Education to future-proof your career.",
    image: loginImg,
    pattern: pattern,
    formType: "login",
  }

  return <div>
    {
      isLoggedIn ? < Dashboard /> : <Template data={loginData} />
    }

  </div>
}

export default Login;