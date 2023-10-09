import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])


  function handleSubmit(e){
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className='form-row'>
          <label htmlFor="item">New Item</label>
          <input 
            value = {newItem}
            onChange={e=>setNewItem(e.target.value)}
            type="text" 
            id="item"
          />
        </div>
        <button className='btn'>Add Item</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
          {todos.map(todo => {
            return(
            <li key={todo.id}>
              <label>
                <input type="checkbox"/>
                {todo.title}
              </label>
              <button className='btn btn-danger'>Delete</button>
            </li>
            )
          })}
      </ul>
    </>
  )
}

export default App
