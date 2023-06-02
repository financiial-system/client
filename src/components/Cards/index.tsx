import { Container, Card, CardHeader, Title, CardBody, Monetary } from "./styles"
import { useMediaQuery } from "usehooks-ts"
import { datas } from "../../mocks/cards"
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export default function Cards() {
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isTablet = useMediaQuery("(min-width: 768px)")
    const isLaptop = useMediaQuery("(min-width: 1024px)")

  return (
    <Container props={{isMobile, isTablet}}>
        {datas.map((data) => (
            <Card key={data.id} props={{isMobile, isTablet, isLaptop}}>
                <CardHeader>
                    <Title>{data.title}</Title>
                    {data.title === 'Entradas' && <BsArrowUpCircle fontSize={20} style={{'color':'var(--green)'}}/> || data.title === 'Saidas' && <BsArrowDownCircle fontSize={20} style={{'color':'var(--red)'}}/> || data.title === 'Total' && <RiMoneyDollarCircleLine fontSize={25} />}
                </CardHeader>
                <CardBody>
                    <Monetary>R$ {data.value}</Monetary>
                </CardBody>
            </Card>
        ))}
        
    </Container>
  )
}
