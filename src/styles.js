import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #B0E0E6, #6495ED); 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 20%;
    background-color: #7FFFD4;
    
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`