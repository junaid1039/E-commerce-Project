import React, { useEffect } from 'react';
import './popular.css'
import popular from '../../assets/allproducts/data';
import Item from '../Items/Item.jsx';
import { useState } from 'react';

const Popular = () => {

    const [popular, setpopular] = useState([]);
 
    useEffect(()=>{
        fetch('http://localhost:5000/popular')
        .then((response)=>response.json())
        .then((data)=>setpopular(data));
    },[]);



    return (
        <div className='popular'>
            <div className='sub-popular'>
                <div className="heading">
                    <h1>Popular in Women</h1>
                    <hr />
                </div>

                <div className="popular-items">
                    {popular.map((item, i) => {
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