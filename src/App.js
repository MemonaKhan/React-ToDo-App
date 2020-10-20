import React from 'react';
import './App.css';
import firebase from './config/firebase'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      value: "",
    }
  }
  componentDidMount() {
    firebase.database().ref("todos").on("value", snapshot => {
      let todos = [];
      snapshot.forEach(snap => {
        // snap.val() is the dictionary with all your keys/values from the 'students-list' path
        todos.push(snap.val());
        // todos.push({             Can also do this
        //   title:snap.val().title,
        //   edit: snap.val().edit
        // });
        console.log(todos);
      });
      // this.setState({ todos: todos }); Can do this but we have another property 'value ' here
      this.setState({
        todos: todos,
        value: ""
      })
    });
  }
  addItem = () => {
    let item = { title: this.state.value, edit: false };
    firebase.database().ref('/').child('todos').push(item);

    this.setState({
      todos: [...this.state.todos, item],
      value: ""
    })
  }
  changeEdit = (index, condition) => {
    if (condition) {
      this.state.todos[index].edit = true;
    }
    else {
      this.state.todos[index].edit = false;
    }
    this.setState({
      todos: this.state.todos
    })
  }
  updateToDo = (item, index) => {
    this.state.todos[index].title = item.target.value;
    this.setState({
      todos: this.state.todos,
    })
  }

  deleteToDo = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    })
  }
  deleteAllTodos = () => {
    this.setState({
      todos: [],
      value: ""
    })
  }
  render() {
    let { todos, value } = this.state;
    return (
      <div>
        <input name="todo" type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder="Enter what to do" />
        <button onClick={this.addItem}>Add Item</button>
        <button onClick={this.deleteAllTodos}>Delete All Items</button>
        <ul>
          {this.state.todos.map((v, i) => {
            return <li key={i}>
              {v.edit ?
                <input type="text" value={v.title} onChange={(e) => this.updateToDo(e, i)} />
                :
                v.title}
              {v.edit ?
                <button onClick={() => this.changeEdit(i, false)}>Update</button>
                :
                <button onClick={() => this.changeEdit(i, true)}>Edit</button>}
              <button onClick={() => this.deleteToDo(i)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;
