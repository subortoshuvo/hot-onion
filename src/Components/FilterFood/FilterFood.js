import React from 'react';
import './FilterFood.css';
import { useParams } from 'react-router-dom';
import Food from '../Food/Food';
const FilterFood = () => {

    const {keyId}   =  useParams ();
    console.log(keyId);

 return (


 
        <div> 
        
            <Food></Food>
   
        </div>
    );
};

export default FilterFood;