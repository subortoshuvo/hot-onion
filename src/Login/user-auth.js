import React, { useContext, useEffect } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Use.auth";
import { useState, createContext } from "react";
//import { Route, Redirect } from 'react-router-dom';



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 
const getUser = user => {
    const {displayName,email,photoURL}  =  user;
    return {displayName,email,photoURL} 
} 



const AuthContext = createContext();
export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () =>  useContext(AuthContext);



const Auth  = () => {
 
    const [user,setUser] = useState()
    
    const provider = new firebase.auth.GoogleAuthProvider();

    const LoginWithGoogle  = () => {

      return  firebase.auth().signInWithPopup(provider)
        .then(res => {
            const userInfo = res.user;
            setUser(userInfo);
            return res.user;
        }).catch(err => {
            
            setUser(null);
            return err;
        });
   
   
    }

   const Singout = () => {
  return   firebase.auth().signOut().then(function() {
        setUser(null);
        return true
      }).catch(function(error) {
         console.log(error);
      });
   }
    
   useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           const data =  getUser(user);
            setUser(data);
            console.log(data);
        } else {
          // No user is signed in.
        }
      });
   },[])


    return {user,LoginWithGoogle,Singout}
}

export default Auth;

