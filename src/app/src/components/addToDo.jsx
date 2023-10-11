import React, { useState } from 'react';

const AddTodo = ({ addTodoItem }) => {
  const [currentTodo, setCurrentTodo] = useState('');

  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = () => {
    addTodoItem(currentTodo);
  };

  return (
    <div>
      <h1>Create a ToDo</h1>
      <form>
        <div>
          <label htmlFor="todo">ToDo: </label>
          <input value={currentTodo} onChange={handleTodoChange} type="text" />
        </div>
        <div style={{ marginTop: '5px' }}>
          <button onClick={handleAddTodo}>Add ToDo!</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
