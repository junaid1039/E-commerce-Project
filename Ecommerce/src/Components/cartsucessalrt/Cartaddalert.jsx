import React from 'react';
import { HiOutlineBellAlert } from "react-icons/hi2";
import './cartaddalert.css'; // Create a CSS file for custom styling

const Cartaddalert = ({ open, message }) => {
  if (!open) return null; // Render nothing if the alert is not open

  return (
    <div className="alertmain">
    <div className="custom-alert">
      <HiOutlineBellAlert className="alert-icon" />
      <span>Item added to Cart successfully!</span>
    </div>
    </div>
  );
};

export default Cartaddalert;
