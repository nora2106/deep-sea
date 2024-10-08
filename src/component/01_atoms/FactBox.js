import styled from 'styled-components';
import Lightbulb from '@mui/icons-material/LightbulbOutlined';

const Container = styled('div')`
  position: absolute;
  width: 60vw;
  max-width: 25em;
  display: block;
  z-index: 3;
  padding: .5em;
  top: -1em;
  transform: translateX(-60%);
  
  .headline {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  
  &.active {
    ${props => props.theme.animations.slideIn};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    transform: translateX(-70%);
    width: 40vw;
    max-width: 35em;
    padding: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 30vw;
    max-width: 50em;
    top: 2em;
  }
`;


const Icon = styled('div')`
  width: 2em;
  height: 2em;
  position: relative;
  color: white;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 4em;
    height: 4em;
  }
  
  .icon {
    width: 100%;
    height: 100%;
  }
`;

const Headline = styled('h3')`
  font-weight: 500;
  text-align: left;
  color: white;
  margin-inline: 10px;
  font-size: clamp(18px, 4vw, 32px);
`;

const Text = styled('p')`
  font-weight: 500;
  font-family: Archivo, sans-serif;
  font-size: clamp(14px, 4vw, 24px);
  padding-left: 10px;
  color: white;
  margin: 0;
`;

function FactBox(props) {
    return (
        <Container className='fact-box show-scroll'>
            <div className='headline'>
                <Icon>
                    <Lightbulb className="icon"/>
                </Icon>
                <Headline>Did you know?</Headline>
            </div>
            <Text>The average depth of the ocean measures 3.682m, while the deepest parts reach up to 10.934m.</Text>
        </Container>
    );
}

export default FactBox;

