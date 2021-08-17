import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const {img, name, seller, price, stock} = props.product
   
    return (
        <div className="product">

            <div>
                
            </div>
                <img src={img} alt="" />

            <div>
                <h4 className="product-name">{name}</h4> <br />
                <p><small>by: {seller}</small></p> <br />
                <p><small>Price: {price}$</small></p> <br />
                <p><small>Only {stock} left in stock - Order soon</small></p> <br />
                <button onClick={() => props.handleAddProduct(props.product)} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;