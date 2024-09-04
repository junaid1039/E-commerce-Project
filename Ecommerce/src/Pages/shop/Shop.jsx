import React from 'react';
import './shop.css';
import Bcarosel from './Bcarosel';
import Popular from '../../Components/popular/Popular';
import Offer from '../../Components/offers/Offer';
import Newcollection from '../../Components/NewCollections/Newcollection';
import Newsletter from '../../Components/Newsletter/Newsletter';


const Shop = () => {

    return (
        <>
            <Bcarosel />
            <Popular/>
            <Offer/>
            <Newcollection/>
            <Newsletter/>
        </>
    )
};

export default Shop;