import React from 'react';
import './search.css';

const search = () => {
    return (
        <div className='search--style'>
            <input placeholder='Search here!' className='search_style--input' name='nav-search' type='text'/>
            <button className='search_style--button'>Search</button>
        </div>
    );
};

export default search;