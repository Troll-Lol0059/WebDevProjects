import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [totalItems,setTotalItems] = useState(0);

    const value = {
        totalItems,
        setTotalItems,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}