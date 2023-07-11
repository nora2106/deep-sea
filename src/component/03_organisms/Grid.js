import styled from 'styled-components';
import Card from "../02_molecules/Card";
import react, {useEffect, useState} from "react";
import * as Realm from 'realm-web';
import {Grow} from "@mui/material";
import LoadingSpinner from "../01_atoms/LoadingSpinner";
import SortSelect from "../01_atoms/SortSelect";
import Pagination from "../01_atoms/Pagination"

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
  
  .top {
    float: right;
    z-index: 3;
    position: relative;
  }
  
  .bottom {
    bottom: 2em;
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
    const [checked, setChecked] = useState(false);
    const [creatures, setCreatures] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    let iteration = 20;
    let data = [];
    let database = props.data;
    useEffect(() => {
        console.log(database)
        if (props.type === "discover") {
            show(0, iteration).then();

        } else if (props.type === "search") {
            searchData(props.value).then();
            document.querySelector('.select').style.display = 'none';
        }

    }, [props.value]);

    async function show(startNum, endNum) { //show certain number of all cards
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous()) //use var for global variables
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            // setCount(Math.round(await set.count() / 20));
            setCreatures((await set.find()).slice(startNum, endNum));
            setChecked(true);
            setLoad(false);
        }, 4);
    }

    async function sortZone(val) { //sort by a certain zone
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            setCount(Math.round(await set.count({Zone: val}) / 20));
            setCreatures((await set.find({Zone: val})))
            setChecked(true);
            setLoad(false);
        }, 4);
    }

    async function sortDiet(val) { //sort by a certain diet
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            setCount(Math.round(await set.count({Feed: val}) / 20));
            setCreatures((await set.find({Feed: val})))
            setChecked(true);
            setLoad(false);
        }, 4);
    }

    async function sortBy(sortValue) { //sort by value alphabetically
        setChecked(false);
        setLoad(true);
        setTimeout(async () => {
            const user = await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const set = client.db('deep_sea').collection('creatures')
            let $value = {};
            $value[sortValue] = 1;
            const result = await set.aggregate([
                {$sort: $value}
            ])
            setCreatures(result);
            setChecked(true);
            setLoad(false);
        }, 4);

    }

    const [showZ, setShowZ] = react.useState(false);
    const [showD, setShowD] = react.useState(false);

    function sort(sortVal) {
        let zone = document.getElementById('zone');
        let diet = document.getElementById('diet');

        switch (sortVal) {
            case 'zone': {
                sortBy('Zone').then();
                zone.style.display = 'block';
                diet.style.display = 'none';
                setShowZ(true);
                //function: sort by Zones (higher to lower)
                break;
            }
            case 'diet': {
                sortBy("Feed").then();
                zone.style.display = 'none';
                diet.style.display = 'block';
                setShowD(true);
                setShowZ(false);
                //function: sort by Diet (alphabetically)
                break;
            }
            case 'depth': {
                sortBy("Depth").then();
                zone.style.display = 'none';
                diet.style.display = 'none';
                setShowZ(false);
                setShowD(false);
                //function: @todo: sort by Depth (numerically) -> currently: alphabetically
                break;
            }
            case 'name': {
                sortBy("Name").then();
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
            // const query = { $text: { $search: value } };
            // const result = set.find(query);
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
            //     const result = await set.find({$text: {$search: "jelly"}})
            // setCreatures(result);
            console.log(value, result)
            setChecked(true);
            setLoad(false);
        }, 4);
    }

    function setLoad(bool) {
        const spinner = document.getElementById('spinner');
        if (bool === false) {
            spinner.style.opacity = '0';
        } else {
            spinner.style.opacity = '1';
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
        if (name === 'zoneSelect') {
            sortZone(childData).then()
        } else if (name === 'dietSelect') {
            sortDiet(childData).then()
        } else {
            sort(childData);
        }
    }

    const getPage = (num) => {
        // console.log('page: ' + num)
        setPage(num);
        let endNum = iteration * num;
        let startNum = endNum - iteration;
        show(startNum, endNum).then();
        window.scrollTo(0, 0)
    }

    return (
        <Container>
            <div className='top'>
                <Pagination action={getPage} pages={count}/>
            </div>
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
            <div className='bottom'>
                <Pagination action={getPage} pages={count}/>
            </div>
        </Container>
    );
}

export default Grid;

