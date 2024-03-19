import styled from 'styled-components';
import Wave from "../01_atoms/Wave";
import React, { useState, useEffect } from "react";

const Container = styled('div')`
  position: relative;
  width: 100%;

  #zone1 {
    background-color: #9ae7e8;

    h2, h3 {
      color: ${(props) => props.theme.colors.textDark};
    }
  }

  #zone2 {
    background-color: #62a4ad;
    h2, h3 {
      color: ${(props) => props.theme.colors.textDark};
    }
  }

  #zone3 {
    background-color: #2d445e;
  }

  #zone4 {
    background-color: #121b36;
  }

  #zone5 {
    background-color: #05091a;
  }

  .wave-light {
    position: absolute;
  }
`;

const MapIntro = styled('div')`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgDark};
  
  p {
    color: white;
    padding: 1em;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      padding: 2em;
      font-size: 24px;
    }
  }
`;

const Zone = styled('section')`
  height: 12em;
  text-align: center;
  background-color: mediumblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
    
  h2 {
   color: ${(props) => props.theme.colors.textLight};
    font-weight: 500;
    
  }
  h3 {
    color: ${(props) => props.theme.colors.textLight};
    font-style: italic;
    margin-top: 0;
  }
  
  :hover {
    h2, h3 {
      transform: scale(1.2);
      transition: transform .3s;
    }
    cursor: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 15em;
  }
`;



function MapOverview() {

    return (
        <Container>
            <MapIntro>
                <p>Coming soon...</p>
            </MapIntro>
            {/*<Wave class='wave-light'/>*/}
            <Zone id='zone1'>
                <h2>Sunlight Zone</h2>
                <h3>Epipelagic</h3>
            </Zone>
            <Zone id='zone2'>
                <h2>Twilight Zone</h2>
                <h3>Mesopelagic</h3>
            </Zone>
            <Zone id='zone3'>
                <h2>Midnight Zone</h2>
                <h3>Bathypelagic</h3>
            </Zone>
            <Zone id='zone4'>
                <h2>Abyssal Zone</h2>
                <h3>Abyssopelagic</h3>
            </Zone>
            <Zone id='zone5'>
                <h2>Hadal Zone</h2>
                <h3>Hadopelagic</h3>
            </Zone>
        </Container>
    );
}

export default MapOverview;

