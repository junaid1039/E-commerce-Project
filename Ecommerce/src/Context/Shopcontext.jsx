import React, { createContext, useState } from 'react';
import allproducts from '../assets/allproducts'; // Ensure this is the correct path and index.js in the folder exports allproducts

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let i = 0; i < allproducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopcontextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getdefaultcart());

  const addToCart = (itemid) => {
    setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItems);
  }

  const gettotalcartitems = () => {
    let totalitem = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalitem += cartItems[item];
        }
    }
    return totalitem; // Return the total number of items
};



  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = allproducts.find((product) => product.id === Number(item));
            if (itemInfo) {
                totalamount += itemInfo.newprice * cartItems[item];
            }
        }
    }
    return totalamount.toFixed(2);
}


  const removeFromcart = (itemid) => {
    setcartItems((prev) => ({...prev,[itemid]: prev[itemid]-1}))
  }
  const contextvalues = { allproducts, cartItems,gettotalcartitems ,addToCart, removeFromcart, gettotalcartamount };

  return (
    <Shopcontext.Provider value={contextvalues}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
