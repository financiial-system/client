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
