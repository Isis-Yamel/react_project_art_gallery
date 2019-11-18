import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import FunFacts from '../../components/fun-facts/funFacts';
import Search from '../search/search';
import NavBar from '../nav-bar/navbar';
import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/'>
        <Fragment>
          <header className='header'>
            <h1 className='head_style'>The Met</h1>
            <NavBar/>
          </header>
          <main>
            <Switch>
                <Route path='/search' exact component={Search}/>
                <Route path='/my-favorite'/>
                <Route path='/fun-facts' component={FunFacts}/>
            </Switch>
          </main>
          <footer>
            <p className='footer_style'>All rights reserved (Isis was here!)</p>
          </footer>
        </Fragment>
      </BrowserRouter>
    );
  };
};

export default App;
