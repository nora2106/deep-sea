import styled from 'styled-components';
import Card from "../02_molecules/Card";
import react, {useEffect, useState} from "react";
import * as Realm from 'realm-web';
import {Grow} from "@mui/material";
import LoadingSpinner from "../01_atoms/LoadingSpinner";
import SortSelect from "../01_atoms/SortSelect";
import Pagination from "../01_atoms/Pagination"
import testData from '../../testData.json'

const app = new Realm.App({id: 'deep-sea-balmb'});

const Container = styled('div')`
  padding-top: 10em;
  width: 100%;

  .grid-head {
    position: relative;
    margin-top: 1em;
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
  
  #errorMessage {
    color: white;
    font-size: 24px;
  }
`;

const GridContainer = styled('div')`
  display: grid;
  margin: 0 auto;
  gap: 4rem;
  grid-template-columns:  repeat(1, 1fr);
  grid-auto-rows: 30em;
  padding: 1em 2em 5em 2em;
  
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 1em 5em 5em 5em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 1em 3em 5em 3em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-auto-rows: 35em;
    grid-template-columns:  repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns:  repeat(3, 1fr);
    grid-auto-rows: 40em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    padding: 1em 4em 5em 3em;
    grid-template-columns:  repeat(4, 1fr);
  }
`;

