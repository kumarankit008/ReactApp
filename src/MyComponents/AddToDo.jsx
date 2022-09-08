import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddTodo(props){
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handleDescChange(e){
        setDesc(e.target.value);
    }

    function submit(e){ 
          e.preventDefault();
          if(!title || !desc){
            alert("Title or description cannot be blank");
          }
          else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
          }
    }

    

    return(

        <div className="container my-3">
            <h3>Add a Todo</h3>
        <Form onSubmit={submit}>
            <Form.Group className="mb-3">
                <Form.Label>Title of Todo</Form.Label>
                <input type="text"  value={title} onChange={handleTitleChange} placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description of Todo</Form.Label>
                <textarea type="text" value={desc} onChange={handleDescChange} placeholder="Description" />
            </Form.Group>
            <Button variant="btn btn-sm btn-success" type="submit">
                Add
            </Button>
        </Form>
        </div>
    );
}

export default AddTodo;