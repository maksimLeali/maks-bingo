import React from "react";
import styled from "styled-components";

type props = {
    onCLick: ()=>void
    label: string
}

export const Button: React.FC<props> = React.memo(({onCLick, label})=>{

    return <Container onClick={onCLick}>
        {label}
    </Container>
})

const Container = styled.span`
    border-radius: 6px;
    background-color: ${({theme: {colors}}) => colors.black };
    padding: ${({theme : { uw}}) => `${uw(.5)} ${uw(2)}` };
    color: ${({theme: {colors}}) => colors.white };
    &:hover{
        cursor: pointer;
    }
`