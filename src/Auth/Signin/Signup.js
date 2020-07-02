import React from 'react';
import Auth,{ useAuth } from '../Auth';
import background from '../../img/bannerbackground.png';
import logo2 from '../../img/logo2.png'
import './Signup.css'
const Signup = () => {
  
   const auth =  Auth();
   console.log(auth);
    return (
        <div className="signup">

<div className="row">
                <div className="col-3 m-auto">
                 <img className="img-fluid logo2"  src={logo2} alt=""/>
                <form className="sign-form" onSubmit={auth.handleSubmit}>
                   <input className="form-control mb-3" onChange={auth.handleChange} name="name" type="text" placeholder="Name" required/>
                    <p className="error"> {auth.user.errorName} </p>
                   <input className="form-control  mb-3" onChange={auth.handleChange}  name="email" type="Email" placeholder="email" required/>
                   <p className="error"> {auth.user.errorEmail} </p>
                   <input className="form-control  mb-3" onChange={auth.handleChange} name="password" type="Password" placeholder="Password" required/>
                   <p className="error"> {auth.user.errorPassword} </p>
                   <input className="form-control  mb-3"  onChange={auth.handleChange} name="confirmPassword" type="Password" placeholder="Confirm password" required />
                   <p className="error"> {auth.user.errorConfirmPass} </p>
                  <input class="btn btn-primary s-btn mb-2" type="submit" value="Sign up" />
                </form>
                     <a className="already-account mt-3" href="/login">Already have an account</a>
                </div>
            </div>




        </div>
    );
};

export default Signup;