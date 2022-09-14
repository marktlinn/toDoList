import React from 'react';
import { useState } from "react"
import { useTodosContext } from '../hooks/useTodosContext';

const TodoForm = ( {clicked, toggleMenu, windowSize}) => {
    const {dispatch} = useTodosContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [toFinishBy, setToFinishBy] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const todo = {title, description, toFinishBy}

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
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setError(null);
            setTitle('');
            setDescription('');
            setToFinishBy('');
            setError(null);
            setEmptyFields([]);
            dispatch({type: "CREATE_TODO", payload: json});
        }
    }

    const resetSideBar = () => {
        if(windowSize< '600') {
            toggleMenu()
        }
    }

    return(
        <form className={clicked === true? 'form-active todo-form' : 'form-inactive todo-form'} onSubmit={handleSubmit}>
            <h3>Add A New Todo</h3>

            <label>Todo Title* :</label>
            <input 
            type="text"
            className={emptyFields.includes('Title')? 'error-text' : ''}
            placeholder={emptyFields.includes('Description')? 'Please fill this field' : ''}
            onChange={e=> setTitle(e.target.value)}
            value ={title}
            // required
             />

            <label>Description*:</label>
            <textarea 
            type="text"
            className={emptyFields.includes('Description')? 'error-text' : ''}
            placeholder={emptyFields.includes('Description')? 'Please fill this field' : ''}
            onChange={e=> setDescription(e.target.value)}
            value={description}
            // required
            >
            </textarea>

            <label>To Finish By:</label>
            <input 
            type="date"
            onChange={e=> setToFinishBy(e.target.value)}
            value ={toFinishBy}
             />

            <button
            onClick={resetSideBar}
            >Add Todo</button>
            {error && <div className="form-error-msg">{error}</div>}
        </form>
    )
}

export default TodoForm;