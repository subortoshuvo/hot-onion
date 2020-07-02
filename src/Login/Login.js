import React from 'react';
import Auth, { useAuth } from './user-auth'
import { useContext } from 'react';
import {Usercontext, UserContext} from '../App'


const Login = () => {
    const auth = Auth();

    const loginHandle =  () => {

        auth.LoginWithGoogle()
        .then(res => {
            window.location.pathname = "/confirm"
            })  
    }
    
   const signoutHandle = () => {
    auth.Singout()
    .then(res => {
        window.location.pathname = "/"
        })   
   }






    return (
        <div>
            <h1>Login page</h1>
            {auth.user ? <button onClick={signoutHandle}>Log Out</button> : <button onClick={loginHandle}>Login with google</button>}
           

        </div>
    );
};

export default Login;