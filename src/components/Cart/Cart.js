import React from 'react';
import './Cart.css'
const Cart = (props) => { 
    const {cart } = props; 
    let total = 0;
    for(const wriiter of cart){
        total = total + wriiter.money;
    }
    return (
        <div>
            <div className="total-card bg-warning py-4 px-3 my-3 rounded-3">
                <h6 className='fw-bold'> Total Writters Add: <b>{props.cart.length}</b></h6>
                <h6 className='fw-bold  '> Total Writters Money: <b>{total}</b> </h6>
                 <button className="btn btn-primary d-block my-4 mx-auto">Call Now</button>
            </div>
        </div>
    );
};

export default Cart;