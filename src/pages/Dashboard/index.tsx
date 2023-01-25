import { Wrapper } from "../Dashboard/styles"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import AddInputAndOutput from "../../components/AddInputAndOutput"

export default function index() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Cards/>
        <AddInputAndOutput/>
      </Wrapper>
    </>
  )
}
