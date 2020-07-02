import React, { useState } from 'react';
import './FoodItemSingle.css';
import '../../utilities/databaseManager';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons'

const FoodItemSingle = (props) => {
   
  const cart =   getDatabaseCart();
  const cartItem  =   Object.keys(cart).length;

    const {name,description,price,img} = props.food;

    return (
        <div className="row m-auto py-5">
            <div className="col-4">
                 <div className="item">
                    <h4>{name}</h4>
                   <p className="muted">{description}</p>
                    <span className="mr-5 price">${price * props.count}</span>  
                     
                    <button onClick = {props.decreaseCount} className="btn-left">-</button> <span className="bt">{props.count}</span> <button onClick={props.increaseCount} className="btn-right">+</button>

                    <br/>
                    <button onClick={()=>props.handleItem(props.food)}  className="btn btn-success addFood mt-3"> <FontAwesomeIcon icon={faCartPlus} /> Add</button>
                 </div>
             </div>
      
            <div className="col-4">
                 <img className="img-fluid rounded" src={img} alt=""/>
            </div>
            
            <div class="col-12 py-5">

                 {cartItem === 0 ? <button className="btn btn-secondary">Check out </button>: 
                   <Link to="/checkout"> <button  className="btn btn-success">Check out</button>  </Link>
                 }
            </div>
           

        </div>
    );
};

export default FoodItemSingle;