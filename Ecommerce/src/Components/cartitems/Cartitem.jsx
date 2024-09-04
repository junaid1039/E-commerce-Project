import React, { useContext } from 'react';
import './cartitem.css';
import { Shopcontext } from '../../Context/Shopcontext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; 
import { PiHandbagBold } from "react-icons/pi";

export const Cartitem = () => {
    const { allproducts, cartItems, addToCart, decreaseCartQuantity, removeFromcart, gettotalcartamount } = useContext(Shopcontext);

    const isCartEmpty = allproducts.every((e) => cartItems[e.id] === 0);

    return (
        <>
            <div className="heading">
                <p><PiHandbagBold />My Cart</p>
            </div>
            <hr />
            <div className="cartitem">
                <div className="sub-cartitem">
                    <div className="caritem-cart">
                        {isCartEmpty ? (
                            <h5>Your cart is Empty</h5>
                        ) : (
                            allproducts.map((e) => {
                                if (cartItems[e.id] > 0) {
                                    return (
                                        <div className="main-format" key={e.id}>
                                            <div className="cartitem-format">
                                                <img src={e.image} alt="product" />
                                                <p className='name'>{e.name}</p>
                                                <div>
                                                    <h5>Price</h5>
                                                    <p>{"$" + e.newprice}</p>
                                                </div>
                                                <div className="quantity-controls">
                                                    <h5>Quantity</h5>
                                                    <div className="sub-1">
                                                        <AiOutlineMinus onClick={() => decreaseCartQuantity(e.id)} />
                                                        <span className='cartitem-quantity'>{cartItems[e.id]}</span>
                                                        <AiOutlinePlus onClick={() => addToCart(e.id)} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5>Total</h5>
                                                    <p>{"$" + (e.newprice * cartItems[e.id]).toFixed(2)}</p>
                                                </div>
                                                <RiDeleteBin6Line onClick={() => removeFromcart(e.id)} />
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        )}
                    </div>
                    {/* Cart Totals Section */}
                    <div className="cartitem-down">
                        <div className="sub-down">
                            <div className="ct-promocode">
                                <p>ENTER PROMO CODE</p>
                                <div className="ct-promobox">
                                    <input type='text' placeholder='Promo Code' />
                                    <button>Submit</button>
                                </div>
                            </div>
                            <div className="cartitem-total">
                                <div>
                                    <div className="ct-item">
                                        <p>Subtotal</p>
                                        <p>${gettotalcartamount()}</p>
                                    </div>
                                    <hr />
                                    <div className="ct-item">
                                        <p>Shipping Fee</p>
                                        <p>Free</p>
                                    </div>
                                    <hr />
                                    <div className="ct-item">
                                        <h3>Total</h3>
                                        <h3>${gettotalcartamount()}</h3>
                                    </div>
                                </div>
                                <button><LuShoppingCart />Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
