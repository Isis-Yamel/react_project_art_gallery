import React from 'react';
import './actionbar.css';

const actionBar = props => {

    return (
        <div className='bar--align'>
            <button onClick={(event) => props.addFavoriteHandler(event, props.identifier)} className='bar_style'>
                <i className='fas fa-heart bar_style--hov'></i>
            </button>
            <button className='bar_style'>
                <i className='fas fa-share-alt bar_style--hov'></i>
            </button>
            <button className='bar_style'>
                <i className='fas fa-feather bar_style--hov'></i>
            </button>
        </div>
    );
};

export default actionBar;