import styled from 'styled-components';

interface IIsMobile{
    props:{
        isMobile: boolean;
        isDesktop: boolean;
    }
}

export const Container = styled.div<IIsMobile>`
    display: flex;
    ${(p) => (p.props.isMobile &&{flexDirection: 'column'})};
    ${(p) => (p.props.isDesktop &&{flexDirection: 'row'})};
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100vh;
`;

export const Image = styled.img<IIsMobile>`
    ${(p) => (p.props.isMobile && {display: 'none'} )};
    ${(p) => (p.props.isDesktop && {display: 'block', width: '50%'} )};
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
    width: 80%;
`;

