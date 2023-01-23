import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { Container, Input, Label } from './styles';

interface Props{
    label: string;
    type?: string;
    placeholder?: string;
    width?: string;
    height?: string;
    background?:string;
    register: object;
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | string;
}

export default function input({label, type, placeholder, width, height, background, register, error}:Props) {
  return (
    <Container>
      <>{error ? error : <Label>{label}</Label>}</>
      <Input 
        props={{width, height, background}}
        type={type}
        placeholder={placeholder}
        {...register}
      >
      </Input>
    </Container>
  )
}
