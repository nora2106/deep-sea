import styled from 'styled-components';
import Card from "../02_molecules/Card";
import {useEffect, useState} from "react";
import * as Realm from 'realm-web';
const app = new Realm.App({ id: 'deep-sea-balmb' });

const Container = styled('div')`
  display: grid;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 100vw;
  padding: 8em 3em 5em 3em;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 65vw;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 40vw;
      padding: 10em 3.5em 5em 3em;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      //width: 90%;
      padding: 12em 4em 5em 3em;
      grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 30vw;
  }
`;

function Grid(props) {
    if(props.type === "discover") {
        if(props.value === undefined) {
            showAll();
        }
        else {
            getData(props.value);
        }
    }

    else if(props.type === "search"){
        searchData(props.value);
    }


    const [creatures, setCreatures] = useState([]);

    async function getData (zone) {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        setCreatures((await set.find({Zone: zone})))
    }

    async function showAll () {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        setCreatures(await set.find());
    }

    async function searchData (value) {
        const client = app.currentUser.mongoClient('mongodb-atlas');
        const set = client.db('deep_sea').collection('creatures');
        const result = await set.aggregate([
            {
                $search: {
                    index: 'text',
                    text: {
                        query: value,
                        path: {
                            'wildcard': '*'
                        }
                    }
                }
            }
        ])
        setCreatures(result);
    }

    return (
        <Container>

            {creatures.map(creature => (
                <Card key={creature._id}
                      name={creature.Name} subName={creature.Scientific} size={creature.Size}
                      class={creature.Classification} zone={creature.Zone} diet={creature.Feed}
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet assumenda beatae dicta dignissimos dolorem dolores doloribus dolorum earum esse est, fugiat modi molestias nemo numquam porro quibusdam voluptas!"
                />
            ))}

        </Container>
    );
}


export default Grid;

