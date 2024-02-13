import React from "react";
import styled from "styled-components";
import { Div } from "../components";
import { config, themeColor } from "../utils";

export const MainLayout: React.FC<{ children: React.ReactElement }> = React.memo(({ children }) => {

    const { debug } = config;
    console.log(debug)

    return <Container className={`main-layout ${debug ? 'debug' : ''}`}>
        {children}
    </Container>
})

const Container = styled(Div)`
    width: 100%;
    min-height: 100%;
    background-color: ${themeColor('white')};
`