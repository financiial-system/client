import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { Headerr, Name, Logotipo, Container, Avatar, Text, Logout } from "./styles"
import { IoMdLogOut } from 'react-icons/io'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'
import { UserContext } from '../../providers/userContext'

export default function Header() {
    const history = useHistory()
    const isMobile = useMediaQuery("(min-width: 375px)")
    const isTablet = useMediaQuery("(min-width: 768px)")

    const { transactions } = useContext(TransactionsContext)
    const userId = localStorage.getItem("userId")
    const name = localStorage.getItem("name")
    const datas = transactions.filter((transactions:any) => transactions.user?.id === userId)

    const clearToken = () => {
      localStorage.removeItem("token")
      history.push("/signin")
    }
  return (
    <Headerr>
        <Name>{name}</Name>
        <Logotipo props={{isMobile, isTablet}}>Sistema Financeiro</Logotipo>
        <Container>
            <Avatar src='https://media.licdn.com/dms/image/D4D35AQHjHoijW8P3fA/profile-framedphoto-shrink_200_200/0/1669115735316?e=1687039200&v=beta&t=jltEB_Qh6BR47ZoDxx_JLVxO27FDHjnzyAnpt8zaDHg' alt="avatar do usuário"></Avatar>
            <Text>Sair</Text>
            <Logout onClick={() => clearToken()}>
                <IoMdLogOut fontSize={25}></IoMdLogOut>
            </Logout>
        </Container>
    </Headerr>
  )
}
