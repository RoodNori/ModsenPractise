import styled from 'styled-components';
import shapka from '../../assets/books.jpg';
import icon from '../../assets/search1.svg';

interface IProps {}

const Grid = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 1vw;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const flexDiv = styled(Flex)`
    flex-wrap: wrap;
    gap: 6vw;
`;

export const hGrid = styled(Grid)`
    height: 30vh;
    width: 100vw;
    background-image: url(${shapka});
    background-size: cover;
    grid-template: repeat(3, 1fr) / 1fr;
`;

export const fGrid = styled(Grid)`
    grid-template: 1fr / auto 1fr;
`;

export const sFlex = styled(Flex)`
    
    justify-content: space-between;
`;

export const iconDiv = styled.div`
    height: 100%;
    background-image: url(${icon});
    background-size: cover;
`;

export const h1 = styled.h1`
    font-family: 'Trebuchet MS';
    color: white;
    font-size: 3em;
    margin-bottom: 0;
`;

export const span = styled.span`
    font-family: 'Trebuchet MS';
    color: white;
    font-size: 1.1em;
`;

export const select = styled.select`
    font-family: 'Trebuchet MS';
    color: grey;
    padding-right: 5vw;
    font-size: 1.2em;
`;