import React, { useContext } from 'react';
import { Shopcontext } from '../../Context/Shopcontext';
import { useParams } from 'react-router';
import Breadcrum from '../../Components/breadcrums/Breadcrum';
import Productdisplay from '../../Components/ProductDisplay/Productdisplay';
import Description from '../../Components/descriptionbox/Description';
import Relatedproducts from '../../Components/relatedproducts/Relatedproducts';

const Products = () => {
    const { allproducts } = useContext(Shopcontext);
    const { productId } = useParams(); //use to get data from url
    
    const product = allproducts.find((e) => e.id === Number(productId));
    console.log(product.image);
    
    return (
        <>
            <Breadcrum product={product} />
            <Productdisplay product={product}/>
            <Description/>
            <Relatedproducts/>
            
        </>
    );
};

export default Products;
