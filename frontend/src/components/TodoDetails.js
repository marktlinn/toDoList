import React from 'react'

const TodoDetails = ({todo}) => {
    return (
        <div className="todo-details">
            <h4>{todo.title}</h4>
            <p><strong>Description: </strong> {todo.description}</p>
            <p><strong>Created: </strong> {todo.createdAt}</p>
            {todo.toFinishBy && <p><strong>Finish By: </strong>{todo.toFinishBy}</p>}
        </div>    
    )
}

export default TodoDetails