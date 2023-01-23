import styled from 'styled-components';

interface IContainer{
    props:{
        width?: string;
        height?: string;
        background?: string;
    } 
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input<IContainer>` 
    width: ${(p) => p.props.width};
    height: ${(p) => p.props.height};
    background-color: ${(p) => p.props.background};
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-weight: bold;
`;
