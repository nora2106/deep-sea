import styled from 'styled-components';
import React from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDark};
  height: 100%;
  min-height: 100vh;
  
  .back-link {
    display: flex;
    position: absolute;
    top: 8em;
    left: 1em;
    z-index: 3;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-decoration: none;
    transition: transform .5s;
    color: white;
    
    svg {
      position: relative;
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function SearchPage(){
    const queryParams = new URLSearchParams(window.location.search)
    const search = queryParams.get("q");

    return (
            <Container>
                <Header/>
                <Link className='back-link btn-hover' to='/discover'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    <h3>Back</h3>
                </Link>
                <Grid type='search' value={search} />
            </Container>
    );
}


