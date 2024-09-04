import React, { useContext, useState } from 'react';
import './productdisplay.css';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { Shopcontext } from '../../Context/Shopcontext';
import Cartaddalert from '../cartsucessalrt/Cartaddalert.jsx';

const Productdisplay = ({ product }) => {
    const { addToCart } = useContext(Shopcontext);
    const [alertOpen, setAlertOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart(product.id);
        setAlertOpen(true);
        setTimeout(() => setAlertOpen(false), 3000);
    };

    return (
        <>
            <Cartaddalert
                open={alertOpen}
            />
            <div className="product-display">

                <div className="productdisplay-left">
                    <div className="pimage-list">
                        {Array(4).fill(product.image).map((img, index) => (
                            <img key={index} src={img} alt={`product-thumbnail-${index}`} />
                        ))}
                    </div>
                    <div className="p-main-img">
                        <img src={product.image} alt='Main product' />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="pdisplay-right-star">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                        <p>(15)</p>
                    </div>
                    <div className="pright-prices">
                        {product.oldprice && <div className="pright-oldprice">${product.oldprice}</div>}
                        {product.newprice && <div className="pright-newprice">${product.newprice}</div>}
                    </div>
                    <div className="pright-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo non, ex totam accusamus aliquid!
                    </div>
                    {product.size && <div className="pd-right-size">
                        <h1>Select Size</h1>
                        <div className="sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                        </div>
                    </div>}
                    <div className="buttons">
                        <button onClick={handleAddToCart}>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                    <p className='pd-right-category'><span>Category :</span> Women, Shoes</p>
                    <p className='pd-right-category'><span>Tags :</span> Latest</p>
                </div>
            </div>
        </>
    );
};

export default Productdisplay;
