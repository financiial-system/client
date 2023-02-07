import { Wrapper } from "../Dashboard/styles"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import Form from "../../components/Form"
import Transactions from "../../components/Transactions"

export default function index() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Cards/>
        <Form/>
        <Transactions/>
      </Wrapper>
    </>
  )
}
