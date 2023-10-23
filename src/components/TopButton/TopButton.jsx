import styled from "styled-components";

export const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${({type})=>type ==="filled" && "none"};
    background-color:${({type})=>type ==="filled"? "black" : "transparent"};
    color:${({type})=>type ==="filled" && "white"}
`