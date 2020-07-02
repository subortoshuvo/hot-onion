import React, { useState } from 'react';
import './FoodItem';
import './FoodItem.css'


const FoodItem = (props) => {
   

  const {name,description,price,img} = props.food;

    return (
                    <div className="col-4">
                             
                  

                                  <a href={'item/'+props.food.id} onClick={()=>props.foodHanle(props.food)}> 
                                  <div class="card text-center mb-3 shadow-sm p-3 mb-5 bg-white rounded">
                                  <div class="card-body">
                                  <img className="img-fluid" src={img} alt=""/>
                                  <h4>{name}</h4>
                                  <p>{description.slice(0,30)}</p>
                                  <h2>${price}</h2>
                                  </div>
                                  </div> 
                                  </a> 


             </div>
 




       
    );
};

export default FoodItem;