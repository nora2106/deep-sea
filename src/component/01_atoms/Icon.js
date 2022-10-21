import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faOctopusDeploy } from '@fortawesome/free-brands-svg-icons';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faEmpire } from '@fortawesome/free-brands-svg-icons';
library.add(faOctopusDeploy, faPhoenixFramework, faEmpire);

const Container = styled('div')`
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: -10px;
 
  
  .icon-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    :hover {
      cursor: none;
      transform: scale(1.1);
      transition: transform .4s;
      .tooltip {
        transform: scale(1);
        visibility: visible;
        opacity: 1;
        transition: opacity .4s;
      }
    }

    .tooltip {
      visibility: hidden;
      width: auto;
      background-color: #555;
      color: #fff;
      text-align: center;
      padding: 2px 8px;
      border-radius: 4px;
      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.5s;
      font-size: 12px;
      top: -26px;
    }

    .tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
  }
  
  .label-text {
    font-size: 2.2vw;
    font-weight: 500;
    text-align: center;
    line-height: 12px;

    @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      font-size: 1.3vw;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      font-size: .8vw;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      font-size: .6vw;
    }
  }
`;

const Image = styled('div')`
  background-color: ${(props) => props.theme.colors.primAccent};
  width: 45px;
  height: 45px;
  border-radius: 100%;
 


  .icon {
    width: 55%;
    height: 55%;
    padding: 10px;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.primAccentHighlight};
  }
  

`;

function checkMobile(){
    const tooltip = document.querySelector(".tooltip")
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = 1;
    }
    else {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = 0;
    }
}

function Icon(props) {
    useEffect(() => {
        checkMobile();
    }, [])


    return (
        <Container>
            <div className="icon-content">
                <span className="tooltip">{props.text}</span>
                <Image>
                    <FontAwesomeIcon className="icon" icon={props.icon}/>
                </Image>
                <p className="label-text">{props.label}</p>
            </div>
        </Container>
    );
}

export default Icon;

