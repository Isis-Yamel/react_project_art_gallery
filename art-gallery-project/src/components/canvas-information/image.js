import React from 'react';
import Image from '../../assets/logo.png';

const image = props => {
    return (
        <figure className='image'>
            <img className='image--style' src={props.image || {Image}} alt={props.alternative}/>
        </figure>
    );
};

export default image;