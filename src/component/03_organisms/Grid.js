import styled from 'styled-components';
import Card from "../02_molecules/Card";

const Container = styled('div')`
  padding: 130px 3em 0 3em;
  //margin: 0 auto;
  display: grid;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 100vw;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 50vw;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 35vw;
    padding: 3.5em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      //width: 90%;
      padding: 4em;
      grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 26vw;
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

