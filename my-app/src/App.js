import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './Addtodo'
// import Ninjas from './nesting';
// import AddNinja from './addninja';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some chocolate'},
      {id: 2, content: 'do homework'}
      ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
    
  }
  render() {
    return (
      <div className="todo-app  container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/> 
      </div>
      );
    }
  }
  export default App;
  
  
  
  
  
  
  
  // state = {
  //   ninjas : [
  //     { name: 'Liz', age: 25, belt: 'black', id: 1},
  //     { name: 'Chris', age: 25, belt: 'green', id: 2},
  //     { name: 'Revenge', age: 1, belt: 'white', id: 3}
      
  //     ]
  // }
  // addNinja = (ninja) => {
  //   ninja.id = Math.random();
  //   let ninjas = [...this.state.ninjas, ninja]
  //   this.setState({
  //     ninjas: ninjas
      
  //   });
  //   this.setState({
  //     ninjas:  ninjas
  //   })
  // }
  // deleteNinja = (id) => {
  //   let ninjas = this.state.ninjas.filter(ninja => {
  //     return ninja.id !== id
  //   });
  //   this.setState({
  //     ninjas: ninjas
  //   })
  // }
  
  // componentDidMount(){
  //   console.log('Component mounted');
  // }
  // componentDidUpdate(prevProps, prevState){
  //   console.log('component updated');
  //   console.log(prevProps, prevState);
  // }
//   render() {
//     return (
//       <div className="App">
//         // <h1>My first React app!</h1>
//         // <p>Welcome :B</p>
//         // <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
//         // <AddNinja addNinja={this.addNinja}/>
//       </div>
//     );
//   }
// }

// export default App;
