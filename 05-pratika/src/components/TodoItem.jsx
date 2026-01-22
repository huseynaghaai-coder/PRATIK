import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
