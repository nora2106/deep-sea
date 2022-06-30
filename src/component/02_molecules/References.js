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
  margin-bottom: 3em;
  
  
  h2 {
    font-size: 48px;
    line-height: 20px;
  }
  
  h3 {
    font-size: 32px;
    line-height: 20px;
  }
`;

function References() {
    return (
        <Container>
            <Text>
                <h2>Fascinated?</h2>
                <h3>Check out these sites: </h3>
            </Text>
            <Slider/>
        </Container>
    );
}

export default References;

