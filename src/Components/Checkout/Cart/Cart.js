import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getDatabaseCart, addToDatabaseCart, removeFromDatabaseCart, processOrder } from '../../../utilities/databaseManager';
import foodData from '../../../FoodData';
import CartItem from '../../CartItem/CartItem';
import { Link } from 'react-router-dom';



const Cart = () => {  
          
    var date  = new Date();
    var min = date.getMinutes();


       const [list,setList] = useState([]);
        const cartLength =  list.length;
 
  
       var sumPrice = 0;
       for(let i=0; i<list.length;i++){
           var price  = list[i].price;
           var quantity = list[i].quantity;
           var  total =  (price*quantity);
          
            sumPrice =  sumPrice+total;
          
       }
       var tax = 5;
       var delivery= 2;
      
       let [count,setCount] = useState(0);
      
        if(list.length === 0){
          tax = 0;
          delivery = 0;
          
        }
        var GrandTotal = sumPrice+tax+delivery;
       useEffect(()=>{
         
          const item =   getDatabaseCart();
        
          const itemKey = Object.keys(item);
          
          const cart = itemKey.map(pdkey => { 
             
                 const items = foodData.find(pd => pd.id === parseInt(pdkey));
                 items.quantity = item[pdkey];
                 return items;
        });


        setList(cart);
          
    

       },[])
         
     

       const decrease = (product) => {
            var currentQnt = product.quantity;
            count = currentQnt;
            var increaseQnt = count--;
            addToDatabaseCart(product.id,count);
            if(count===0){
            removeFromDatabaseCart(product.id);
            window.location.reload();
            }
  
               window.location.reload();
            }
         

  
          var increase = (product) => {
           
          var currentQnt = product.quantity;
              count = currentQnt;
               count++;
              addToDatabaseCart(product.id,count);
      
              window.location.reload();

         }
     
    return (
        <div>
            
            <div className="cart-item">
                         <p>Form Gulshan Plaza Restaurant</p>
                         <p>Arriving in {list.length>0 ? '00:'+min : "00:00" } min</p>
                         <p>107 Rd no 8</p>


                           {list.length > 0 && list.length && list.map(pd => <CartItem length={cartLength} increase={increase} decrease={decrease} list={pd}></CartItem>)
                            } 
                            {
                              list.length===0 && <CartItem length={0} increase={increase} decrease={decrease} list={0}></CartItem>
                            }


                          <div class="billing">
                            <p><span>Subtotal {list.length} item</span> <span>${sumPrice}</span></p>  
                              <p><span>Tax</span> <span>${tax}</span></p>  
                               <p><span>Delivery fee</span> <span>${delivery}</span></p>  
                                <p><span>Total</span> <span>${GrandTotal}</span></p>  
                              {cartLength> 0 && list.length>0 && <Link to='/confirm'>
                                  <button className="btn btn-secondary place-order">Place order</button>
                            </Link>}   
                            {cartLength=== 0 &&  <Link to='/'>
                                  <button onClick={()=>processOrder()} className="btn btn-secondary place-order">Add to Cart</button>
                            </Link>} 
                           </div>


                      </div>



        </div>
    );
};

export default Cart;