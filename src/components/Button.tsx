import React from "react";
import styled from "styled-components";
import {padding, themeColor } from "../utils";

type props = {
    onCLick: ()=>void
    label: string
}

export const Button: React.FC<props> = React.memo(({onCLick, label})=>{

    return <Container onClick={onCLick}>
        {label}
    </Container>
})

const Container = styled.button`
    border-radius: 6px;
    box-sizing: border-box;
    background-color: ${themeColor('black') };
    padding: ${padding(.5,2)};
    color: ${themeColor('white') };
    &:hover{
        cursor: pointer;
    }
`