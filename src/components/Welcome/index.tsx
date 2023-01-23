import { useNavigate } from 'react-router-dom'
import { Container, Image,  Wrapper, Text } from "./styles"
import Wallet from "../../assets/wallet.png"
import Button  from '../Button'
import { useMediaQuery } from "usehooks-ts"

export default function Welcome() {
  const isMobile = useMediaQuery("(min-width: 375px)")
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/signup")
  }

  return (
    <Container props={{ isMobile, isDesktop }}>
      <Image src={Wallet} props={{ isMobile, isDesktop }}/>

      <Wrapper>
        <Text>Tem dificuldade de administrar o seu dinheiro? Não sobra nada no final do mês? Agora você pode controlar o que entra e o que sai da sua conta em tempo real de forma fácil, rápida e segura.</Text>
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
