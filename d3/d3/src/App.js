import React, { Component } from 'react';
import BarChart from './BarChart';
import WorldMap from "./WorldMap"
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>D3 Practice</h2>
        </div>
        <div>
          <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
        </div>
        <div>
          <WorldMap/>
        </div>
      </div>
    )
  }
}

export default App;
