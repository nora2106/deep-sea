import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";

const Container = styled('div')`
`;

export default function LandingPage(){
    return (
            <Container>
                <Header/>
                <Grid/>
            </Container>
    );
}


