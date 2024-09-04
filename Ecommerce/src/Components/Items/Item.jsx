import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/products/${props.id}`}>
                <img onClick={window.scroll(0,0)} src={props.image} alt='product' />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="new-price">${props.newprice}</div>
                <div className="old-price">${props.oldprice}</div>
            </div>
        </div>
    );
};

export default Item;
