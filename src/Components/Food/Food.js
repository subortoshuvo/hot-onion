import React, { useState, useEffect,useContext, createContext  } from 'react';
import foodData from '../../FoodData';
import FoodItem from '../FoodItem/FoodItem';
import '../../utilities/databaseManager';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Whyus from '../Why-us/Whyus';
import Footer from '../Footer/Footer';


const Food = (props) => {
     const cart =   getDatabaseCart();
     const cartItem  =   Object.keys(cart).length;


   const food = foodData.slice(0,6);



   const [fooditem,setFoodUtem] = useState(food);

  
    

    return (
        
       <div>

         <Header></Header>    
         <Navbar></Navbar>
        <div class="container"> 
   
         <div className="row">
              {  fooditem.map(pd =>  <FoodItem catId={false} food={pd}></FoodItem>)   }
         </div>
         
          <div>
                 {cartItem === 0 ? <button className="btn btn-secondary">Check out</button>: 
                  <Link to="/checkout">
                         <button className="btn btn-success">Check out</button>
                  </Link> 
                 }
          </div>
   
        
        </div>
        <Whyus></Whyus>
        <Footer></Footer>
        </div>
    );
};

export default Food;  