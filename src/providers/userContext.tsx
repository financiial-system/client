import { createContext, useState } from "react";
import { IProviderUser } from "../interfaces/users"
import api from "../services";
import { toast } from "react-toastify";

const INITIAL_STATE:any = {}

export const UserContext = createContext(INITIAL_STATE)

export const UserProvider = ({ children }: IProviderUser) => {
    async function createUser(data: any){
        try {
            const res = await api.post('/users', data);
            return res
        } catch (err) {
            return err
        }
    }

    async function createLogin(data: any) {
        try {
            const res = await api.post('/login', data)
            return res
        } catch (err) {
            if(err){
                toast.error('Email ou senha inválido!')
            }
        }
    }

    return(
        <UserContext.Provider
            value={{createUser, createLogin}}
        >
            {children}
        </UserContext.Provider>
    )
}
