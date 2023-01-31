import { Wrapper } from "../Dashboard/styles"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import AddInputAndOutput from "../../components/AddInputAndOutput"
import ListTransactions from '../../components/ListTransactions'

export default function index() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Cards/>
        <AddInputAndOutput/>
        <ListTransactions/>
      </Wrapper>
    </>
  )
}
