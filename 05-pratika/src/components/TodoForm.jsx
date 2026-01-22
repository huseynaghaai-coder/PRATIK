import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input.trim());
            setInput('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a new todo..."
            />
            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
