import styled from 'styled-components';
import Highlight from '@mui/icons-material/WbIncandescentOutlined';
import HighlightFilled from '@mui/icons-material/WbIncandescent';
import {useContext} from "react";
import {ModeContext} from "../00_base/theme/ModeContext";

const Container = styled('div')`
   order: 3;
`;

const Button = styled('div')`
  width: 3.5em;
  height: 3.5em;
  border-radius: 100px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: opacity .5s;
  opacity: 70%;

  :hover {
    cursor: none;
    opacity: 100%;
  }
  
  .icon {
    height: 1.5em;
    width: 1.5em;
    display: block;
    
    &.no-show {
      display: none;
    }
  }
`;


function ModeButton() {
    const {light, toggleLight} = useContext(ModeContext);

    return (
        <Container>
            <Button onClick={toggleLight} className='btn-hover'>
                <Highlight id='lightOn' className={light === 'on' ? ` icon` : ` icon no-show `}/>
                <HighlightFilled id='lightOff' className={light === 'on' ? ` icon no-show` : ` icon `}/>
            </Button>
        </Container>
    );
}



export default ModeButton;

