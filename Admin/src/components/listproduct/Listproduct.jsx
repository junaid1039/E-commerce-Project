import React, { useEffect, useState } from 'react'
import './listproduct.css';
import { RiDeleteBin5Line } from "react-icons/ri";



const Listproduct = () => {

  const [allproducts, setallproducts] = useState([]);

  const fetchInfo = async () => {
    const response = await fetch('http://localhost:5000/allproducts');
    const data = await response.json();
    setallproducts(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id)=>{
    await fetch('http://localhost:5000/removeproduct', {
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  };


  return (
    <div className="list-product">
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return <>

          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt={product.name} className="listproduct-product-img" />
            <p>{product.name}</p>
            <p>${product.oldprice}</p>
            <p>${product.newprice}</p>
            <p>{product.category}</p>
            <RiDeleteBin5Line onClick={() => remove_product(product.id)} />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
};

export default Listproduct;
