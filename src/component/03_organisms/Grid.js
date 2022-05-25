import styled from 'styled-components';
import Card from "../02_molecules/Card";

const Container = styled('div')`
  display: grid;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 90vw;
  padding: 8em 3em 0 3em;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 65vw;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 43vw;
      padding: 10em 3.5em 0 3em;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      //width: 90%;
      padding: 12em 4em 0 3em;
      grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 30vw;
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

