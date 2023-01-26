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

    @media (max-width: 1440px){width: 1100px;}
    @media (max-width: 1360px){width: 1060px;}
    @media (max-width: 1024px){width: 900px;}
    @media (max-width: 768px){width: 700px;}
    @media (max-width: 425px){width: 200px;}
`

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`
