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
    const [shownCreatures, setShownCreatures] = useState(creatures);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(0);
    let iteration = 20;
    let data = [];
    let database = props.data;

    async function getData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const results = await response.json();
        setCreatures(results);
        setChecked(true);
        setLoad(false);
        setPageLength(Math.round(results.length / iteration));
    }

    useEffect(() => {
        getData(`http://localhost:3001/creatures/`);
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

    function sortData(property) {
        let sorted = creatures.sort(function (a, b) {
            let propA = a[property];
            let propB = b[property];
            if (propA && !propB) return -1
            if (propB && !propA) return 1
            if (property === "Depth") {
                return parseInt(propA) - parseInt(propB);
            }
            return (propA < propB) ? -1 : (propA > propB) ? 1 : 0;
        });
        // console.log(sorted)
        setCreatures(sorted);
        setChecked(true);
        setLoad(false)
        setPageLength(Math.round(sorted.length / iteration));
    }

    const [showZ, setShowZ] = react.useState(false);
    const [showD, setShowD] = react.useState(false);

    function sort(sortVal) {
        let zone = document.getElementById('zone');
        let diet = document.getElementById('diet');
        setLoad(true);
        setChecked(false);
        switch (sortVal) {
            case 'zone': {
                zone.style.display = 'block';
                diet.style.display = 'none';
                setShowZ(true);
                sortData("Depth")
                //function: sort by Depth (numerically)
                break;
            }
            case 'diet': {
                zone.style.display = 'none';
                diet.style.display = 'block';
                setShowD(true);
                setShowZ(false);
                sortData("Feed")
                //function: sort by Diet (alphabetically)
                break;
            }
            case 'name': {
                zone.style.display = 'none';
                diet.style.display = 'none';
                setShowZ(false);
                setShowD(false);
                sortData("Name")
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
        {value: "name", label: "Name"},
        {value: "zone", label: "Depth"},
        {value: "diet", label: "Diet"}
    ];
    const zoneOptions = [
        {value: "Sunlight", label: "Sunlight Zone"},
        {value: "Twilight", label: "Twilight Zone"},
        {value: "Midnight", label: "Midnight Zone"},
        {value: "Abyssal", label: "Abyssal Zone"},
        {value: "Hadal", label: "Hadal Zone"}
    ];
    const dietOptions = [
        {value: "Carnivorous", label: "Carnivores"},
        {value: "Ommivorous", label: "Omnivores"},
        {value: "Detrivorous", label: "Detrivores"},
        {value: "Herbivorous", label: "Herbivores"},
        {value: "Pescivorous", label: "Pescivores"}
    ];


    function handleCallback(childData, name) {
        setChecked(false);
        setLoad(true);
        if (name === 'zoneSelect') {
            getData(`http://localhost:3001/creatures/zone/${childData}`).then();

        } else if (name === 'dietSelect') {
            getData(`http://localhost:3001/creatures/diet/${childData}`).then();

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
                <Pagination action={getPage} pages={pageLength}/>
            </div>
        </Container>
    );
}

export default Grid;

