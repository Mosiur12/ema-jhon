import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Products from '../product/Products';
import './Shop.css';

const Shop = () => {
 const [products , setProducts] = useState([]);
 const [cart , setCart] = useState([]); 

 useEffect ( () =>{
 fetch ('products.json')
 .then (res => res.json())
 .then (data => setProducts(data))

 },[]);

 const addToCartHandle = (singleProduct) =>{
     console.log(singleProduct);

    const newCart = [...cart,singleProduct]
    setCart (newCart);

 }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                 {products.map (singleProduct =>
                     <Products
                     key = {singleProduct.id} 
                     singleProduct = {singleProduct}
                     addToCartHandle = {addToCartHandle}>
                        
                      </Products>)}
            </div>

            <div className='cart-container'>
                  <h3> Order summary</h3>
                  <p>select item = {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;