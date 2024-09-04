import React from 'react';
import './relatedproducts.css';

import allproducts from '../../assets/allproducts/index.js';
import Item from '../Items/Item.jsx';


const Relatedproducts=()=>{



    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="rp-items">
            {allproducts.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice} />
                })}
            </div>
        </div>

    )
};

export default Relatedproducts;