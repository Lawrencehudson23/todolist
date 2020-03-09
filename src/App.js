import React, { useState ,useRef, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {v4 as uuid} from 'uuid';
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      name: "Get Python black belt",
      complete:false
    },    
    {
      id:2,
      name: "Get Java red belt",
      complete:false
    },
    {
      id:3,
      name: "Get Mern pink belt",
      complete:false
    }
  ]);
  const todoNameRef = useRef()
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=>todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function deleteTodo(id){
    const newTodos = todos.filter(todo => todo.id !==id)
    console.log(id);
    console.log(newTodos);
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name ==='') return
    setTodos(preTodos => {
      return [...preTodos,{id:uuid(), name:name,complete:false}]
    })
    
    todoNameRef.current.value = null
  }

  function handleClearTodo(e){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <h2>-------------------</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo} className="btn btn-primary btn-sm">Add Todo</button>
      <button onClick={handleClearTodo} className="btn btn-success btn-sm">Clear Completed Todos</button>
      <h4 style={{color:'purple'}}> {todos.filter(todo => !todo.complete).length} left to do</h4>
    </div>
  );
}

export default App;
