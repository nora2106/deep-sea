import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useState} from "react";

const Container = styled('div')`
  border: 2px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  order: 2;  
  transition: opacity .5s;
  opacity: 60%;
  
  .icon {
    color: white;
    width: 1.8em;
    height: 1.8em;
    margin-left: 10px;
    cursor: none;

    @media(min-width: ${(props) => props.theme.breakpoints.m}){
      margin-right: 10px;
    }
  }

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    flex-direction: row-reverse;
    height: 35px;
    border-radius: 12px;
    padding: 5px;
    width: 15vw;
    order: 3;
  }
  
  :hover {
   opacity: 100%;
  }
`;

const SearchInput = styled('input')`
  height: 46px;
  width: 85%;
  background-color: transparent;
  color: white;
  border: none;

  @media(min-width: ${(props) => props.theme.breakpoints.m}){
    height: 100%;
  }
`;


function Search() {

    const [value, setValue] = useState('');

    function updateInput() {
        let val = document.getElementById('search').value;
        setValue(val);
    }

    function handleKeyPress(target) {
        if(target.charCode===13) {
            search();
        }
    }

    function search(){
        const  href  = window.location.origin;
        window.location.href = `${href}/search?q=${value}`;
    }

    return (
        <Container>
                <FontAwesomeIcon onClick={search} icon="search" className="icon btn-hover"/>
            <SearchInput onKeyPress={e => handleKeyPress(e)} id='search' onChange={updateInput} placeholder="Search Creatures" type="text"/>
        </Container>
    );
}

export default Search;

