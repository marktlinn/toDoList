import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext';

// Date formatting function
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';
//fontAwesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';

const TodoDetails = ({todo}) => {
    const {dispatch} = useTodosContext();

    const deleteClick = async () => {
        const response = await fetch('api/todo/' + todo._id, {
            method: 'DELETE'
        })
        console.log('deleted', response)
        const json = await response.json();
        if(response.ok) {
            dispatch({type: 'DELETE_TODO', payload: json});
        }
    }

    const updateCompleted = async (e) => {
        const response = await fetch(`api/todo/${todo._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: true})
        })
        const json = await response.json();
        if(response.ok){
            dispatch({type: 'UPDATE_TODO', payload: json})
        }
    }

    return (
        <div className="todo-details">
            <h4>{todo.title}</h4>
            <p><strong>Description: </strong> {todo.description}</p>
            <p><strong>Created: </strong> {formatDistanceToNow(new Date(todo.createdAt), {addSuffix: true})}</p>
            {todo.toFinishBy && <p><strong>Finish By: </strong>{format(new Date(todo.toFinishBy), 'E-do-MMM-yyyy')}</p>}
            {!todo.completed && <button className='updateBtn' onClick={updateCompleted} value={todo.completed} ><FontAwesomeIcon className='completed' icon={faCheck} /></button>}
            <button className='deleteBtn' onClick={deleteClick}><FontAwesomeIcon className="fa-trash" icon={faTrash} /></button>
        </div>    
    )
}

export default TodoDetails