import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config.js";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        };
    },[]);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = {user, providerLogin, signUp, signIn, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;