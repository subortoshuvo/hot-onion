import React from 'react';
import Auth, { useAuth } from '../Auth';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import background from '../../img/bannerbackground.png';
import logo2 from '../../img/logo2.png'
const Login = () => {
  
   const auth =  useAuth();

    return (

        <div className="login">
            <div className="row">
                <div className="col-3 m-auto">
                 <img className="img-fluid logo2"  src={logo2} alt=""/>


                 <form id="login" className="sign-form" onSubmit={auth.handleLoginSubmit}>
              
                    <input className="form-control  mb-3" onBlur={auth.UserInput}   name="email" type="Email" placeholder="Email" required/>
                    <p className="error"> {auth.user.errorEmail} </p>

                    <input className="form-control  mb-3"  onBlur={auth.UserInput} name="password" type="Password" placeholder="Password" required/>
                    <p className="error"> {auth.user.errorPassword} </p>
                    <a  href="/reset">Forgot password?</a>
                    <input class="btn btn-primary s-btn mb-2" type="submit" value="Login" />
              
               </form> 

    
                     <h1 className="signup-text">Or Signup using</h1>
                       




                     <div class="col">

                         <button onClick={auth.facebook}  className="btn fb">
                                 <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                         </button>
                          <button  onClick={auth.twitter} className="twitter btn">
                          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                          </button>

                          <button onClick={auth.google} className="google btn">
                          <i class="fa fa-google fa-fw"></i> Login with Google+
                         </button>     
                         <a href="/signup">Have not account yet?</a>
         
                 </div>





                </div>
            </div>



        </div>
    );
};













export default Login;