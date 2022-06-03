import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
`;

export default function MapMenu(){
    return (
        <Container>
            <Header/>
        </Container>
    );
}


