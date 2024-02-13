import styled from "styled-components"
import { Button, Div } from "../../components"
import React from "react"
import { MainBoard } from "./components"
import { useAppContext } from "../../contexts"
import { padding } from "../../utils"

export const Main = React.memo(()=>{

    const {setTheme} = useAppContext()
    return <Container>
        <MainBoard />
        <Button label="Light mode" onCLick={()=>setTheme('light')} />
    </Container>
})

const Container = styled(Div)`
    padding: ${padding(0, 1)};
`