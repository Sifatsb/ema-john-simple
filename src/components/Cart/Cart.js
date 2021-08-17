import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    //const totalPrice = cart.reduce((total, prod) => total + prod.price, 0)
    let total = 0
    for(let i = 0; i < cart.length; i++){
        const product = cart[i]
        total += product.price
    }

    let shippingCost = 0
    if(total > 35) shippingCost = 0
    else if(total > 15) shippingCost = 4.99
    else if(total > 0) shippingCost = 12.99

    const tax = (total / 10).toFixed(2)
    let grandTotal = (total+ shippingCost+ Number(tax)).toFixed(2)

    return (
        <div>
            <h3>Order Summary</h3>
            <p>{cart.length}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;