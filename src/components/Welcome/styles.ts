import styled from 'styled-components';

interface IContainer{
    props:{
        isMobile: boolean;
        isDesktop: boolean;
    }
}

interface IImage{
    props:{
        isMobile: boolean;
        isDesktop: boolean;
        isLaptop: boolean;
    }
}

export const Container = styled.div<IContainer>`
    display: flex;
    ${(p) => (p.props.isMobile &&{flexDirection: 'column'})};
    ${(p) => (p.props.isDesktop &&{flexDirection: 'row'})};
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100vh;
`;

export const Image = styled.img<IImage>`
    ${(p) => (p.props.isMobile && {display: 'none'} )};
    ${(p) => (p.props.isDesktop && {display: 'block', width: '50%'} )};
    ${(p) => (p.props.isLaptop && {display: 'block', width: '40%'} )};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

`
export const Text = styled.p`
    display: flex;
    font-size: 24px;
    font-weight: 500;
    text-align: justify;
    max-width: 500px;
    width: 80%;
`;

