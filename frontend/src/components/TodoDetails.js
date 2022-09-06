import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext';

// Date formatting function
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';
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
            <p><strong>Created: </strong> {formatDistanceToNow(new Date(todo.createdAt), {addSuffix: true})}</p>
            {todo.toFinishBy && <p><strong>Finish By: </strong>{format(new Date(todo.toFinishBy), 'E-do-MMM-yyyy')}</p>}
            <button className='deleteBtn' onClick={deleteClick}>Delete</button>
        </div>    
    )
}

export default TodoDetails