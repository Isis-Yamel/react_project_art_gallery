import React, { Component, Fragment } from 'react';
import Logo from '../assets/logo.png'
import './App.css';
import Canvas from './canvas/canvas'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navBar/navbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/'>
        <Fragment>
          <header className='header header_style--back'>
            <div className='background_style'>
              <img src={Logo} className='header_style--logo' alt="canvas logo" />
            </div>
            <NavBar/>
          </header>
          <main>
            <Canvas/>
          </main>
          <footer>
            <p>All rights reserved</p>
          </footer>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
