import styled from 'styled-components';

export const Container = styled.div`
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

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column ;
    width: 100%;
    gap: 20px;
    padding: 10px 0px;
`;

export const Header = styled.div`
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