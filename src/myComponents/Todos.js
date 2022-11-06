import React from 'react'
import TodoItem from '../myComponents/TodoItem'

const Todos = (props) => {
    const myStyle = {
        minHeight : "70vh",
        margin : "40px auto"
    }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my-3'>My Todo List</h3>
      {props.todos.length===0 ? "No Todos to display" : 
      props.todos.map((todo)=>{
            return(
            <>
            <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
            <hr />
            </>
            )
      })
      }
    </div>
  )
}

export default Todos
