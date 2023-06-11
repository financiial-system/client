import styled from 'styled-components';

export interface IContainer{
    props:{
        background?: string;
        color?: string;
        width?: string;
        height?: string;
        padding?: string;
    }
}

export const Container = styled.button<IContainer>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: ${(p) => p.props.background};
    color: ${(p) => p.props.color};
    width: ${(p) => p.props.width};
    height: ${(p) => p.props.height};
    padding: ${(p) => p.props.padding};
`;