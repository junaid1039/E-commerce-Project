import React, { useEffect, useState } from 'react';
import './newcollection.css';
import Item from '../Items/Item';
//import newcollection from '../../assets/allproducts/newcollection'

const Newcollection=()=>{

    const [newcollection,setnewcollection] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setnewcollection(data))
    },[])

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