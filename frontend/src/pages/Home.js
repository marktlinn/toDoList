import { useEffect } from "react"
import React from 'react'
import { useTodosContext } from "../hooks/useTodosContext"
import { useAuthContext } from '../hooks/useAuthContext'

//components
import TodoForm from "../components/TodoForm"
import TodoDetails from '../components/TodoDetails'

const Home = ({ clicked, toggleMenu, windowSize }) => {
    const {todos, dispatch} = useTodosContext()
    const { user } = useAuthContext();
    useEffect(()=>{
        const fetchTodos = async () => {
            const response = await fetch('/api/todo', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok) {
                dispatch({type: 'SET_TODOS', payload: json})
            }
        }
        if(user){
            fetchTodos()
        }
    }, [dispatch, user])

    return (
        <div className="home">
            <div className="todos">
            {todos && todos.map((todo) => {
                return < TodoDetails key={todo._id} todo={todo} />
            })}
            </div>
            < TodoForm 
                windowSize={windowSize}
                toggleMenu={toggleMenu}
                clicked={clicked} 
            />
        </div>
    )
}

export default Home