import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Whyus from './Components/Why-us/Whyus';
import Footer from './Components/Footer/Footer';
import Signup from './Auth/Signin/Signup';
import { useParams } from 'react-router-dom';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Food from './Components/Food/Food';
import Auth, { PrivateRoute, AuthProvider } from './Auth/Auth';
import Checkout from './Components/Checkout/Checkout';
import Confirm from './Components/Confirm/Confirm';
import Category from './Components/Category/Category'
import Login from './Auth/Login/Login';
import FoodSingle from './Components/FoodSingle/FoodSingle';
import Reset from './Auth/Reset/Reset';



 function App() {

  return (
   
     
    <AuthProvider>

    <Router>
    <div className="App">
 

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

  
<Switch>
                  <Route exact  path="/">
                     
                      <Food></Food>
                 </Route>
                    

                 <PrivateRoute path='/confirm'>
                      <Confirm></Confirm>
                   </PrivateRoute>


                 <Route path='/reset'>
                       <Reset></Reset>
                 </Route>
               
    
          
                 <Route path='/signup'>
                   <Signup></Signup>
                 </Route> 

                 <Route path='/signup' component={Signup}></Route> 

                 <Route path='/login'>
                   <Login></Login>
                 </Route> 
                 
              
            
          
                 <Route   path="/checkout">
                      <Checkout></Checkout>
                 </Route>
                

 
                 <Route path="/item/:keyId">
                   <FoodSingle></FoodSingle>
                 </Route>
                                
                 <Route path="/:id">
                    <Category></Category> */}
                 </Route>
               


          </Switch> 


    </div>
  </Router>
  </AuthProvider>
  );
} 



export default App;

