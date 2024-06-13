import styled from "styled-components";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React from "react";

const Container = styled('div')`
  width: 4em;
  height: 4em;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  transition: transform .6s, opacity .5s;
  
  &.to-top {
    position: fixed;
    left: auto;
    right: 0;
    bottom: 0;
    margin: 1em 2em;
    transform: scale(.8);
    
    svg {
      transform: rotate(180deg);
    }
  }

  .circle-border {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: none;
    border: 0;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      box-sizing: inherit;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }

    &:before {
      border: 2px solid transparent;
    }

    &:after {
      border: 0 solid transparent;
    }

    &:hover {
      :before {
        border-top-color: white;
        border-right-color: white;
        border-left-color: white;
        transition: border-left-color 0.3s linear, border-top-color 0.3s linear 0.25s, border-right-color 0.3s linear 0.25s;
      }

      :after {
        border-left: 2px solid white;
        border-right-width: 2px;
        border-top-width: 2px;
        transform: rotate(180deg);
        transition: transform 0.55s linear 0s, border-bottom-width 0s linear 0.5s, -webkit-transform 0.55s linear 0s;
      }
    }
  }

  .icon {
    width: 90%;
    height: 90%;
    color: white;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 5em;
    height: 5em;
    opacity: .8;
    bottom: 5em;
    
    :hover {
      transform: scale(1.15);
      opacity: 1;

      &.to-top {
        transform: scale(.9);
      }
    }
  }
`;

function DownButton(props) {
    return (
        <Container className={('btn-hover ' + props.type)} onClick={props.action}>
            <div className="circle-border">
                <KeyboardArrowDownRoundedIcon className='icon btn-hover'/>
            </div>
        </Container>
    );
}

export default DownButton;