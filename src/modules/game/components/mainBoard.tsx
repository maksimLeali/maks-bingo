import React from "react";
import styled from "styled-components";
import { Div } from "../../../components";


export const MainBoard = React.memo(() => {
    return <Container >
    </Container>
})

const Container = styled(Div)`
    width : 100%;
    height: 100px;
    border-left: 1px solid ${({ theme: { colors } }) => colors.black};
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.black};
`