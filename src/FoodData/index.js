import BreakFast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';




    const foodData  = [...Lunch,...BreakFast,...Dinner];
     
     const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    

    shuffle(foodData);


export default foodData;
