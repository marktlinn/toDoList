import { useState } from 'react';
import { useAuthContext } from './useAuthContext'

export const useSignup =  () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    
    const signup = async (email, password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://todo-list-app-0s3a.onrender.com/api/auth/signup', {
            method: 'POST',
            mode:'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setIsLoading(false)
            // save user to localStorage: JSON WebToken and user
            localStorage.setItem('user', JSON.stringify(json))
            console.log('signup complete: new user created')
            // update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}