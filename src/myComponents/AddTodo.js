import React, { useState } from 'react'

const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit=(e)=>{
    e.preventDefault()
    if(!title || !desc){
        alert("Title or Description cannot be empty");
    }else{
        props.addTodo(title, desc);
        settitle("");
        setdesc("");
    }      
  }
  return (
    <div className='container my-3'>
      <form onSubmit={submit}>
      <h3>Add a Todo</h3>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
