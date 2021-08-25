import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = saveCart[existingKey]
            return product
        })
        setCart(previousCart)
    }, [])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1
        let newCart

        if(sameProduct){
            
            const count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }


    return (
        <div className="shop-container">

            <div className="product-container">

                {
                   products.map(pd=> <Product 
                    key = {pd.key}
                    showAddToCart={true}
                    handleAddProduct = {handleAddProduct}
                    product={pd}
                   ></Product>)
                    
                }

            </div>

            <div className="cart-container">

                <Cart cart={cart}></Cart>
                <Link to='/review'><button className="cart-button">Review Order</button></Link>

            </div>



        </div>
    );
};

export default Shop;