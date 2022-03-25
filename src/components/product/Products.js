import React from 'react';
import './Products.css';

const Products = (props) => {
// console.log(props.singleProduct);

const {singleProduct ,addToCartHandle} = props;


    const {name,price,img,seller,ratings} = singleProduct;
    
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p> price =${price} </p>
            <p> <small>seller= {seller} </small> </p>
            <p> <small>ratings={ratings} </small> </p>
            </div>
            
            <button onClick={() =>addToCartHandle(singleProduct)} className='btn-cart'>
               <p>Add To Cart</p>
                </button>
        </div>
    );
};

export default Products;