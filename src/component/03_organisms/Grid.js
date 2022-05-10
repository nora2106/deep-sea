import styled from 'styled-components';
import Card from "../02_molecules/Card";

const Container = styled('div')`
  padding: 3em;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 100vw;

  @media (min-width: 600px) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 50vw;

  }

  @media (min-width: 1000px) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 35vw;
  }

  @media (min-width: 1400px) {
      width: 90%;
      padding: 5em;
    grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 25vw;
      gap: 2.7em;
  }
`;

function Grid() {
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    );
}

export default Grid;

