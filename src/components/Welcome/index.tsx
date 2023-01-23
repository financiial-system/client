import { Navigate } from 'react-router-dom'
import { Container, Image,  Wrapper, Text } from "./styles"
import Wallet from "../../assets/wallet.png"
import Button  from '../Button'
import { useMediaQuery } from "usehooks-ts"
import { useState } from 'react'

export default function Welcome() {
  const isMobile = useMediaQuery("(min-width: 375px)")
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [navigate, isNavigate] = useState<boolean>(false)

  const handleNavigate = () =>{
    isNavigate(true)
  }

  return (
    <Container props={{ isMobile, isDesktop }}>
      <Image src={Wallet} props={{ isMobile, isDesktop }}/>

      <Wrapper>
        <Text>Tem dificuldade de administrar o seu dinheiro? Não sobra nada no final do mês? Agora você pode controlar o que entra e o que sai da sua conta em tempo real de forma fácil, rápida e segura.</Text>
        { navigate &&  <Navigate to="/signup"/>}
        <Button content="Registre-se" background="#000000" color="#FFFFFF" type='button' onClick={() => handleNavigate()} width="80%" height="40px" padding="0px"/>
      </Wrapper>
    </Container>
  )
}
