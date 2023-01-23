import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, Form } from './styles'
import Input from '../Input'
import Button from '../Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function SignUp() {
    const navigate = useNavigate()

    const signupSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        avatar: yup.string().required("Avatar obrigatório"),
        email: yup.string().required("Email obrigatório"),
        password: yup.string().min(3).required("Senha obrigatória"),
    })

    type SignUp = yup.InferType<typeof signupSchema>

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const onSubmit = async (data: object) => {
        navigate("/signin")
    }

  return (
    <Container>
        <Title>SignUp</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type='text' label='Nome' placeholder='Digite seu nome' width='250px' height='30px' background='#D9D9D9' register={{...register("name")}} error={errors.name?.message}/>
            <Input type='text' label='Avatar' placeholder='Digite a url' width='250px' height='30px' background='#D9D9D9' register={{...register("avatar")}} error={errors.avatar?.message} />
            <Input type='email' label='Email' placeholder='Digite seu email' width='250px' height='30px' background='#D9D9D9' register={{...register("email")}} error={errors.email?.message} />
            <Input type='password' label='password' placeholder='Digite sua senha' width='250px' height='30px' background='#D9D9D9' register={{...register("password")}} error={errors.password?.message} />
            <Button type='submit' content='Registrar-se' background='#000000' color='#FFFFFF' width='250px' height='30px'/>
        </Form>
    </Container>
  )
}
