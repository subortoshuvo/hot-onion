import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../FoodData';
import FoodItemSingle from '../FoodItemSingle/FoodItemSingle';
import '../../utilities/databaseManager'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Checkout/Cart/Cart';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Whyus from '../Why-us/Whyus';
import Footer from '../Footer/Footer';
const FoodSingle = () => {
const {keyId}  =  useParams();
const item = foodData.find(pd => pd.id == keyId);

let [count,setCount] = useState(1);
const [foodItem,setFoodItem] = useState([]);


 const additem = (item) => {
       const price = item.price;
       const quantity = item.quantity = count;
       item.total = price * quantity;
       setFoodItem(item); 
       addToDatabaseCart(item.id,quantity);
    };


const increaseCount = () => {
     setCount(count++)
} 

const decreaseCount = () => {
    setCount(count--);
}
if(count===0){
    setCount(1);
}
 
    return (
        <div>
          <Header></Header>
          <Navbar></Navbar>
    
        <div className="container">
     
                 <FoodItemSingle 
                 handleItem= {additem}  food={item}
                 increaseCount = {increaseCount}
                 decreaseCount = {decreaseCount}
                 count = {count}
                 
                 ></FoodItemSingle>  

             
        
        </div> 
        <Whyus></Whyus>
        <Footer></Footer>
        </div>
    );
};

export default FoodSingle;