import { Container, Wrapper, Header,  Transactions, Text, Type } from './styles'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle, BsFillTrashFill } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'
import { toast } from 'react-toastify'
import api from '../../services'

export default function transactions() {
  const { transactions, listTransactions, deleteTransactions } = useContext(TransactionsContext)
  const userId = localStorage.getItem("userId")
  const datas = transactions.filter((transactions:any) => transactions.user?.id === userId)
  const [testes, setTestes] = useState([])

  async function handleDeleteTransactions(id:number){
    const res = await deleteTransactions(id)

    if(res.name !== "AxiosError"){
      toast.success('Transação deletada!')
      listTransactions()
    }
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
              <BsFillTrashFill onClick={() => handleDeleteTransactions(data.id)} style={{'cursor':'pointer'}}></BsFillTrashFill>
            </Type>
          </Transactions>
        })}
      </Wrapper>
    </Container>
  )
}
