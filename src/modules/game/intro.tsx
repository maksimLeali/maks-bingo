import React from "react";
import { Button } from "../../components";
import styled from "styled-components";

export const Intro = React.memo(()=>{
    return <Container >
        <Button onCLick={()=> console.log('pippo')} label="Hey bitch" />
    </Container>
})

const Container = styled.div`
    
`