import styled from 'styled-components';
import Card from "../02_molecules/Card";
import { species } from '../04_templates/testData.js'
import {useEffect, useState} from "react";

const Container = styled('div')`
  display: grid;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 90vw;
  padding: 8em 3em 5em 3em;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 65vw;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 43vw;
      padding: 10em 3.5em 5em 3em;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      //width: 90%;
      padding: 12em 4em 5em 3em;
      grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 30vw;
  }
`;

function Grid() {

    const fetchSpecies = () => {
        return species;
    }

    console.log(fetchSpecies());

    return (
        <Container>
            {species.map(creature => (
                <Card key={creature.id} name={creature.name} subName={creature.scientific} size={creature.size}
                      class={creature.class} zone={creature.zone} diet={creature.diet} text={creature.text}
                />
            ))}

                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}

        </Container>
    );
}

export default Grid;

