import styled from "styled-components";

export const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${({color})=>color};
    margin:0 5px;
    cursor:pointer;
`