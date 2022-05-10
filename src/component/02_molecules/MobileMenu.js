import styled from 'styled-components';
import { colors } from '../../constants';


const Container = styled('div')`
  height: 100vh;
  width: 100%;
`;

const Overlay = styled('div')`
  width: 60%;
  height: 100%;
  background-color: black;
  z-index: 2;
  position: absolute;
  opacity: 85%;

`;
//
// const Menu = styled('div')`
//   background-color: ${colors.bgLight};
//   width: 80vw;
//   height: 100%;
//   z-index: 3;
//   position: absolute;
//   top: 0;
//   right: 0;
// `;

function MobileMenu() {
    return (
        <Container>
            {/*<p>Tedsdst</p>*/}
            {/*<Overlay/>*/}
        </Container>
    );
}

export default MobileMenu;

