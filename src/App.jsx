import AddToDo from "./components/AddToDo"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import ToDoList from "./components/ToDoList"
import './App.css'


function App() {
  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
//function to handle the deletion of a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
//function to handle the mrarking of a todo as completed
  const markCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  
  //function to update the original array of todos
  const handleEdit = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  //saving the todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <>
      <Header />
      <AddToDo AddToDo={setTodos} todos={todos} />
      <ToDoList todos={todos} handleDelete={handleDelete} markCompleted={markCompleted} handleEdit={handleEdit}/>
      {todos.length === 0 && <p className="text-center text-md md:text-xl text-blue-400">It's nothing here.(Cricket noises) Add something.</p>}
    </>
  )
}

export default App
