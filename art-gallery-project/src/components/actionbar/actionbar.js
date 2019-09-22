import React from 'react';
import './actionbar.css';

const icons = () => {
    const icons = [
        'fas fa-heart icon--hov',
        'fas fa-share-alt icon--hov',
        'fas fa-feather icon--hov',
        'fab fa-trello icon--hov'
    ];

    const renderIcon = () => {
        return icons.map ((icon, index) => {
            return (
                <li key={index}>
                    <i className={icon}></i>
                </li>
            );
        });
    };

    return (
        <ul className='icon'>
            {renderIcon()}
        </ul>
    );
};

export default icons;