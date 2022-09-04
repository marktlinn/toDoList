import React from "react";
import { createContext, useReducer } from "react";
export const TodosContext = createContext()

export const todosReducer = (state, action) => {
    switch(action.type){
        case 'SET_TODOS':
            return {
                todos: action.payload
            }
        case 'CREATE_TODOS': 
            return {
                todos: [action.payload, ...state.todos]
            }
        default:
            return state;
    }
}

export const TodosContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(todosReducer, {
        todos: null
    })
    return (
    <TodosContext.Provider value={{...state, dispatch}}>
        {children}
    </TodosContext.Provider>
    )
}