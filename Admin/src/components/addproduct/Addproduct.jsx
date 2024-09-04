import React, { useState } from 'react';
import './addproduct.css';
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const Addproduct = () => {
    const [image, setImage] = useState(null);
    const [productdetails, setproductdetails] = useState({
        name: "",
        image: '',
        category: 'women',
        newprice: '',
        oldprice: ''
    });

    const changehandler = (e) => {
        setproductdetails({ ...productdetails, [e.target.name]: e.target.value });
    }

    const imagehandler = (e) => {
        setImage(e.target.files[0]);
    }

    const Addproduct = async () => {
        console.log(productdetails);
        let responseData;

        let formdata = new FormData();
        formdata.append('product', image);
        formdata.append('name', productdetails.name);
        formdata.append('category', productdetails.category);
        formdata.append('newprice', productdetails.newprice);
        formdata.append('oldprice', productdetails.oldprice);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formdata,
            });
            responseData = await response.json();

            if (responseData.success) {
                console.log('Product added:', responseData);
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productdetails.name} onChange={changehandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productdetails.oldprice} onChange={changehandler} type='text' name='oldprice' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productdetails.newprice} onChange={changehandler} type='text' name='newprice' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productdetails.category} onChange={changehandler} name='category' className='add-product-selector'>
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                    <option value='kids'>Kids</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor='file-input'>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="Product Preview" />
                    ) : (
                        <MdOutlineDriveFolderUpload />
                    )}
                </label>
                <input
                    type='file'
                    name='image'
                    id='file-input'
                    onChange={imagehandler}
                    hidden
                />
            </div>
            <button onClick={Addproduct} className='addproduct-btn'>Add</button>
        </div>
    )
};

export default Addproduct;
