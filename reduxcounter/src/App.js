import React, { Component } from 'react';
import './App.css';
import { createStore} from 'redux';

const rootReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD':
      return state.concat([action.data])
    case 'SUBTRACT':
      return state.concat(action.data)
    default:
      return state
  }
}

let store = createStore(rootReducer)

class App extends Component {

  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState())
    })
  }

  add() {
    store.dispatch({type: 'ADD', data: 'Clicked that add button what what'})
  }

  subtract() {
    store.dispatch({type: 'SUBTRACT', data: 'ohhh toook one away'})
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Redux Counter</h1>
        <button onClick={this.add}>Count up!</button>
        <button onClick={this.subtract} >Count down.</button>
      </div>
    );
  }
}

export default App;
