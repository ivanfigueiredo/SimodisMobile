import { useContext } from "react";
import { UserContext } from '../context/userContext'


export const useUser = () => {
    const context = useContext(UserContext)
    return context
}