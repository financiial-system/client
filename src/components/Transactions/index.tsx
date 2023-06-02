import { Container, Wrapper, Header,  Transactions, Text, Type } from './styles'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle, BsFillTrashFill } from 'react-icons/bs'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'

export default function transactions() {
  const { transactions, deleteTransactios } = useContext(TransactionsContext)
  const userId = localStorage.getItem("userId")
  const datas = transactions.filter((transactions:any) => transactions.user?.id === userId)

  const handleDeleteTransactions  = (id:number) => {
    //const res = await deleteTransactions(id)
    //if(res.name !== "AxiosError"){}
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
        {datas.map((data:any,index:any) => {
        return <Transactions key={index}>
          <Text>{data.description}</Text>
          <Text>R$ {data.amount}</Text>

            <Type>
              {data.type === 'Entrada' ? <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/> : <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/> }
              <BsFillTrashFill onClick={() => handleDeleteTransactions(data.id)}></BsFillTrashFill>
            </Type>
          </Transactions>
        })}
      </Wrapper>
    </Container>
  )
}
