import React from 'react';
import './newcollection.css';
import Item from '../Items/Item';
import newcollection from '../../assets/allproducts/newcollection'

const Newcollection=()=>{

    return(
        <div className="new-collection">
            <div className="heading">
                <h1>New Collection</h1>
                <hr/>
            </div>
            <div className="collection-item">
                {newcollection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice} />
                })}
            </div>
        </div>
    )
};

export default Newcollection;