import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Hero from "../03_organisms/Hero";
import PageContent from "../03_organisms/PageContent";

const Container = styled('div')`
`;

export default function LandingPage(){
    return (
            <Container>
                <Header/>
                <Hero/>
                <PageContent/>
            </Container>
    );
}


