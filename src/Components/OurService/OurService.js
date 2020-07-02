import React from 'react';

const OurService = (props) => {

    const {id,title,description,img} = props.servicedata;
    const shortDes = description.slice(0,40);
    return (
        <div className="col-4"> 

                <div class="card mb-5">
         
                    <div class="card-body">
                        <img src={img} alt=""/>
                        < h5 class="card-title mt-2">{title}</h5>
                        <p class="card-text">{shortDes}</p>
                      <a href="#" class="btn btn-primary">see more</a>
            
                </div>



                </div>

                </div>


        
    );
};

export default OurService;