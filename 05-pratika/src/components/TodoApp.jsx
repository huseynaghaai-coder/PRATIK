import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.length === 0 ? (
          <div className="empty">There is nothing yet. Add a todo.</div>
        ) : (
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        )}
      </div>
    </div>
  );
};

export default TodoApp;
