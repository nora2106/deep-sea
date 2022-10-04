import styled from 'styled-components';
import Card from "../02_molecules/Card";
import {useEffect, useState} from "react";
import * as Realm from 'realm-web';
const app = new Realm.App({ id: 'deep-sea-balmb' });

const Container = styled('div')`
  padding-top: 10em;
  .grid-head {
    position: relative;
    padding: 2em 3em;
    z-index: 3;
    display: flex;
    
    label {
      color: white;
    }
    
    #zone,
    #diet {
      display: none;
    }
  }
  
  .select {
    display: block;
    margin: 0 1em;
  }
  
`;

const GridContainer = styled('div')`
  display: grid;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 100vw;
  padding: 1em 3em 5em 3em;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
      grid-template-columns:  repeat(2, 1fr);
      grid-auto-rows: 65vw;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      grid-template-columns:  repeat(3, 1fr);
      grid-auto-rows: 40vw;
      padding: 1em 3.5em 5em 3em;

  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
      padding: 1em 4em 5em 3em;
      grid-template-columns:  repeat(4, 1fr);
      grid-auto-rows: 30vw;
  }
  
  
`;

const SortSelect = styled('select')`
  margin: 1em;
  
  
`;


function Grid(props) {


const [creatures, setCreatures] = useState([]);
let data = [];
    useEffect(() => {
        if(props.type === "discover") {
            // if(props.value === undefined ) {
            //     showAll();
            // }
            // else {
            //     getData(props.value);
            // }
            showAll();

        }

        else if(props.type === "search"){
            searchData(props.value);
        }

    },[props.value]);


    async function showAll() {
        const user = await app.logIn(Realm.Credentials.anonymous()) //use var for global variables
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        setCreatures((await set.find()).slice(0, 50));
    }

    async function sortZone () {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        let zoneval = document.getElementById('zoneSelect').value
        const set = client.db('deep_sea').collection('creatures')
        setCreatures((await set.find({Zone: zoneval})))
    }
    async function sortDiet () {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        let dietval = document.getElementById('dietSelect').value
        setCreatures((await set.find({Feed: dietval})))
    }
    async function sortBy (sortValue) {
        const user = await app.logIn(Realm.Credentials.anonymous())
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        var $value = {};
        $value[sortValue] = 1;
        const result = await set.aggregate([
            { $sort : $value }
        ])
        setCreatures(result);
        console.log(creatures);

    }

     function sort () {
        let sortVal = document.getElementById('sortSelect').value;
        let zone = document.getElementById('zone');
        let diet = document.getElementById('diet');

        switch (sortVal) {
            case 'zone': {
                zone.style.display = 'block';
                diet.style.display = 'none';
                //function: sort by Zones (higher to dee)
                // sortBy("Zone");
                break;
            }
            case 'diet': {
                zone.style.display = 'none';
                diet.style.display = 'block';
                //function: sort by Diet (alphabetically)
                sortBy("Feed");
                break;
            }
            case 'depth': {
                zone.style.display = 'none';
                diet.style.display = 'none';
                //function: sort by Depth (numerically)
                sortBy("Depth");
                break;
            }
            case 'name': {
                zone.style.display = 'none';
                diet.style.display = 'none';
                sortBy("Name");
                break;
            }
        }
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
            <div className='grid-head'>
                <div className='select' >
                    <label htmlFor='sort'>Sort by</label>
                    <SortSelect onChange={sort} id='sortSelect' name='sort'>
                        <option value="depth">Depth</option>
                        <option value="diet">Diet</option>
                        <option value="zone">Zone</option>
                        <option value="name">Name</option>
                    </SortSelect>
                </div>
                <div className='select' id='zone'>
                    <label htmlFor='Zone'>Select Zone</label>
                    <SortSelect onChange={sortZone} id='zoneSelect' name="Zone">
                        <option value="">Select</option>
                        <option value="Sunlight Zone">Sunlight Zone</option>
                        <option value="Twilight Zone">Twilight Zone</option>
                        <option value="Midnight Zone">Midnight Zone</option>
                        <option value="Abyssal Zone">Abyssal Zone</option>
                        <option value="Hadal Zone">Hadal Zone</option>
                    </SortSelect>
                </div>
                <div className='select' id='diet'>
                    <label htmlFor='Diet'>Select Diet</label>
                    <SortSelect onChange={sortDiet} id='dietSelect' name="Diet">
                        <option value="">Select</option>
                        <option value="Carnivorous">Carnivores</option>
                        <option value="Herbivorous">Herbivores</option>
                        <option value="Omnivorous">Omnivores</option>
                        <option value="Piscivorous">Piscivores</option>
                        <option value="Detrivorous">Detrivores</option>
                    </SortSelect>
                </div>

            </div>
            <GridContainer>
            {creatures.map(creature => (
                <Card key={creature._id}
                      name={creature.Name} subName={creature.Scientific} size={creature.Size}
                      class={creature.Classification} zone={creature.Zone} diet={creature.Feed}
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet assumenda beatae dicta dignissimos dolorem dolores doloribus dolorum earum esse est, fugiat modi molestias nemo numquam porro quibusdam voluptas!"
                />
            ))}
        </GridContainer>
        </Container>
    );
}


export default Grid;

function toggleSort(val) {
    let zone = document.getElementById('zone');
    let diet = document.getElementById('diet');

    switch (val) {
        case 'zone': {
            zone.style.display = 'block';
            diet.style.display = 'none';
            //function: sort by Zones (alphabetically)
            break;
        }
        case 'diet': {
            zone.style.display = 'none';
            diet.style.display = 'block';
            //function: sort by Diet (alphabetically)
            break;
        }
        case 'depth': {
            zone.style.display = 'none';
            diet.style.display = 'none';
            //function: sort by Depth (numerically)
            break;
        }
    }
}
