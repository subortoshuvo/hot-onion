import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
  
    const {name,quantity,img,price} = props.list;
    return (
        <div>    
                     { 
                          
                        props.length === 0 ?   <div className="cart d-flex justify-content-between empty">
                      
                          <h1>Your cart is empty</h1>
                    </div> 
                   
                           :
                           <div className="cart d-flex justify-content-between">
                           <div className="img">
                            <img className="img-fluid" src={img} alt=""/>
                            </div>
                            <div className="title" >
                            <p>{name}</p>
                            <p className="pink">${price*quantity}</p>
                           </div>
                           <div className="cart-btn">
                           <button onClick={()=>props.decrease(props.list)} className="btn">-</button>
                           <span className="quantity">{quantity}</span>
                           <Link to="/checkout" refresh="true">
                           <button onClick={()=>props.increase(props.list)} className="btn"> +</button>
                        </Link> 
                        </div>
                       </div> 
                      
                          
                                } 


        </div>
    );
};

export default CartItem;