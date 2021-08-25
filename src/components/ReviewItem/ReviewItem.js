import React from 'react';

const ReviewItem = (props) => {
     console.log(props)
    const {name, quantity, key, price} = props.product
    const reviewItemStyle = {
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h1>review</h1>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p> <br />
            <p><small>${price}</small></p>
            <button 
            className="cart-button" 
            onClick = {() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;