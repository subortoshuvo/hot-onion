import React from 'react';
import Auth, { useAuth } from '../Auth';
import '../Login/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo2 from '../../img/logo2.png'
const Reset = () => {

    const auth =  useAuth();
    return (
        <div>
              <div className="login">
            <div className="row">
                <div className="col-3 m-auto">
                 <img className="img-fluid logo2"  src={logo2} alt=""/>
                   <h1 className="reset">Reset your password</h1>
                   <form id="reset" className="sign-form" onSubmit={auth.handleResetSubmit}>
                   <input className="form-control  mb-3" onBlur={auth.UserInput}   name="email" type="Email" placeholder="Enter your email address" required/>
                  <input  class="btn btn-primary s-btn mb-2" type="submit" value="Reset password" />
                  <a  href="/signup">Not created account yet?</a>
                </form>
                 
                       

                </div>
            </div>



        </div>
    );
        </div>
    );
};

export default Reset; 