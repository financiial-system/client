import { Wrapper } from "../Dashboard/styles"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import TransactionForm from "../../components/TransactionForm"
import Transactions from "../../components/Transactions"

export default function index() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Cards/>
        <TransactionForm/>
        <Transactions/>
      </Wrapper>
    </>
  )
}
