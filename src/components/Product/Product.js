import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props)
    const{name,img,seller,price,stock}=props.products
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" srcset=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <br/>
                <p><small>BY: {seller}</small></p>
                <p>Price: ${price}</p>
                <br/>
                <p>Only {stock} left order soon</p>
                <button className="main-button"
                onClick={ ()=> props.handleAddProduct(props.products)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;