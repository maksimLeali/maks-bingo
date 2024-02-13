import styled from "styled-components";

type props = {
    uw?: number 
}

export const Div = styled.div<props>`
    ${({uw, theme})=> uw? `width :${theme.uw(uw)};` : ''}
    box-sizing: border-box;
`

 