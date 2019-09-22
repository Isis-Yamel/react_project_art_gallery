import React from 'react';

const image = props => {
    return (
        <figure className='image'>
            <img className='image--style' src={'https://collectionapi.metmuseum.org/public/collection/v1/objects/1321'} alt={'canvas image ma fren'}/>
        </figure>
    );
};

export default image;