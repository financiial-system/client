import { Wrapper } from "../Dashboard/styles"
import Header from "../../components/Header"
import Cards from "../../components/Cards"

export default function index() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Cards/>
      </Wrapper>
    </>
  )
}
