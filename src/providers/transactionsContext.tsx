import { createContext, useState } from "react";
import api from "../services";
import { IProviderTransactions } from '../interfaces/transactions'

const INITIAL_STATE:any = {}

export const TransactionsContext = createContext(INITIAL_STATE)

export const TransactionsProvider = ({ children }: IProviderTransactions) => {
    const [token, setToken] = useState([])
    const [transactions, setTransactions] = useState<any>([])
    
    async function createTransactions(data: any) {
        try {
            const res = await api.post('/transactions', data, {
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return res
        } catch (err) {
            return err
        }
    }

    async function listTransactions() {
        try {
            const res = await api.get('/transactions')
            return setTransactions(res.data.transactions)

        } catch (err) {
            return err
        }
    }

    async function deleteTransactions(id: number) {
        try {
            const res = await api.delete(`/transactions/${id}`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            return res
        } catch (err) {
            return err
        }
    }

    return(
        <TransactionsContext.Provider
            value={{createTransactions, listTransactions, deleteTransactions, setToken, transactions}}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
