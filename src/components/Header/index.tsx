import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { Header, Name, Logotipo, Container, Avatar, Text, Logout } from "./styles"
import { IoMdLogOut } from 'react-icons/io'
import avatar from '../../assets/avatar.jpg'
import { useContext } from 'react'
import { UserContext } from '../../providers/userContext'
import { TransactionsContext } from '../../providers/transactionsContext'

export default function header() {
    const history = useHistory()
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isTablet = useMediaQuery("(min-width: 768px)")

    const { transactions } = useContext(TransactionsContext)
    const userId = localStorage.getItem("userId")
    const datas = transactions.filter((transactions:any) => transactions.user?.id === userId)
    const [data] = datas

    const clearToken = () => {
      localStorage.removeItem("token")
      history.push("/signin")
    }

  return (
    <Header>
        <Name>{data?.user.name}</Name>
        <Logotipo props={{isMobile, isTablet}}>Sistema Financeiro</Logotipo>
        <Container>
            <Avatar src={data?.user.avatar} alt="avatar do usuário"></Avatar>
            <Text>Sair</Text>
            <Logout onClick={() => clearToken()}>
                <IoMdLogOut fontSize={25}></IoMdLogOut>
            </Logout>
        </Container>
    </Header>
  )
}
