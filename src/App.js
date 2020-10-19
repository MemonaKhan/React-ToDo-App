import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: ["work", "eat", "travel"],
      value:""
    }
  }
  addItem=()=>{
    this.setState({
      todos: [...this.state.todos,this.state.value],
      value:""
    })
  }



  render() {
    let {todos, value} = this.state;
    return (
      <div>
        
        <input name="todo" type="text" value={value} onChange={(e)=>this.setState({value: e.target.value})} placeholder="Enter what to do" />
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {this.state.todos.map((v, i) => {
            return <li key={i}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
