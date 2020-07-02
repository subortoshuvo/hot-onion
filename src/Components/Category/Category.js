import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodData from '../../FoodData';
import FoodItem from '../FoodItem/FoodItem';
import '../../utilities/databaseManager';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Whyus from '../Why-us/Whyus';
import Footer from '../Footer/Footer';

  const Child = () => {
  const food =   foodData; 
  const {id} =   useParams()
  const match  = food.filter(pd => pd.category === id);
  console.log(match);
  const cart =   getDatabaseCart();
  const cartItem  =   Object.keys(cart).length;

    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
              {  match.map(pd=> <FoodItem catId={true} food={pd}></FoodItem>)  }
           </div>
           
           <div>
                 {cartItem === 0 ? <button className="btn btn-secondary">Check out</button>: 
                   <Link to='/checkout'> 
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

export default Child;