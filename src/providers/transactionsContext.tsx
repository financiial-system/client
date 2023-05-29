import { createContext } from "react";
import api from "../services";
import { IProviderTransactions } from '../interfaces/transactions'

const INITIAL_STATE:any = {}

export const TransactionsContext = createContext(INITIAL_STATE)

export const TransactionsProvider = ({ children }: IProviderTransactions) => {

    async function createTransactions(data: any) {
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
