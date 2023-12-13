import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const Homepage = ()=> {
    
    return(
        <div>
            <div>
                Hello World !!!
            </div>

            <div>
                <Link to={"/login"}> Click Here to LogIn ... </Link>
            </div>

            <div>
                <Link to={"/signUp"}> Click Here to SignUp ... </Link>
            </div>

        </div>
    )
}

export default Homepage;