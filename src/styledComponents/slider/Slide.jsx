import styled from "styled-components";

export const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${({bg})=>bg};
`