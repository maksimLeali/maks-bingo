import styled from "styled-components";

type props = {
    uw?: number 
}

export const Div = styled.div<props>`
    width: ${({uw, theme})=> theme.uw(uw)}
`

 