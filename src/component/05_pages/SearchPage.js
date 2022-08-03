import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import {useLocation, useSearchParams} from "react-router-dom";
import Grid from "../03_organisms/Grid";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
`;

export default function SearchPage(){
    const location = useLocation();
    // const search = location.state.val;

    const queryParams = new URLSearchParams(window.location.search)
    const search = queryParams.get("q");
    // const searchParam = queryParams.get("location");

    return (
            <Container>
                <Header/>
                <Grid type='search' value={search} />
            </Container>
    );
}


