import React, { Component } from 'react';
import Canvas from '../assets/canvas.png'
import './App.css';
import Search from '../components/search';

//methods that manage state and state
class App extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header_style--back'>
          <img src={Canvas} className='header_style--logo' alt="logo" />
        </div>
        <Search/>
      </div>
    );
  }
}

export default App;
