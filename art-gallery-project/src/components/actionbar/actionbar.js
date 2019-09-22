import React from 'react';
import './actionbar.css';

const icons = () => {
    return (
        <ul className='icon'>
            <li>
                <i class="fas fa-heart icon--hov"></i>
            </li>
            <li>
                <i class="fas fa-share-alt icon--hov"></i>
            </li>
            <li>
                <i class="fas fa-feather icon--hov"></i>
            </li>
            <li>
                <i class="fab fa-trello icon--hov"></i>
            </li>
        </ul>
    )
}

export default icons;