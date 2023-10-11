import React from "react";

const TodoList = ({ todoList, err }) => {
  return (
    <div>
      <h1>List of TODOs</h1>
      {err ? (
        <p>{err}</p>
      ) : todoList.length === 0 ? (
        <p>No Todo Added as of now!</p>
      ) : (
        todoList.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })
      )}
    </div>
  );
};

export default TodoList;
