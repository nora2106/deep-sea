import styled from 'styled-components';
import Card from "../02_molecules/Card";
import react, {useEffect, useState} from "react";
import {Grow} from "@mui/material";
import LoadingSpinner from "../01_atoms/LoadingSpinner";
import SortSelect from "../01_atoms/SortSelect";
import Pagination from "../01_atoms/Pagination"

//todo replace with .env variable for production backend url before deploying
const backendURL = 'https://abyssal-creatures-be.onrender.com';

const Container = styled('div')`
  padding-top: 10em;
  width: 100%;

  .grid-head {
    position: relative;
    margin-top: 1em;
    padding: 2em 1em;
    z-index: 3;
    display: flex;
    flex-direction: column;

    @media (min-width: ${(props) => props.theme.breakpoints.m}) {
      padding: 2em 3em;
      flex-direction: row;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
      padding: 2em 4em;
    }

    label {
      color: white;
    }
  }

  .select {
    display: block;
    margin:  1em;
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
  padding: 1em 2em 5em< 2em;

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
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(0);
    const [resetPagination, setReset] = useState("");
    const [showSort, setShowSort] = useState(false);
    let iteration = 20;
    const [showZ, setShowZ] = react.useState(false);
    const [showD, setShowD] = react.useState(false);
    const [showC, setShowC] = react.useState(false);

    // get and sort initial data
    useEffect(() => {
        localStorage.setItem('flashlight', 'off');
        let url = `${backendURL}/creatures/`;
        if (props.type === "search") {
            url = `${backendURL}/search/${props.value}`;
        }
        (async () => {
            let data = await getData(url);
            setCreatures(data);
            sortData('name', data)
        })()
    }, [props.value]);

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
                setShowSort(true);
                return responseJson;
            })
            .catch((error) => {
                setLoad(false);
                console.log(error);
                document.getElementById('errorMessage').innerText = "Couldn't connect to database";
            });
        // setShowSort(true);
        // return testData;
    }

    function outputToPage(data, pageVal) {
        if (pageVal > 1) {
            let set = data.slice(iteration * pageVal, iteration * pageVal + iteration);
            setShownCreatures(set)
        } else {
            setShownCreatures(data.slice(0, iteration));
        }
        setTimeout(() => {
            props.update();
        }, [0.2])
    }

    //sort current results
    function sort(sortVal) {
        setLoad(true);
        setChecked(false);
        setShowZ(false);
        setShowD(false);
        setShowC(false);
        setPage(1);

        switch (sortVal) {
            default: {
                sortData("name", creatures)
                break;
            }
            case 'depth': {
                //function: sort by Depth (numerically)
                setShowZ(true);
                sortData("depth", creatures)
                break;
            }
            case 'diet': {
                //function: sort by Diet (alphabetically)
                setShowD(true);
                sortData("diet", creatures)
                break;
            }
            case 'name': {
                //sort by name (alphabetically)
                sortData("name", creatures)
                break;
            }
            case 'class': {
                //sort by classification (alphabetically)
                setShowC(true);
                sortData("class", creatures)
                break;
            }
        }
    }

    //sorting algorithms
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
        outputToPage(sorted, 1);
        setChecked(true);
        setLoad(false)
        setPage(1);
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
        {value: "Detrivorous", label: "Detrivores"}
    ];

    const classOptions = [
        {value: "all", label: "Show All"},
        {value: "Chordate", label: "Chordate"},
        {value: "Mollusc", label: "Mollusc"},
        {value: "Ctenophore", label: "Ctenophore"},
        {value: "Echinoderm", label: "Echinoderm"},
        {value: "Cnidarian", label: "Cnidarian"},
        {value: "Arthropod", label: "Arthropod"},
        {value: "Segmented Worm", label: "Segmented Worm"}
    ];

    //show only certain values
    function handleCallback(childData, name) {
        setChecked(false);
        setLoad(true);
        if (childData === "all" || childData === "Show all") {
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
                        outputToPage(await getData(`${backendURL}/creatures/zone/${childData}`), 1)
                    })()
                    break;
                }
                case 'diet': {
                    (async () => {
                        outputToPage(await getData(`${backendURL}/creatures/diet/${childData}`), 1)
                    })()
                    break;
                }
                case 'class': {
                    (async () => {
                        outputToPage(await getData(`${backendURL}/creatures/classification/${childData}`), 1)
                    })()
                    break;
                }
                case 'all' || 'show all': {
                    sort(name)
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
            <div className='grid-head'>
                <LoadingSpinner/>
                    <Grow in={showSort} style={{transformOrigin: '0 0 0'}}
                          {...(showSort ? {timeout: 500} : {})}>
                        <div className='select first'>
                        <label htmlFor='sort'>Sort by</label>
                        <SortSelect default='Name' parentCallback={handleCallback} options={sortOptions}
                                    name='sortSelect'/>
                        </div>
                    </Grow>
                <Grow in={showZ} unmountOnExit={true} style={{transformOrigin: '0 0 0'}}
                      {...(showZ ? {timeout: 1000} : {})}>
                    <div className='select' id='zone'>
                        <label htmlFor='Zone'>Select Zone</label>
                        <SortSelect show={showZ} default='Show all' parentCallback={handleCallback} options={zoneOptions} name='depth'/>
                    </div>
                </Grow>
                <Grow in={showD} unmountOnExit={true} style={{transformOrigin: '0 0 0'}}
                      {...(showD ? {timeout: 1000} : {})}>
                    <div className='select' id='diet'>
                        <label htmlFor='Diet'>Select Diet</label>
                        <SortSelect show={showZ} default='Show all' parentCallback={handleCallback} options={dietOptions} name='diet'/>
                    </div>
                </Grow>
                <Grow in={showC} unmountOnExit={true} style={{transformOrigin: '0 0 0'}}
                      {...(showC ? {timeout: 1000} : {})}>
                    <div className='select' id='class'>
                        <label htmlFor='Species'>Select Classification</label>
                        <SortSelect show={showZ} default='Show all' parentCallback={handleCallback} options={classOptions} name='class'/>
                    </div>
                </Grow>
            </div>
            <GridContainer>
                {shownCreatures.length ?
                    shownCreatures.map((creature, index) => (
                        <Card anim={checked} key={index}
                              name={creature.name} subName={creature.scientific} size={creature.size}
                              class={creature.class} zone={creature.zone} diet={creature.diet}
                              text={creature.text} img={creature.img} link={creature.link}
                              copyright={creature.copyright}
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

