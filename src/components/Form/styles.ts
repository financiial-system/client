import styled from 'styled-components';

interface IForm{
    props:{
        isMobile: boolean;
        isMobileL: boolean;
    }
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--grey);
`

export const Form = styled.form<IForm>`    
    display: flex;
    ${(p) => p.props.isMobile && {"flexDirection":"column"}};
    ${(p) => p.props.isMobileL && {"flexDirection":"column"}};
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    background-color: var(--white);
    padding: 20px 10px;
    margin: 20px 100px;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`
