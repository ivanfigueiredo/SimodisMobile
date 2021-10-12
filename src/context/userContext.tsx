import React, { createContext, ReactNode, useState } from 'react'
import { API } from '../services/api'

type User = {
    id: number,
    nome: string,
    senha: string,
    matricula: number,
    curso: string,
}

type UserInitialData = {
    nome: string,
    senha: string,
    matricula: number,
    curso: string,
}


type UserContextData = {
    user: User,
    isLoading: boolean,
    signIn: any,
    createUser: any,
}

type AuthProviderProps = {
    children: ReactNode
}
export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({children} :  AuthProviderProps) =>{
    const [user, setUser] =  useState({} as User)
    const [isLoading, setLoading] = useState(false)

    const createUser = async (userData: UserInitialData) => {
        const savedUser = (await API.post('/user/signup', userData)).data as User
        setUser(savedUser)
    }

    const signIn = async () => {
        setLoading(true)
        const savedUser = (await API.post('/user/signin')).data
        setUser(savedUser)
        setLoading(false)
    }

    return (
        <UserContext.Provider value={{
            user,
            isLoading,
            createUser,
            signIn
        }}>
            {children}
        </UserContext.Provider>
    )
}