import { Container, Card, CardHeader, Title, CardBody, Total, Monetary } from "./styles"
import { useMediaQuery } from "usehooks-ts"
import { datas } from "../../mocks/cards"
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { useContext, useState } from "react"
import { TransactionsContext } from "../../providers/transactionsContext"

export default function Cards(){
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isTablet = useMediaQuery("(min-width: 768px)")
    const isLaptop = useMediaQuery("(min-width: 1024px)")

    const { transactions } = useContext(TransactionsContext)
    const userId = localStorage.getItem("userId")
    const results = transactions.filter((transactions:any) => transactions.user?.id === userId)
    
    const entradas = results.filter((result:any) => result.type === 'Entrada')
    const [entrada] = entradas

    const saidas = results.filter((result:any) => result.type === 'Saída')
    const [saida] = saidas

    const total = entrada.amount - saida.amount
    
    //dinamizar a variável
    //1.criar um state de array de entrada e de saída
    //2.criar um resucer
    
  return (
    <Container props={{isMobile, isTablet}}>
        <Card props={{isMobile, isTablet, isLaptop}}>
            <CardHeader>
                <Title>Entrada</Title>
                <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/>
            </CardHeader>

            <CardBody>
                <Monetary>R${entrada.amount}</Monetary>
            </CardBody>
        </Card>

        <Card props={{isMobile, isTablet, isLaptop}}>
            <CardHeader>
                <Title>Saída</Title>
                <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/>
            </CardHeader>

            <CardBody>
                <Monetary>R${saida.amount}</Monetary>
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
  )
}
