import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function App() {
  const [todoList, setToDoList] = useState([]);
  const [err, setErr] = useState("");
  const [currentTodo, setCurrentTodo] = useState("");

  const getTodoList = () => {
    axios.get('http://localhost:8000/todos/').then((result) => {
      if(result.status === 200) {
        setToDoList(result.data)
      }
    }).catch((err) => {
      setErr(err)
    });
  }

  const addTodoItem = () => { 
      axios.post('http://localhost:8000/todos/', {
        todo: currentTodo
      }).then((result) => {
        if(result.status === 200) {
          window.alert("Todo Added Successfully!!!")
          getTodoList();
        }
      }).catch((err) => {
        setErr(err)
      });
  };

  useEffect(() =>{
    getTodoList();
  },[])

  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        {err ? <p> {err} </p> : <></>}
        { todoList.length === 0 ? <p>No Todo Added as of now!</p>: 
          todoList.map((todo, index) => {
          return <li key={index}> {todo} </li>
        })}
      </div>
      <div>
        <h1>Create a ToDo</h1>
        <form>
          <div>
            <label for="todo">ToDo: </label>
            <input value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} type="text" />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button onClick={addTodoItem}>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
