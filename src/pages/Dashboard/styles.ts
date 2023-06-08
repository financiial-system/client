import styled from 'styled-components';

interface IContainer{
    props:{
        isMobile: boolean;
        isTablet: boolean;
    }
}

interface ICard{
    props:{
        isMobile: boolean;
        isTablet: boolean;
        isLaptop: boolean;
    }
}

interface IForm{
    props:{
        isMobile: boolean;
        isMobileL: boolean;
    }
}

export const Wrapper = styled.div`
    height: 100vh;
    background: var(--grey);
`
export const Container = styled.div<IContainer>`
    display: flex;
    ${(p) => p.props.isMobile && {"flexDirection": 'column', "alignItems": 'center'}};
    ${(p) => p.props.isTablet && {"flexDirection": 'row'}};
    gap: 20px;
    justify-content: space-evenly;
`;

export const Card = styled.div<ICard>`

    position: relative;
    left: 0;
    top: -30px;
    ${(p) => p.props.isMobile && {"width": "200px"}};
    ${(p) => p.props.isTablet && {"width": "200px"}};
    ${(p) => p.props.isLaptop && {"width": "248px"}};
    height: 122px;
    background-color: var(--white);
`;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`;
export const Title = styled.h3``;

export const CardBody = styled.div``;

export const Monetary = styled.h3`
    margin-left:  60px;
`;

export const FormContainer = styled.div`
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

export const FormWrapper = styled.div`
    display: flex;
    gap: 20px;
`
export const TransactionsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px 100px;
    background: var(--white);
    
    @media (max-width: 768px){
        margin: 0px;
    }
`;

export const TransactionsWrapper = styled.div`
    display: flex;
    flex-direction:column ;
    width: 100%;
    gap: 20px;
    padding: 10px 0px;
`;

export const TransactionsHeader = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid;
    padding: 10px 0px;
`;

export const Transactions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const Type = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Text = styled.p`
`;