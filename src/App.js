import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(""),
   [todos, setTodos] = useState([])

  const add = () => {
    return setTodos([...todos, text])
  }

  const deleteTodo = (i) => {
    const updatedTodos = todos.filter((todo, index) => index !== i)
    console.log("TCL: deleteTodo -> updatedTodos", updatedTodos)
    return setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <h1>10Min Todo App</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>+</button>
      <ol>
      {todos.map((todo, i) => {
        return (<>
        <li key={i} >{todo}</li>
        <button onClick={() => deleteTodo(i)}>-</button>
        </>)
      })}
      </ol>
    </div>
  );
}

export default App;
