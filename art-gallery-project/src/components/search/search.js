import React from 'react';
import './search.css';

const search = () => {
    return (
        <section className='search--style'>
            <input label='search' placeholder='Search here!' className='search_style--input' name='nav-search' type='text'/>
            <button className='search_style--button'>Search</button>
        </section>
    );
};

export default search;