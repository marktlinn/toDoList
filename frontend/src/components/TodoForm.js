import React from 'react';
import { useState } from "react"

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [toFinishBy, setToFinishBy] = useState('');
    // const [completed, setCompleted] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const todo = {title, description,toFinishBy}

        const response = await fetch('/api/todo', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            setError(null);
            setTitle('');
            setDescription('');
            setToFinishBy('');
            // setCompleted(false);
            setError(null)
            console.log('Todo Added');
        }
    }

    return(
        <form  className="create" onSubmit={handleSubmit}>
            <h3>Add A New Todo</h3>

            <label>Todo Title:</label>
            <input 
            type="text"
            onChange={e=> setTitle(e.target.value)}
            value ={title}
             />

            <label>Description:</label>
            <textarea 
            type="text"
            onChange={e=> setDescription(e.target.value)}
            value={description}
            >
            </textarea>

            <label>To Finish By:</label>
            <input 
            type="date"
            onChange={e=> setToFinishBy(e.target.value)}
            value ={toFinishBy}
             />

            {/* <select 
            onChange={e=> setCompleted(e.target.value)}
            value={completed}
            >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
            </select> */}

            <button>Add Todo</button>

            {error && <div className="form-error-msg">{error}</div>}
        </form>

    )
}

export default TodoForm;