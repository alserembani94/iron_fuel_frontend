// src/UserProvider.jsx
import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserEmail(user?.email || null);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ userEmail, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
