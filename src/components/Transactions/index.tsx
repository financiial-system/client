import { Container, Wrapper, Header,  Transactions, Text, Type } from './styles'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle, BsFillTrashFill } from 'react-icons/bs'
import { datas } from '../../mocks/transactions'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'

export default function transactions() {
  const { listTransactions } = useContext(TransactionsContext)
 
  const handleDeleteTransactions  = (id:number) => {
    //console.log(id)
    //const result = transactions.filter(transactions.id === id){}
    //toast.successs('✔️ Transação deletada!')
  }
  
  return (
    <Container>
      <Wrapper>
        <Header>
          <Text>Descrição</Text>
          <Text>Valor</Text>
          <Text>Tipo</Text>
        </Header>
        {datas.map((data,index)=>{
        return <Transactions key={index}>
          <Text>{data.description}</Text>
          <Text>R$ {data.amount}</Text>

            <Type>
              {data.type === 'Entradas' ? <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/> : <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/> }
              <BsFillTrashFill onClick={() => handleDeleteTransactions(data.id)}></BsFillTrashFill>
            </Type>
          </Transactions>
        })}
      </Wrapper>
    </Container>
  )
}
