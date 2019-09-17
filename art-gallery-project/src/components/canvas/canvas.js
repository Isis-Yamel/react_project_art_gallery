import React from 'react';
import './canvas.css';
import Actions from '../actions/actions';

const searchCanvas = (props) => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <h2>{props.data.title}</h2>
                <img className='imageStyle' src={props.data.primaryImageSmall} alt={props.data.creditLine}/>
            </div>
            <div className='container info'>
                <p>Credit:{props.data.creditLine}</p>
                <p>Artist:{props.data.artistDisplayName}</p>
                <Actions/>
            </div>
        </div>
    )
}

export default searchCanvas;