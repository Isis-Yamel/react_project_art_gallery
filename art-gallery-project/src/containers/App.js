import React, { Component } from 'react';
import Canvas from '../assets/canvas.png'
import './App.css';
import Search from '../components/search/search';
import SearchCanvas from '../components/canvas/canvas'

class App extends Component {

  state = {
    canvasData: {}
  }

  componentDidMount() {
    this.searchCanvas();
  }

  searchCanvas = () => {
      fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/2211')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          canvasData: data
        });
        let output = '<h2>Canvas</h2>'
        //  {data.primaryImageSmall}//{data.title}//{data.primaryImageSmall}//{data.creditLine}
      })
  }


  render() {
    return (
      <div className='header'>
        <div className='header_style--back background_style'>
          <img src={Canvas} className='header_style--logo' alt="canvas logo" />
        </div>
        <Search/>
        <SearchCanvas
          data={this.state.canvasData}
        />
      </div>
    );
  }
}

export default App;
