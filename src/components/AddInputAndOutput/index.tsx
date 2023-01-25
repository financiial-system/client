import React, { useState } from 'react'
import { Container, Form , Wrapper} from './styles'
import Input from '../Input'
import Button from '../Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function AddInputAndOutput() {
    const [checked, setChecked] = useState({input: false, output: false})

    const valuesSchema = yup.object().shape({
        description: yup.string().required("Descrição obrigatória"),
        value: yup.string().required("Valor obrigatório"),
    })

    type values = yup.InferType<typeof valuesSchema>

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(valuesSchema),
    });

    const onSubmit = async (data: object) => {
       console.log(data);
    }

    const changeRadio = (e:any) => {
      setChecked(() => {
        return {
          input: false,
          output: false,
          [e.target.value]: true
        };
      });
    };

  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type='text' label='Descrição' width='250px' height='30px' background='#D9D9D9' register={{...register("description")}} error={errors.description?.message} />
            <Input type='text' label='Valor' width='250px' height='30px' background='#D9D9D9' register={{...register("value")}} error={errors.value?.message} />
            <Wrapper>
                <Input type='radio' value='input' background='#D9D9D9' checked={checked.input} onChange={changeRadio} cursor='pointer'/>Entradas
                <Input type='radio' value='output' background='#D9D9D9' checked={checked.output} onChange={changeRadio} cursor='pointer'/>Saídas
            </Wrapper>
            <Button type='submit' content='Adicionar' background='#58DB6D' color='#000000' width='150px' height='30px'/>
        </Form>
    </Container>
  )
}
