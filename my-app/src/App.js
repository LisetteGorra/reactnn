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
  render() {
    return (
      <div className="App">
         <h1>My first React app!</h1>
         <p>Welcome :B</p>
         <Ninjas ninjas={this.state.ninjas}/>
         <AddNinja />
      </div>
    );
  }
}

export default App;
