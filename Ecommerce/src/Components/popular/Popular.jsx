import React from 'react';
import './popular.css'
import data_product from '../../assets/allproducts/data';
import Item from '../Items/Item.jsx';

const Popular = () => {

    return (
        <div className='popular'>
            <div className='sub-popular'>
                <div className="heading">
                    <h1>Popular in Women</h1>
                    <hr />
                </div>

                <div className="popular-items">
                    {data_product.map((item, i) => {
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice} />
                        )
                    })}
                </div>
            </div>


        </div>
    )
};

export default Popular;