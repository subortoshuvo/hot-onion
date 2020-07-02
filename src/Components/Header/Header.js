import React from 'react';
import './Header.css';
import logo from '../../img/logo2.png';
import cart from '../../img/ICON/Path 1.png';
import { useParams, Link } from 'react-router-dom';
import Auth, { useAuth } from '../../Auth/Auth';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const auth  = useAuth();

    console.log(auth);
    const cart =   getDatabaseCart();
    const cartItem  =   Object.keys(cart).length;

    return (
        <div className="container">
            <div class="upper-header d-flex justify-content-between container py-3">
                   
                  <div>
                     <Link to='/'><img className="logo" src={logo} alt=""/> </Link>
                 </div> 

                <div className="ml-auto">
                  
     
                    {
                         auth.user.emailVerified===true   ? <span className="d-name">{  auth.user.displayName}</span>:
                        <a className="btn btn-primary ml-2" href="/signup">Sign up</a>
                    }
                   
                      
                   
                   {auth.user.emailVerified?
                     <button onClick={auth.Signout} className="btn">LogOut</button>
                   :
                     <a className="login mr-2 ml-2" href="/login">Login</a>
                     
                    }

                <span className="cart">
                     <FontAwesomeIcon icon={faCartPlus} />   <span className="badge badge-danger"> {cartItem}</span> 
                </span>
                   
                      
                   
                </div>
            </div>
              
              <div className="header-banner ">

                  <div className="header-middle-content">
                 
                  <div>
                    
                     <h1 className="header-text">Best food is waiting for your belly</h1>
                  </div>

                 <div className="d-flex m-auto header-middle">
                      
                     <input placeholder="Search your  Item" className="form-control mt-3 header-search" type="text"/>
                     <input value="search" className="btn btn-primary mt-3 header-btn" type="submit"/>
                 </div>

             
                 </div>
              </div>  


        </div>
    );
};

export default Header;