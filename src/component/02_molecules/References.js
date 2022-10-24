import styled from 'styled-components';
import Slider from '../01_atoms/Slider';

const Container = styled('div')`
    position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled('div')`
  text-align: center;
  color: white;
  margin-bottom: 2em;
  
  h2 {
    font-size: 40px;
    line-height: 20px;
  }
  
  h3 {
    font-size: 26px;
    line-height: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 32px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 6em;

    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 36px;
    }
`;

function References(props) {
    return (
        <Container>
            <Text>
                <h2>Fascinated?</h2>
                <h3>Check out these sites: </h3>
            </Text>
            <Slider show={props.show}/>
        </Container>
    );
}

export default References;

