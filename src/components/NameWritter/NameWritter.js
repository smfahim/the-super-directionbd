import React from 'react';
import './NameWritter.css'
const NameWritter = (props) => { 
    const{name} = props; 
    return (
        <div className='singleWritter bg-light text-dark'>
            <h6>{name}</h6>
        </div>
    );
};

export default NameWritter;