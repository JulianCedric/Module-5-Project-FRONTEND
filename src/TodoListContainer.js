import React from 'react';
import TodoListItem from './TodoListItem';

class TodoListContainer extends React.Component {
    render () {
      console.log(this.props.items)
      let items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <ul className="list-group"> {items} </ul>
      );
    };
  };

export default TodoListContainer;