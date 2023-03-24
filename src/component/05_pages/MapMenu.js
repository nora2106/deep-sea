import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import MapOverview from "../03_organisms/MapOverview";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
`;

export default function MapMenu(){
    return (
        <Container>
            <Header/>
            <MapOverview/>
        </Container>
    );
}


