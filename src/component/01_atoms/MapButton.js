import styled from 'styled-components';
import {FaGlobeAmericas} from 'react-icons/fa'

const Container = styled('div')`
  .btn-icon {
    width: 50%;
    height: 50%;
    padding: 10px;
  }
   
`;

const Button = styled('btn')`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.secAccent};
  border-radius: 100px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 12px;
  box-shadow:  8px 6px 10px 5px rgba(0, 0, 0, 0.3);

  :hover {
    background-color: ${(props) => props.theme.colors.secAccentHighlight};
    cursor: pointer;
  }
`;


function MapButton() {
    return (
        <Container>
            <Button>
                <FaGlobeAmericas className="btn-icon"/>
            </Button>
        </Container>
    );
}

export default MapButton;

