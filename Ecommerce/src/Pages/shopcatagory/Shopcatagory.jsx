import React from 'react';
import { useContext } from 'react';
import './shopcatagory.css';
import { Shopcontext } from '../../Context/Shopcontext';
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../../Components/Items/Item';


const Shopcatagory=(props)=>{
    const {allproducts} = useContext(Shopcontext);
    return(
        <div className="shop-catagory">
            <div className="imagebox">
            <img src={props.banner}/>
            </div>
            <div className="shopcatagory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 35
                </p>
                <div className="shopcatagory-sort">
                    Sort by <RiArrowDropDownLine/>
                </div>
            </div>
            <div className="shopcatagory-products">
                {allproducts.map((item, i)=>{
                    if(props.category===item.category){
                        return(
                            <Item key={i} id={item.id} image={item.image} name={item.name} newprice ={item.newprice} oldprice={item.oldprice} />
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
            <div className="loadmore">
                Explore More
            </div>
        </div>
    )
};

export default Shopcatagory;