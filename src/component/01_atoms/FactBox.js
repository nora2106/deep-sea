import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { LightMode } from '@mui/icons-material/LightMode';
import Lightbulb from '@mui/icons-material/Lightbulb';
// import Light_Mode from '@mui/icons-material/lightmode';
import wb_incandescent from '@mui/icons-material/WbIncandescentOutlined';
import Lightmode from '@mui/icons-material/LightModeOutlined';

const Container = styled('div')`
  position: relative;
`;

const Box = styled('div')`
  background-color: white;
  width: 70%;
  position: absolute;
  right: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Icon = styled('div')`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primAccent};
  position: absolute;
  border-radius: 100%;
  margin-left: 20px;
  bottom: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .icon {
    width: 55%;
    height: 55%;
  }
  
  .sun-icon {
    display: none;
    opacity: 90%;
    position: absolute;
    width: 75%;
    height: 75%;
    bottom: 16%;
  }

  
 :hover {
   background-color: ${(props) => props.theme.colors.primAccentHighlight};
   cursor: pointer;
   .sun-icon {
     display: block;
   }
   
 }

`;
const Headline = styled('h3')`
  font-weight: 500;
  font-size: 28px;
  text-align: right;
  padding-right: 10px;

`;

const Text = styled('p')`
  font-weight: 500;
  font-family: Archivo, sans-serif;
  padding: 5px 0 10px 20px;
  font-size: 18px;
`;

function FactBox() {
    return (
        <Container>
            <Box>
                <Icon>
                    <Lightbulb className="icon"/>
                    <Lightmode className="sun-icon"/>
                </Icon>
                <Headline>Did you know?</Headline>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</Text>
            </Box>
        </Container>
    );
}

export default FactBox;

