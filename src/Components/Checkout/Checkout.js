import React from 'react';
import './Checkout.css';
import Cart from './Cart/Cart';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Whyus from '../Why-us/Whyus';
import Footer from '../Footer/Footer';
import { processOrder } from '../../utilities/databaseManager';
const Checkout = () => {
       


    return (
        <div>
         <Header></Header>
         <Navbar></Navbar>
       
        <div className="container">
             <div className="row checkout py-4">
                  <div class="col-4">
                      <h1>Edit Delivery Details</h1>
                        
                      <form>
                          <input className="form-control mb-3" type="text" placeholder="Your Name"/>
                           <input  className="form-control mb-3"type="email" placeholder="Email"/>
                          <input  className="form-control mb-3"type="text" placeholder="Address one"/>
                          <input  className="form-control mb-3"type="text" placeholder="Address one"/>
                          <textarea  className="form-control mb-3"placeholder="Add short instruction" name="" id="" cols="20" rows="5"></textarea>
                          <input className="btn save" type="submit" value="Save & continue" />
                     </form>

                  </div>
                  <div class="col-4">
                     <Cart></Cart>
                  </div>
             </div>
        </div>
        <Whyus></Whyus>
        <Footer></Footer>
        </div>
    );
};

export default Checkout;