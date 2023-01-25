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
    padding: 40px 0px;
    background-color: var(--green);
    height: 150px;
`;
export const Name = styled.h2``;

export const Logotipo = styled.h2<ILogotipo>`
    ${(p) => p.props.isMobile ? {"display": "none"} : {"display": "block"}};
    ${(p) => (p.props.isTablet && {display: 'block'} )};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
`;

export const Text = styled.h2``;

export const Logout = styled.button`
    display: flex;
    padding-top: 4px;
    cursor: pointer;
`;
