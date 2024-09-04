import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Shop from './Pages/shop/Shop';
import Shopcatagory from './Pages/shopcatagory/Shopcatagory.jsx';
import Cart from './Pages/cart/Cart.jsx';
import Products from './Pages/products/Products.jsx';
import Login from './Pages/login/Login.jsx';
import Footer from './Components/footer/Footer.jsx';
import Promotion from './Components/Promotion/Promotion.jsx';
import men_banner from './assets/allproducts/men_banner.png';
import women_banner from './assets/allproducts/women_banner.png';
import kids_banner from './assets/allproducts/kids_banner.png';

function App() {
  return (
    <>
      <BrowserRouter>
        <Promotion />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Shopcatagory category="men" banner={men_banner} />} />
          <Route path='/women' element={<Shopcatagory category="women" banner={women_banner} />} />
          <Route path='/kids' element={<Shopcatagory category="kids" banner={kids_banner} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:productId' element={<Products />} /> {/* Separate this route for product details */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
