import React from "react";
import styled from "styled-components";
import { $color, $cssTRBL, $uw } from "../../../utils";

type Props = {
    selected: boolean
    event: {
        id: string;
        text: string;
    },
    onClick: ()=>void
}

export const EventItem: React.FC<Props> = React.memo(({selected, event, onClick})=>{
    return <Container onClick={onClick} className={selected ? 'selected' : ''}>
        <span>{event.text}</span>
    </Container>
})

const Container = styled.div`
    width: 100%;
    padding: ${$cssTRBL(.2, 2)};
    box-sizing: border-box;
    border: 1px solid ${$color('black')};
    background-color:${$color('white')};
    margin-bottom: ${$uw(1)};
    border-radius: 8px;
    > span {
        color: ${$color('black')};
    }
    &.selected{
        background-color:${$color('black')};
        > span{
            color: ${$color('white')};
        }
    }
`