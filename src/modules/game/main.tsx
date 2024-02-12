import styled from "styled-components"
import { Div } from "../../components"
import React from "react"
import { MainBoard } from "./components"

export const Main = React.memo(()=>{
    return <Container>
        <MainBoard />
    </Container>
})

const Container = styled(Div)`
    padding: 0 ${({ theme: { uw } }) => `${uw(1)}`} ;
`