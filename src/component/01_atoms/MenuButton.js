import styled from 'styled-components';
import Lightbulb from '@mui/icons-material/Lightbulb';
import Lightmode from '@mui/icons-material/LightModeOutlined';
import Highlight from '@mui/icons-material/WbIncandescentOutlined';
import HighlightFilled from '@mui/icons-material/WbIncandescent';
import {useContext, useEffect} from "react";
import {ModeContext} from "../00_base/theme/ModeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = styled('div')`
  background-color: transparent;
  right: 0;
  top: 0;
  z-index: 6;
  width: 35px;
  height: 20px;
  transform: rotate(0deg);
  margin: 1em;
  position: fixed;
`;

const Line = styled('span')`
  margin: 6px 0;
  display: block;
  position: relative;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: .25s ease-in-out;
`;


function MenuButton(props) {

    return (
        <Button onClick={props.action} className={props.open === true ? ` menu-open` : ` `}>
            <Line/>
            <Line/>
            <Line/>
        </Button>
    );
}


export default MenuButton;

