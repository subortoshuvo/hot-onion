import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseconfig';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import { useEffect } from 'react';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 
const getUser = user => {
    const {displayName,email,photoURL,emailVerified,isLogedIn}  =  user;
    return {displayName,email,photoURL,emailVerified,isLogedIn} 
} 



const AuthContext = createContext();
export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () =>  useContext(AuthContext);


export function PrivateRoute({ children, ...rest }) {

    const auth = useAuth();
   console.log(auth);
    return ( 
      <Route
        {...rest}
        render={({ location }) =>
        auth.user.emailVerified ?
        (children) :
        
        (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        ) 
        }
      />
    );
  }
  





const Auth  = () => {
 
    const [user,setUser] = useState(
      {
        'displayName':'',
        'errorName':'',
        'email':'',
        'photoUrl':'',
        'errorEmail':'',
        'password': '',
        'errorPassword':'',
        'isValid': false,
        'errorConfirmPass' : '',
        'errorMessage':'',
        'success':'',
        'emailVerified':false,
        'isLogedIn': false
    }

    )

   
    const validateName = e => {
      return e.target.value.length > 4
   }
   const validateEmail = (mail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    
 
   const validatePassword = password => {
   
       var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
           if(password.match(pass)) 
           { 

           return true;
           }
           else
           { 
         
           return false;
           }


   
   } 

    


   

   let isValid;
  
    const handleChange = (e) => {

        if(e.target.name ==='name'){
            isValid = validateName(e)
            if(isValid){
               const userInfo = {
                   ...user
               } 
               userInfo.isValid = true;
               userInfo.displayName = e.target.value;
               userInfo.errorName  ='';
               setUser(userInfo);

            }
            else
            {
               const userInfo = {
                   ...user
               }  
               userInfo.isValid = false;
               userInfo.errorName  ='The field should be contain with 4 character';
               setUser(userInfo);
               console.log('no');
            }
    
           
        }

        if(e.target.name==='email'){
            isValid = validateEmail(e.target.value)
        
            if(isValid){
               const userInfo = {
                   ...user
               } 
               userInfo.isValid = true;
               userInfo.email = e.target.value;
               userInfo.errorEmail  ='';
               setUser(userInfo);
            }
            else{
               const userInfo = {
                   ...user
               } 
               userInfo.isValid = false;
               userInfo.errorEmail  ='Please input a valid email';
               setUser(userInfo);
            }
    
        } 
        if(e.target.name ==='password'){
            isValid = validatePassword(e.target.value);

            if(isValid){
               const userInfo = {
                   ...user
               } 
               userInfo.isValid = true;
               userInfo.password = e.target.value;
               userInfo.errorPassword = '';
               setUser(userInfo);
            }
            else{
               const userInfo = {
                   ...user
               } 
               userInfo.isValid = false;
               userInfo.errorPassword = 'password contain at least one Special and one numerical character';
               setUser(userInfo);
            }

        }
        if(e.target.name==='confirmPassword'){
           
         const userInfo = {
             ...user
         } 
          var confirm = e.target.value;
          var pass = userInfo.password;
           console.log(confirm,pass)
          if(confirm === pass){
             userInfo.isValid = true;     
             userInfo.errorConfirmPass = '';
             setUser(userInfo);
          } 
          else{
               console.log('not')
               userInfo.isValid = false;
               userInfo.errorConfirmPass = 'The password is not match';
               setUser(userInfo);
          }
        }
       
         
    }


    const handleSubmit =  (e) => {
        e.preventDefault();
        const userInfo = {
            ...user
        }

        if(userInfo.isValid){
          
           return    firebase.auth().createUserWithEmailAndPassword(userInfo.email,userInfo.password)
           .then(res => {

             
                
               var user = firebase.auth().currentUser;

                return    user.sendEmailVerification().then(function() {
                            alert('We sent a verification message to your email address.Go there and Verified your email to login');
                       }).catch(function(error) {
                         alert(error);
                       });
             
               
           })
           .catch(function(error) {
               var errorMessage = error.message;
                alert(errorMessage);
             });


        }



        else{
            console.log('not sumitted');
        }
        e.target.reset();
    }

  
    const UserInput = (e) => {
       if(e.target.name==='email'){
           const userInfo = {
               ...user
           }
           userInfo.email = e.target.value;

           setUser(userInfo);
       }

       if(e.target.name==='password'){
           const userInfo = {
               ...user
           }
           userInfo.password = e.target.value;

           setUser(userInfo);
       }
       }
    

     const handleLoginSubmit =  (e) => {
         e.preventDefault();

       return  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
         .then(res=>{   
     
          const reset = document.getElementById('login');
          reset.reset();

           const userInfo = {
               ...user
           } 

            userInfo.isLogedIn = true;

             const data =  getUser(res);
             setUser(data);

              setUser(userInfo);
      

            if(res.user.emailVerified  === true ){    
               
               window.location.pathname = '/checkout';    
               return res;
            }
            else{
                alert('Your email is not verified. Go to your email and verify it');
                return false
            }
    
   
         })
         
         .catch(function(error) {
           
           // Handle Errors here.

           var errorMessage = error.message;

            alert(errorMessage);
           
         });
        
 
     }  




    
    const provider = new firebase.auth.GoogleAuthProvider();

    const google  = () => {

      return  firebase.auth().signInWithPopup(provider)
        .then(res => {
             
            const userInfo = getUser(res.user);
             setUser(userInfo);
             window.location.pathname = '/checkout';    
             return res.user;
        }).catch(error => {
            
          var errorMessage = error.message;
          alert(errorMessage);
        });
   
   
    } 


    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const facebook = () => {   
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
   
        const userInfo = getUser(result.user);
        setUser(userInfo);
        window.location.pathname = '/checkout';    
        return result.user;
  
      }).catch(function(error) {

        var errorMessage = error.message;
        alert(errorMessage);
      });


    }



    const twitter = () => {
      alert("Sorry! we can not use it for login. Try with google or facebook!!!!!");
    }

   const Signout = () => {
    return   firebase.auth().signOut().then(function() {
            window.location.pathname = "/";
      }).catch(function(error) {
         console.log(error);
      });
   }

   const handleResetSubmit  = (e) => {
    e.preventDefault();
    var auth = firebase.auth();
    var emailAddress = user.email;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      const reset = document.getElementById('reset');
      reset.reset();
      alert('we sent a reset code to your Email');
    }).catch(function(error) {
      alert(error);
    });
  
    
    
   }
    
   useEffect(()=>{
     

     firebase.auth().onAuthStateChanged(function(user) {
     if (user) {


          const data =  getUser(user);
            setUser(data);
      
          const userInfo = {
             ...user
         } 
          userInfo.isLogedIn = true;
          setUser(userInfo); 

      

     } else {
       // No user is signed in.
     }
   });
},[])


    return {user,handleSubmit,handleChange,handleLoginSubmit,UserInput,Signout,google,facebook,handleResetSubmit,twitter}
}

export default Auth;

