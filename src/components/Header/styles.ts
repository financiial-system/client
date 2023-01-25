import styled from 'styled-components';

interface ILogotipo{
    props:{
        isMobile: boolean;
        isTablet: boolean;
    }
}

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--green);
    height: 100px;
`;
export const Name = styled.h2``;

export const Logotipo = styled.h2<ILogotipo>`
    ${(p) => p.props.isMobile ? {"display": "none"} : {"display": "block"}};
    ${(p) => (p.props.isTablet && {display: 'block'} )};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const Avatar = styled.img`
    width: 50px;
    border-radius: 20px;
`;

export const Text = styled.h2``;

export const Logout = styled.button`
    cursor: pointer;
`;
