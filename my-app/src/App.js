import React, { Component } from 'react';
import Ninjas from './nesting';
import AddNinja from './addninja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Liz', age: 25, belt: 'black', id: 1},
      { name: 'Chris', age: 25, belt: 'green', id: 2},
      { name: 'Revenge', age: 1, belt: 'white', id: 3}
      
      ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
      
    });
    this.setState({
      ninjas:  ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    
  }
  render() {
    return (
      <div className="App">
         <h1>My first React app!</h1>
         <p>Welcome :B</p>
         <Ninjas deleteNinja={this.deleteNinja={this.state.ninjas}/>
         <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
