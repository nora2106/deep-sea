import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect} from "react";

const Container = styled('div')`
  margin-bottom: -8px;
  
  .icon-content {
    display: flex;
    justify-content: center;
    
    :hover .tooltip {
      visibility: visible;
      opacity: 1;
    }

    .tooltip {
      margin-left: 5px;
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
      margin-top: -2.5em;
      transition: opacity 0.3s;
      font-size: 12px;
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
`;

const Image = styled('div')`
  background-color: ${(props) => props.theme.colors.primAccent};
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-left: .8em;
  margin-right: .8em;
  margin-bottom: -8px;


  .icon {
    width: 55%;
    height: 55%;
    padding: 10px;
  }

  :hover {
    cursor: context-menu;
    background-color: #46c3c5;
  }

  

`;

const Text = styled('p')`
  font-size: 11px;
  text-align: center;
  line-height: 12px;
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
            </div>
            <Text>{props.label}</Text>
        </Container>
    );
}

export default Icon;

