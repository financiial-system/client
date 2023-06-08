import { Container } from "./styles";

export interface IButton{
    background?: string;
    color?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    width?: string;
    height?: string;
    padding?: string;
    content?: string;
}

export default function Button({background,color,type,onClick,width,height,padding,content}: IButton){
  return (
    <Container
      props={{background,color,width,height,padding}}
      onClick={onClick}
      type={type}
    >
      {content}
    </Container>
  )
}
