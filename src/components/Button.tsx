import React from "react";
import styled from "styled-components";
import { $cssTRBL, $color } from "../utils";

type props = {
    onCLick: () => void
    label: string
}

export const Button: React.FC<props> = React.memo(({ onCLick, label }) => {

    return <Container onClick={onCLick}>
        {label}
    </Container>
})

const Container = styled.span`
    border-radius: 6px;
    box-sizing: border-box;
    background-color: ${$color('black')};
    padding: ${$cssTRBL(.5, 1.2)};
    color: ${$color('white')};
    &:hover{
        cursor: pointer;
    }
`