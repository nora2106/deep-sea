import styled from 'styled-components';
import { colors } from '../../constants';


const Container = styled('div')`

`;

const Overlay = styled('div')`
  width: 90vw;
  height: 100%;
  top: 0;
  
`;

const Menu = styled('div')`
  background-color: ${colors.bgLight};
  width: 80vw;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
`;

function MobileMenu() {
    return (
        <Container>
            <Overlay/>
            <p>Test</p>
            <Menu/>
        </Container>
    );
}

export default MobileMenu;

