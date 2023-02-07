import { Container, Wrapper, Header,  Transactions, Text, IconContainer } from './styles'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle, BsFillTrashFill } from 'react-icons/bs'
import { datas } from '../../mocks/transactions'

export default function transactions() {

  return (
    <Container>
      <Wrapper>
        <Header>
          <Text>Descrição</Text>
          <Text>Valor</Text>
          <Text>Tipo</Text>
        </Header>
        {datas.map((data)=>{
        return <Transactions>
          <Text>{data.description}</Text>
          <Text>R$ {data.amount}</Text>
        
            <IconContainer>
              {data.title === 'Entradas' ? <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/> : <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/> }
              <BsFillTrashFill></BsFillTrashFill>
            </IconContainer>
          </Transactions>
        })}
      </Wrapper>
    </Container>
  )
}
