import { Navigate } from "react-router-dom";
import App from "../App";
import { AppContext } from "../AppContext";
import { useContext } from "react";

// for restricting Dashboard to acess without login
const PrivateRoute = ( {children} ) => {
    const{isLoggedIn} = useContext(AppContext);

    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to={"/login"} />
    }

}

export default PrivateRoute;