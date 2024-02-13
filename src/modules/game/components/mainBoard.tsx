import React from "react";
import styled from "styled-components";
import { Div } from "../../../components";
import { $uw, $color } from "../../../utils";



export const MainBoard = React.memo(() => {
    return <Container >
    </Container>
})




const Container = styled(Div)`
    width : 100%;
    height: ${$uw(10)};
    border-left: 1px solid ${$color('black')};
    border-bottom: 1px solid ${$color('black')};
`