import React from "react";
import styled from "styled-components";

import { config, $color, $padding } from "../utils";

export const MainLayout: React.FC<{ children: React.ReactElement }> = React.memo(({ children }) => {

    const { debug } = config;
    console.log(debug)

    return <Container className={`main-layout ${debug ? 'debug' : ''}`}>
        {children}
    </Container>
})

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${$color('white')};
    padding: ${$padding(2,0)};
    box-sizing: border-box;
`