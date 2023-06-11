import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export const Title = styled.h2``;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--green);
    width: 80%;
    max-width: 350px;
    height: 300px;
    border-radius: 15px;
`;

export const Span = styled.span`
    display: flex;
    gap: 10px;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
`
export const Text = styled.p`
`