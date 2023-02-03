import React from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Date formatting function
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format } from "date-fns";
//fontAwesome component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodosContext();
  const { user } = useAuthContext();

  const deleteClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      `https://todo-be-nblz.onrender.com/api/todo/${todo._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };

  const updateCompleted = async () => {
    const response = await fetch(
      `https://todo-be-nblz.onrender.com/api/todo/${todo._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_TODO", payload: json });
    }
  };

  return (
    <div className="todo-details">
      <h4 className={todo.completed ? "completed" : ""}>{todo.title}</h4>
      <p className={todo.completed ? "completed" : ""}>
        <strong>Description: </strong> {todo.description}
      </p>
      <p className={todo.completed ? "completed" : ""}>
        <strong>Created: </strong>{" "}
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      {todo.toFinishBy && (
        <p className={todo.completed ? "completed" : ""}>
          <strong>Finish By: </strong>
          {format(new Date(todo.toFinishBy), "E-do-MMM-yyyy")}
        </p>
      )}
      {!todo.completed && (
        <button
          className="updateBtn"
          onClick={updateCompleted}
          value={todo.completed}
        >
          <FontAwesomeIcon className="completed" icon={faCheck} />
        </button>
      )}
      <button className="deleteBtn" onClick={deleteClick}>
        <FontAwesomeIcon className="fa-trash" icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoDetails;
