import styled from "styled-components";

export const Arrow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    position:absolute;
    top:0;
    bottom:0;
    left: ${({direction})=> direction=== 'left' && '10px'};
    right : ${({direction})=> direction=== 'right' && '10px'};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`