import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { Container, Input, Label } from './styles';

interface Props{
    label?: string;
    type?: string;
    value?: string;
    style?: any;
    checked?: any;
    onChange?: (e:any) => void;
    placeholder?: string;
    width?: string;
    cursor?: string;
    height?: string;
    background?:string;
    register?: object;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | string;
}

export default function input({label, type, value, style, checked , onChange, placeholder, width, cursor, height, background, register, error}:Props) {
  return (
    <Container>
      <>{error ? error : <Label>{label}</Label>}</>
      <Input 
        props={{width, height, background, cursor}}
        style={style}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        placeholder={placeholder}
        {...register}
      >
      </Input>
    </Container>
  )
}
