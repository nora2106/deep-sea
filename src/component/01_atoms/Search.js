import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect} from "react";

const Container = styled('div')`
  border: 2px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  order: 2;  
  border-radius: 12px;
  width: 10em;
  margin-left: 4em;
  height: 2.5em;
  
  .icon {
    color: white;
    width: 1em;
    height: 1em;
    margin-left: 10px;
    cursor: none;

    @media(min-width: ${(props) => props.theme.breakpoints.m}){
      margin-right: 10px;
      width: 1.8em;
      height: 1.8em;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    transition: opacity .5s;
    flex-direction: row-reverse;
    height: 35px;
    border-radius: 12px;
    padding: 5px;
    width: 15vw;
    opacity: 70%;
    order: 3;
    margin-left: 0;
  }
  
  :hover {
   opacity: 100%;
  }
`;

const SearchInput = styled('input')`
  height: 46px;
  width: 80%;
  background-color: transparent;
  color: white;
  border: none;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    height: 100%;
    width: 85%;
  }
`;


function Search() {
    useEffect(() => {
        const input = document.querySelector('#search');
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                search();
            }
        });
    }, []);

    function search() {
        let val = document.getElementById('search').value;
        if(val !== null) {
            const  href  = window.location.origin;
            window.location.href = `${href}/search?q=${val}`;
        }
    }

    return (
        <Container>
                <FontAwesomeIcon onClick={search} icon="search" className="icon btn-hover"/>
            <SearchInput id='search' placeholder="Search Creatures" type="text"/>
        </Container>
    );
}

export default Search;

