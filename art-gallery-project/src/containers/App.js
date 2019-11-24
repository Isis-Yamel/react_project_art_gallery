import FunFacts from '.././components/fun-facts';
import NavigationBar from './Navigation-bar';
import React, { Component, Fragment } from 'react';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/'>
        <Fragment>
          <header className='header'>
            <h1 className='head_style'>The Met</h1>
            <NavigationBar/>
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
