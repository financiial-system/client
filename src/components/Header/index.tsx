import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { Header, Name, Logotipo, Container, Avatar, Text, Logout } from "./styles"
import { IoMdLogOut } from 'react-icons/io'
import avatar from '../../assets/avatar.jpg'

export default function header() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isTablet = useMediaQuery("(min-width: 768px)")

  return (
    <Header>
        <Name>Danie J.</Name>
        <Logotipo props={{isMobile, isTablet}}>Sistema Financeiro</Logotipo>
        <Container>
            <Avatar src={avatar} alt="avatar do usuário"></Avatar>
            <Text>Sair</Text>
            <Logout onClick={() => navigate("/welcome")}>
                <IoMdLogOut fontSize={25}></IoMdLogOut>
            </Logout>
        </Container>
    </Header>
  )
}