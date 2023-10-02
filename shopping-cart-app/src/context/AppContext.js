import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading] = useState(false);

    const value = {
        loading,
        setLoading,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}