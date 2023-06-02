import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Container, Form , Wrapper} from './styles'
import Input from '../Input'
import Button from '../Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { TransactionsContext } from '../../providers/transactionsContext'
import { toast } from 'react-toastify'

export default function form() {
    const { createTransactions } = useContext(TransactionsContext)

    const [checked, setChecked] = useState({input: false, output: false})
    const isMobile = useMediaQuery("(max-width: 375px)")
    const isMobileL = useMediaQuery("(max-width: 425px)")

    const valuesSchema = yup.object().shape({
        description: yup.string().required("Descrição obrigatória"),
        amount: yup.string().required("Quantia obrigatória"),
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

    const onSubmit = async (data: any) => {
      if(checked.input === true){
        data['type'] = 'Entrada'

      }else if(checked.output === true){
        data['type'] = 'Saída'
      }
      
      const res = await createTransactions(data)

      if(res?.name !== 'AxiosError'){
        toast.success('Transação bem sucedida!')
      }
      
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
      <Form onSubmit={handleSubmit(onSubmit)} props={{isMobile,isMobileL}}>
        <Input type='text' label='Descrição' height='30px' background='#D9D9D9' register={{...register("description")}} error={errors.description?.message} />
        <Input type='text' label='Quantidade' height='30px' background='#D9D9D9' register={{...register("amount")}} error={errors.amount?.message} />
        <Wrapper>
          <Input type='radio' value='input' background='#D9D9D9' checked={checked.input} onChange={changeRadio} cursor='pointer'/>Entradas
          <Input type='radio' value='output' background='#D9D9D9' error={errors.value?.type} checked={checked.output} onChange={changeRadio} cursor='pointer'/>Saídas
        </Wrapper>
        <Button type='submit' content='Adicionar' background='#58DB6D' color='#000000' width='150px' height='30px'/>
      </Form>
    </Container>
  )
}
