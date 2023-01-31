import { Container, HeaderTransactions, Text } from './styles'
import Transactions from '../Transactions'

export default function ListTransactions() {
  return (
    <Container>
      <HeaderTransactions>
        <Text>Descrição</Text>
        <Text>Valor</Text>
        <Text>Tipo</Text>
      </HeaderTransactions>
      <Transactions/>
    </Container>
  )
}
