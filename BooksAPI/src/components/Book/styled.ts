import styled from 'styled-components';

const span = styled.span`
    font-size: 1.1em;
`;

export const grid = styled.div`
    flex-basis: 20%;
    display: grid;
    grid-template: 1fr repeat(auto)(3) / 1fr;
    gap: 4%;
    background-color: rgb(252, 250, 184);
`;

export const categorie = styled(span)`
    text-decoration: underline;
    opacity: 0.5;
`

export const title = styled(span)`
    font-weight: bold;
`

export const p = styled.p`
    margin-top: 0;
`

export const author = styled(span)`
    opacity: 0.5;
`

export const img = styled.img`
    justify-self: center;
`;