import React from "react";
import styled from "styled-components";
import { $uw, $color, $break_point } from "../../../utils";
import { Tile } from "./Tile";
import { quotes } from "../../../utils/quotes";
import _ from 'lodash'

export const MainBoard = React.memo(() => {
    return <Container >
        {quotes.map((quote)=> <Tile key={quote.id}  text={quote.text}  />)}
    </Container>
})




const Container = styled.div`
    width : ${$uw(30)};
    display: flex;
    flex-wrap:wrap;
    border-left: 1px solid ${$color('black')};
    border-bottom: 1px solid ${$color('black')};
    > *{
        width: ${$uw(6)};
        height:${$uw(5)};
        
    }
    ${$break_point(980)}{
        width : ${$uw(36)};
        > *{
            width: ${$uw(7.2)};
            height:${$uw(6)};
        }
    }
    ${$break_point(480)}{
        width : ${$uw(44)};
        > *{
            width: ${$uw(8.8)};
            height:${$uw(8.8)};
        }
    }
    
`