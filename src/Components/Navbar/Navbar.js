import React, { useState } from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Food from '../Food/Food';

import Category from '../Category/Category';
import FoodSingle from '../FoodSingle/FoodSingle';
import NotFound from '../404/NotFound';
import Checkout from '../Checkout/Checkout';
import Confirm from '../Confirm/Confirm';
import Auth, { useAuth, PrivateRoute } from '../../Auth/Auth';
import Signup from '../../Auth/Signin/Signup';
import Reset from '../../Auth/Reset/Reset';
import Login from '../../Auth/Login/Login';


  




const Navbar = () => {
  

    
    return (

        <div>
                    <nav     className=" py-3">
            <ul>
              <li>
                <Link   to="/breakfast">BreakFast</Link>
              </li>
              <li>
                <Link   to="/lunch">Lunch</Link>
              </li>
              <li>
                <Link     to="/dinner">Dinner</Link>
              </li>
            </ul>
          </nav>
  
        </div>


    );
};




export default Navbar;