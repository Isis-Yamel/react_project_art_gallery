import { NavLink } from 'react-router-dom';
import React, { Fragment } from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <Fragment>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/search/'exact>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-favorite/'>My Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to='/fun-facts/'>Fun facts</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavBar;