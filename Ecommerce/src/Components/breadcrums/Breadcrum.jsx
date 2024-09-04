import React from 'react';
import './breadcrum.css';
import { MdKeyboardArrowRight } from "react-icons/md";


const Breadcrum=(props)=>{
    const {product} = props;
    return(
        <div className="breadcrum">
            HOME <MdKeyboardArrowRight/> SHOP <MdKeyboardArrowRight/> {product.category} <MdKeyboardArrowRight/> {product.name}
        </div>
    )
};

export default Breadcrum;