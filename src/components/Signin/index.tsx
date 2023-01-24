import { useNavigate } from 'react-router-dom'
import { Container, Title, Form } from './styles'
import Input from '../Input'
import Button from '../Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function SignIn() {
    const navigate = useNavigate()

    const signinSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup.string().min(3).required("Senha obrigatória"),
    })

    type SignIn = yup.InferType<typeof signinSchema>

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(signinSchema),
    });

    const onSubmit = async (data: object) => {
        navigate("/dashboard")
    }

  return (
    <Container>
        <Title>SignIn</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type='email' label='Email' placeholder='Digite seu email' width='250px' height='30px' background='#D9D9D9' register={{...register("email")}} error={errors.email?.message} />
            <Input type='password' label='password' placeholder='Digite sua senha' width='250px' height='30px' background='#D9D9D9' register={{...register("password")}} error={errors.password?.message} />
            <Button type='submit' content='Registrar-se' background='#000000' color='#FFFFFF' width='250px' height='30px'/>
        </Form>
    </Container>
  )
}