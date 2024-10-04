import styled from 'styled-components';
import React, { useRef} from "react";
import Header from "../03_organisms/Header";
import Grid from "../03_organisms/Grid";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.bgDarker};
  height: 100%;
  min-height: 100vh;
  
  .back-link {
    display: flex;
    position: absolute;
    top: 6.5em;
    left: 3em;
    z-index: 3;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-decoration: none;
    color: white;
    font-size: clamp(8px, 1.5vw, 18px);
    
    svg {
      position: relative;
      transition: transform .8s;
    }
    
    &:hover svg {
      transform: scale(1.3);
    }
  }
`;

const Text = styled('div')`
    position: absolute;
  top: 8em;
  z-index: 3;
  color: white;
  width: 100%;
  text-align: center;
  
`;

export default function SearchPage(){
    const queryParams = new URLSearchParams(window.location.search)
    const search = queryParams.get("q");
    const CursorHandlerRef = useRef();
    console.log(search)

    function callChild() {
        CursorHandlerRef.current.update();
    }

    return (
            <Container>
                <Header/>
                <Text>
                    <h2>Search results for: "{search}"</h2>
                </Text>
                <Link className='back-link btn-hover' to='/discover'>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
                    <h3>Back</h3>
                </Link>
                <Grid type='search' value={search} update={callChild}/>
            </Container>
    );
}


