import React, { Component } from 'react';
import Ninjas from './nesting';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>My first React app!</h1>
         <p>Welcome :B</p>
         <Ninjas />
      </div>
    );
  }
}

export default App;
