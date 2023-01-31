import { Container, Text } from './styles'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function Transactions() {
  return (
    <Container>
      <Text>Descrição: </Text>
      <Text>Valor: </Text>
      <BsArrowDownCircle></BsArrowDownCircle>
      <BsArrowUpCircle></BsArrowUpCircle>
    </Container>
  )
}
