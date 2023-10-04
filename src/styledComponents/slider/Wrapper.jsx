import styled from "styled-components";

export const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition:all 1.5s ease;
    transform:translateX(${({slideindex})=> slideindex * -100}vw);
`