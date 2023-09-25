import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[isLoggedIn,setIsLoggedIn] = useState(false);

    const loginStatus = {
        isLoggedIn,
        setIsLoggedIn,
    };

    return <AppContext.Provider value={loginStatus}>
        {children}
    </AppContext.Provider>
}