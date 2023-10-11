import './App.css';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import TodoList from './components/toDoList';
import AddTodo from './components/addToDo';
import { getTodo, addTodo } from './api/api';

export function App() {
  const [todoList, setToDoList] = useState([]);
  const [err, setErr] = useState("");

  const getTodoList = () => {
    getTodo()
    .then((result) => {
      if (result.status === 200) {
        setToDoList(result.data);
      } else {
        setErr("Something went wrong!");
      }
    })
    .catch((error) => {
      setErr(error);
    });
  }

  const addTodoItem = (currentTodo) => { 
    addTodo(currentTodo)
      .then((result) => {
        if (result.status === 200) {
          window.alert("Item Added Successfully!");
          getTodoList();
        } else {
          setErr("Something went wrong!");
        }
      })
      .catch((error) => {
        setErr(error);
      });
      //   todo: currentTodo
      // }).then((result) => {
      //   if(result.status === 200) {
      //     window.alert("Todo Added Successfully!!!")
      //     getTodoList();
      //   }
      // }).catch((err) => {
      //   setErr(err)
      // });
  };

  useEffect(() =>{
    getTodoList();
  },[])

  return (
    <div className="App">
      <TodoList todoList={todoList} err={err} />
      <AddTodo addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;
