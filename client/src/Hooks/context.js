import React, { useState, useContext, createContext } from "react";

function useLocalStorage(key, initialValue) {    
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {            
            console.log(error);
            return initialValue;
        }
    });
    
    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}


const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [profile, setProfile] = useLocalStorage("profile");
    const [isAuthenticated, setIsAuthenticated] = useState(profile !== null);
    console.log(profile, isAuthenticated);
    const handleAuth = (result, p) => {
        if (result === true) {
            setProfile(p);
        }
        else {
            setProfile(null);
        }

        setIsAuthenticated(result);
    };
    const auth = { isAuthenticated, profile };
    const data = [auth, handleAuth];
    return <AuthContext.Provider value={data}>{children}  </AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth can only be used inside AuthProvider");
    }
    return context;
};
