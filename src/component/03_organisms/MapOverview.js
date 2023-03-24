import styled from 'styled-components';
import Wave from "../01_atoms/Wave";
import React, { useState, useEffect } from "react";

const Container = styled('div')`
  position: relative;
  width: 100%;
  top: 5em;

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

  .wave {
    
  }
`;

const MapIntro = styled('div')`
  width: 100%;
  height: 12em;
  background-color: ${(props) => props.theme.colors.bgDark};
  
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 15em;
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
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 15em;
  }
`;



function MapOverview() {

    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                name: data.Name,
                age: data.Age,
                date: data.Date,
                programming: data.programming,
            });
        })
    );

    return (
        <Container>
            <MapIntro/>
            <Wave class='wave-light'/>
            <Zone id='zone1'>
                <h2>{data.name}</h2>
                <h3>{data.programming}</h3>
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

