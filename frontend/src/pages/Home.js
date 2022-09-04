import { useEffect } from "react"
import React from 'react'
import { useTodosContext } from "../hooks/useTodosContext"


//components
import TodoDetails from '../components/TodoDetails'
import TodoForm from "../components/TodoForm"

const Home = () => {
    const {todos, dispatch} = useTodosContext()

    useEffect(()=>{
        const fetchTodos = async () => {
            const response = await fetch('/api/todo')
            const json = await response.json()
            if(response.ok) {
                dispatch({type: 'SET_TODOS', payload: json})
            }
        }
        fetchTodos()
    }, [dispatch])

    return (
        <div className="home">
            <div className="todos">
            {todos && todos.map((item) => {
                return < TodoDetails key={item._id} todo={item} />
            })}
            </div>
            < TodoForm />
        </div>
    )
}

export default Home