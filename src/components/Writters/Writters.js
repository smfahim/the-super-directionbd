import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import NameWritter from '../NameWritter/NameWritter';
import Writter from '../Writter/Writter';
import './Writters.css'
const Writters = () => {
    const [writters, setWritter] = useState([]);
    const [carts, setCart] = useState([])
     
    useEffect( () => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setWritter(data));
    }, []);
    // handlerAddToCard
    const handleAddToCart = (writter) => {
        const newCart = [...carts, writter];
        setCart(newCart);
    }
    return (
        <div>
            <div className='navbar bg-dark text-white py-2'>
                 {/*navigation bar  */}
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/writter">Best Writter</a></li>
                        <li><a href="/commuinity">Public Community </a></li>
                    </ul>
                </nav>
            </div>
            {/* writters body */}
            <div className="container">
                <div className="row">
                    <div className="col-md-9 borderRight" >
                        <div className="row"> 
                                 
                            {
                                writters.map(writter =><Writter
                                key ={writter.id} 
                                writter={writter}
                                handleAddToCart={handleAddToCart}
                                ></Writter> )
                            }  
                        </div>
                    </div>
                    <div className="col-md-3">
                        
                        <Cart cart={carts}></Cart> 
                        {
                            carts.map(cart => <NameWritter 
                            key={cart.id}
                            name={cart.name}
                            ></NameWritter>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writters;