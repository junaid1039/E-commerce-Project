import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiBoxList } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/addproduct" style={{ textDecoration: 'none' }} aria-label="Add Product">
        <div className="sidebar_item">
          <CiShoppingCart />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: 'none' }} aria-label="Product List">
        <div className="sidebar_item">
          <CiBoxList />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
