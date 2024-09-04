import React, { useState } from 'react';
import './addproduct.css';
import { MdOutlineDriveFolderUpload } from "react-icons/md";


const Addproduct = () => {

    const [image, setimage] = useState(false);
    const imagehandler =()=>{
        setimage(e.target.files[0]);
    }

  return (
    <div className="add-product">
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input type="text" name ='name' placeholder='Type here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input type='text' name='oldprice' placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input type='text' name='newprice' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name='category' className='add-product-selector'>
                <option value='women'>Women</option>
                <option value='Men'>Men</option>
                <option value='Kids'>Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
            <MdOutlineDriveFolderUpload/>
            </label>
            <label onChange={imagehandler} type='file' name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn'>Add</button>
    </div>
  )
};

export default Addproduct;
