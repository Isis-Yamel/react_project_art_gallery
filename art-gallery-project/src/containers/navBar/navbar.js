import React, { Component, Fragment } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Search from '../../components/search/search';
import './navbar.css';

class NavBar extends Component {
    render () {
        return (
            <Fragment>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/search/'exact>Search</NavLink>
                        </li>
                        <li>
                            <NavLink to='/favorite/'>My Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to='/fun-facts/'>Fun facts</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/search' component={Search}/>
                </Switch>
            </Fragment>
        )
    }
}

export default NavBar;