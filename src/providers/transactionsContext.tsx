import { ReactNode, createContext } from "react";
import api from "../services";

interface ITransactionsProviderProps {
    children: ReactNode,
}

export const TransactionsContext = createContext({})

export const TransactionsProvider = ({ children }: ITransactionsProviderProps) => {

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
        <TransactionsContext.Provider
            value={{createTransactions, listTransactions, deleteTransactions}}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
