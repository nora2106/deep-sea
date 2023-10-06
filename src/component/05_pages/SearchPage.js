import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import {Link} from "react-router-dom";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
`;

const LinkText = styled('h3')`
  position: absolute;
  top: 10em;
  right: 1em;
  color: white;
  z-index: 3;
`;

export default function SearchPage(){
    const queryParams = new URLSearchParams(window.location.search)
    const search = queryParams.get("q");

    return (
            <Container>
                <Header/>
                <Link to='/discover'>
                    <LinkText>Back to Discover</LinkText>
                </Link>
                <Grid type='search' value={search} />
            </Container>
    );
}


