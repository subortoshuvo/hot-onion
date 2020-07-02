import React from 'react';
import './Confirm.css';
import map from '../../img/map.png';
import bike from '../../img/Image/Group 1151.png';
import rader from '../../img/Image/Group 1152.png';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Whyus from '../Why-us/Whyus';
import Footer from '../Footer/Footer';
import { processOrder } from '../../utilities/databaseManager';
const Confirm = (props) => {

    var date  = new Date();
    var min = date.getMinutes();
    

    processOrder();
    
  

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
        <div className="container">
             <div className="row">
                 <div className="col-8">
                    <img className="img-fluid map" src={map} alt=""/>
                 </div>
                 <div className="4">
                    <div className="bill">
                       <div>
                           <img className="img-fluid bike" src={bike} alt=""/>
                       </div>
                       <div className="details">

                       <ul id="progress">
                            <li><div class="node green"></div>
                                <p className='p'>Your Location</p> 
                                <p className='p'>107 Rd No 8</p>
                                
                            
                            </li>
                            <li><div class="divider grey"></div></li>
                        <li className='d'><div class="node grey"></div> 
                            <div className='d'>
                             <p className='p'>Shop Address</p>
                             <p className='p'>Gulshan Plaza Restaurant</p>
                            </div>
                             
                        </li>
                        </ul>
                 

                       </div>
                       <div class="d-time">
                            <span className="time">00</span>: <span className="time">{min}</span> <span className="d-min">min</span>
                           <p className="e-time text-muted">Estimated delivery Time</p>
                       </div>
                       <div className="rider d-flex">
                           <div className="">
                           <img className="img-fluid rider" src={rader} alt=""/>
                           </div>
                          <div className="rider-info">
                              <p className="name">Hamim</p>
                              <p className="text-muted ri">Your rider</p>
                          </div>

                       </div>
                       <button className="btn contact">Contact</button>
                    </div>
                 </div>
             </div>
        </div>
        <Whyus></Whyus>
        <Footer></Footer>
        </div>
    );
};

export default Confirm;