function Grid(props) {
    const [checked, setChecked] = useState(false);
    const [creatures, setCreatures] = useState([]);
    const [shownCreatures, setShownCreatures] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(0);
    const [resetPagination, setReset] = useState("");
    let iteration = 20;

    //fetch data
    async function getData(url) {
        return fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong')
        })
            .then((responseJson) => {
                setChecked(true);
                setLoad(false);
                setPageLength(responseJson.length / iteration);
                if(responseJson.length / iteration < 1) {
                    setPageLength(1);
                }
                return responseJson;
            })
            .catch((error) => {
                setLoad(false);
                console.log(error);
                document.getElementById('errorMessage').innerText = "Couldn't connect to database";
            });
    }

    // get and sort initial data
    useEffect(() => {
        //todo add .env variable for production url before deploying
        let url = `http://localhost:3001/creatures/`;
        if (props.type === "search") {
            url = `http://localhost:3001/creatures/search/${props.value}`;
        }
        (async () => {
            let data = await getData(url);
            setCreatures(data);
            sortData('name', data)
        })()
    }, [props.value]);

    function outputToPage(data, pageVal) {
        if (pageVal > 1) {
            // setShownCreatures(data.slice(iteration * pageVal, iteration * pageVal + iteration));
            let set = data.slice(iteration * pageVal, iteration * pageVal + iteration);
            setShownCreatures(set)
        } else {
            setShownCreatures(data.slice(0, iteration));
        }
        setTimeout( () => {
            props.update();
        }, [0.2])
    }

    function sortData(property, data) {
        setPageLength(data.length / iteration);
        setReset(property);
        let sorted = data.sort(function (a, b) {
            let propA = a[property];
            let propB = b[property];
            if (propA && !propB) return -1
            if (propB && !propA) return 1
            if (property === "depth") {
                return parseInt(propA) - parseInt(propB);
            }
            return (propA < propB) ? -1 : (propA > propB) ? 1 : 0;
        });
        // console.log(property, sorted)
        outputToPage(sorted, 1);
        setChecked(true);
        setLoad(false)
        setPage(1);
    }

    const [showZ, setShowZ] = react.useState(false);
    const [showD, setShowD] = react.useState(false);
    const [showC, setShowC] = react.useState(false);

    //sort current results
    //@todo: show whole dataset after switching from select back to sort by
    function sort(sortVal) {
        let zone = document.getElementById('zone');
        let diet = document.getElementById('diet');
        let classification = document.getElementById('classification');
        setLoad(true);
        setChecked(false);
        setShowZ(false);
        setShowD(false);
        setShowC(false);
        setPage(1);
        zone.style.display = 'none';
        diet.style.display = 'none';
        classification.style.display = 'none';

        switch (sortVal) {
            default: {
                sortData("name", creatures)
                break;
            }
            case 'depth': {
                if (props.type !== 'search') {
                    zone.style.display = 'block';
                    setShowZ(true);
                }
                sortData("depth", creatures)
                //function: sort by Depth (numerically)
                break;
            }
            case 'diet': {
                if (props.type !== 'search') {
                    diet.style.display = 'block';
                    setShowD(true);
                }
                sortData("diet", creatures)
                //function: sort by Diet (alphabetically)
                break;
            }
            case 'name': {
                sortData("name", creatures)
                //sort by name (alphabetically)
                break;
            }
            case 'class': {
                if (props.type !== 'search') {
                    classification.style.display = 'block';
                    setShowC(true);
                }
                sortData("class", creatures)
                //sort by classification (alphabetically)
                break;
            }
        }
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
        {value: "depth", label: "Depth"},
        {value: "diet", label: "Diet"},
        {value: "class", label: "Species"}
    ];
    const zoneOptions = [
        {value: "all", label: "Show All"},
        {value: "Sunlight", label: "Sunlight Zone"},
        {value: "Twilight", label: "Twilight Zone"},
        {value: "Midnight", label: "Midnight Zone"},
        {value: "Abyssal", label: "Abyssal Zone"},
        {value: "Hadal", label: "Hadal Zone"}
    ];
    const dietOptions = [
        {value: "all", label: "Show All"},
        {value: "Carnivorous", label: "Carnivores"},
        {value: "Omnivorous", label: "Omnivores"},
        {value: "Detrivorous", label: "Detrivores"},
        {value: "Herbivorous", label: "Herbivores"},
        {value: "Pescivorous", label: "Pescivores"}
    ];

    const classOptions = [
        {value: "all", label: "Show All"},
        {value: "Chordate", label: "Chordate"},
        {value: "Mollusk", label: "Mollusk"},
        {value: "Ctenophore", label: "Ctenophore"},
        {value: "Echoniderm", label: "Echoniderm"},
        {value: "Cnidarian", label: "Cnidarian"},
        {value: "Arthropod", label: "Arthropod"}
    ];

    //show only certain values
    function handleCallback(childData, name) {
        setChecked(false);
        setLoad(true);
        if (childData === "all") {
            sort(name);
        } else {
            switch (name) {
                default: {
                    sort(childData)
                    break;
                }
                case 'depth': {
                    (async () => {
                        //@todo decide between sorting locally or fetching every time (regarding search)
                        outputToPage(await getData(`http://localhost:3001/creatures/zone/${childData}`), 1)
                    })()
                    break;
                }
                case 'feed': {
                    (async () => {
                        outputToPage(await getData(`http://localhost:3001/creatures/diet/${childData}`), 1)
                    })()
                    break;
                }
                case 'classification': {
                    (async () => {
                        outputToPage(await getData(`http://localhost:3001/creatures/classification/${childData}`), 1)
                    })()
                    break;
                }
            }
        }
    }

    const getPage = (num) => {
        setPage(num);
        outputToPage(creatures, num);
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
                    <SortSelect default='Name' parentCallback={handleCallback} options={sortOptions} name='sortSelect'/>
                </div>
                <Grow in={showZ} style={{transformOrigin: '0 0 0'}}
                      {...(showZ ? {timeout: 500} : {})}>
                    <div className='select' id='zone'>
                        <label htmlFor='Zone'>Select Zone</label>
                        <SortSelect parentCallback={handleCallback} options={zoneOptions} name='depth'/>
                    </div>
                </Grow>
                <Grow in={showD} style={{transformOrigin: '0 0 0'}}
                      {...(showD ? {timeout: 500} : {})}>
                    <div className='select' id='diet'>
                        <label htmlFor='Diet'>Select Diet</label>
                        <SortSelect parentCallback={handleCallback} options={dietOptions} name='feed'/>
                    </div>
                </Grow>
                <Grow in={showC} style={{transformOrigin: '0 0 0'}}
                      {...(showC ? {timeout: 500} : {})}>
                    <div className='select' id='classification'>
                        <label htmlFor='Species'>Select Class</label>
                        <SortSelect parentCallback={handleCallback} options={classOptions} name='classification'/>
                    </div>
                </Grow>
            </div>
            <GridContainer>
                {shownCreatures.length ?
                    shownCreatures.map(creature => (
                        <Card anim={checked} key={creature._id}
                              name={creature.name} subName={creature.scientific} size={creature.size}
                              class={creature.class} zone={creature.zone} diet={creature.diet}
                              text={creature.text} img={creature.img} link={creature.link}
                        />
                    ))
                    : <p id='errorMessage'>No data found.</p>
                }
            </GridContainer>
            <div className='bottom'>
                <Pagination reset={resetPagination} action={getPage} pages={pageLength}/>
            </div>
        </Container>
    );
}

export default Grid;

