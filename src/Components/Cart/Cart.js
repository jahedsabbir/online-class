import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total, course) => total + course.price,0);
    return (
            <div className="cart-style">
            <h1>Order Summary</h1>
             <h2>Courses Ordered : {cart.length}</h2>
             <h4>Total Price : {totalPrice}</h4>
            </div>
        
       
    );
};

export default Cart;