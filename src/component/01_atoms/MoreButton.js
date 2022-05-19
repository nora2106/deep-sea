import styled from 'styled-components';
import {FaArrowDown} from 'react-icons/fa'

const Container = styled('div')`
  .btn-icon {
    width: 50%;
    height: 50%;
    padding: 8px;
  }
  width: 100%;
  height: auto;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

const Button = styled('btn')`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.secAccent};
  border-radius: 100px;
  position: absolute;
  bottom: -20px;
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
                <FaArrowDown className="btn-icon"/>
            </Button>
        </Container>
    );
}

export default MoreButton;

