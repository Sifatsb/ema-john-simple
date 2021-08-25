import React from 'react';


const Cart = (props) => {
    const cart = props.cart
    //const totalPrice = cart.reduce((total, prod) => total + prod.price, 0)
    let total = 0
    for(let i = 0; i < cart.length; i++){
        const product = cart[i]
        total += product.price * product.quantity
    }

    let shippingCost = 0
    if(total > 35) shippingCost = 0
    else if(total > 15) shippingCost = 4.99
    else if(total > 0) shippingCost = 12.99

    const tax = (total / 10).toFixed(2)
    let grandTotal = (total+ shippingCost+ Number(tax)).toFixed(2)

    return (
        <div>
            <h2>Order Summary</h2> <br />
            <p>Items Ordered: {cart.length}</p> <br />
            <p><small>Shipping Cost: {shippingCost}</small></p> <br />
            <p><small>Tax + Vat: {tax}</small></p> <br />
            <p>Total Price: {grandTotal}</p> <br /> <br />

            {
                props.children
            }

        </div>
    );
};

export default Cart;