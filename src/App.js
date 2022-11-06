import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import About from './myComponents/About';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("i am on Delete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title, desc)=>{
      // console.log(title);
      // console.log(desc);
      let sno;
      if(todos.length-1){
        sno = 0;
      }else{
        sno = todos[todos.length-1].SNo+1;
      }

      const myTodo = {
        sno : sno,
        title : title,
        desc : desc
      }
      setTodos([...todos, myTodo]);
  }
  const [todos, setTodos] = useState([initTodo])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="TodoList" searchBar = {true} />  
    <Routes>
          <Route exact path="/" element={
            
            <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos = {todos} onDelete = {onDelete}/>
            </>
            
          }>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
