import styled from 'styled-components';

const span = styled.span`
    font-size: 1.1em;
`;

export const flex = styled.div`
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    gap: 4%;
    background-color: rgb(243, 242, 241);
    cursor: pointer;
`;

export const categorie = styled(span)`
    text-decoration: underline;
    opacity: 0.5;
`

export const title = styled(span)`
    font-weight: bold;
`

export const author = styled(span)`
    opacity: 0.5;
`

export const img = styled.img`
    align-self: center;
`;