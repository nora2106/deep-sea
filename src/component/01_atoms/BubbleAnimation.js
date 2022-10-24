import styled from 'styled-components';

const Container = styled('div')`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: grid;
`;

const Bubble = styled('div')`
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
`;

function BubbleAnimation() {
    return (
        <Container>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
            <Bubble/>
        </Container>
    );
}

export default BubbleAnimation;

