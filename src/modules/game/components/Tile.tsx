import React from "react";
import styled from "styled-components";
import { $color} from "../../../utils";

export const Tile = React.memo(()=>{

    return <Container>

    </Container>
})

const Container = styled.div`    
    box-sizing: border-box;
    border-right: 1px solid ${$color('black')};
    border-top: 1px solid ${$color('black')};
`
