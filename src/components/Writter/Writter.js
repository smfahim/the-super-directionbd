import React from 'react';
import './Writer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPenAlt } from '@fortawesome/free-solid-svg-icons'
const Writter = (props) => {  
    
    const {name,image,age,born,id,money,nationality} = props.writter;

    return (
        <div className='col-md-4 my-3'>
            <div className="single-card text-left bg-info rounded-3 p-3">
                <div className='writterImage'>
                    <img src={image} alt="" />
                </div> 
                <h6> <b>Name:</b>  {name}</h6>
                <p className='my-2'> <b>Id:</b>  {id}</p>
                <p className='my-2'> <b>Born:</b>  {born}</p>
                <p className='my-2'> <b>Age:</b>  {age}</p>
                <p className='my-2'> <b>Nationality:</b>  {nationality}</p>
                <h5> <b>Money:</b>  {money}</h5>
                <button  
                className="btn btn-dark my-2"
                onClick={() => props.handleAddToCart(props.writter)}
                > <FontAwesomeIcon icon={faPenAlt} 
                /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Writter;