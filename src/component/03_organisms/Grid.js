import styled from 'styled-components';
import Card from "../02_molecules/Card";
import react, {useEffect, useState} from "react";
import {CSSTransition} from 'react-transition-group';
import * as Realm from 'realm-web';
import {FormControlLabel, Grow} from "@mui/material";
import Switch from '@mui/material/Switch';
import LoadingSpinner from "../01_atoms/LoadingSpinner";
import SortSelect from "../01_atoms/SortSelect";

const app = new Realm.App({id: 'deep-sea-balmb'});

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
  .select.first {
    transform: translateX(-30%);
    ${props => props.theme.animations.show};
    animation-delay: 800ms;
    opacity: 0;
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
//
// const SortSelect = styled('select')`
//   margin: 1em;
//   appearance: none;
// `;



function Grid(props) {

    const [creatures, setCreatures] = useState([]);
    let data = [];
    useEffect(() => {
        if (props.type === "discover") {
            // if(props.value === undefined ) {
            //     showAll();
            // }
            // else {
            //     getData(props.value);
            // }
            showAll();

        } else if (props.type === "search") {
            searchData(props.value);
        }

    }, [props.value]);


    async function showAll() { //show certain number of all cards
        setTimeout(async () => {
        const user = await app.logIn(Realm.Credentials.anonymous()) //use var for global variables
        const client = app.currentUser.mongoClient('mongodb-atlas')
        const set = client.db('deep_sea').collection('creatures')
        setCreatures((await set.find()).slice(0, 30));
        setChecked(true);
        setLoad(false);
        }, 10);
    }

    async function sortZone() { //sort by a certain zone
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            let zoneval = document.getElementById('zoneSelect').value
            const set = client.db('deep_sea').collection('creatures')
            setCreatures((await set.find({Zone: zoneval})))
            setChecked(true);
            setLoad(false);
        }, 10);
    }

    async function sortDiet() { //sort by a certain diet
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            let dietval = document.getElementById('dietSelect').value
            setCreatures((await set.find({Feed: dietval})))
            setChecked(true);
            setLoad(false);
        }, 10);

    }

    async function sortBy(sortValue) { //sort by value alphabetically
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            var $value = {};
            $value[sortValue] = 1;
            const result = await set.aggregate([
                {$sort: $value}
            ])
            setCreatures(result);
            setChecked(true);
            setLoad(false);
        }, 10);

    }

    const [showZ, setShowZ] = react.useState(false);
    const [showD, setShowD] = react.useState(false);

    function sort() {
        let sortVal = document.getElementById('sortSelect').value;
        let zone = document.getElementById('zone');
        let diet = document.getElementById('diet');

        switch (sortVal) {
            case 'zone': {
                sortBy('Zone')
                zone.style.display = 'block';
                diet.style.display = 'none';
                setShowZ(true);
                //function: sort by Zones (higher to lower)
                break;
            }
            case 'diet': {
                sortBy("Feed");
                zone.style.display = 'none';
                diet.style.display = 'block';
                setShowD(true);
                setShowZ(false);
                //function: sort by Diet (alphabetically)
                break;
            }
            case 'depth': {
                sortBy("Depth");
                zone.style.display = 'none';
                diet.style.display = 'none';
                setShowZ(false);
                setShowD(false);
                //function: sort by Depth (numerically) -> currently: alphabetically
                break;
            }
            case 'name': {
                sortBy("Name");
                zone.style.display = 'none';
                diet.style.display = 'none';
                setShowZ(false);
                setShowD(false);
                //sort by name (alphabetically)
                break;
            }
        }
    }


    async function searchData(value) {
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

    const [checked, setChecked] = react.useState(false);
    function setLoad(bool) {
        const spinner = document.getElementById('spinner');
        if(bool === false) {
            spinner.style.opacity = '0';
            // spinner.style.display = 'none';
        }
        else {
            spinner.style.opacity = '1';
            // spinner.style.display = 'block';
        }
    }
    const testOptions = [
        {value: "depth", label: "Depth"},
        {value: "diet", label: "Diet"},
        {value: "zone", label: "Zone"},
        {value: "name", label: "Name"}
    ];


    function handleCallback(childData) {
        console.log(childData);
    }

    return (
        <Container>
            <div className='grid-head'>
                <LoadingSpinner/>
                <div className='select first'>
                    <label htmlFor='sort'>Sort by</label>
                    <SortSelect parentCallback={handleCallback} options={testOptions} id='sortSelect'/>
                    {/*<SortSelect onChange={sort} id='sortSelect' name='sort'>*/}
                    {/*    <option value="depth">Depth</option>*/}
                    {/*    <option value="diet">Diet</option>*/}
                    {/*    <option value="zone">Zone</option>*/}
                    {/*    <option value="name">Name</option>*/}
                    {/*</SortSelect>*/}
                </div>
                <Grow in={showZ} style={{transformOrigin: '0 0 0'}}
                      {...(showZ ? {timeout: 500} : {})}>
                    <div className='select' id='zone'>
                        <label htmlFor='Zone'>Select Zone</label>
                        {/*<SortSelect onChange={sortZone} id='zoneSelect' name="Zone">*/}
                        {/*    <option value="">Select</option>*/}
                        {/*    <option value="Sunlight Zone">Sunlight Zone</option>*/}
                        {/*    <option value="Twilight Zone">Twilight Zone</option>*/}
                        {/*    <option value="Midnight Zone">Midnight Zone</option>*/}
                        {/*    <option value="Abyssal Zone">Abyssal Zone</option>*/}
                        {/*    <option value="Hadal Zone">Hadal Zone</option>*/}
                        {/*</SortSelect>*/}
                    </div>
                </Grow>
                <Grow in={showD} style={{transformOrigin: '0 0 0'}}
                      {...(showD ? {timeout: 500} : {})}>
                    <div className='select' id='diet'>
                        <label htmlFor='Diet'>Select Diet</label>
                        {/*<SortSelect onChange={sortDiet} id='dietSelect' name="Diet">*/}
                        {/*    <option value="">Select</option>*/}
                        {/*    <option value="Carnivorous">Carnivores</option>*/}
                        {/*    <option value="Herbivorous">Herbivores</option>*/}
                        {/*    <option value="Omnivorous">Omnivores</option>*/}
                        {/*    <option value="Piscivorous">Piscivores</option>*/}
                        {/*    <option value="Detrivorous">Detrivores</option>*/}
                        {/*</SortSelect>*/}
                    </div>
                </Grow>

            </div>
            <GridContainer>
                {creatures.map(creature => (

                    <Card anim={checked} key={creature._id}
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
