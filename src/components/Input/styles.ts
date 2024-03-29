import styled from 'styled-components';

interface IInput{
    props:{
        width?: string;
        height?: string;
        background?: string;
        cursor?: string;
    } 
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Inputt = styled.input<IInput>` 
    width: ${(p) => p.props.width};
    height: ${(p) => p.props.height};
    background-color: ${(p) => p.props.background};
    margin-bottom: 20px;
    cursor: ${(p) => p.props.cursor};
`

export const Label = styled.label`
    font-weight: bold;
`;
