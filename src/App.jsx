import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/Activity"
import Activity from "./components/Activity"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    number: 1,
    text: "",
    isChecked: false,
  });

  const handleInputChange = (e) => {
    const {type, value} = e.target;
    console.log("type: "+type+"; value: "+value);
    setNewTodo({...newTodo, [type]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      number: newTodo.number,
      text: newTodo.text,
      isChecked: false,
    };
    setTodos([...todos, todo]);
  };

  const handleClearDone = (e) =>{
    e.preventDefault();
    {todos
      .filter((todo) => !todo.isChecked)
      .map((todo) => (
        <Activity key={todo.id} level={todo.number}>{todo.text}</Activity>
      ))
    }
  }

  return (
    <>
      <form onChange={handleInputChange} onSubmit={handleSubmit}>
        <label>Importanza: </label>
        <input type="number" />

        <label>Descrizione: </label>
        <input type="text" />

        <button type="submit" ></button>
      </form>

      <form onSubmit={handleClearDone}>
        <label>Clear all completed tasks</label>
        <button type="submit" ></button>
      </form>

      {todos
        .map((todo) => (
          <Activity key={todo.id} level={todo.number}>{todo.text}</Activity>
        ))
      }
    </>
  )
}

export default App
