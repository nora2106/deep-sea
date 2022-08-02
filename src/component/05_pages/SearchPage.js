import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import {useLocation} from "react-router-dom";
import Grid from "../03_organisms/Grid";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
`;

export default function SearchPage(){
    const location = useLocation();
    const search = location.state.val;

    return (
            <Container>
                <Header/>
                <Grid type='search' value={search} />
            </Container>
    );
}


