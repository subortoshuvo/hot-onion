import React, { useState } from 'react';
import './Why-us.css'
import ServiceData from '../../FoodData/ServiceData/ServiceData';
import OurService from '../OurService/OurService';
const Whyus = () => {
 
   const service =  ServiceData;
   const [data,setData] = useState(service);
    return (
        <div className="container">
            <div className="my-5">
                <h1>Why You choose us</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veniam repellendus modi ea deleniti fuga assumenda molestias eius recusandae quidem et voluptate, possimus rerum consequatur esse. Quidem incidunt autem provident!</p>
            </div>
           
           <div className="row">
                  {data.map(pd=> <OurService servicedata = {pd}></OurService>)}
           </div>
            
        </div>
    );
};

export default Whyus;