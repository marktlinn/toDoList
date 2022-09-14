import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const authContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('error with useAuthContext, make sure it is inside an AuthContextProvider')
    }

    return context
}