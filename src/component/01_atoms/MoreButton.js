import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled('div')`
  .btn-icon {
    width: 55%;
    height: 55%;
    padding: 8px;
  }
  width: 100%;
  height: auto;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

const Button = styled('btn')`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.secAccent};
  border-radius: 100px;
  position: absolute;
  bottom: -15px;
  box-shadow:  8px 6px 10px 5px rgba(0, 0, 0, 0.3);
  
  :hover {
    background-color: ${(props) => props.theme.colors.secAccentHighlight};
    cursor: pointer;
  }
`;


function MoreButton() {
    return (
        <Container>
            <Button>
                <FontAwesomeIcon icon="arrow-down" className="btn-icon"/>
            </Button>
        </Container>
    );
}

export default MoreButton;

