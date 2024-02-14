import styled from "styled-components"
import { Button } from "../../components"
import React from "react"
import { MainBoard } from "./components"
import { useAppContext } from "../../contexts"
import { $padding } from "../../utils"

export const Main = React.memo(() => {

    const { switchMode } = useAppContext()
    return <Container>
        <MainBoard />
        <Button label="Light mode" onCLick={()=>switchMode()} />
    </Container>
})

const Container = styled.div`
    padding: ${$padding(0, 1)};
    display:flex;
    align-items: center;
    flex-direction:column;
`