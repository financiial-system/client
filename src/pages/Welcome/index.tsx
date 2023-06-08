import { useHistory } from 'react-router-dom'
import { Container, Image,  Wrapper, Text } from "./styles"
import Financial from "../../assets/financial.jpg"
import Button  from '../../components/Button'
import { useMediaQuery } from "usehooks-ts"

export default function Welcome() {
  const isMobile = useMediaQuery("(min-width: 375px)")
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const isLaptop = useMediaQuery("(min-width: 1024px)")

  const history = useHistory()

  const handleNavigate = () => {
    history.push("/signup")
  }

  return (
    <Container props={{ isMobile, isDesktop }}>
      <Image src={Financial} props={{ isMobile, isDesktop, isLaptop }}/>

      <Wrapper>
        <Text>Tem dificuldade de administrar o seu dinheiro? Não consegue poupar nada no final do mês? Que tal controlar os seus gastos de forma fácil, rápida e segura? Vamos lá!</Text>
        <Button 
          content="Registre-se"
          background="#000000"
          color="#FFFFFF"
          type='button' 
          onClick={()=> handleNavigate()}
          width="80%"
          height="40px"
          padding="0px"/>
      </Wrapper>
    </Container>
  )
}
