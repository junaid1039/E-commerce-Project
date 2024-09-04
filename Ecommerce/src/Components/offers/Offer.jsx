import React from 'react';
import './offer.css';
import offerbanner from '../../assets/allproducts/offerbanner.jpg'

const Offer =()=>{

    return(
        <div className="offer">
            <div className="image">
            <img src={offerbanner}/>
            </div>
        </div>
    )
};

export default Offer;