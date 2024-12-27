import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title: "sleep",
    done: "no",
  }]);

  function addTodo() {
    setTodo([...todo, {
      title: document.getElementById("title").value,
      done: document.getElementById("done").value,
    }]);
    console.log(todo);
  }

  function removeTodo() {
    setTodo([])
  }

  function removeRTodo() {
    // newarry = todo
    // 0 random 
    // newarray na
    const newArray = [...todo];
    newArray.pop()
    setTodo(newArray);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="title"></input>
      <input id="done" type="text" placeholder="done"></input>
      <button onClick={addTodo}> add todo </button>
      <br />
      <button onClick={removeTodo}>clear</button>
      <br />
      <button onClick={removeRTodo}>clear 1</button>
      <br />
      {JSON.stringify(todo)}
    </div>
  )
}

export default App
