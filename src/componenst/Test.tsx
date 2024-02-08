import React from "react";
import styled from "styled-components";



export const Test = React.memo(() => {
    console.log(import.meta.env.VITE_API_URL)


    return <Container>

    </Container>
})

const Container = styled.div`
  @import url('./styles/_vars.scss');
  width: ${({theme})=> theme.uw(3)};
  height: 100px;
  background-color: ${({ theme }) => theme.colors.green};
`