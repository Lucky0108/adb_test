import axios from "axios";

export const getTodo = () => {
  return axios.get("http://localhost:8000/todos/");
};

export const addTodo = (currentTodo) => {
  return axios.post("http://localhost:8000/todos/", {
    todo: currentTodo,
  });
};
