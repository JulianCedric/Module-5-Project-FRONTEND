import React from 'react';
import TodoListContainer from './TodoListContainer';
import TodoForm from './TodoForm';

let todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

class TodoApp extends React.Component {



    constructor (props) {
      console.log(props)
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }
    render() {
      console.log(this.props.initItems)
      console.log(todoItems)
      return (

          <div id="main">
            <TodoListContainer items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
            <TodoForm addItem={this.addItem} />
          </div>

      );
    };
  };
   
  export default TodoApp;