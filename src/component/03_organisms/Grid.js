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
            document.querySelector('.select').style.display = 'none';
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

    async function sortZone(val) { //sort by a certain zone
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            setCreatures((await set.find({Zone: val})))
            setChecked(true);
            setLoad(false);
        }, 10);
    }

    async function sortDiet(val) { //sort by a certain diet
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            setCreatures((await set.find({Feed: val})))
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

    function sort(sortVal) {
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
        // @todo rework search function (backend)
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
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
        //     const result = set.find({$text: {$search: "jelly"}})
        setCreatures(result);
            // console.log(result)
            setChecked(true);
            setLoad(false);
        }, 10);
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
    const sortOptions = [
        {value: "depth", label: "Depth"},
        {value: "name", label: "Name"},
        {value: "zone", label: "Zone"},
        {value: "diet", label: "Diet"}
    ];
    const zoneOptions = [
        {value: "Sunlight Zone", label: "Sunlight Zone"},
        {value: "Twilight Zone", label: "Twilight Zone"},
        {value: "Midnight Zone", label: "Midnight Zone"},
        {value: "Abyssal Zone", label: "Abyssal Zone"},
        {value: "Hadal Zone", label: "Hadal Zone"}
    ];
    const dietOptions = [
        {value: "Carnivorous", label: "Carnivores"},
        {value: "Ommivorous", label: "Omnivores"},
        {value: "Detrivorous", label: "Detrivores"},
        {value: "Herbivorous", label: "Herbivores"},
        {value: "Pescivorous", label: "Pescivores"}
    ];


    function handleCallback(childData, name) {
        if(name === 'zoneSelect') {
            sortZone(childData)
        }
        else if(name === 'dietSelect') {
            sortDiet(childData)
        }
        else {
            sort(childData);
        }
    }

    return (
        <Container>
            <div className='grid-head'>
                <LoadingSpinner/>
                <div className='select first'>
                    <label htmlFor='sort'>Sort by</label>
                    <SortSelect parentCallback={handleCallback} options={sortOptions} name='sortSelect'/>
                </div>
                <Grow in={showZ} style={{transformOrigin: '0 0 0'}}
                      {...(showZ ? {timeout: 500} : {})}>
                    <div className='select' id='zone'>
                        <label htmlFor='Zone'>Select Zone</label>
                        <SortSelect parentCallback={handleCallback} options={zoneOptions} name='zoneSelect'/>
                    </div>
                </Grow>
                <Grow in={showD} style={{transformOrigin: '0 0 0'}}
                      {...(showD ? {timeout: 500} : {})}>
                    <div className='select' id='diet'>
                        <label htmlFor='Diet'>Select Diet</label>
                        <SortSelect parentCallback={handleCallback} options={dietOptions} name='dietSelect'/>
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

