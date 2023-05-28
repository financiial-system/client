import { ReactNode, createContext  } from "react";
import api from "../services";

interface IUserProviderProps {
    children: ReactNode,
}

export const UserContext = createContext({})

export const UserProvider = ({ children }: IUserProviderProps) => {

    async function createUser(data: object){
        try {
            const res = await api.post('/users', data);
            return res;
        } catch (err) {
            return err
        }
    }

    async function createLogin(data: object) {
        try {
            const res = await api.post('/login', data)
        } catch (err) {
            return err
        }
    }

    async function createTransactions(data: object) {
        try {
            const res = await api.post('/transactions', data)
        } catch (err) {
            return err
        }
    }

    async function listTransactions() {
        try {
            const res = await api.get('/transactions')
        } catch (err) {
            return err
        }
    }

    async function deleteTransactions(id: number) {
        try {
            const res = await api.delete(`/transactions/${id}`)
        } catch (err) {
            return err
        }
    }

    return(
        <UserContext.Provider
            value={{createUser, createLogin, createTransactions, listTransactions, deleteTransactions}}
        >
            {children}
        </UserContext.Provider>
    )
}
