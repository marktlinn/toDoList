import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext';

const TodoDetails = ({todo}) => {
    const {dispatch} = useTodosContext();

    const deleteClick = async () => {
        const response = await fetch('api/todo/' + todo._id, {
            method: 'DELETE'
        })
        console.log('deleted', response)
        const json = await response.json();
        console.log(json)
        if(response.ok) {
            dispatch({type: 'DELETE_TODO', payload: json});
        }
    }

    return (
        <div className="todo-details">
            <h4>{todo.title}</h4>
            <p><strong>Description: </strong> {todo.description}</p>
            <p><strong>Created: </strong> {todo.createdAt}</p>
            {todo.toFinishBy && <p><strong>Finish By: </strong>{todo.toFinishBy}</p>}
            <button className='deleteBtn' onClick={deleteClick}>Delete</button>
        </div>    
    )
}

export default TodoDetails