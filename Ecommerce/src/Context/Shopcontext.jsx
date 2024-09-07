import React, { createContext, useEffect, useState } from 'react';
//import allproducts from '../assets/allproducts'; // Ensure this is the correct path and index.js in the folder exports allproducts

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopcontextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getdefaultcart());
  const [allproducts, setallproducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    fetch('http://localhost:5000/allproducts')
      .then((response) => response.json())
      .then((data) => setallproducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  
    // Fetch cart data if the user is authenticated
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:5000/getcart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json', // Correct Accept header
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json', // Correct Content-Type header
        },
      })
        .then((response) => response.json())
        .then((data) => setcartItems(data))
        .catch((error) => console.error('Error fetching cart items:', error));
    }
  }, []); // Empty dependency array to run only on mount
  



  const addToCart = (itemid) => {
    setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItems);
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:5000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'itemId': itemid }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
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

  const removeFromCart = (itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:5000/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'itemId': itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      
    }
  }


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
    setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
  }
  const contextvalues = { allproducts, cartItems, gettotalcartitems, addToCart, removeFromcart, gettotalcartamount };

  return (
    <Shopcontext.Provider value={contextvalues}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
