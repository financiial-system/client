import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMediaQuery } from "usehooks-ts"
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { BsArrowDownCircle } from 'react-icons/bs'
import { BsArrowUpCircle, BsFillTrashFill } from 'react-icons/bs'

import { Wrapper, Container, Card, CardHeader, Title, CardBody, Monetary, FormContainer, Form , FormWrapper, TransactionsContainer, TransactionsWrapper, TransactionsHeader,  Transactions, Text, Type } from "../Dashboard/styles"

import Header from "../../components/Header"
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useContext, useState } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'

export default function Dashboard() {
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isMobileL = useMediaQuery("(max-width: 425px)")
    const isTablet = useMediaQuery("(min-width: 768px)")
    const isLaptop = useMediaQuery("(min-width: 1024px)")
    const isDesktop = useMediaQuery("(min-width: 1360px)")
    const isDesktopL = useMediaQuery("(min-width: 1440px)")

    const { transactions, createTransactions, listTransactions, deleteTransactions } = useContext(TransactionsContext)
    const userId = localStorage.getItem("userId")
    const results = transactions.filter((transactions:any) => transactions.user?.id === userId)
    
    const entradas = results.filter((result:any) => result.type === 'Entrada')
    const inputs = entradas.map((item:any,i:any,array:any) => {
        if(array[i].amount){
            return item.amount
        }
    })
    const fullEntry:any = Object.values(inputs).reduce((acc:any,current:any) => acc + current,0)

    const saidas = results.filter((result:any) => result.type === 'Saída')
    const outputs = saidas.map((item:any,i:any,array:any) => {
        if(array[i].amount){
            return item.amount
        }
    })
    const fullExit:any = Object.values(outputs).reduce((acc:any,current:any) => acc + current,0)

    const total = Number(fullEntry) - Number(fullExit)

    const [checked, setChecked] = useState({input: false, output: false})

    const valuesSchema = yup.object().shape({
        description: yup.string().required("Descrição obrigatória"),
        amount: yup.string().required("Quantia obrigatória"),
    })

    type values = yup.InferType<typeof valuesSchema>

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(valuesSchema),
    });

    const onSubmit = async (data: any) => {
      if(checked.input === true){
        data['type'] = 'Entrada'

      }else if(checked.output === true){
        data['type'] = 'Saída'
      }
      
      const res = await createTransactions(data)
      if(res.status === 400){
        toast.error('Campo obrigatório!')
      }else{
        toast.success('Transação realizada!')
        listTransactions()
      }
    }

    const changeRadio = (e:any) => {
      setChecked(() => {
        return {
          input: false,
          output: false,
          [e.target.value]: true
        };
      });
      
    };

    const datas = transactions.filter((transactions:any) => transactions.user?.id === userId)
  
    async function handleDeleteTransactions(id:number){
      const res = await deleteTransactions(id)

      if(res.name !== "AxiosError"){
        toast.success('Transação deletada!')
        listTransactions()
      }
    }

  return (
    <>
      <Header/>
      <Wrapper>
        <Container props={{isMobile, isTablet}}>
          <Card props={{isMobile, isTablet, isLaptop}}>
              <CardHeader>
                  <Title>Entrada</Title>
                  <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/>
              </CardHeader>

              <CardBody>
                  <Monetary>R${fullEntry}</Monetary>
              </CardBody>
          </Card>

          <Card props={{isMobile, isTablet, isLaptop}}>
              <CardHeader>
                  <Title>Saída</Title>
                  <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/>
              </CardHeader>

              <CardBody>
                  <Monetary>R${fullExit}</Monetary>
              </CardBody>
          </Card>

          <Card props={{isMobile, isTablet, isLaptop}}>
              <CardHeader>
                  <Title>Total</Title>
                  <RiMoneyDollarCircleLine fontSize={25}/>
              </CardHeader>

              <CardBody>
                  <Monetary>R$ {total}</Monetary>
              </CardBody>
          </Card>
        </Container>

        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)} props={{isMobile,isMobileL,isDesktop,isDesktopL}}>
            <Input type='text' label='Descrição' height='30px' background='#D9D9D9' register={{...register("description")}} error={errors.description?.message} />
            <Input type='text' label='Quantidade' height='30px' background='#D9D9D9' register={{...register("amount")}} error={errors.amount?.message} />
            <FormWrapper>
              <Input value='input' type='radio' background='#D9D9D9' checked={checked.input} onChange={changeRadio} cursor='pointer'/>Entradas
              <Input value='output' type='radio'  background='#D9D9D9' error={errors.value?.type} checked={checked.output} onChange={changeRadio} cursor='pointer'/>Saídas
            </FormWrapper>
            <Button type='submit' content='Adicionar' background='#58DB6D' color='#000000' width='150px' height='30px' />
          </Form>
        </FormContainer>

        <TransactionsContainer>
          <TransactionsWrapper>
            <TransactionsHeader>
              <Text>Descrição</Text>
              <Text>Valor</Text>
              <Text>Tipo</Text>
            </TransactionsHeader>
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
          </TransactionsWrapper>
        </TransactionsContainer>
      </Wrapper>
    </>
  )
}
