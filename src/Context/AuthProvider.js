import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext= createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    
    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const verifyEmailUser =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser === null  || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    const authInfo = {user,
        providerLogin,
        logOut,
        createUser,
        verifyEmailUser,
        signIn,
        loading,
        auth}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;